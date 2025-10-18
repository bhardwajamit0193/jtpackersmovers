import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Pune',
  description: 'Best Packers and Movers in Pune – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-pune',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-pune',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Pune',
    description:
      'Best Packers and Movers in Pune – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/pune-img2.jpeg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Pune',
    description:
      'Best Packers and Movers in Pune – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/pune-img2.jpeg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Pune',
    'Pune movers',
    'Home shifting in Pune',
    'Office relocation Pune',
    'Local packers movers Pune',
    'Intercity relocation Pune',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Pune – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Pune by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-PUNE-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Pune',
    address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'MH', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '2684',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '3500',         
    highPrice: '45000',       
    offerCount: '5',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-pune',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/pune-img2.jpeg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find reliable packers and movers in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find the best movers in Pune, check Google reviews, business registration, and years of experience. Always compare at least 2–3 quotations and ensure the company provides insurance and door-to-door service."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local house shifting in Pune generally costs between ₹3,000 – ₹10,000, while intercity relocation (like Pune to Delhi, Bangalore, or Hyderabad) ranges from ₹12,000 – ₹45,000, depending on distance, load size, and type of service."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Pune offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional movers offer complete relocation solutions, including packing, loading, transportation, unloading, unpacking, rearranging, and storage. They also handle office relocation and car/bike transport."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Pune provide insurance coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most reputed companies offer transit insurance to protect your belongings against loss or damage during the move. Always confirm the insurance amount and policy terms before finalizing."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does house shifting in Pune take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move within Pune typically takes one working day, while intercity moves may take 2–5 days, depending on the distance and type of transport chosen."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my relocation cost in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can lower costs by: Decluttering unnecessary items, booking in advance, choosing weekday or mid-month moves, and comparing quotes from multiple movers."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Pune bring their own packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional movers use high-quality packing materials such as corrugated boxes, bubble wrap, foam sheets, and waterproof covers to ensure maximum safety during transit."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during transportation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many leading packers and movers in Pune offer real-time GPS tracking and provide regular updates via WhatsApp or phone for peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Pune handle office or industrial shifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several companies specialize in office, corporate, and industrial relocations, ensuring safe transfer of IT equipment, furniture, and documents with minimal downtime."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s recommended to book at least 7–10 days in advance, especially during weekends or month-end when demand for relocation services is high."
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
