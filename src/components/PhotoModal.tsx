'use client';

import { useState, useEffect } from 'react';
import { DriveEvent } from '@/lib/drive';

interface PhotoModalProps {
  event: DriveEvent;
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoModal({ event, isOpen, onClose }: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % event.photos.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, event.photos.length, onClose]);

  if (!isOpen) return null;

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % event.photos.length);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.95)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onClose}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        flexShrink: 0,
      }}>
        <h3 className="h-display" style={{ color: 'var(--theme-white)', fontSize: 'clamp(0.875rem, 3vw, 1.25rem)' }}>
          {event.name}
        </h3>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--theme-white)',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>close</span>
        </button>
      </div>

      {/* Main Image */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '1rem',
          minHeight: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        {event.photos.length > 1 && (
          <button
            onClick={goPrev}
            style={{
              position: 'absolute',
              left: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              backgroundColor: 'rgba(17,17,17,0.8)',
              color: 'var(--theme-white)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
              transition: 'opacity 0.2s',
              zIndex: 10,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>chevron_left</span>
          </button>
        )}

        {/* Image */}
        <img
          key={currentIndex}
          src={event.photos[currentIndex].thumbnailUrl}
          alt={event.photos[currentIndex].name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            animation: 'fadeIn 0.3s ease',
          }}
        />

        {/* Right Arrow */}
        {event.photos.length > 1 && (
          <button
            onClick={goNext}
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              backgroundColor: 'rgba(17,17,17,0.8)',
              color: 'var(--theme-white)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
              transition: 'opacity 0.2s',
              zIndex: 10,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>chevron_right</span>
          </button>
        )}
      </div>

      {/* Footer with counter and dots */}
      <div style={{
        padding: '0.75rem 1rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        flexShrink: 0,
      }}>
        <span style={{ color: 'var(--theme-white)', fontFamily: 'monospace', fontSize: '0.75rem' }}>
          {currentIndex + 1} / {event.photos.length}
        </span>
        {event.photos.length > 1 && (
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {event.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: i === currentIndex ? 'var(--theme-primary)' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
