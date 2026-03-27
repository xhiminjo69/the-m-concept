import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add external domains here if you use next/image with remote URLs
    // domains: ['example.com'],
  },
};

export default withNextIntl(nextConfig);
