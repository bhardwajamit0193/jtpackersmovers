import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Contact Us – JT Packers Movers',
  description:
    'Get in touch with JT Packers & Movers for reliable packing and moving services across India. Call, email, or WhatsApp us for quick relocation quotes and support.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/contact-us',
    siteName: 'JT Packers Movers',
    title: 'Contact Us – JT Packers Movers',
    description:
      'Contact JT Packers & Movers for safe and affordable relocation. We offer 24/7 support, free quotes, and professional packing and moving assistance across India.',
    images: [
      {
        url: '/assets/images/img-1.webp', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – JT Packers Movers',
    description:
      'Reach out to JT Packers & Movers for any moving, packing, or transport queries. Reliable 24/7 support across India.',
    images: ['/assets/images/img-1.webp'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Contact JT Packers Movers',
    'Packers and Movers contact India',
    'Packers and Movers phone number',
    'Relocation quote India',
    'Moving company customer support',
    'Packers Movers WhatsApp contact',
  ],
};

export default function Page() {
  return <Data />;
}
