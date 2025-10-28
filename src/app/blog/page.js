import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Blog – JT Packers Movers',
  description:
    'Explore expert tips, moving guides, and relocation insights from JT Packers & Movers. Learn how to plan your move smartly and stay stress-free during shifting.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/blog',
    siteName: 'JT Packers Movers',
    title: 'Blog – JT Packers Movers',
    description:
      'JT Packers & Movers Blog – Your source for packing, moving, and relocation tips. Read expert advice for safe and affordable home or office shifting in India.',
    images: [
      {
        url: '/assets/images/blog-banner.webp', // update path if needed
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers Blog – Moving Tips & Relocation Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – JT Packers Movers',
    description:
      'Discover expert moving tips and relocation ideas from JT Packers & Movers. Learn how to make your next move smooth and affordable.',
    images: ['/assets/images/blog-banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Moving tips India',
    'Packers and Movers blog',
    'Relocation guides',
    'Packing tips for shifting',
    'Office shifting ideas',
    'Home relocation blog',
    'JT Packers Movers news',
  ],
};

export default function Page() {
  return <Data />;
}
