import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';

// ─── Portfolio project data ───────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    name: 'Hotel Lion Gate',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Vlorë, Albania',
    image: '/images/ProjectsHotelLion.jpg',
  },
  {
    id: 2,
    name: 'Hotel Vale',
    type: 'Hospitality — Bedroom & Wardrobe',
    year: '2024',
    location: 'Vlorë, Albania',
    image: '/images/ProjectsHotelVale.jpg',
  },
  {
    id: 3,
    name: 'Hotel Radream',
    type: 'Hospitality — Full Interior',
    year: '2023',
    location: 'Vlorë, Albania',
    image: '/images/ProjectsHotelRadream.jpg',
  },
];

export default async function Home() {
  const t = await getTranslations('home');
  const tFooter = await getTranslations('footer');
  const stats = t.raw('stats') as Array<{ value: string; label: string }>;
  const materials = t.raw('materials.items') as Array<{ name: string; desc: string }>;

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — Full-viewport image, text anchored bottom-left
          Image: /images/hero.jpg  (Image 1 — hotel suite living room)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="The M Concept — Premium Custom Furniture"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Layered gradient: cinematic vignette with strong base */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/35 to-stone-900/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 via-transparent to-stone-900/20" />
        </div>

        {/* Brand name — centrepiece of the hero */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <p className="font-label text-[0.6rem] text-white/50 uppercase tracking-[0.45em]">
              {t('hero.eyebrow')}
            </p>
            <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <h1
            className="font-display font-light uppercase text-center leading-none"
            style={{ fontSize: 'clamp(4rem, 8.5vw, 10rem)', letterSpacing: '0.18em', color: '#1C1714' }}
          >
            The{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #8E2FA8 0%, #F4511E 60%, #BF9468 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              M
            </span>
            {' '}Concept
          </h1>
          <div
            className="mt-10 mb-8"
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(244,81,30,0.7), transparent)',
            }}
          />
          <p
            className="font-display font-light text-center leading-tight"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}
          >
            {t('hero.taglineMain')}{' '}
            <span style={{ color: 'rgba(255,255,255,0.88)', fontStyle: 'italic' }}>
              {t('hero.taglineEmphasis')}
            </span>
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-8 flex-wrap">
            <Link href="/projects" className="btn-outline-light btn-md">
              {t('hero.viewProjects')}
            </Link>
            <Link
              href="/company"
              className="font-label text-[0.8125rem] text-white/60 uppercase tracking-widest hover:text-white transition-colors duration-200"
            >
              {t('hero.ourStory')} &rarr;
            </Link>
          </div>
        </div>

        {/* Vertical scroll label — right edge */}
        <div className="absolute bottom-12 right-10 hidden lg:flex flex-col items-center gap-3">
          <span
            className="font-label text-[0.6rem] text-white/35 uppercase tracking-[0.35em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            {t('hero.scroll')}
          </span>
          <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }} />
        </div>

        {/* Bottom-left project count indicator */}
        <div className="absolute bottom-12 left-10 hidden lg:block pointer-events-none">
          <p className="font-label text-[0.6rem] text-white/30 uppercase tracking-[0.3em]">
            {t('hero.estLabel')}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BRAND STATEMENT — Editorial typography pause. No image. Pure breathing room.
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-xl relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/showroom.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        />
        {/* Warm cream overlay — rich enough to feel premium, image breathes through */}
        <div className="absolute inset-0" style={{ background: 'rgba(247, 240, 228, 0.88)', zIndex: 1 }} />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center" style={{ zIndex: 2 }}>
          <div className="divider-accent-lg mx-auto mb-14" />
          <p
            className="font-display font-light text-stone-800 leading-snug tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.375rem)' }}
          >
            {t('statementMain')}
            <em className="not-italic" style={{ color: '#A67C52' }}>{t('statementEmphasis')}</em>
          </p>
          <div
            className="mx-auto mt-14"
            style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(166,124,82,0.5), transparent)' }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SELECTED PROJECTS — Curated 3-column portfolio grid
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(6rem, 9vw, 10rem) 0', background: 'linear-gradient(to bottom, #FDF8F2 0%, #F5EAD9 100%)' }}>
        <div className="px-6 md:px-10 lg:px-16">

          {/* Section header */}
          <div className="flex items-end justify-between mb-14 md:mb-18">
            <div>
              <span className="eyebrow">{t('selectedWork.eyebrow')}</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight mb-0"
                style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.375rem)' }}
              >
                {t('selectedWork.heading')}
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-3 group"
            >
              <span className="font-label text-[0.72rem] text-stone-400 uppercase tracking-[0.2em] group-hover:text-stone-700 transition-colors duration-200">
                {t('selectedWork.viewAll')}
              </span>
              <span
                className="inline-block h-px w-10 transition-all duration-300 group-hover:w-14"
                style={{ background: 'linear-gradient(to right, #A67C52, #D4B48A)' }}
              />
            </Link>
          </div>

          {/* 3-column curated portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                {/* Card — image fills frame, all text lives inside */}
                <div
                  className="relative w-full overflow-hidden bg-wood-200"
                  style={{
                    aspectRatio: '3/4',
                    boxShadow: '0 4px 24px rgba(44,29,16,0.14)',
                  }}
                >
                  {/* Photography */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Base gradient — always visible, ensures text legibility */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(12,9,7,0.88) 0%, rgba(12,9,7,0.32) 42%, rgba(12,9,7,0.04) 100%)' }}
                  />
                  {/* Hover layer — deepens slightly on interaction */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(12,9,7,0.72) 0%, rgba(12,9,7,0.28) 55%, transparent 100%)' }}
                  />

                  {/* Top-right index — barely visible, adds editorial feel */}
                  <span
                    className="absolute top-6 right-6 font-label text-[0.6rem] tracking-[0.3em] uppercase transition-opacity duration-300 group-hover:opacity-0"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    0{project.id}
                  </span>

                  {/* Text — anchored to bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

                    {/* Category + year */}
                    <p
                      className="font-label text-[0.6rem] uppercase tracking-[0.28em] mb-3 transition-colors duration-300"
                      style={{ color: 'rgba(191,148,104,0.85)' }}
                    >
                      {project.type} &middot; {project.year}
                    </p>

                    {/* Project title */}
                    <h3
                      className="font-display font-light text-white leading-tight"
                      style={{ fontSize: 'clamp(1.375rem, 1.8vw, 1.75rem)', letterSpacing: '-0.01em' }}
                    >
                      {project.name}
                    </h3>

                    {/* Slide-up "View Project" — revealed on hover */}
                    <div
                      className="flex items-center gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    >
                      <div className="h-px w-5 shrink-0" style={{ background: '#BF9468' }} />
                      <span
                        className="font-label text-[0.6rem] uppercase tracking-[0.22em]"
                        style={{ color: '#BF9468' }}
                      >
                        {t('selectedWork.viewProject')}
                      </span>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile "View All" — below grid */}
          <div className="mt-12 sm:hidden text-center">
            <Link href="/projects" className="btn-ghost btn-sm">{t('selectedWork.viewAllMobile')} &rarr;</Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CRAFTSMANSHIP — Split: portrait image left, brand story right
          Image: /images/craft.jpg  (Image 5 — wardrobe/entry area, shows joinery detail)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-white relative">
        {/* Smooth transition from the projects sand gradient above */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '96px', background: 'linear-gradient(to bottom, #F5EAD9, transparent)' }} />
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Portrait image — shows precision craftsmanship */}
            <div className="relative">
              {/* Decorative background number */}
              <span
                className="absolute -left-4 -top-8 font-display font-light select-none pointer-events-none leading-none z-0 hidden lg:block"
                style={{
                  fontSize: 'clamp(9rem, 18vw, 18rem)',
                  letterSpacing: '-0.06em',
                  color: 'rgba(166,124,82,0.06)',
                }}
                aria-hidden="true"
              >
                01
              </span>

              {/* Main portrait image */}
              <div
                className="relative w-full overflow-hidden rounded-lg bg-wood-100 z-10"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src="/images/craftsmanship.jpg"
                  alt="Custom joinery and fitted wardrobe — The M Concept"
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-4">
              <span className="eyebrow">{t('craft.eyebrow')}</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)', whiteSpace: 'pre-line' }}
              >
                {t('craft.heading')}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="font-body text-body-lg text-stone-600 leading-relaxed mb-5">
                {t('craft.body1')}
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-10">
                {t('craft.body2')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/company" className="btn-secondary btn-md">{t('craft.cta')}</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS BAR — Minimal horizontal numbers
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-sm section-sand">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-2 first:pl-0 px-8">
                <p className="font-display font-light text-display-md text-stone-800 mb-1">
                  {s.value}
                </p>
                <p className="font-label text-[0.7rem] text-muted uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FULL-BLEED FEATURE BANNER
          Image: /images/project-living.jpg  (Image 4 — rustic living room, dramatic)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="absolute inset-0 bg-stone-900">
          <Image
            src="/images/InteriorPicturee.jpg"
            alt="The M Concept — interior design at scale"
            fill
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/88 via-stone-900/45 to-transparent" />
        {/* Warm sand bleeds into the banner top — softens the stats→dark cut */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '80px', background: 'linear-gradient(to bottom, rgba(232,208,176,0.5), transparent)', zIndex: 5 }} />

        <div
          className="relative z-10 px-6 md:px-10 lg:px-16 flex items-center"
          style={{ minHeight: '600px' }}
        >
          <div className="max-w-lg">
            <span
              className="font-label text-[0.7rem] uppercase tracking-[0.22em] mb-6 block"
              style={{ color: '#FF9E71' }}
            >
              {t('facility.eyebrow')}
            </span>
            <h2
              className="font-display font-light text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              {t('facility.headingMain')}<br />{t('facility.headingEmphasis')}
            </h2>
            <div className="w-10 h-px bg-coral-500 mb-8" />
            <p className="font-body text-body-lg text-stone-300 leading-relaxed mb-10 max-w-md">
              {t('facility.body')}
            </p>
            <Link href="/company" className="btn-outline-light btn-md">
              {t('facility.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MATERIA — Material offerings, dark section
          ══════════════════════════════════════════════════════════════════════ */}
      {/* Thin accent rule — intentional visual pause between the two dark sections */}
      <div aria-hidden="true" style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, #6B4A2E 20%, #A67C52 50%, #6B4A2E 80%, transparent 100%)' }} />

      <section className="section-md section-charcoal">
        <div className="px-6 md:px-10 lg:px-16">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <span
                className="font-label text-[0.7rem] uppercase tracking-[0.22em] mb-4 block"
                style={{ color: '#FF9E71' }}
              >
                {t('materials.eyebrow')}
              </span>
              <h2
                className="font-display font-light text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
              >
                {t('materials.headingMain')}<br />{t('materials.headingEmphasis')}
              </h2>
            </div>
            <Link href="/materia" className="btn-outline-light btn-sm shrink-0">
              {t('materials.cta')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3A2C24]">
            {materials.map((m) => (
              <div
                key={m.name}
                className="bg-[#1C1916] hover:bg-[#2A2420] p-10 transition-colors duration-300 group cursor-default"
              >
                <div
                  className="w-8 h-px mb-10 transition-all duration-500 group-hover:w-14"
                  style={{ background: 'linear-gradient(135deg, #8E2FA8 0%, #F4511E 100%)' }}
                />
                <h3 className="font-display font-light text-[1.625rem] text-white mb-3 leading-tight">
                  {m.name}
                </h3>
                <p className="font-body text-body-sm text-stone-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA — Centered, quiet, no pressure
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-warm relative overflow-hidden">
        {/* Warm wood-tone gradient anchors the entry after the dark materials section */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '80px', background: 'linear-gradient(to bottom, rgba(166,124,82,0.18), transparent)' }} />
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

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════════ */}
      <footer className="footer relative overflow-hidden" style={{ background: '#110E0C' }}>
        {/* Warm sand fades into the dark footer — no hard cut */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '64px', background: 'linear-gradient(to bottom, rgba(245,234,217,0.22), transparent)' }} />
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-800">

            {/* Brand */}
            <div className="md:col-span-2">
              <p className="font-display font-light text-2xl text-white mb-4">
                The M Concept
              </p>
              <p className="font-body text-body-sm text-stone-400 leading-relaxed max-w-xs mb-8">
                {tFooter('tagline')}
              </p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/themconcept.al/" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{tFooter('instagram')}</a>
                <a href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7?g_st=iw" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{tFooter('googleMaps')}</a>
              </div>
            </div>

            {/* Navigate */}
            <div>
              <p className="footer-heading">{tFooter('navigate')}</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: tFooter('nav.company'),  href: '/company'  },
                  { label: tFooter('nav.projects'), href: '/projects' },
                  { label: tFooter('nav.contact'),  href: '/contact'  },
                  { label: tFooter('nav.materia'),  href: '/materia'  },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="footer-heading">{tFooter('getInTouch')}</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: tFooter('contact.startProject'), href: '/contact' },
                  { label: tFooter('contact.showroom'),     href: '/contact' },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[0.8125rem] text-stone-500 mt-6 leading-relaxed">
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
            <div className="flex gap-6">
              <a href="#" className="footer-link text-[0.8125rem]">{tFooter('privacy')}</a>
              <a href="#" className="footer-link text-[0.8125rem]">{tFooter('terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
