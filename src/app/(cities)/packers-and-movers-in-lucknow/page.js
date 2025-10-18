import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Lucknow',
  description: 'Best Packers and Movers in Lucknow – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-lucknow',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-lucknow',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Lucknow',
    description:
      'Best Packers and Movers in Lucknow – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/lucknow-img2.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Lucknow',
    description:
      'Best Packers and Movers in Lucknow – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/lucknow-img2.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Lucknow',
    'Lucknow movers',
    'Home shifting in Lucknow',
    'Office relocation Lucknow',
    'Local packers movers Lucknow',
    'Intercity relocation Lucknow',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Lucknow – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Lucknow by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-LUCKNOW-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Lucknow',
    address: { '@type': 'PostalAddress', addressLocality: 'Lucknow', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3527',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '4500',         
    highPrice: '43000',       
    offerCount: '5',          
    availability: 'https://schema.org/InStock',
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-lucknow',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/lucknow-img2.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find the best packers and movers in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find trusted movers in Lucknow, check Google ratings, customer reviews, company registration, and GST details. Always ask for a written estimate and confirm if insurance is included before booking."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of moving in Lucknow generally ranges between ₹3,000 – ₹10,000 for local shifting and ₹10,000 – ₹40,000 for intercity relocation. The price depends on distance, volume of goods, and packing quality."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Lucknow offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional movers offer end-to-end relocation services — including packing, loading, transportation, unloading, unpacking, furniture setup, and even storage options for short or long term."
      }
    },
    {
      "@type": "Question",
      "name": "Are packers and movers in Lucknow responsible for damages during transit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, reputable movers offer transit insurance to cover any loss or damage during the move. Always check policy terms and request an insurance certificate for peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does it take for house shifting in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local move within Lucknow usually takes 6–10 hours, while intercity moves can take 2–5 days depending on the destination and transport type."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my relocation cost in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reduce costs by: Booking your move in advance, decluttering items you don’t need, comparing multiple quotes, and moving during mid-month or weekdays."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Lucknow provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, top-rated movers use quality packing materials like corrugated boxes, bubble wrap, waterproof covers, and foam sheets to protect your belongings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most professional packers and movers in Lucknow offer real-time GPS tracking and provide updates via phone or WhatsApp until your goods are delivered."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Lucknow handle office or vehicle relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many companies specialize in office shifting, corporate moves, and vehicle transport (car and bike shifting) with proper safety measures and door-to-door service."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book packers and movers in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book 7–10 days in advance, especially during weekends or the end of the month when demand and prices are higher."
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
