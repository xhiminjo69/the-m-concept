import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function MateriaPage() {
  return (
    <>
      <Navbar />

      {/* Full-viewport coming soon */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/showroom.jpg"
            alt="Materia — Coming Soon"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep overlay — keeps text legible over any photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/60 to-stone-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-transparent to-stone-900/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />
            <p className="font-label text-[0.6rem] text-white/50 uppercase tracking-[0.45em]">
              The M Concept &nbsp;&middot;&nbsp; Materia
            </p>
            <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-light text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
          >
            Coming Soon
          </h1>

          {/* Accent line */}
          <div
            className="mx-auto mb-10"
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(244,81,30,0.8), transparent)',
            }}
          />

          {/* Description */}
          <p
            className="font-display font-light text-white/70 leading-relaxed mb-4"
            style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', letterSpacing: '0.01em' }}
          >
            We are building something truly innovative — a platform powered by the latest
            technology, designed to make it effortless for you to discover and find your
            dream furniture and materials,{' '}
            <em className="not-italic" style={{ color: 'rgba(244,163,130,0.95)' }}>
              tailored precisely to your budget and vision.
            </em>
          </p>

          <p
            className="font-body text-white/45 leading-relaxed"
            style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
          >
            Stay tuned. The experience is worth the wait.
          </p>

          {/* Bottom CTA */}
          <div className="mt-14">
            <a href="/contact" className="btn-outline-light btn-md">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom-right label */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3">
          <span
            className="font-label text-[0.6rem] text-white/25 uppercase tracking-[0.35em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Materia
          </span>
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }} />
        </div>

      </section>
    </>
  );
}
