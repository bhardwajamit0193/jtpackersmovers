import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Privacy Policy',
  description:
    'Read the Privacy Policy of JT Packers & Movers to learn how we collect, use, and protect your personal information during booking and relocation services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/privacy-policy',
    siteName: 'JT Packers Movers',
    title: 'Privacy Policy',
    description:
      'JT Packers & Movers Privacy Policy – We value your trust and ensure complete protection of your data shared during packing, moving, and booking services.',
    images: [
      {
        url: '/assets/images/img-1.webp',
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    description:
      'JT Packers & Movers Privacy Policy – Learn how we handle your personal information securely during our relocation and booking processes.',
    images: ['/assets/images/img-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

export default function Page() {
  return <Data />;
}
