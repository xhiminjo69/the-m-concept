import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Founded in 2000, The M Concept has grown from a small Vlorë workshop into Albania\'s premier custom furniture manufacturer — crafting bespoke pieces for hospitality and residential spaces worldwide.',
};

const milestones = [
  {
    year: '2000',
    title: 'The Beginning',
    body: 'Founded in a small workshop on the outskirts of Vlorë, The M Concept started with a single lathe, a handful of tools, and an uncompromising belief that furniture should be built to last.',
  },
  {
    year: '2006',
    title: 'First Major Contract',
    body: 'Our first large-scale hospitality commission — a full bedroom fit-out for a coastal resort — set the benchmark for what we would become: a trusted partner for demanding projects.',
  },
  {
    year: '2012',
    title: 'New Facility',
    body: 'Demand outgrew our original workshop. We moved into a purpose-built manufacturing facility in Vlorë, equipped with CNC machinery and dedicated finishing rooms — while keeping every craftsman on staff.',
  },
  {
    year: '2017',
    title: 'Expanding the Fleet',
    body: 'We brought delivery and installation in-house, adding our first branded fleet vehicles. From our factory floor to your space — every step under our own control.',
  },
  {
    year: '2022',
    title: 'The M Concept Brand',
    body: 'After two decades of quiet reputation-building, we unified our identity under The M Concept — a name that stands for precision, craft, and the relentless pursuit of quality.',
  },
  {
    year: '2024',
    title: 'Present Day',
    body: 'Today we serve hotels, residences, and commercial clients across the region, producing every piece entirely in-house — no outsourcing, no shortcuts, no two pieces alike.',
  },
];

const values = [
  {
    label: 'No Outsourcing',
    desc: 'Every joint, surface, and finish is done under our roof by our own team.',
  },
  {
    label: 'Built to Order',
    desc: 'Nothing is made speculatively. Every piece is commissioned, designed, and produced for a specific space.',
  },
  {
    label: 'Premium Materials',
    desc: 'We work exclusively with certified hardwoods, natural stone, and premium hardware — sourced for longevity.',
  },
  {
    label: 'Delivered Complete',
    desc: 'We handle production, delivery, and on-site installation — so you receive a finished result, not a flatpack.',
  },
];

export default function CompanyPage() {
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
          <span className="eyebrow" style={{ color: 'rgba(255,158,113,0.9)' }}>Est. 2000 — Vlorë, Albania</span>
          <h1
            className="font-display font-light text-white leading-tight tracking-tight mt-2 mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Our Story
          </h1>
          <div
            style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, #F4511E, transparent)' }}
          />
          <p
            className="font-body text-stone-300 leading-relaxed mt-6 max-w-sm"
            style={{ fontSize: '1rem' }}
          >
            Twenty-five years of craft, conviction,<br />and furniture built to outlast trends.
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
            We were founded on one conviction — that a piece of furniture should tell
            a story of the hands that made it, and still be standing{' '}
            <em className="not-italic" style={{ color: '#A67C52' }}>
              fifty years from now.
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
              <span className="eyebrow">The Founding</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
              >
                Born in Vlorë.<br />Built by hand.
              </h2>
              <div className="divider-accent mb-8" />
              <p className="font-body text-body-lg text-stone-600 leading-relaxed mb-5">
                In 2000, a small woodworking workshop opened on the edge of Vlorë with a simple
                ambition: to make furniture that was worth making. No flat-pack. No shortcuts.
                Just timber, skill, and an obsessive eye for detail.
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-5">
                The early years were defined by word of mouth. Hoteliers along Albania&apos;s
                Riviera began to notice — a bedroom set that felt different, a wardrobe that
                closed exactly right, a reception desk that commanded attention. Commissions
                grew. So did the team.
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-10">
                By the mid-2000s we had outgrown our original space. By the 2010s we had built
                a manufacturing facility equipped for serious scale — without ever losing the
                precision of the workshop where it all began.
              </p>
              <Link href="/projects" className="btn-secondary btn-md">
                See Our Projects
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
            <span className="eyebrow">Timeline</span>
            <h2
              className="font-display font-light text-stone-800 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.375rem)' }}
            >
              Twenty-five years<br />in the making.
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
                  <div
                    className="pb-14 border-b md:border-b-0 border-stone-200 last:border-0 md:pl-0"
                    style={{ borderLeft: undefined }}
                  >
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
              <span className="eyebrow">The Facility</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
              >
                Industrial scale.<br />Artisan precision.
              </h2>
              <div className="divider-accent mb-8" />
              <p className="font-body text-body-lg text-stone-600 leading-relaxed mb-5">
                Our Vlorë facility spans over 2,500 m² of dedicated manufacturing space.
                CNC machining, precision joinery, lacquering booths, and upholstery —
                all under one roof, all operated by craftsmen who have been with us for years.
              </p>
              <p className="font-body text-body-md text-muted leading-relaxed mb-10">
                We do not outsource. The piece that leaves our floor is the piece our
                team designed, cut, finished, and signed off on. That is the only way
                to guarantee what we guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary btn-md">
                  Start a Project
                </Link>
                <Link href="/projects" className="btn-ghost btn-md">
                  See Our Work
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
              How We Work
            </span>
            <h2
              className="font-display font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
            >
              Our principles,<br />unchanged since day one.
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
          <span className="eyebrow">Work with Us</span>
          <h2
            className="font-display font-light text-stone-800 leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.875rem)' }}
          >
            Have a project in mind?
          </h2>
          <p className="font-body text-body-lg text-muted leading-relaxed mb-12 max-w-lg mx-auto">
            Whether it&apos;s a single statement piece or a full-building fit-out,
            our team works with you from initial brief to final installation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary btn-lg">Start a Project</Link>
            <Link href="/projects" className="btn-ghost btn-lg">See Our Work</Link>
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
