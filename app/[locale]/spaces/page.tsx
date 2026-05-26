import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Spaces',
  description:
    'Custom furniture for every room — kitchens, living rooms, bedrooms, bathrooms, and beyond. Crafted by The M Concept in Vlorë, Albania.',
};

const categoryData = [
  { slug: 'kitchen-dining',    numeral: '01', coverImage: '/images/ProductsKitchen.jpg'  },
  { slug: 'living-room',       numeral: '02', coverImage: '/images/InteriorPicturee.jpg'  },
  { slug: 'bedroom-wardrobes', numeral: '03', coverImage: '/images/ProductsWardrobe.jpg' },
  { slug: 'bathroom',          numeral: '04', coverImage: '/images/bathrooms4.jpg' },
  { slug: 'others',            numeral: '05', coverImage: '/images/Projects-Residential.jpg'  },
] as const;

export default async function SpacesPage() {
  const t = await getTranslations('spaces');

  return (
    <>
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: '11rem', paddingBottom: '9rem' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/ProductsWardrobe.jpg"
            alt="Spaces"
            fill
            className="object-cover object-center scale-105"
            style={{ filter: 'blur(2px) brightness(0.68)' }}
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(155deg, rgba(15,10,5,0.25) 0%, rgba(30,18,8,0.55) 45%, rgba(10,6,2,0.78) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 48%, transparent 30%, rgba(8,5,2,0.62) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 md:px-10 lg:px-16 w-full" style={{ marginTop: '-2rem' }}>
          <span className="eyebrow" style={{ color: 'rgba(220,180,120,0.9)', letterSpacing: '0.22em' }}>{t('hero.eyebrow')}</span>
          <div className="mt-5">
            <span
              className="block font-display font-light tracking-[0.1em]"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                color: 'rgba(210,185,150,0.75)',
                textShadow: '0 1px 12px rgba(0,0,0,0.6)',
              }}
            >
              {t('hero.bespoke')}
            </span>
            <span
              className="block font-display font-light leading-[0.88]"
              style={{
                fontSize: 'clamp(5rem, 11vw, 10rem)',
                letterSpacing: '-0.03em',
                marginTop: '-0.05em',
                color: 'rgba(245,235,218,0.97)',
                textShadow: '0 4px 32px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)',
              }}
            >
              {t('hero.heading')}
            </span>
          </div>
          <div className="divider-accent mt-8 mb-7 mx-auto" />
          <p
            className="font-body leading-relaxed max-w-md mx-auto"
            style={{ fontSize: '1rem', color: 'rgba(200,178,148,0.82)', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* ── Category cards ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(5rem, 8vw, 9rem) 0',
          background: 'linear-gradient(to bottom, #EACFA8 0%, #F5EADB 28%)',
        }}
      >
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {categoryData.map((cat) => (
              <Link key={cat.slug} href={`/spaces/${cat.slug}`} className="group block">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '3/4',
                    boxShadow: '0 6px 32px rgba(44,29,16,0.13)',
                  }}
                >
                  <Image
                    src={cat.coverImage}
                    alt={t(`categories.${cat.slug}.label`)}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(12,9,7,0.92) 0%, rgba(12,9,7,0.40) 55%, rgba(12,9,7,0.10) 100%)' }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'rgba(12,9,7,0.15)' }}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-9">
                    <span
                      className="font-label text-[0.6rem] uppercase tracking-[0.3em] mb-4 block"
                      style={{ color: 'rgba(191,148,104,0.8)' }}
                    >
                      {cat.numeral}
                    </span>
                    <h2
                      className="font-display font-light text-white leading-tight mb-2"
                      style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', letterSpacing: '-0.015em' }}
                    >
                      {t(`categories.${cat.slug}.label`)}
                    </h2>
                    <p
                      className="font-body text-[0.8125rem] leading-relaxed mb-6 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '22ch' }}
                    >
                      {t(`categories.${cat.slug}.description`)}
                    </p>
                    <div className="flex items-center gap-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <div className="h-px w-6 shrink-0" style={{ background: '#BF9468' }} />
                      <span
                        className="font-label text-[0.65rem] uppercase tracking-[0.25em]"
                        style={{ color: '#BF9468' }}
                      >
                        {t('explore')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
                {t('cta.body')}
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
