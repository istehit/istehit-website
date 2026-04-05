import React from 'react';
import { fetchEventFolders, DriveEvent } from '@/lib/drive';
import EventsCarousel from '@/components/EventsCarousel';

export const revalidate = 300;

async function getEvents(): Promise<DriveEvent[]> {
  try {
    return await fetchEventFolders();
  } catch (e) {
    console.error('[EventsSection] Failed to fetch Drive events:', e);
    return [];
  }
}

export default async function EventsSection() {
  const events = await getEvents();

  return (
    <section id="events">
      <div className="page-header-block">
        <h2 className="h-display page-header-title">Flagship Events</h2>
        <p style={{ opacity: 0.7, marginTop: '1rem' }}>
          Highlights of the major conventions and workshops hosted by our technical society.
        </p>
      </div>

      <EventsCarousel events={events} />
    </section>
  );
}
