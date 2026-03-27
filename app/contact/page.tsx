import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with The M Concept. Start a custom furniture project, request a quote, or visit our showroom in Vlorë, Albania.',
};

const hours = [
  { day: 'Monday – Friday', time: '08:00 – 17:00' },
  { day: 'Saturday',        time: '09:00 – 13:00' },
  { day: 'Sunday',          time: 'Closed' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '72vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/showroom.jpg"
            alt="The M Concept showroom — Vlorë, Albania"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-stone-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-20 pt-40">
          <span className="eyebrow" style={{ color: 'rgba(255,158,113,0.9)' }}>Contact</span>
          <h1
            className="font-display font-light text-white leading-tight tracking-tight mt-2 mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Let&apos;s Build<br />
            <em className="not-italic text-gradient-brand">Something</em><br />
            Remarkable.
          </h1>
          <div
            className="h-px w-16 opacity-60"
            style={{ background: 'linear-gradient(to right, #BF9468, transparent)' }}
          />
        </div>
      </section>

      {/* ── Contact Details + Form ─────────────────────────────────────────────── */}
      <section className="section-warm section-lg">
        <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28">

            {/* ── Left: Contact Information ── */}
            <div>
              <span className="eyebrow">Our Details</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mt-4 mb-10"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Visit us, call us,<br />or send a message.
              </h2>

              {/* Address */}
              <div className="flex items-start gap-5 mb-7">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(244,81,30,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-400 mb-1">Address</p>
                  <p className="font-body text-stone-700 leading-relaxed">
                    Vlorë, Albania<br />
                    <a
                      href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.875rem] text-coral-500 hover:text-coral-600 transition-colors"
                    >
                      View on Google Maps →
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 mb-7">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(244,81,30,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.85-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-400 mb-1">Phone</p>
                  <a href="tel:+355682039345" className="font-body text-stone-700 hover:text-coral-500 transition-colors">
                    +355 68 203 9345
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 mb-12">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(244,81,30,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-400 mb-1">Email</p>
                  <a href="mailto:info@themconcept.al" className="font-body text-stone-700 hover:text-coral-500 transition-colors">
                    info@themconcept.al
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border-t border-border pt-8 mb-8">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(244,81,30,0.08)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-stone-400 mb-4">Office Hours</p>
                    <div className="flex flex-col gap-3">
                      {hours.map((h) => (
                        <div key={h.day} className="flex items-center justify-between">
                          <span className="font-body text-[0.875rem] text-stone-600">{h.day}</span>
                          <span className={`font-label text-[0.8125rem] tabular-nums ${h.time === 'Closed' ? 'text-stone-400' : 'text-stone-700'}`}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="border-t border-border pt-8 flex gap-6">
                <a
                  href="https://www.instagram.com/themconcept.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-[0.75rem] uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-2"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-[0.75rem] uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-2"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Google Maps
                </a>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '460px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.8666559414705!2d19.481212499999998!3d40.4782149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134533ff2fd5961f%3A0x7ba7eabeec2ab95e!2sTHE%20M%20CONCEPT!5e0!3m2!1sen!2s!4v1774551957567!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="THE M CONCEPT — Vlorë, Albania"
        />
        {/* Google Maps button */}
        <div className="absolute bottom-6 right-6 z-10">
          <a
            href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="footer relative overflow-hidden" style={{ background: '#110E0C' }}>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '64px', background: 'linear-gradient(to bottom, rgba(245,234,217,0.18), transparent)' }}
        />
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
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-[0.8125rem] text-stone-600">
              &copy; {new Date().getFullYear()} The M Concept. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
