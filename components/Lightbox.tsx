'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex]   = useState(initialIndex);
  const [scale, setScale]   = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const containerRef  = useRef<HTMLDivElement>(null);
  const isDragging    = useRef(false);
  const hasDragged    = useRef(false);
  const dragStart     = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  const src = images[index];

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(images.length - 1, i + 1)), [images.length]);

  /* Reset zoom when switching images */
  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [index]);

  /* Keyboard: Escape closes, arrows navigate */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  /* Scroll-to-zoom — needs a non-passive listener */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale(s => Math.min(5, Math.max(1, s - e.deltaY * 0.006)));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  /* Drag-to-pan */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStart.current  = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true;
    setOffset({ x: dragStart.current.ox + dx, y: dragStart.current.oy + dy });
  };

  const handleMouseUp = () => { isDragging.current = false; };

  /* Click image: toggle zoom or ignore if a drag just finished */
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasDragged.current) { hasDragged.current = false; return; }
    if (scale > 1) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(7,5,3,0.97)' }}
      onClick={onClose}
    >
      {/* ── Image area ────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
        style={{ cursor: scale > 1 ? 'grab' : 'zoom-in' }}
        onClick={e => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            transition: isDragging.current ? 'none' : 'transform 0.22s ease',
          }}
          onClick={handleImageClick}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* ── Close ─────────────────────────────────────────────────────── */}
      <button
        className="absolute top-5 right-6 z-10 flex items-center gap-2 font-label text-[0.6rem] uppercase tracking-[0.25em] text-stone-400 hover:text-white transition-colors duration-200"
        onClick={onClose}
        aria-label="Close"
      >
        <span>Close</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      </button>

      {/* ── Counter ───────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="font-label text-[0.6rem] uppercase tracking-[0.3em] text-stone-500">
          {index + 1} / {images.length}
        </span>
      </div>

      {/* ── Zoom hint ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-6 right-6 pointer-events-none">
        <span className="font-label text-[0.55rem] uppercase tracking-[0.2em] text-stone-700">
          {scale > 1 ? 'Click to reset' : 'Scroll · click to zoom'}
        </span>
      </div>

      {/* ── Prev ──────────────────────────────────────────────────────── */}
      {index > 0 && (
        <button
          className="absolute left-3 md:left-7 top-1/2 -translate-y-1/2 z-10 p-4 text-stone-500 hover:text-white transition-colors duration-200"
          onClick={e => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* ── Next ──────────────────────────────────────────────────────── */}
      {index < images.length - 1 && (
        <button
          className="absolute right-3 md:right-7 top-1/2 -translate-y-1/2 z-10 p-4 text-stone-500 hover:text-white transition-colors duration-200"
          onClick={e => { e.stopPropagation(); next(); }}
          aria-label="Next image"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
