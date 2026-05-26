import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="footer relative overflow-hidden" style={{ background: '#110E0C' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '64px', background: 'linear-gradient(to bottom, rgba(245,234,217,0.18), transparent)' }} />
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-800">

          <div className="md:col-span-2">
            <p className="font-display font-light text-2xl text-white mb-4">The M Concept</p>
            <p className="font-body text-body-sm text-stone-400 leading-relaxed max-w-xs mb-8">{t('tagline')}</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/themconcept.al/" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{t('instagram')}</a>
              <a href="https://maps.app.goo.gl/XA6shhvbyDpGnugZ7?g_st=iw" target="_blank" rel="noopener noreferrer" className="footer-link text-[0.8125rem]">{t('googleMaps')}</a>
            </div>
          </div>

          <div>
            <p className="footer-heading">{t('navigate')}</p>
            <ul className="flex flex-col gap-3">
              {([
                { key: 'company',  href: '/company'  },
                { key: 'projects', href: '/projects' },
                { key: 'spaces',   href: '/spaces'   },
                { key: 'contact',  href: '/contact'  },
                { key: 'materia',  href: '/materia'  },
              ] as const).map((l) => (
                <li key={l.href}><Link href={l.href} className="footer-link">{t(`nav.${l.key}`)}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">{t('getInTouch')}</p>
            <p className="font-body text-[0.8125rem] text-stone-500 leading-relaxed">
              Vlorë, Albania<br />
              <a href="mailto:info@themconcept.al" className="footer-link">info@themconcept.al</a><br />
              <a href="tel:+355682039345" className="footer-link">+355 68 203 9345</a>
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.8125rem] text-stone-600">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <a
            href="/admin/login"
            className="font-body text-[0.75rem] text-stone-700 hover:text-stone-400 transition-colors duration-200"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
