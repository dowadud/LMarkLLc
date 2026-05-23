import type { NextRequest } from "next/server";
import { rateLimit, type RateLimitResult } from "@/lib/rate-limit";

/** App Router paths that invoke AI providers or models. */
export const AI_API_PATH_PREFIXES = ["/api/ai", "/api/chat"] as const;

export function getClientIp(request: NextRequest | Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export function getAiRateLimitConfig() {
  const max = Number(process.env.AI_RATE_LIMIT_MAX ?? 10);
  const windowMs = Number(process.env.AI_RATE_LIMIT_WINDOW_MS ?? 60_000);

  return {
    max: Number.isFinite(max) && max > 0 ? max : 10,
    windowMs: Number.isFinite(windowMs) && windowMs > 0 ? windowMs : 60_000,
  };
}

export function checkAiRateLimit(request: NextRequest | Request, scope = "ai"): RateLimitResult {
  const ip = getClientIp(request);
  return rateLimit(`${scope}:${ip}`, getAiRateLimitConfig());
}

export function aiRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  const headers: Record<string, string> = {
    "X-RateLimit-Limit": String(result.limit),
    "X-RateLimit-Remaining": String(result.remaining),
  };

  if (!result.success) {
    headers["Retry-After"] = String(Math.ceil(result.retryAfterMs / 1000));
  }

  return headers;
}

/** Call at the top of AI route handlers; returns a 429 response when limited. */
export function aiRateLimitResponse(request: NextRequest | Request): Response | null {
  const result = checkAiRateLimit(request, "handler");
  if (result.success) {
    return null;
  }

  return Response.json(
    { error: "Too many AI requests. Please try again later." },
    { status: 429, headers: aiRateLimitHeaders(result) },
  );
}
