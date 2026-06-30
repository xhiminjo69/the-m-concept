import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';
import { getSupabaseProjectsByCategory } from '@/lib/supabase-projects';

export const metadata: Metadata = {
  title: 'Hospitality Projects',
  description:
    'Hospitality fit-outs by THE M CONCEPT — hotel interiors, guest-room furniture, and full interior programmes designed and built in Vlorë, Albania.',
};

export default async function HospitalityProjectsPage() {
  const t = await getTranslations('projects');
  const projects = await getSupabaseProjectsByCategory('hospitality');

  return (
    <>
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: '11rem', paddingBottom: '9rem', minHeight: '62vh' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/project-1.jpg"
            alt="Hospitality Projects"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.45) 0%, rgba(10,8,6,0.55) 100%)' }} />
        </div>

        {/* Back link */}
        <div className="absolute top-24 left-6 md:left-10 lg:left-16 z-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-label text-[0.65rem] uppercase tracking-[0.28em] text-white/60 hover:text-white transition-colors duration-200"
          >
            <span>&larr;</span>
            <span>{t('allProjects')}</span>
          </Link>
        </div>

        {/* Centered content */}
        <div className="relative z-10 text-center px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
          <h1
            className="font-display font-light text-white leading-tight"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
          >
            {t('categories.hospitality.headline')}
          </h1>
          <p
            className="font-body text-white/65 leading-relaxed mt-6 max-w-md mx-auto"
            style={{ fontSize: '1rem' }}
          >
            {t('categories.hospitality.description')}
          </p>
        </div>
      </section>

      {/* ── Project grid ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(5rem, 8vw, 9rem) 0',
          background: 'linear-gradient(to bottom, #CCC6B8 0%, #EAE7E2 22%)',
        }}
      >
        <div className="px-6 md:px-10 lg:px-16">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="section-md" style={{ background: 'linear-gradient(180deg, #1B1208 0%, #271810 100%)' }}>
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <span className="eyebrow">{t('cta.eyebrow')}</span>
              <h2
                className="font-display font-light text-white leading-tight tracking-tight mt-3"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                {t('cta.heading')}
              </h2>
              <p className="font-body text-stone-400 leading-relaxed mt-4 max-w-sm" style={{ fontSize: '0.9375rem' }}>
                {t('categories.hospitality.ctaBody')}
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg shrink-0">
              {t('cta.startProject')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
