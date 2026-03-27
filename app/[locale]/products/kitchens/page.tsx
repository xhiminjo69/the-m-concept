import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Kitchens',
  description:
    'Custom kitchen cabinetry and fitted furniture by The M Concept — designed and manufactured in Vlorë, Albania.',
};

const images = [
  '/images/ProductsKitchen.jpg',
  '/images/ProductsKitchen2.jpg',
  '/images/ProductsKitchen3.jpg',
  '/images/ProductsKitchen4.jpg',
  '/images/ProductsKitchen5.jpg',
  '/images/ProductsKitchen6.jpg',
  '/images/ProductsKitchen7.jpg',
  '/images/ProductsKitchen8.jpg',
  '/images/ProductsKitchen9.jpg',
  '/images/ProductsKitchen10.jpg',
  '/images/ProductsKitchen11.jpg',
];

export default async function KitchensPage() {
  const t = await getTranslations('products');
  const tFooter = await getTranslations('footer');

  return (
    <>
      <Navbar />

      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: '7rem', paddingBottom: '5rem', background: 'linear-gradient(160deg, #EDEAE4 0%, #CCC6B8 100%)' }}
      >
        <div className="px-6 md:px-10 lg:px-16 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 mb-10 font-label text-[0.65rem] uppercase tracking-[0.28em] text-stone-400 hover:text-coral-500 transition-colors duration-200"
          >
            <span>&larr;</span>
            <span>{t('allProducts')}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-x-20 gap-y-8 items-end">
            <div>
              <div className="divider-accent mt-6 mb-6" />
              <p className="font-body text-stone-500 leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {t('categories.kitchens.heroDescription')}
              </p>
            </div>
            <div>
              <h1
                className="font-display font-light text-stone-900 leading-[0.9]"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
              >
                {t('categories.kitchens.label')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(5rem, 8vw, 9rem) 0',
          background: 'linear-gradient(to bottom, #CCC6B8 0%, #EAE7E2 22%)',
        }}
      >
        <div className="px-6 md:px-10 lg:px-16">
          <GalleryGrid images={images} projectName={t('categories.kitchens.label')} />
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
                  { key: 'products', href: '/products' },
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
