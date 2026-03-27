import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getProjectsByCategory } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Commercial Projects',
  description:
    'Commercial fit-outs by The M Concept — office interiors, retail spaces, and corporate environments crafted in Vlorë, Albania.',
};

export default async function CommercialProjectsPage() {
  const t = await getTranslations('projects');
  const tFooter = await getTranslations('footer');
  const projects = getProjectsByCategory('commercial');

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
            src="/images/Projects-Commercial-DurresYachtMarina.jpg"
            alt="Commercial Projects"
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
            {t('categories.commercial.headline')}
          </h1>
          <p
            className="font-body text-white/65 leading-relaxed mt-6 max-w-md mx-auto"
            style={{ fontSize: '1rem' }}
          >
            {t('categories.commercial.description')}
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
                {t('categories.commercial.ctaBody')}
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg shrink-0">
              {t('cta.startProject')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="footer relative overflow-hidden" style={{ background: '#110E0C' }}>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '64px', background: 'linear-gradient(to bottom, rgba(245,234,217,0.18), transparent)' }} />
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-800">
            <div className="md:col-span-2">
              <p className="font-display font-light text-2xl text-white mb-4">The M Concept</p>
              <p className="font-body text-body-sm text-stone-400 leading-relaxed max-w-xs mb-8">{tFooter('tagline')}</p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/themconcept.al/" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{tFooter('instagram')}</a>
                <a href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7?g_st=iw" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{tFooter('googleMaps')}</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">{tFooter('navigate')}</p>
              <ul className="flex flex-col gap-3">
                {([
                  { key: 'company',  href: '/company'  },
                  { key: 'projects', href: '/projects' },
                  { key: 'contact',  href: '/contact'  },
                  { key: 'materia',  href: '/materia'  },
                ] as const).map((l) => (
                  <li key={l.href}><Link href={l.href} className="footer-link">{tFooter(`nav.${l.key}`)}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">{tFooter('getInTouch')}</p>
              <p className="font-body text-[0.8125rem] text-stone-500 leading-relaxed">
                Vlorë, Albania<br />
                <a href="mailto:info@themconcept.al" className="footer-link">info@themconcept.al</a><br />
                <a href="tel:+355682039345" className="footer-link">+355 68 203 9345</a>
              </p>
            </div>
          </div>
          <div className="pt-8">
            <p className="font-body text-[0.8125rem] text-stone-600">
              &copy; {new Date().getFullYear()} {tFooter('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
