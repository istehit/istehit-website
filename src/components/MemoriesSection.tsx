export default function MemoriesSection() {
  return (
    <section
      id="memories"
      className="py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5"
    >
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-on-scroll">
          <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
            Memories
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bricolage text-white mt-4 font-medium tracking-tight">
            Journey &amp; Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Entry 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
            <div
              className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right"
              data-anim="slide-right"
            >
              <h3 className="text-2xl md:text-3xl text-white font-bricolage tracking-tight">
                AI Odyssey
              </h3>
              <p className="text-white/40 mt-2 font-light text-sm md:text-base">
                An explorative summit delving into artificial intelligence,
                machine learning advances, and the future of automation.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
              <iconify-icon icon="solar:camera-linear" width="20" />
            </div>
            <div
              className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll"
              data-anim="slide-left"
            >
              <span className="text-6xl md:text-8xl font-bricolage text-white/5 font-semibold absolute -translate-y-12 select-none pointer-events-none tracking-tighter">
                E01
              </span>
            </div>
          </div>

          {/* Timeline Entry 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 group">
            <div
              className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll"
              data-anim="slide-right"
            >
              <span className="text-6xl md:text-8xl font-bricolage text-white/5 font-semibold absolute right-6 md:right-12 -translate-y-12 select-none pointer-events-none tracking-tighter">
                E02
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
              <iconify-icon icon="solar:album-linear" width="20" />
            </div>
            <div
              className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll text-center md:text-left"
              data-anim="slide-left"
            >
              <h3 className="text-2xl md:text-3xl text-white font-bricolage tracking-tight">
                Quest for Enigma 2.0
              </h3>
              <p className="text-white/40 mt-2 font-light text-sm md:text-base">
                A thrilling cryptic treasure hunt challenging logical reasoning
                and problem-solving abilities.
              </p>
            </div>
          </div>

          {/* Timeline Entry 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between group">
            <div
              className="w-full md:w-5/12 pr-0 md:pr-12 order-2 md:order-1 animate-on-scroll text-center md:text-right"
              data-anim="slide-right"
            >
              <h3 className="text-2xl md:text-3xl text-white font-bricolage tracking-tight">
                Web D Explore
              </h3>
              <p className="text-white/40 mt-2 font-light text-sm md:text-base">
                Hands-on workshops focused on modern web architecture, frontend
                frameworks, and UI/UX fundamentals.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
              <iconify-icon icon="solar:code-square-linear" width="20" />
            </div>
            <div
              className="w-full md:w-5/12 pl-0 md:pl-12 order-3 animate-on-scroll"
              data-anim="slide-left"
            >
              <span className="text-6xl md:text-8xl font-bricolage text-white/5 font-semibold absolute -translate-y-12 select-none pointer-events-none tracking-tighter">
                E03
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
