'use client';

import { useState } from 'react';
import { DriveEvent } from '@/lib/drive';
import PhotoModal from '@/components/PhotoModal';

export default function EventsGrid({ events }: { events: DriveEvent[] }) {
  const [selectedEvent, setSelectedEvent] = useState<DriveEvent | null>(null);

  if (events.length === 0) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.4 }}>
        <p className="h-heading" style={{ fontSize: '1.25rem' }}>No events found. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      {events.map((event, index) => (
        <EventRow
          key={event.id}
          event={event}
          index={index}
          onViewPhotos={() => setSelectedEvent(event)}
        />
      ))}
      {selectedEvent && (
        <PhotoModal
          event={selectedEvent}
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

function EventRow({ event, index, onViewPhotos }: { event: DriveEvent; index: number; onViewPhotos: () => void }) {
  const isAlt = index % 2 === 1;
  const thumbnail = event.photos.length > 0 ? event.photos[0].thumbnailUrl : null;

  return (
    <div className="project-row">
      <div className="project-content" style={{ order: isAlt ? 2 : 1 }}>
        <span className="text-label" style={{ color: 'var(--theme-primary)', marginBottom: '0.5rem' }}>
          {event.photos.length} photo{event.photos.length !== 1 ? 's' : ''}
        </span>
        <h2 className="h-display" style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>{event.name}</h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          {event.photos.length > 0
            ? `Explore our gallery from ${event.name}. View all ${event.photos.length} photos from this event.`
            : `Gallery from ${event.name} coming soon.`}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={onViewPhotos}
            className="text-label"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: 'var(--theme-dark)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            View photos <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
          </button>
          <a
            href={`https://drive.google.com/drive/folders/${event.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--theme-dark)' }}
          >
            Drive <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>open_in_new</span>
          </a>
        </div>
      </div>
      <div className="hero-image" style={{ order: isAlt ? 1 : 2, borderTop: 'none' }}>
        {thumbnail ? (
          <div
            className="bg-img-cover"
            style={{ backgroundImage: `url('${thumbnail}')`, cursor: 'pointer' }}
            onClick={onViewPhotos}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--theme-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/Iste.png"
              alt="ISTE"
              style={{ width: '80px', height: '80px', objectFit: 'contain', opacity: 0.7 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
