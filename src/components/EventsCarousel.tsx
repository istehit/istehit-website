'use client';

import { useState, useEffect } from 'react';
import { DriveEvent } from '@/lib/drive';

export default function EventsCarousel({ events }: { events: DriveEvent[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (events.length <= 1) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [events.length]);

  const goTo = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const goPrev = () => {
    const newIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;
    goTo(newIndex);
  };

  const goNext = () => {
    const newIndex = currentIndex === events.length - 1 ? 0 : currentIndex + 1;
    goTo(newIndex);
  };

  if (events.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', opacity: 0.4 }}>
        <p className="h-heading" style={{ fontSize: '1rem' }}>No events found. Check back soon!</p>
      </div>
    );
  }

  const event = events[currentIndex];

  return (
    <div>
      {/* Event Card */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderTop: 'var(--border-standard)',
        backgroundColor: 'var(--theme-bg)',
        height: '550px',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        position: 'relative',
      }}>
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          style={{
            position: 'absolute',
            left: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--theme-dark)',
            color: 'var(--theme-white)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(-50%)'; }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>chevron_left</span>
        </button>

        {/* Image side - left */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          height: '550px',
        }}>
          {event.photos.length > 0 ? (
            <img
              src={event.photos[currentIndex % event.photos.length].thumbnailUrl}
              alt={event.name}
              style={{
                width: '100%',
                height: '550px',
                objectFit: 'cover',
                display: 'block',
                filter: 'grayscale(20%)',
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '550px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--theme-dark)',
            }}>
              <img
                src="/Iste.png"
                alt="ISTE"
                style={{ width: '50px', height: '50px', objectFit: 'contain', opacity: 0.7 }}
              />
            </div>
          )}
          {/* Counter */}
          <div style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '0.5rem',
            background: 'var(--theme-dark)',
            color: 'var(--theme-white)',
            padding: '0.15rem 0.4rem',
            fontSize: '0.6rem',
            fontFamily: 'monospace',
          }}>
            {event.photos.length > 0 ? `${(currentIndex % event.photos.length) + 1} / ${event.photos.length}` : '1 / 1'}
          </div>
        </div>

        {/* Content side - right */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1rem',
          borderLeft: 'var(--border-standard)',
          height: '550px',
        }}>
          <span className="text-label" style={{ color: 'var(--theme-primary)', marginBottom: '0.5rem', display: 'block', fontSize: '0.875rem' }}>
            {event.photos.length} photo{event.photos.length !== 1 ? 's' : ''}
          </span>
          <h2 className="h-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '0', lineHeight: 1.1 }}>
            {event.name}
          </h2>
          <a
            href={`https://drive.google.com/drive/folders/${event.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', textDecoration: 'none', width: 'fit-content', padding: '0.75rem 1.25rem', fontSize: '0.875rem' }}
          >
            View on Drive <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
          </a>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--theme-dark)',
            color: 'var(--theme-white)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(-50%)'; }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>chevron_right</span>
        </button>
      </div>

      {/* Navigation dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.5rem',
        backgroundColor: 'var(--theme-bg)',
        borderTop: 'var(--border-standard)',
      }}>
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: i === currentIndex ? 'var(--theme-primary)' : 'var(--theme-dark)',
              opacity: i === currentIndex ? 1 : 0.3,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
