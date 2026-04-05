interface SectionDividerProps {
  label?: string;
  variant?: "dot" | "label";
}

export default function SectionDivider({
  label,
  variant = "dot",
}: SectionDividerProps) {
  if (variant === "label" && label) {
    return (
      <div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
        <div className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-white/20" />
            <div className="w-0.5 h-3 bg-white/20" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
            {label}
          </span>
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-white/20" />
            <div className="w-0.5 h-3 bg-emerald-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto" />
      <div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse" />
      </div>
    </div>
  );
}
