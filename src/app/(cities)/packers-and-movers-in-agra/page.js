import Data from './data';

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Agra | JT Packers Movers',
  description: 'Best Packers and Movers in Agra – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-agra',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-agra',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Agra | JT Packers Movers',
    description:
      'Best Packers and Movers in Agra – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/agra-img.jpeg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Agra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Agra | JT Packers Movers',
    description:
      'Best Packers and Movers in Agra – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/agra-img.jpeg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Agra',
    'Agra movers',
    'Home shifting in Agra',
    'Office relocation Agra',
    'Local packers movers Agra',
    'Intercity relocation Agra',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Agra – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Agra by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-AGRA-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Agra',
    address: { '@type': 'PostalAddress', addressLocality: 'Agra', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5787',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '2499',         
    highPrice: '14999',       
    offerCount: '5',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-agra',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/agra-img.jpeg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I choose the best packers and movers in Agra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for companies with verified licenses, positive customer reviews, transparent pricing, and experience in both local and long-distance moves. Always ask for a written quotation and check if insurance is included."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Agra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost usually ranges between ₹3,000 – ₹10,000 for local shifting and ₹10,000 – ₹35,000 for intercity relocations. Pricing depends on factors like distance, volume of goods, and type of vehicle used."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Agra provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional movers offer complete relocation solutions including packing, loading, transportation, unloading, unpacking, and storage facilities. Some also offer vehicle transportation and office relocation services."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does it take to complete a house shifting in Agra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move within Agra typically takes one day, while intercity relocations may take 2–5 days depending on distance and the size of the move."
      }
    },
    {
      "@type": "Question",
      "name": "Are packers and movers in Agra responsible for damages during transit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputed companies offer transit insurance that covers any damage or loss during transportation. Always confirm insurance coverage before booking."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my shifting cost in Agra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can save money by decluttering unused items before the move, booking in advance, choosing weekdays instead of weekends, and comparing at least 2–3 quotes before finalizing."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Agra provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional movers use high-quality materials such as bubble wrap, corrugated sheets, packing foam, and boxes to ensure your belongings are protected during the move."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many modern packers and movers in Agra provide GPS tracking and regular status updates via phone or WhatsApp to help customers monitor their goods in real time."
      }
    },
    {
      "@type": "Question",
      "name": "Are there packers and movers in Agra for office or commercial relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most top companies handle office relocations, warehouse shifting, and industrial goods transport with specialized equipment and staff trained for corporate moves."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Agra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book your move at least 7–10 days in advance, especially during weekends or peak moving seasons, to secure the best rates and availability."
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
