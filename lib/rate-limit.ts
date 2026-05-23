export type RateLimitOptions = {
  max: number;
  windowMs: number;
};

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  retryAfterMs: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const CLEANUP_INTERVAL = 1000;
let operationCount = 0;

function maybeCleanup(now: number) {
  operationCount += 1;
  if (operationCount % CLEANUP_INTERVAL !== 0) {
    return;
  }

  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

/** Fixed-window rate limiter keyed by caller-provided identifier (e.g. IP + route scope). */
export function rateLimit(key: string, options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  maybeCleanup(now);

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + options.windowMs });
    return {
      success: true,
      limit: options.max,
      remaining: Math.max(options.max - 1, 0),
      retryAfterMs: 0,
    };
  }

  if (existing.count >= options.max) {
    return {
      success: false,
      limit: options.max,
      remaining: 0,
      retryAfterMs: Math.max(existing.resetAt - now, 0),
    };
  }

  existing.count += 1;
  return {
    success: true,
    limit: options.max,
    remaining: Math.max(options.max - existing.count, 0),
    retryAfterMs: 0,
  };
}
