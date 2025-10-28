import Data from './data';

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Why Choosing JT Packers & Movers Is the Best Decision for Your Office Relocation',
  description:
    'Discover how JT Packers & Movers enables seamless office relocation with minimal downtime, professional packing of IT/equipment, expert handling and nationwide reach.',
  alternates: {
    canonical: '/blog/why-choosing-jt-packers-movers-is-the-best-decision-for-your-office-relocation',
  },
  openGraph: {
    type: 'article',
    locale: 'en_IN',
    url: '/blog/why-choosing-jt-packers-movers-is-the-best-decision-for-your-office-relocation',
    siteName: 'JT Packers Movers',
    title: 'Why Choosing JT Packers & Movers Is the Best Decision for Your Office Relocation',
    description:
      'From pre-move planning to IT & furniture transfer, learn why JT Packers & Movers stands out for efficient, safe and cost-effective office relocation across India.',
    images: [
      {
        url: '/assets/images/img-1.webp', // adjust as needed
        width: 1200,
        height: 630,
        alt: 'Office Relocation by JT Packers & Movers – Safe, Efficient, India-wide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choosing JT Packers & Movers Is the Best Decision for Your Office Relocation',
    description:
      'Choosing the right mover matters. This article details how JT Packers & Movers ensures a smooth office relocation with expert teams, modern fleet & nationwide coverage.',
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
    'office relocation India',
    'office shifting services India',
    'JT Packers Movers office move',
    'commercial relocation services India',
    'corporate moving company India',
    'business relocation packers and movers',
  ],
};

export default function Page() {
  return <Data />;
}
