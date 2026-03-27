import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getProjectsByCategory, projectCategories } from '@/lib/projects';

const meta = projectCategories.find((c) => c.slug === 'residential')!;

export const metadata: Metadata = {
  title: 'Residential Projects',
  description:
    'Residential interiors by The M Concept — bespoke private homes and apartments designed and crafted in Vlorë, Albania.',
};

export default function ResidentialProjectsPage() {
  const projects = getProjectsByCategory('residential');

  return (
    <>
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: '7rem', paddingBottom: '5.5rem' }}
      >
        {/* Background image */}
        <Image
          src="/images/Projects-Residential6.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(10,7,4,0.70) 0%, rgba(10,7,4,0.45) 100%)' }}
        />

        <div className="px-6 md:px-10 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-10 font-label text-[0.65rem] uppercase tracking-[0.28em] text-stone-300 hover:text-coral-400 transition-colors duration-200"
          >
            <span>&larr;</span>
            <span>All Projects</span>
          </Link>

          {/* Intimate, compressed layout */}
          <div className="max-w-lg">
            <h1
              className="font-display font-light text-white leading-tight tracking-tight mt-3"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
            >
              Residential Projects
            </h1>
            <p
              className="font-body text-stone-300 leading-[1.85] mt-8 border-l-2 border-coral-500 pl-5"
              style={{ fontSize: '1.0625rem' }}
            >
              {meta.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Project grid ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(5rem, 8vw, 9rem) 0',
          background: 'linear-gradient(to bottom, #F0E8DC 0%, #EDE6DA 100%)',
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
              <span className="eyebrow">Work with Us</span>
              <h2
                className="font-display font-light text-white leading-tight tracking-tight mt-3"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Have a project in mind?
              </h2>
              <p className="font-body text-stone-400 leading-relaxed mt-4 max-w-sm" style={{ fontSize: '0.9375rem' }}>
                From a kitchen and living room to a complete private residence, we
                work with you from brief to final installation.
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg shrink-0">
              Start a Project
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
              <p className="font-body text-body-sm text-stone-400 leading-relaxed max-w-xs mb-8">
                Custom furniture manufacturer. Designed and built in Vlorë — delivered worldwide.
              </p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/themconcept.al/" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">Instagram</a>
                <a href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7?g_st=iw" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">Google Maps</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Navigate</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Company',  href: '/company'  },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Contact',  href: '/contact'  },
                  { label: 'Materia',  href: '/materia'  },
                ].map((l) => (
                  <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Get in Touch</p>
              <p className="font-body text-[0.8125rem] text-stone-500 leading-relaxed">
                Vlorë, Albania<br />
                <a href="mailto:info@themconcept.al" className="footer-link">info@themconcept.al</a><br />
                <a href="tel:+355682039345" className="footer-link">+355 68 203 9345</a>
              </p>
            </div>
          </div>
          <div className="pt-8">
            <p className="font-body text-[0.8125rem] text-stone-600">
              &copy; {new Date().getFullYear()} The M Concept. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
