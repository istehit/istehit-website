import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hit-campus.jpeg"
          className="w-full h-full object-cover opacity-40"
          alt="Haldia Institute of Technology Campus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Iste.png"
          alt="ISTE HIT SC Technical Society"
          className="w-12 h-12 rounded-xl object-contain bg-white/10 backdrop-blur-md border border-white/20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-bricolage text-white leading-[0.9] tracking-tight font-medium mb-8">
          <span className="block text-5xl md:text-7xl lg:text-8xl">
            INNOVATING,<br/>EDUCATING,
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-emerald-400/80 font-serif italic font-thin">
            EMPOWERING
          </span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          ISTE HIT SC — the technical society at Haldia Institute of Technology, not a club, fostering practical learning and innovation.
        </p>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition-colors"
        >
          <span>Explore Events</span>
          <iconify-icon icon="solar:arrow-right-linear" width="18" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </header>
  );
}
