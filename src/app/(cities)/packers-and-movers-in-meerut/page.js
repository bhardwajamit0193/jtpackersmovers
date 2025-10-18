import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Meerut',
  description: 'Best Packers and Movers in Meerut – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-meerut',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-meerut',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Meerut',
    description:
      'Best Packers and Movers in Meerut – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/meerut-img2.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Meerut',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Meerut',
    description:
      'Best Packers and Movers in Meerut – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/meerut-img2.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Meerut',
    'Meerut movers',
    'Home shifting in Meerut',
    'Office relocation Meerut',
    'Local packers movers Meerut',
    'Intercity relocation Meerut',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Meerut – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Meerut by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-MEERUT-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Meerut',
    address: { '@type': 'PostalAddress', addressLocality: 'Meerut', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5122',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '4600',         
    highPrice: '50000',       
    offerCount: '10',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-meerut',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/meerut-img2.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find the best packers and movers in Meerut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find trusted movers, check Google reviews, company registration, and GST number, and compare 2–3 quotes. Choose a company that offers door-to-door service, insurance, and transparent pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Meerut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local home shifting in Meerut generally costs between ₹3,000 – ₹9,000, while intercity relocations can range from ₹10,000 – ₹35,000 depending on distance, house size, and type of transport vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Meerut offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most movers provide packing, loading, transportation, unloading, unpacking, and rearranging services. Some also handle office shifting, warehouse storage, and vehicle transport."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Meerut provide insurance for goods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputable packers and movers offer transit insurance to cover any damage or loss during transport. Always request a copy of the insurance policy before finalizing your move."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a shifting in Meerut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move within Meerut typically takes 6–10 hours, while outstation relocations can take 2–5 days, depending on distance and weather conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my shifting cost in Meerut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can lower the cost by: Decluttering unused items, booking early, choosing a weekday instead of weekend, and comparing multiple quotes before hiring."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Meerut bring their own packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional movers provide high-quality packing materials such as bubble wrap, corrugated boxes, stretch film, and foam sheets to ensure the safety of your belongings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during transportation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many professional movers in Meerut offer real-time GPS tracking and updates via WhatsApp or phone calls for complete transparency and peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Meerut offer office or commercial shifting services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most companies specialize in office, commercial, and industrial shifting, ensuring quick and secure relocation with minimal business downtime."
      }
    },
    {
      "@type": "Question",
      "name": "When should I book packers and movers in Meerut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book at least 7–10 days in advance, especially during weekends, festive seasons, or the end of the month when moving demand is high."
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
