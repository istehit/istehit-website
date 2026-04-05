"use client";
import { useState } from 'react';
import { DrivePhoto } from '@/lib/drive';

export function EventCarousel({
  photos,
  eventName,
  height = 220,
}: {
  photos: DrivePhoto[];
  eventName: string;
  height?: number;
}) {
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) {
    return (
      <div
        style={{
          width: '100%',
          height: `${height}px`,
          backgroundColor: '#111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.3,
          borderRadius: '1.5rem',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>
          image_not_supported
        </span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);
  const photo = photos[current];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        backgroundColor: '#111',
        borderRadius: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 0.45s ease',
        }}
      >
        {photos.map((item, index) => (
          <div
            key={item.id}
            style={{
              minWidth: '100%',
              height: '100%',
              position: 'relative',
              flexShrink: 0,
            }}
            aria-hidden={index !== current}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbnailUrl}
              alt={`${eventName} photo ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.32) 0%, transparent 24%, transparent 76%, rgba(0,0,0,0.32) 100%)',
          pointerEvents: 'none',
        }}
      />

      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            style={navButtonStyle('left')}
          >
            &#8249;
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            style={navButtonStyle('right')}
          >
            &#8250;
          </button>
        </>
      )}

      {photos.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.35rem',
          }}
        >
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to photo ${i + 1}`}
              style={{
                width: i === current ? '1.25rem' : '0.45rem',
                height: '0.45rem',
                borderRadius: '999px',
                background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          borderRadius: '999px',
          padding: '0.2rem 0.6rem',
          fontSize: '0.7rem',
          color: '#fff',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
        }}
      >
        {current + 1} / {photos.length}
      </div>
    </div>
  );
}

function navButtonStyle(side: 'left' | 'right') {
  return {
    position: 'absolute' as const,
    [side]: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.55)',
    border: 'none',
    borderRadius: '50%',
    width: '2.2rem',
    height: '2.2rem',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    lineHeight: 1,
    backdropFilter: 'blur(4px)',
  };
}
