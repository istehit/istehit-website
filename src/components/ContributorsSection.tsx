const contributors = [
  {
    name: "Urooj Ahmad",
    title: "Technical Head",
    role: "Project Maintainer",
    team: "Technical",
    icon: "solar:user-circle-linear",
    delay: "0.25s",
  },
  {
    name: "Abhishek Kumar Verma",
    title: "Technical Head",
    role: "Project Maintainer",
    team: "Technical",
    icon: "solar:user-circle-linear",
    delay: "0.4s",
  },
  {
    name: "Shubham & Arijit",
    title: "Technical Members",
    role: "Contributors",
    team: "Technical",
    icon: "solar:users-group-rounded-linear",
    delay: "0.55s",
  },
];

export default function ContributorsSection() {
  return (
    <section
      className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative"
      id="contributors"
    >
      {/* Section Number */}
      <div className="absolute top-12 right-6 md:right-12 z-0 opacity-10 font-bricolage font-semibold text-[8rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        CODE
      </div>

      <div className="z-10 w-full max-w-5xl mr-auto ml-auto relative">
        <div
          className="text-center mb-16 animate-on-scroll"
          style={{
            animation:
              "fanSlideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both",
          }}
        >
          <h3 className="text-3xl md:text-5xl font-bricolage font-light text-white mb-4 tracking-tight">
            Website Contributors
          </h3>
          <p className="text-white/50 text-sm md:text-base">
            The technical minds maintaining our digital presence.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contributors.map((contributor) => (
            <div
              key={contributor.name}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll"
              style={{
                animation: `fanSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${contributor.delay} both`,
              }}
            >
              <div className="col-span-1 md:col-span-4 flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-800 border border-white/10 rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                  <iconify-icon icon={contributor.icon} width="40" />
                </div>
                <div>
                  <h4 className="text-xl text-white font-bricolage font-light tracking-tight">
                    {contributor.name}
                  </h4>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    {contributor.title}
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
                    <iconify-icon
                      icon="solar:code-square-linear"
                      width="14"
                    />
                    Role
                  </div>
                  <span className="text-white text-sm">{contributor.role}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
                    <iconify-icon
                      icon="solar:users-group-rounded-linear"
                      width="14"
                    />
                    Team
                  </div>
                  <span className="text-white text-sm">{contributor.team}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
