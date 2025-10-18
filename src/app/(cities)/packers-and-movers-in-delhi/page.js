import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Delhi',
  description: 'Best Packers and Movers in Delhi – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-delhi',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-delhi',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Delhi',
    description:
      'Best Packers and Movers in Delhi – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/delhi-img2.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Delhi',
    description:
      'Best Packers and Movers in Delhi – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/delhi-img2.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Delhi',
    'Delhi movers',
    'Home shifting in Delhi',
    'Office relocation Delhi',
    'Local packers movers Delhi',
    'Intercity relocation Delhi',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Delhi – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Delhi by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-DELHI-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressRegion: 'DL', addressCountry: 'IN' },
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
    lowPrice: '3000',         
    highPrice: '40000',       
    offerCount: '5',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-delhi',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/delhi-img2.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find the best packers and movers in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find the best movers in Delhi, check company reviews, verify registration and GST number, compare at least three quotes, and look for companies offering insurance and door-to-door service."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local shifting in Delhi usually costs between ₹3,000 to ₹10,000 for 1BHK–2BHK homes. For intercity relocation, prices range from ₹10,000 to ₹40,000 depending on distance, volume, and service quality."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Delhi provide door-to-door shifting service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most professional movers offer complete door-to-door relocation, including packing, loading, transporting, unloading, and unpacking at your destination."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to shift a house within Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For local moves, shifting can usually be completed within one day. For long-distance or intercity moves, it may take 2–5 days depending on location and volume of goods."
      }
    },
    {
      "@type": "Question",
      "name": "Are packers and movers in Delhi reliable for interstate shifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputed companies like JT Packers Movers provide safe and insured interstate moving services with GPS tracking, experienced staff, and guaranteed delivery timelines."
      }
    },
    {
      "@type": "Question",
      "name": "How can I lower my shifting cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can save on shifting costs by reducing unwanted items before packing, booking during weekdays or mid-month, comparing prices from multiple companies, and choosing a shared truck if possible."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Delhi provide insurance for household items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most trusted movers offer transit insurance that covers loss or damage during shifting. Make sure to ask for the insurance policy copy before finalizing your booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my shipment during relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many professional packers and movers in Delhi provide GPS-enabled tracking and live updates via phone or WhatsApp to keep you informed throughout the move."
      }
    },
    {
      "@type": "Question",
      "name": "What services are offered by packers and movers in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Services include home relocation (local and domestic), office or commercial shifting, car and bike transport, storage and warehousing, and packing and unpacking services."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s recommended to book at least 7–10 days in advance, especially if you’re planning to move on weekends or near the end of the month, when demand is high."
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
