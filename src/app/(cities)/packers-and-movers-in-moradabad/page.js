import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Moradabad',
  description: 'Best Packers and Movers in Moradabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-moradabad',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-moradabad',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Moradabad',
    description:
      'Best Packers and Movers in Moradabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/moradabad-img.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Moradabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Moradabad',
    description:
      'Best Packers and Movers in Moradabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/moradabad-img.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Moradabad',
    'Moradabad movers',
    'Home shifting in Moradabad',
    'Office relocation Moradabad',
    'Local packers movers Moradabad',
    'Intercity relocation Moradabad',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Moradabad – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Moradabad by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-MORADABAD-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Moradabad',
    address: { '@type': 'PostalAddress', addressLocality: 'Moradabad', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5493',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '5500',         
    highPrice: '55000',       
    offerCount: '10',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-moradabad',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/moradabad-img.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find trusted packers and movers in Moradabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for movers with verified licenses, good Google reviews, transparent pricing, and insurance coverage. Always compare quotes from 2–3 companies before finalizing your move."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Moradabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For local shifting, prices range between ₹3,000 – ₹9,000, while intercity moves can cost between ₹10,000 – ₹35,000, depending on distance, number of items, and type of vehicle used."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Moradabad offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional movers provide packing, loading, transportation, unloading, and unpacking services. Many also offer office shifting, vehicle transport, and warehouse storage solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Are packers and movers in Moradabad responsible for damages during relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you choose transit insurance, your goods are covered against any damage or loss during the move. Always confirm insurance details before booking."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a house shifting in Moradabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move can be completed in 6–10 hours, while an intercity relocation may take 2–5 days depending on distance, route, and vehicle type."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my packers and movers charges in Moradabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can save money by: Decluttering before packing, booking early to avoid last-minute surcharges, comparing multiple quotes, and choosing a weekday or mid-month move."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Moradabad provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputed movers use premium-quality packing materials like bubble wraps, corrugated boxes, waterproof sheets, and stretch films to protect items during transit."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my belongings during the move?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most professional packers and movers in Moradabad offer GPS tracking and regular updates via WhatsApp or phone calls for full transparency."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Moradabad handle office or factory relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, experienced companies manage office, industrial, and commercial relocations, ensuring safe and timely delivery with minimal disruption to your business."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Moradabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s recommended to book at least 7–10 days in advance, especially during weekends or festive periods when moving services are in high demand."
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
