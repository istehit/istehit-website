export default function AboutSection() {
  return (
    <section
      className="py-24 bg-neutral-900 text-white relative overflow-hidden"
      id="about"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-emerald-500" />
              <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                About ISTE-HIT SC
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-medium mb-6 leading-tight animate-on-scroll tracking-tight">
              Mission &amp;
              <br />
              <span className="text-white/40">Vision</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed font-light animate-on-scroll delay-100">
              Beyond events, we build the ribbons of community that tie the
              students together. From workshops to practical learning sessions,
              our footprint ensures continuous skill development.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 group cursor-default animate-on-scroll delay-200">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <iconify-icon
                    icon="solar:rocket-linear"
                    width="24"
                    className="text-white"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1 font-bricolage tracking-tight">
                    Technical Excellence
                  </h4>
                  <p className="text-sm text-white/50">
                    Empower students with technical knowledge through practical
                    learning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default animate-on-scroll delay-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <iconify-icon
                    icon="solar:user-speak-rounded-linear"
                    width="24"
                    className="text-white"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1 font-bricolage tracking-tight">
                    Future Leaders
                  </h4>
                  <p className="text-sm text-white/50">
                    Nurture technology leaders through excellence in education
                    and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group animate-on-scroll h-[300px] md:h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
              alt="College Event"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20" />

            <div className="absolute top-1/4 left-1/3 group/spot">
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
              <div className="w-4 h-4 bg-emerald-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
              <div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
                <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider">
                  Campus Hub
                </span>
                <span className="text-xs text-white/70 block">
                  Location: Haldia Institute
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
