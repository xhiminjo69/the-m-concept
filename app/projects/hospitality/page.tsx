import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getProjectsByCategory, projectCategories } from '@/lib/projects';

const meta = projectCategories.find((c) => c.slug === 'hospitality')!;

export const metadata: Metadata = {
  title: 'Hospitality Projects',
  description:
    'Hospitality fit-outs by The M Concept — hotel interiors, guest-room furniture, and full interior programmes designed and built in Vlorë, Albania.',
};

export default function HospitalityProjectsPage() {
  const projects = getProjectsByCategory('hospitality');

  return (
    <>
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: '8rem', paddingBottom: '6.5rem' }}
      >
        {/* Background image */}
        <Image
          src="/images/project-1.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(10,7,4,0.72) 0%, rgba(10,7,4,0.50) 100%)' }}
        />

        <div className="px-6 md:px-10 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-12 font-label text-[0.65rem] uppercase tracking-[0.28em] text-stone-300 hover:text-coral-400 transition-colors duration-200"
          >
            <span>&larr;</span>
            <span>All Projects</span>
          </Link>

          {/* Centered atmospheric layout */}
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="font-display font-light text-white leading-tight mt-4"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)', letterSpacing: '-0.015em' }}
            >
              Hospitality<br />Projects
            </h1>
            <p
              className="font-body text-stone-300 leading-loose mt-10 max-w-sm mx-auto"
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
          background: 'linear-gradient(to bottom, #F5EAD8 0%, #F0E4D0 100%)',
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
                From a single guest room to a full hotel fit-out, we work with you
                from brief to final installation.
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
