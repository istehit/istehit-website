"use client";
import React from 'react';
import Link from 'next/link';

export default function SwissFooter() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
        <div className="footer-grid">
            <div className="footer-col">
                <div style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem"}}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Iste.png" alt="ISTE Logo" style={{width: '1.2rem', height: '1.2rem', objectFit: 'contain'}} />
                    <span className="text-label">ISTE-HIT SC</span>
                </div>
                <div style={{fontSize: "0.875rem", opacity: 0.6}}>
                    © {new Date().getFullYear()} ISTE-HIT SC<br/>
                    Haldia Institute of Technology, Purba Medinipur, Haldia, West Bengal-721657<br/>
                    Phone: 90027-80765<br/>
                    Email: hitiste.studentchapter@gmail.com
                </div>
            </div>
            <div className="footer-col">
                <h4 className="text-label" style={{marginBottom: "1.5rem"}}>Sitemap</h4>
                <ul>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/membership">Membership</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4 className="text-label" style={{marginBottom: "1.5rem"}}>Social</h4>
                <ul>
                    <li><a href="https://www.instagram.com/iste.hit.sc/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/iste-hit-sc/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/istehit" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4 className="text-label" style={{marginBottom: "1.5rem"}}>Newsletter</h4>
                <p style={{fontSize: "0.875rem", marginBottom: "1rem", opacity: 0.7}}>Tech insights weekly.</p>
                <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                    <input className="newsletter-input" placeholder="EMAIL ADDRESS" type="email"/>
                    <button className="btn btn-dark" style={{width: "100%"}}>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/code-of-conduct">Code of Conduct</Link>
            </div>
            <div>
                <button onClick={scrollToTop} className="footer-top-btn" type="button" aria-label="Move to top">
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_upward</span>
                    Move to top
                </button>
            </div>
        </div>
    </footer>
  );
}
