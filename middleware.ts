import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AI_API_PATH_PREFIXES, aiRateLimitHeaders, checkAiRateLimit } from "@/lib/ai-rate-limit";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAiRoute = AI_API_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (!isAiRoute) {
    return NextResponse.next();
  }

  const result = checkAiRateLimit(request, "api");
  if (!result.success) {
    return NextResponse.json(
      { error: "Too many AI requests. Please try again later." },
      { status: 429, headers: aiRateLimitHeaders(result) },
    );
  }

  const response = NextResponse.next();
  for (const [key, value] of Object.entries(aiRateLimitHeaders(result))) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  matcher: ["/api/ai/:path*", "/api/chat/:path*"],
};
