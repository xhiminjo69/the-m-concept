import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import GalleryGrid from '@/components/GalleryGrid';
import Footer from '@/components/Footer';
import { getSupabaseProject, getAllSupabaseProjects } from '@/lib/supabase-projects';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getSupabaseProject(id);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getSupabaseProject(id);
  if (!project) notFound();

  const t = await getTranslations('projects');

  // Load siblings for prev/next navigation
  const allProjects = await getAllSupabaseProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const prev = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const next = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '80vh', minHeight: '560px' }}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.45) 45%, rgba(10,8,6,0.15) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.35), transparent)' }} />

        {/* Back link */}
        <div className="absolute top-24 left-6 md:left-10 lg:left-16 z-20">
          <Link
            href={`/projects/${project.category}`}
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="font-label text-[0.6rem] uppercase tracking-[0.3em] transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              &larr; &nbsp; {t(`categories.${project.category}.headline`)}
            </span>
          </Link>
        </div>

        {/* Title block — bottom left */}
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 lg:px-16 pb-14 z-10">
          <span
            className="font-label text-[0.6rem] uppercase tracking-[0.32em] mb-4 block"
            style={{ color: 'rgba(191,148,104,0.85)' }}
          >
            {project.type}
          </span>
          <h1
            className="font-display font-light text-white leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            {project.name}
          </h1>
          <p
            className="font-label text-[0.65rem] uppercase tracking-[0.28em] mt-4"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {project.location}
          </p>
        </div>
      </section>

      {/* ── Project info ────────────────────────────────────────────────────── */}
      <section className="section-lg section-white">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-24">

            {/* Description */}
            <div className="lg:col-span-2">
              <span className="eyebrow">{t('detail.overview')}</span>
              <p
                className="font-display font-light text-stone-700 leading-snug"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                {project.description}
              </p>
              <div className="divider-accent mt-10" />
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-8 lg:pt-12">
              {[
                { label: t('detail.client'),   value: project.name },
                { label: t('detail.sector'),   value: t(`categories.${project.category}.label`) },
                { label: t('detail.scope'),    value: project.type.split('—')[1]?.trim() ?? project.type },

                { label: t('detail.location'), value: project.location },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-label text-[0.65rem] text-stone-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-stone-800 text-[0.9375rem]">{item.value}</p>
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" className="btn-secondary btn-sm">
                  {t('detail.startSimilar')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(4rem, 7vw, 8rem) 0',
          background: 'linear-gradient(to bottom, #FDF8F2, #F5EAD9)',
        }}
      >
        <div className="px-6 md:px-10 lg:px-16">

          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">{t('detail.gallery')}</span>
              <h2
                className="font-display font-light text-stone-800 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {t('detail.photography')}
              </h2>
            </div>
            <p className="font-label text-[0.65rem] text-stone-400 uppercase tracking-widest hidden sm:block">
              {project.gallery.length} images
            </p>
          </div>

          {/* Clickable gallery — opens lightbox */}
          <GalleryGrid images={project.gallery} projectName={project.name} />

        </div>
      </section>

      {/* ── Prev / Next navigation ──────────────────────────────────────────── */}
      {(prev || next) && (
        <section className="section-sm" style={{ background: '#F5EAD9' }}>
          <div className="px-6 md:px-10 lg:px-16">
            <div className="flex flex-col sm:flex-row items-stretch gap-4">

              {prev ? (
                <Link href={`/projects/${prev.id}`} className="group flex-1 flex items-center gap-6 p-7 bg-surface hover:bg-wood-100 border border-border transition-colors duration-200">
                  <span className="font-display font-light text-stone-400 text-2xl">&larr;</span>
                  <div>
                    <p className="font-label text-[0.6rem] text-stone-400 uppercase tracking-widest mb-1">{t('detail.previous')}</p>
                    <p className="font-display font-light text-stone-800 text-[1.125rem] group-hover:text-coral-500 transition-colors duration-200">{prev.name}</p>
                  </div>
                </Link>
              ) : <div className="flex-1" />}

              {next ? (
                <Link href={`/projects/${next.id}`} className="group flex-1 flex items-center justify-end gap-6 p-7 bg-surface hover:bg-wood-100 border border-border transition-colors duration-200 text-right">
                  <div>
                    <p className="font-label text-[0.6rem] text-stone-400 uppercase tracking-widest mb-1">{t('detail.next')}</p>
                    <p className="font-display font-light text-stone-800 text-[1.125rem] group-hover:text-coral-500 transition-colors duration-200">{next.name}</p>
                  </div>
                  <span className="font-display font-light text-stone-400 text-2xl">&rarr;</span>
                </Link>
              ) : <div className="flex-1" />}

            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
