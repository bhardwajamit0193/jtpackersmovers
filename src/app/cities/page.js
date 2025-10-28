import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Cities',
  description:
    ' JT Packers Movers – Expert relocation, packing, and moving services across major Indian cities with safety and reliability.',
  alternates: {
    canonical: '/cities',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/cities',
    siteName: 'JT Packers Movers',
    title: 'Cities',
    description:
      ' JT Packers Movers – Trusted relocation experts offering home, office, and vehicle shifting services across India.',
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
    title: 'Cities',
    description:
      ' JT Packers Movers – Trusted relocation experts offering home, office, and vehicle shifting services across India.',
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
