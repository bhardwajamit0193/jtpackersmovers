import Data from './data';

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Kanpur',
  description: 'Best Packers and Movers in Kanpur – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-kanpur',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-kanpur',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Kanpur',
    description:
      'Best Packers and Movers in Kanpur – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/kanpur-img2.jpeg',
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Kanpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Kanpur',
    description:
      'Best Packers and Movers in Kanpur – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/kanpur-img2.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Kanpur',
    'Kanpur movers',
    'Home shifting in Kanpur',
    'Office relocation Kanpur',
    'Local packers movers Kanpur',
    'Intercity relocation Kanpur',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Kanpur – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Kanpur by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-KANPUR-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Kanpur',
    address: { '@type': 'PostalAddress', addressLocality: 'Kanpur', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4087',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '5000',
    highPrice: '40000',
    offerCount: '5',
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-kanpur',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/kanpur-img2.jpeg',
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find reliable packers and movers in Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find trusted movers by checking Google reviews, company registration, GST number, and service experience. Always compare 2–3 quotes and confirm insurance coverage before finalizing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local house shifting in Kanpur costs around ₹3,000 – ₹9,000, while intercity relocation can range from ₹10,000 – ₹35,000, depending on distance, load size, and packing materials."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Kanpur provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional movers offer packing, loading, transportation, unloading, unpacking, and rearranging services. Some also provide office relocation, car/bike transport, and warehouse storage options."
      }
    },
    {
      "@type": "Question",
      "name": "Are packers and movers in Kanpur responsible for any damages during shifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you opt for transit insurance, your belongings are covered against damage or loss during transportation. Always ask for insurance documentation for transparency."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does it take to complete a home relocation in Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move usually takes one day, while intercity shifting may take 2–5 days depending on distance, weather, and vehicle type."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my relocation expenses in Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To save costs: Get multiple quotes and negotiate, move during mid-week or mid-month, declutter unnecessary items, and use shared truck options for long-distance moves."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Kanpur provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputed movers use premium packing materials such as bubble wraps, corrugated boxes, stretch films, and tapes to ensure item safety during the move."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during transportation from Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many modern packers and movers in Kanpur offer GPS tracking and regular updates through phone or WhatsApp, keeping you informed until delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Kanpur provide office or industrial relocation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several companies specialize in office shifting, factory relocation, and commercial logistics, using professional handling equipment for safe and timely delivery."
      }
    },
    {
      "@type": "Question",
      "name": "When should I book packers and movers in Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book at least 7–10 days in advance, especially if you’re planning to move during weekends, holidays, or peak shifting seasons."
      }
    }
  ]
};


export default function Page() {
  return (
    <>
      {/* Primary content */}
      <Data />

      {/* JSON-LD: Product with rating, price & offerCount */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
