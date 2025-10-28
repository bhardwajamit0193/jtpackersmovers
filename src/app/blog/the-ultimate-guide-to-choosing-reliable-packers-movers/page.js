import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'The Ultimate Guide to Choosing Reliable Packers & Movers – JT Packers Movers',
  description:
    'Learn how to choose reliable packers and movers for your next relocation. This ultimate guide by JT Packers Movers helps you compare services, verify credentials, and ensure a safe move.',
  alternates: {
    canonical: '/blog/the-ultimate-guide-to-choosing-reliable-packers-movers',
  },
  openGraph: {
    type: 'article',
    locale: 'en_IN',
    url: '/blog/the-ultimate-guide-to-choosing-reliable-packers-movers',
    siteName: 'JT Packers Movers',
    title: 'The Ultimate Guide to Choosing Reliable Packers & Movers',
    description:
      'Discover expert tips to select the best packers and movers in India. Learn how to check licenses, compare quotes, and ensure a safe, damage-free relocation experience.',
    images: [
      {
        url: '/assets/images/img-1.webp', // replace with actual image
        width: 1200,
        height: 630,
        alt: 'The Ultimate Guide to Choosing Reliable Packers & Movers – JT Packers Movers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Choosing Reliable Packers & Movers',
    description:
      'Expert guide from JT Packers Movers to help you select trustworthy packers and movers for a safe and stress-free relocation.',
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
    'How to choose packers and movers',
    'Reliable packers and movers India',
    'Moving guide',
    'Best relocation tips',
    'Safe shifting checklist',
    'JT Packers Movers blog',
  ],
};

export default function Page() {
  return <Data />;
}
