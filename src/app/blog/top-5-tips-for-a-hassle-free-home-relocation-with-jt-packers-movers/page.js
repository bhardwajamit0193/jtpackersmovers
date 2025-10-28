import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Top 5 Tips for a Hassle-Free Home Relocation with JT Packers & Movers',
  description:
    'Make your move stress-free! Follow these top 5 expert tips from JT Packers & Movers for smooth, safe, and hassle-free home relocation.',
  alternates: {
    canonical:
      '/blog/top-5-tips-for-a-hassle-free-home-relocation-with-jt-packers-movers',
  },
  openGraph: {
    type: 'article',
    locale: 'en_IN',
    url:
      '/blog/top-5-tips-for-a-hassle-free-home-relocation-with-jt-packers-movers',
    siteName: 'JT Packers Movers',
    title: 'Top 5 Tips for a Hassle-Free Home Relocation with JT Packers & Movers',
    description:
      'Make your move stress-free! Follow these top 5 expert tips from JT Packers & Movers for smooth, safe, and hassle-free home relocation.',
    images: [
      {
        url: '/assets/images/img-1.webp', // update image path as needed
        width: 1200,
        height: 630,
        alt: 'Home Relocation Tips – JT Packers & Movers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Tips for a Hassle-Free Home Relocation with JT Packers & Movers',
    description:
      'Get expert relocation tips from JT Packers & Movers for an efficient, safe and stress-free home move—right from packing to settling in.',
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
    'home relocation tips India',
    'house shifting advice',
    'home moving checklist',
    'JT Packers Movers home shifting',
    'packers and movers tips India',
    'stress free home relocation',
  ],
};

export default function Page() {
  return <Data />;
}
