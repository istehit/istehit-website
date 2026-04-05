"use client";
import { DrivePhoto } from '@/lib/drive';

export function PhotoCell({ photo, isBig }: { photo: DrivePhoto; isBig: boolean }) {
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
      gridColumn: isBig ? '1 / -1' : 'auto',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.thumbnailUrl}
        alt={photo.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.4s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  );
}
