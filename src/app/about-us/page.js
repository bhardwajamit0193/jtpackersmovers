
import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'About us',
  description: 'JT Packers & Movers – 12+ years of trusted home, office & vehicle relocation services across India with safe, affordable and timely delivery.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/about-us',
    siteName: 'JT Packers Movers',
    title: 'About us',
    description:
      'JT Packers & Movers – 12+ years of trusted home, office & vehicle relocation services across India with safe, affordable and timely delivery.',
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
    title: 'About us',
    description:
      'JT Packers & Movers – 12+ years of trusted home, office & vehicle relocation services across India with safe, affordable and timely delivery.',
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



  return (
    <Data />
  );
}