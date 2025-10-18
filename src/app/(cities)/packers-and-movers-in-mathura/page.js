import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Mathura',
  description: 'Best Packers and Movers in Mathura – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-mathura',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-mathura',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Mathura',
    description:
      'Best Packers and Movers in Mathura – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/mathura-img2.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Mathura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Mathura',
    description:
      'Best Packers and Movers in Mathura – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/mathura-img2.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Mathura',
    'Mathura movers',
    'Home shifting in Mathura',
    'Office relocation Mathura',
    'Local packers movers Mathura',
    'Intercity relocation Mathura',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Mathura – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Mathura by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-MATHURA-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Mathura',
    address: { '@type': 'PostalAddress', addressLocality: 'Mathura', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '2845',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '3000',         
    highPrice: '35000',       
    offerCount: '5',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-mathura',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/mathura-img2.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find reliable packers and movers in Mathura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find the best movers in Mathura, check Google ratings, verified licenses, and customer reviews. Compare quotes from at least 2–3 companies and confirm whether they provide insurance and doorstep service."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Mathura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The price for local shifting in Mathura ranges between ₹3,000 – ₹8,000, while long-distance moves (like Mathura to Delhi or Agra) can cost ₹10,000 – ₹35,000, depending on distance, goods volume, and vehicle size."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Mathura offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional movers provide packing, loading, transportation, unloading, unpacking, and rearranging. Additional services include office relocation, vehicle transport, and warehousing."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Mathura offer insurance coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputed companies offer transit insurance that covers damage or loss of goods during shifting. Always ask for a copy of the insurance policy before finalizing your booking."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does home shifting take in Mathura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For local moves, the process usually takes a single day. For intercity relocations, the duration depends on distance — typically 2 to 5 days for nearby cities."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce the cost of shifting in Mathura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can save money by: Decluttering unnecessary items before moving, booking your move during weekdays or mid-month, using shared transport for smaller loads, and comparing at least three moving estimates."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Mathura provide their own packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, trusted movers use high-quality packing supplies such as bubble wrap, corrugated boxes, foam sheets, and waterproof covers to keep your belongings safe."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during transportation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many professional packers and movers in Mathura offer real-time GPS tracking and regular updates through calls or WhatsApp for complete transparency."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Mathura handle office or commercial relocations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several companies specialize in office and commercial relocation, offering quick, organized, and insured moving solutions with minimal downtime."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Mathura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book at least 7–10 days in advance, especially during festive seasons or weekends, to ensure availability and better pricing."
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
