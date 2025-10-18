import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Ghaziabad',
  description: 'Best Packers and Movers in Ghaziabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-ghaziabad',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-ghaziabad',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Ghaziabad',
    description:
      'Best Packers and Movers in Ghaziabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/ghaziabad-img.jpg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Ghaziabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Ghaziabad',
    description:
      'Best Packers and Movers in Ghaziabad – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/ghaziabad-img.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Ghaziabad',
    'Ghaziabad movers',
    'Home shifting in Ghaziabad',
    'Office relocation Ghaziabad',
    'Local packers movers Ghaziabad',
    'Intercity relocation Ghaziabad',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Ghaziabad – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Ghaziabad by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-GZB-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Ghaziabad',
    address: { '@type': 'PostalAddress', addressLocality: 'Ghaziabad', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4787',
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
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-ghaziabad',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/ghaziabad-img.jpg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find trusted packers and movers in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose movers with verified business registration, good customer reviews, transparent pricing, and experience in both local and intercity shifting. Always check if they offer insurance and provide a written quotation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost typically ranges between ₹3,000 – ₹9,000 for local home shifting and ₹10,000 – ₹35,000 for intercity relocation. Factors include distance, size of home, vehicle type, and packing material quality."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Ghaziabad provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional movers offer complete relocation services such as packing, loading, transportation, unloading, unpacking, and rearranging. Many also offer office relocation, car transport, and storage facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Ghaziabad offer insurance for goods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most reputed companies provide transit insurance that covers damage or loss during shifting. Always confirm the insurance terms before finalizing your booking."
      }
    },
    {
      "@type": "Question",
      "name": "How much time does it take for home shifting in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For local moves, it usually takes one day, depending on the distance and volume of goods. For intercity moves, delivery may take 2–5 days based on destination and route conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce the cost of moving in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can lower costs by decluttering unwanted items before packing, booking during mid-month or weekdays, comparing 2–3 moving quotes, and using your own boxes for small items."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Ghaziabad provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional movers use high-quality packing materials like bubble wrap, foam sheets, cardboard boxes, and waterproof covers to ensure safe and secure shifting."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods during transportation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many top movers in Ghaziabad provide real-time GPS tracking and status updates via phone or WhatsApp, ensuring complete transparency during the relocation process."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Ghaziabad handle office or commercial shifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, companies like JT Packers Movers specialize in corporate and commercial relocation, offering professional handling, proper labeling, and minimal downtime for office moves."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book packers and movers in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book at least 7–10 days in advance, especially during weekends or at the month’s end when demand and pricing are higher."
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
