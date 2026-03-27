'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

type Props = {
  images: string[];
  projectName: string;
};

export default function GalleryGrid({ images, projectName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {images.map((src, i) => (
          <button
            key={src}
            className="group relative overflow-hidden bg-wood-100 cursor-zoom-in text-left"
            style={{
              aspectRatio: i === 0 ? '4/3' : i % 5 === 2 ? '3/4' : '4/3',
              boxShadow: '0 4px 20px rgba(44,29,16,0.10)',
            }}
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${projectName} — image ${i + 1} full screen`}
          >
            <Image
              src={src}
              alt={`${projectName} — image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Hover veil */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'rgba(10,7,4,0.30)' }}
            />

            {/* Expand icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>

            {/* Index badge */}
            <span
              className="absolute top-4 right-4 font-label text-[0.55rem] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
