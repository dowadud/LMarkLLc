import { cn } from "@/lib/utils";

export function Logo({ className, dark = true }: { className?: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Geometric L-mark */}
      <svg
        viewBox="0 0 40 40"
        className="h-10 w-10 shrink-0"
        fill="none"
        aria-hidden
      >
        <rect width="40" height="40" rx="9" fill="url(#lg)" />
        <path
          d="M10 8 L10 32 L30 32 L30 25 L17 25 L17 8 Z"
          fill="white"
        />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col leading-none">
        <span className={cn("text-xl font-extrabold tracking-tight", dark ? "text-white" : "text-slate-900")}>
          L MARK
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400">
          LLC
        </span>
      </div>
    </div>
  );
}
