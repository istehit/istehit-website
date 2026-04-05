"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed flex animate-slide-up [animation-delay:0.5s] z-50 opacity-0 px-3 sm:px-4 top-4 sm:top-6 right-0 left-0 justify-center">
      <div className="w-full max-w-5xl">
        <nav className="flex transition-all duration-300 bg-neutral-900/60 w-full border-white/10 border rounded-2xl sm:rounded-full pt-2 pr-2 sm:pr-6 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 min-w-0">
            <Link href="/" onClick={closeMenu} className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm overflow-hidden shrink-0">
              <img src="/iste.png" alt="ISTE Logo" className="w-full h-full object-contain" />
            </Link>
            <span className="font-bricolage text-sm sm:text-lg tracking-tight font-medium truncate">
              ISTE-HIT SC
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-normal text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/membership"
              className="hidden sm:inline-flex px-4 py-2 rounded-full text-xs font-medium bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              Join Membership
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <iconify-icon icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="20" />
            </button>
          </div>
        </nav>

        <div className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-3 flex flex-col gap-1">
            <Link href="/" onClick={closeMenu} className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Home</Link>
            <Link href="/events" onClick={closeMenu} className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Events</Link>
            <Link href="/gallery" onClick={closeMenu} className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Gallery</Link>
            <Link href="/membership" onClick={closeMenu} className="mt-1 inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">Join Membership</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
