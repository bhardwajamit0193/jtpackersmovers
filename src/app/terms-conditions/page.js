import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Terms & Conditions',
  description:
    'Official Terms & Conditions of JT Packers & Movers: booking & payment policies, liability, insurance, cancellations, and customer responsibilities.',
  alternates: {
    canonical: '/terms-conditions',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/terms-conditions',
    siteName: 'JT Packers Movers',
    title: 'Terms & Conditions',
    description:
      'Official Terms & Conditions of JT Packers & Movers: booking & payment policies, liability, insurance, cancellations, and customer responsibilities.',
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
    title: 'Terms & Conditions',
    description:
      'Official Terms & Conditions of JT Packers & Movers: booking & payment policies, liability, insurance, cancellations, and customer responsibilities.',
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
