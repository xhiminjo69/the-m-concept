import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import GalleryGrid from '@/components/GalleryGrid';
import Footer from '@/components/Footer';
import { getSpaceByCategory } from '@/lib/supabase-spaces';

export const metadata: Metadata = {
  title: 'Kitchen & Dining',
  description: 'Custom kitchen cabinetry and dining furniture by The M Concept — designed and manufactured in Vlorë, Albania.',
};

export default async function KitchenDiningPage() {
  const t = await getTranslations('spaces');
  const space = await getSpaceByCategory('kitchens');
  const images = space?.images ?? [];

  return (
    <>
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{ paddingTop: '7rem', paddingBottom: '5rem', backgroundImage: 'url(/images/ProductsKitchen.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="px-6 md:px-10 lg:px-16 relative z-10">
          <Link
            href="/spaces"
            className="inline-flex items-center gap-2 mb-10 font-label text-[0.65rem] uppercase tracking-[0.28em] text-stone-300 hover:text-coral-500 transition-colors duration-200"
          >
            <span>&larr;</span>
            <span>{t('allSpaces')}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-x-20 gap-y-8 items-end">
            <div>
              <div className="divider-accent mt-6 mb-6" />
              <p className="font-body text-stone-300 leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {t('categories.kitchen-dining.heroDescription')}
              </p>
            </div>
            <div>
              <h1
                className="font-display font-light text-white leading-[0.9]"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
              >
                {t('categories.kitchen-dining.label')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(5rem, 8vw, 9rem) 0', background: 'linear-gradient(to bottom, #CCC6B8 0%, #EAE7E2 22%)' }}>
        <div className="px-6 md:px-10 lg:px-16">
          <GalleryGrid images={images} projectName={t('categories.kitchen-dining.label')} />
        </div>
      </section>

      <section className="section-md" style={{ background: 'linear-gradient(180deg, #1B1208 0%, #271810 100%)' }}>
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <span className="eyebrow">{t('cta.eyebrow')}</span>
              <h2 className="font-display font-light text-white leading-tight tracking-tight mt-3" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                {t('cta.heading')}
              </h2>
              <p className="font-body text-stone-400 leading-relaxed mt-4 max-w-sm" style={{ fontSize: '0.9375rem' }}>
                {t('cta.body')}
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg shrink-0">{t('cta.startProject')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
