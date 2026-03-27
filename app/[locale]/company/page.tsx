import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    "Founded in 2000, The M Concept has grown from a small Vlorë workshop into Albania's premier custom furniture manufacturer — crafting bespoke pieces for hospitality and residential spaces worldwide.",
};

export default async function CompanyPage() {
  const t = await getTranslations('company');
  const tFooter = await getTranslations('footer');
  const milestones = t.raw('timeline.milestones') as Array<{ year: string; title: string; body: string }>;
  const values = t.raw('values.items') as Array<{ label: string; desc: string }>;

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '72vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/Foto.jpg"
            alt="The M Concept headquarters — Vlorë, Albania"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 70%' }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-stone-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 via-transparent to-transparent" />
        </div>

        {/* Decorative large numeral */}
        <span
          className="absolute right-10 top-1/2 -translate-y-1/2 font-display font-light select-none pointer-events-none leading-none hidden lg:block"
          style={{ fontSize: 'clamp(10rem, 20vw, 22rem)', letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.04)' }}
          aria-hidden="true"
        >
          M
        </span>

        <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-20 pt-40">
          <span className="eyebrow" style={{ color: 'rgba(255,158,113,0.9)' }}>{t('hero.eyebrow')}</span>
          <h1
            className="font-display font-light text-white leading-tight tracking-tight mt-2 mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            {t('hero.heading')}
          </h1>
          <div
            style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, #F4511E, transparent)' }}
          />
          <p
            className="font-body text-stone-300 leading-relaxed mt-6 max-w-sm"
            style={{ fontSize: '1rem' }}
          >
            {t('hero.subheading')}
          </p>
        </div>
      </section>

      {/* ── Opening statement ─────────────────────────────────────────────────── */}
      <section className="section-xl relative overflow-hidden">
        <Image
          src="/images/showroom.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(247, 240, 228, 0.91)', zIndex: 1 }} />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center" style={{ zIndex: 2 }}>
          <div className="divider-accent-lg mx-auto mb-14" />
          <p
            className="font-display font-light text-stone-800 leading-snug tracking-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3rem)' }}
          >
            {t('statementMain')}
            <em className="not-italic" style={{ color: '#A67C52' }}>
              {t('statementEmphasis')}
            </em>
          </p>
          <div
            className="mx-auto mt-14"
            style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(166,124,82,0.5), transparent)' }}
          />
        </div>
      </section>

      {/* ── Founding story + lifestyle image ──────────────────────────────────── */}
      <section className="section-lg section-white">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <span className="eyebrow">{t('founding.eyebrow')}</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
              >
                {t('founding.headingMain')}<br />{t('founding.headingEmphasis')}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="font-body text-body-lg text-stone-600 leading-relaxed mb-5">
                {t('founding.body1')}
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-5">
                {t('founding.body2')}
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-10">
                {t('founding.body3')}
              </p>
              <Link href="/projects" className="btn-secondary btn-md">
                {t('founding.cta')}
              </Link>
            </div>

            {/* Lifestyle image */}
            <div className="relative">
              <span
                className="absolute -right-4 -top-8 font-display font-light select-none pointer-events-none leading-none z-0 hidden lg:block"
                style={{ fontSize: 'clamp(9rem, 18vw, 18rem)', letterSpacing: '-0.06em', color: 'rgba(166,124,82,0.06)' }}
                aria-hidden="true"
              >
                25
              </span>
              <div
                className="relative w-full overflow-hidden rounded-lg bg-wood-100 z-10"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src="/images/ProjectsHotelLion.jpg"
                  alt="The M Concept — crafted hotel bedroom interior"
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(6rem, 9vw, 10rem) 0',
          background: 'linear-gradient(to bottom, #FDF8F2 0%, #F5EAD9 100%)',
        }}
      >
        <div className="px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <span className="eyebrow">{t('timeline.eyebrow')}</span>
            <h2
              className="font-display font-light text-stone-800 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.375rem)' }}
            >
              {t('timeline.headingMain')}<br />{t('timeline.headingEmphasis')}
            </h2>
          </div>

          <div className="relative">
            {/* Vertical spine */}
            <div
              className="absolute left-[3.25rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, rgba(166,124,82,0.4), rgba(166,124,82,0.08))' }}
            />

            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="grid grid-cols-1 md:grid-cols-[7rem_1fr] gap-0 md:gap-12 group">
                  {/* Year column */}
                  <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-0 pb-2 md:pb-0 md:pt-1">
                    <div
                      className="hidden md:block w-2 h-2 rounded-full shrink-0 mt-[0.35rem] ml-auto mr-[-0.3125rem] relative z-10 transition-all duration-300 group-hover:scale-150"
                      style={{ background: i === milestones.length - 1 ? '#F4511E' : '#A67C52' }}
                    />
                    <span
                      className="font-display font-light text-stone-400 md:text-right leading-none"
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="pb-14 border-b md:border-b-0 border-stone-200 last:border-0 md:pl-0">
                    <h3
                      className="font-display font-light text-stone-800 mb-3 leading-tight"
                      style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)' }}
                    >
                      {m.title}
                    </h3>
                    <p className="font-body text-body-md text-stone-500 leading-relaxed max-w-lg">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Factory section ───────────────────────────────────────────────────── */}
      <section className="section-lg section-white relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '80px', background: 'linear-gradient(to bottom, #F5EAD9, transparent)' }}
        />
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Factory image */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative w-full overflow-hidden rounded-lg bg-stone-100 z-10"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src="/images/factory.jpg"
                  alt="The M Concept manufacturing facility — Vlorë"
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="eyebrow">{t('facility.eyebrow')}</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
              >
                {t('facility.headingMain')}<br />{t('facility.headingEmphasis')}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="font-body text-body-lg text-stone-600 leading-relaxed mb-5">
                {t('facility.body1')}
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-10">
                {t('facility.body2')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary btn-md">
                  {t('facility.startProject')}
                </Link>
                <Link href="/projects" className="btn-ghost btn-md">
                  {t('facility.seeWork')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Values grid ───────────────────────────────────────────────────────── */}
      <section className="section-md section-charcoal">
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, #6B4A2E 20%, #A67C52 50%, #6B4A2E 80%, transparent 100%)' }}
        />
        <div className="px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <span
              className="font-label text-[0.7rem] uppercase tracking-[0.22em] mb-4 block"
              style={{ color: '#FF9E71' }}
            >
              {t('values.eyebrow')}
            </span>
            <h2
              className="font-display font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
            >
              {t('values.headingMain')}<br />{t('values.headingEmphasis')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#3A2C24]">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-[#1C1916] hover:bg-[#2A2420] p-10 transition-colors duration-300 group cursor-default"
              >
                <div
                  className="w-8 h-px mb-8 transition-all duration-500 group-hover:w-14"
                  style={{ background: 'linear-gradient(135deg, #8E2FA8 0%, #F4511E 100%)' }}
                />
                <h3 className="font-display font-light text-[1.5rem] text-white mb-3 leading-tight">
                  {v.label}
                </h3>
                <p className="font-body text-body-sm text-stone-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="section-lg section-warm relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '80px', background: 'linear-gradient(to bottom, rgba(166,124,82,0.18), transparent)' }}
        />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="eyebrow">{t('cta.eyebrow')}</span>
          <h2
            className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
          >
            {t('cta.heading')}
          </h2>
          <p className="font-body text-body-lg text-muted leading-relaxed mb-12 max-w-lg mx-auto">
            {t('cta.body')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary btn-lg">{t('cta.startProject')}</Link>
            <Link href="/projects" className="btn-ghost btn-lg">{t('cta.seeOurWork')}</Link>
          </div>
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
                {tFooter('tagline')}
              </p>
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
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{tFooter(`nav.${l.key}`)}</Link>
                  </li>
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-[0.8125rem] text-stone-600">
              &copy; {new Date().getFullYear()} {tFooter('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
