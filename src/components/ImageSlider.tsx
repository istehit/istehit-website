'use client';

import { useState, useEffect } from 'react';
import { DrivePhoto } from '@/lib/drive';

export default function ImageSlider({ photos }: { photos: DrivePhoto[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  if (photos.length === 0) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--theme-dark)',
      }}>
        <img
          src="/Iste.png"
          alt="ISTE"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            opacity: 0.7,
          }}
        />
      </div>
    );
  }

  const photo = photos[currentIndex];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '120px', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={photo.id}
        src={photo.thumbnailUrl}
        alt={photo.name}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '120px',
          objectFit: 'cover',
          display: 'block',
          filter: 'grayscale(20%)',
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      />
      {/* Photo counter */}
      <div style={{
        position: 'absolute',
        bottom: '0.75rem',
        right: '0.75rem',
        background: 'var(--theme-dark)',
        color: 'var(--theme-white)',
        padding: '0.25rem 0.6rem',
        fontSize: '0.7rem',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
      }}>
        {currentIndex + 1} / {photos.length}
      </div>
      {/* Progress dots */}
      {photos.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.4rem',
        }}>
          {photos.map((_, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: i === currentIndex ? 'var(--theme-primary)' : 'rgba(255,255,255,0.5)',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
