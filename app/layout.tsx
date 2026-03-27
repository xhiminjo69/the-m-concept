import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Montserrat, Oswald } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-label',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-brand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The M Concept — Premium Furniture',
    template: '%s | The M Concept',
  },
  description:
    'Handcrafted premium furniture where artistry meets function. Explore our collections of bespoke pieces built for a lifetime.',
  keywords: ['furniture', 'premium', 'handcrafted', 'bespoke', 'interior design'],
  openGraph: {
    title: 'The M Concept — Premium Furniture',
    description: 'Handcrafted premium furniture where artistry meets function.',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} ${oswald.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
