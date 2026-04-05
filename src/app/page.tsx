import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { client, SanityEvent } from '@/sanity/client';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import MembershipSection from '@/components/sections/MembershipSection';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'ISTE HIT SC | Technical Society at Haldia Institute of Technology',
  description:
    'Explore ISTE HIT SC events, workshops, and initiatives that empower students through practical technical learning and innovation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ISTE HIT SC | Technical Society at Haldia Institute of Technology',
    description:
      'Explore ISTE HIT SC events, workshops, and initiatives that empower students through practical technical learning and innovation.',
    url: siteConfig.siteUrl,
    images: [
      {
        url: '/Iste.png',
        width: 512,
        height: 512,
        alt: 'ISTE HIT Student Chapter logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISTE HIT SC | Technical Society at Haldia Institute of Technology',
    description:
      'Explore ISTE HIT SC events, workshops, and initiatives that empower students through practical technical learning and innovation.',
    images: ['/Iste.png'],
  },
};

export const revalidate = 60; // ISR revalidate every 60s

export default async function Home() {
  let upcomingEvent: SanityEvent | null = null;
  
  try {
    // Attempt to fetch the very next upcoming event from sanity
    const query = `*[_type == "event" && eventDate > now()] | order(eventDate asc)[0]`;
    upcomingEvent = await client.fetch(query);
  } catch (e) {
    console.error("Sanity fetch failed. Ensure .env.local is configured properly.", e);
  }

  return (
    <>
      {/* Hero Section */}
      <header className="hero">
          <div className="hero-content">
              {upcomingEvent ? (
                <>
                  <span className="text-label" style={{ color: 'var(--theme-primary)', marginBottom: '1rem', display: 'block' }}>Upcoming Event</span>
                    <h1 className="h-display hero-title" style={{ fontSize: 'clamp(2rem, 8.8vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1 }}>
                      {upcomingEvent.title}
                  </h1>
                  <p style={{ "fontSize": "1.125rem", "fontWeight": "500", "marginBottom": "2.5rem", "maxWidth": "28rem" }}>
                      {upcomingEvent.description || "Join us for our next flagship event. Fostering technical growth through practical learning."}
                      <br/><br/>
                      <strong style={{ opacity: 0.8 }}><span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'text-bottom' }}>event</span> {new Date(upcomingEvent.eventDate).toLocaleDateString()} | {upcomingEvent.location}</strong>
                  </p>
                  <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "1rem" }}>
                      {upcomingEvent.registration && upcomingEvent.registrationLink && (
                        <a href={upcomingEvent.registrationLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ "padding": "1rem 2rem" }}>Register Now</a>
                      )}
                      <Link href="/events" className="btn btn-dark" style={{ "padding": "1rem 2rem" }}>All Events</Link>
                  </div>
                </>
              ) : (
                <>
                    <h1 className="h-display hero-title" style={{ fontSize: 'clamp(2.2rem, 10vw, 4.5rem)', lineHeight: '1.1' }}>
                      Innovating,<br/>Educating,<br/>Empowering
                  </h1>
                  <p style={{ "fontSize": "1.125rem", "fontWeight": "500", "marginBottom": "2.5rem", "maxWidth": "28rem" }}>
                      ISTE HIT SC — the technical society at Haldia Institute of Technology, not a club, fostering practical learning, continuous skill development, and a powerful community footprint.
                  </p>
                  <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "1rem" }}>
                      <Link href="/events" className="btn btn-dark" style={{ "padding": "1rem 2rem" }}>Explore Events</Link>
                      <Link href="/about" className="btn btn-outline" style={{ "padding": "1rem 2rem" }}>Mission &amp; Vision</Link>
                  </div>
                </>
              )}
          </div>
          {/* Hero Image */}
          <div className="hero-image">
              <div className="bg-img-cover" style={{ "backgroundImage": `url('${upcomingEvent?.imgUrl || '/hit-campus.jpeg'}')` }}></div>
          </div>
      </header>

      {/* Marquee */}
      <div className="marquee-wrapper">
          <div className="marquee-content">
              <span className="h-heading" style={{ "fontSize": "1.5rem" }}> INNOVATING - EDUCATING - EMPOWERING </span>
              <span className="h-heading" style={{ "fontSize": "1.5rem" }}> INNOVATING - EDUCATING - EMPOWERING </span>
              <span className="h-heading" style={{ "fontSize": "1.5rem" }}> INNOVATING - EDUCATING - EMPOWERING </span>
              <span className="h-heading" style={{ "fontSize": "1.5rem" }}> INNOVATING - EDUCATING - EMPOWERING </span>
              <span className="h-heading" style={{ "fontSize": "1.5rem" }}> INNOVATING - EDUCATING - EMPOWERING </span>
          </div>
      </div>

      {/* Trust & Metrics */}
      <section className="trust-metrics">
          {/* Trusted By */}
          <div className="trusted-logos">
              <h3 className="text-label" style={{ "opacity": "0.6", "marginBottom": "1.5rem" }}>IN COLLABORATION WITH</h3>
              <div className="logo-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  <div className="h-heading" style={{ fontSize: '1.25rem', opacity: 0.5 }}>Haldia Institute of Technology</div>
                  <div className="h-heading" style={{ fontSize: '1.25rem', opacity: 0.5 }}>Indian Society for Technical Education</div>
              </div>
          </div>
          {/* Stats */}
          <div className="metrics-grid">
              <div className="metric-item">
                  <p className="text-label" style={{ "marginBottom": "0.5rem" }}>Active Members</p>
                  <p className="metric-value">400+</p>
              </div>
              <div className="metric-item">
                  <p className="text-label" style={{ "marginBottom": "0.5rem" }}>Events Conducted</p>
                  <p className="metric-value">20+</p>
              </div>
              <div className="metric-item">
                  <p className="text-label" style={{ "marginBottom": "0.5rem" }}>Alumni Network</p>
                  <p className="metric-value">50+</p>
              </div>
          </div>
      </section>

      <AboutSection />
      <EventsSection />
      <MembershipSection />
    </>
  );
}
