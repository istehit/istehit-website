import React from 'react';
import Link from 'next/link';
import { fetchEventFolders, DriveEvent } from '@/lib/drive';
import EventsGrid from '@/components/EventsGrid';

export const revalidate = 300;

async function getEvents(): Promise<DriveEvent[]> {
  try {
    return await fetchEventFolders();
  } catch (e) {
    console.error('[EventsPage] Failed to fetch Drive events:', e);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <section id="events">
          <div style={{ padding: 'clamp(2rem, 6vw, 4rem) 1rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--theme-dark)' }}>
              <h2 className="h-display" style={{ color: 'var(--theme-white)', fontSize: 'clamp(2rem, 7vw, 3rem)' }}>Flagship Events</h2>
                <p style={{ color: 'var(--theme-white)', opacity: 0.7, marginTop: '1rem', fontSize: 'clamp(0.95rem, 2.8vw, 1.05rem)' }}>Highlights of the major conventions and workshops hosted by our technical society.</p>
          </div>

          <EventsGrid events={events} />
      </section>

      {/* Final CTA */}
      <section className="cta-section" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-dark)', borderBottom: 'none' }}>
          <h2 className="h-display" style={{ fontSize: 'clamp(2.1rem, 10vw, 4rem)', marginBottom: '2rem' }}>Track Record</h2>
          <p style={{ fontSize: 'clamp(1rem, 3.2vw, 1.25rem)', fontWeight: '500', marginBottom: '2.5rem', opacity: '0.8', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Over the past 5 years, we have hosted hundreds of speakers and completed thousands of group projects.
          </p>
          <Link href="/membership" className="btn btn-primary" style={{ boxShadow: 'none' }}>Become a Participant</Link>
      </section>
    </>
  );
}
