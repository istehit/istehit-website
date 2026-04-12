"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SwissNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar" id="top">
          <div className="nav-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                  <img src="/Iste.png" alt="ISTE Logo" style={{width: '2rem', height: '2rem', objectFit: 'contain'}} />
                  <h1 className="h-heading" style={{fontSize: "1.25rem", color: 'var(--theme-dark)'}}>ISTE-HIT SC</h1>
              </Link>
          </div>

          <button
              className="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
          >
              <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>

          <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/about">About</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/team">Team</Link>
              <Link href="/faq">FAQ</Link>
              <div className="nav-divider"></div>
              <Link href="/membership" className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Join Now</Link>
          </div>
      </nav>

      <div className={`nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-mobile-inner">
              <Link href="/" onClick={closeMenu}>Home</Link>
              <Link href="/events" onClick={closeMenu}>Events</Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/membership" onClick={closeMenu}>Membership</Link>
              <Link href="/team" onClick={closeMenu}>Team</Link>
              <Link href="/faq" onClick={closeMenu}>FAQ</Link>
              <Link href="/membership" className="btn btn-primary nav-mobile-cta" onClick={closeMenu}>Join Now</Link>
          </div>
      </div>
    </>
  );
}
