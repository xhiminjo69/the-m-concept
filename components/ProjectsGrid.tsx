import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Project } from '@/lib/projects';

type Props = {
  projects: Project[];
};

export default async function ProjectsGrid({ projects }: Props) {
  const t = await getTranslations('projects');

  if (projects.length === 0) {
    return (
      <div className="py-24 text-center px-6">
        <p className="font-label text-[0.75rem] text-stone-400 uppercase tracking-widest">
          {t('noProjects')}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group block"
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: index === 0 ? '16/7' : '16/6',
              boxShadow: '0 6px 32px rgba(44,29,16,0.13)',
            }}
          >
            {/* Photography */}
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
              sizes="100vw"
              priority={index === 0}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(12,9,7,0.82) 0%, rgba(12,9,7,0.40) 45%, rgba(12,9,7,0.10) 100%)' }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'rgba(12,9,7,0.12)' }}
            />

            {/* Content — left anchored */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 md:p-14 max-w-lg">
              {/* Index */}
              <span
                className="font-label text-[0.6rem] uppercase tracking-[0.35em] mb-5 block"
                style={{ color: 'rgba(191,148,104,0.8)' }}
              >
                {String(index + 1).padStart(2, '0')} &nbsp;&middot;&nbsp; {project.year}
              </span>

              {/* Name */}
              <h2
                className="font-display font-light text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.015em' }}
              >
                {project.name}
              </h2>

              {/* Type */}
              <p
                className="font-label text-[0.72rem] uppercase tracking-[0.2em] mb-6"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {project.type}
              </p>

              {/* CTA — slides in on hover */}
              <div className="flex items-center gap-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="h-px w-6 shrink-0" style={{ background: '#BF9468' }} />
                <span
                  className="font-label text-[0.65rem] uppercase tracking-[0.25em]"
                  style={{ color: '#BF9468' }}
                >
                  {t('viewProject')}
                </span>
              </div>
            </div>

            {/* Location — bottom right */}
            <div className="absolute bottom-7 right-8 hidden sm:block">
              <p
                className="font-label text-[0.6rem] uppercase tracking-[0.28em]"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                {project.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
