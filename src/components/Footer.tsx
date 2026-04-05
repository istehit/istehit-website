export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm overflow-hidden shrink-0">
              <img src="/iste.png" alt="ISTE Logo" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-xl font-bricolage text-white font-medium tracking-tight">
              ISTE-HIT SC
            </h4>
          </div>
          <p className="text-sm text-white/50 mb-1">
            Indian Society for Technical Education
          </p>
          <p className="text-sm text-white/50">
            Haldia Institute of Technology Technical Society
          </p>
        </div>
        <div className="md:text-right space-y-1">
          <p className="text-sm text-white/70">
            Officer In-Charge: Prof. Priyatosh Jana
          </p>
          <p className="text-sm text-white/70">Phone: 90027-80765</p>
          <p className="text-sm text-white/70">
            Email: hitiste.studentchapter@gmail.com
          </p>
          <p className="text-sm text-white/50 mt-4">
            Haldia Institute of Technology, Purba Medinipur,
            <br />
            Haldia, West Bengal — 721657
          </p>
          <div className="flex gap-4 justify-center md:justify-end mt-4 pt-4 border-t border-white/10">
            <a href="https://www.instagram.com/iste.hit.sc/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/iste-hit-sc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="https://github.com/istehit" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
