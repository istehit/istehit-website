const teams = [
  {
    name: "Technical",
    description:
      "The backbone of our digital infrastructure, maintaining platforms and leading open-source initiatives.",
    icon: "solar:code-square-linear",
    color: "emerald",
    colorClasses: {
      icon: "text-emerald-400",
      gradientBg: "from-emerald-500/5",
      hoverIconBg: "group-hover:bg-emerald-500/10",
      hoverIconBorder: "group-hover:border-emerald-500/20",
      hoverText: "group-hover:text-emerald-50",
      progressBar: "bg-emerald-500",
    },
    delay: "delay-100",
  },
  {
    name: "Public Relations",
    description:
      "Bridging the gap between the society and the student body, managing outreach and communications.",
    icon: "solar:users-group-rounded-linear",
    color: "blue",
    colorClasses: {
      icon: "text-blue-400",
      gradientBg: "from-blue-500/5",
      hoverIconBg: "group-hover:bg-blue-500/10",
      hoverIconBorder: "group-hover:border-blue-500/20",
      hoverText: "group-hover:text-blue-50",
      progressBar: "bg-blue-500",
    },
    delay: "delay-200",
  },
  {
    name: "Media",
    description:
      "Capturing moments and designing the visual identity of our events, campaigns, and online presence.",
    icon: "solar:camera-linear",
    color: "purple",
    colorClasses: {
      icon: "text-purple-400",
      gradientBg: "from-purple-500/5",
      hoverIconBg: "group-hover:bg-purple-500/10",
      hoverIconBorder: "group-hover:border-purple-500/20",
      hoverText: "group-hover:text-purple-50",
      progressBar: "bg-purple-500",
    },
    delay: "delay-300",
  },
];

export default function TeamsSection() {
  return (
    <section
      id="teams"
      className="py-32 bg-black relative overflow-hidden border-t border-white/5"
    >
      <div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Society Structure
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bricolage text-white mb-6 tracking-tighter leading-none">
              Core Teams
            </h2>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
              The engines driving ISTE-HIT SC. Dedicated groups of individuals
              managing operations, tech, and community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`group relative h-[400px] md:h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll ${team.delay}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${team.colorClasses.gradientBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div
                className={`relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto ${team.colorClasses.icon} group-hover:scale-110 ${team.colorClasses.hoverIconBg} ${team.colorClasses.hoverIconBorder} transition-all duration-500`}
              >
                <iconify-icon icon={team.icon} className="text-2xl" />
              </div>

              <div className="relative z-10 mt-auto pt-32">
                <h3
                  className={`text-3xl text-white font-bricolage mb-3 tracking-tight ${team.colorClasses.hoverText} transition-colors`}
                >
                  {team.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {team.description}
                </p>
                <div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
                  <div
                    className={`absolute inset-0 ${team.colorClasses.progressBar} w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
