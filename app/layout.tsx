import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Montserrat, Oswald, Playfair_Display } from 'next/font/google';
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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-hero',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'THE M CONCEPT — Premium Furniture',
    template: '%s | THE M CONCEPT',
  },
  description:
    'Handcrafted premium furniture where artistry meets function. Explore our collections of bespoke pieces built for a lifetime.',
  keywords: ['furniture', 'premium', 'handcrafted', 'bespoke', 'interior design'],
  openGraph: {
    title: 'THE M CONCEPT — Premium Furniture',
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
      className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
