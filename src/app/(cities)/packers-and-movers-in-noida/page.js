import Data from './data'; 

// --- SEO & Meta ---
export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'Packers and Movers in Noida',
  description: 'Best Packers and Movers in Noida – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
  alternates: {
    canonical: '/packers-and-movers-in-noida',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/packers-and-movers-in-noida',
    siteName: 'JT Packers Movers',
    title: 'Packers and Movers in Noida',
    description:
      'Best Packers and Movers in Noida – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: [
      {
        url: '/assets/images/noida-image.jpeg', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Packers and Movers in Noida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packers and Movers in Noida',
    description:
      'Best Packers and Movers in Noida – Trusted packing, loading, transport & door-to-door relocation by JT Packers Movers. Safe, on-time, affordable.',
    images: ['/assets/images/noida-image.jpeg'], 
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers in Noida',
    'Noida movers',
    'Home shifting in Noida',
    'Office relocation Noida',
    'Local packers movers Noida',
    'Intercity relocation Noida',
  ],
};

// --- Structured Data (JSON-LD) ---
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Packers and Movers in Noida – JT Packers Movers',
  description:
    'Professional packing, loading, transportation, and door-to-door relocation services in Noida by JT Packers Movers.',
  brand: {
    '@type': 'Organization',
    name: 'JT Packers Movers',
    url: 'https://www.jtpackersmovers.com',
  },
  sku: 'JTPM-NOIDA-RELOCATION',
  category: 'HomeAndConstructionBusiness',
  areaServed: {
    '@type': 'City',
    name: 'Noida',
    address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressRegion: 'UP', addressCountry: 'IN' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5535',
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
    url: 'https://www.jtpackersmovers.com/packers-and-movers-in-noida',
  },
  image: [
    'https://www.jtpackersmovers.com/assets/images/noida-image.jpeg', 
  ],
};

// --- Structured Data (FAQPage) — REPLACE your existing faqLd with this ---
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find the best packers and movers in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find reliable movers by checking Google reviews, company registration details, GST number, and comparing multiple quotes. Always choose a company that offers door-to-door service and transit insurance for safety."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average cost of packers and movers in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average cost of local shifting in Noida is around ₹3,000 – ₹9,000, while intercity relocation (like Noida to Mumbai, Delhi, or Bangalore) can range between ₹10,000 – ₹40,000, depending on distance, house size, and service type."
      }
    },
    {
      "@type": "Question",
      "name": "What services do packers and movers in Noida offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional movers provide complete relocation services, including packing, loading, transporting, unloading, unpacking, furniture setup, office shifting, and vehicle transport."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Noida offer insurance for my belongings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, trusted companies offer transit insurance to protect your goods from damage or loss during the move. Always ask for an insurance certificate for verification."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a home shifting in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For local moves, the entire process can be completed within a single day, while intercity relocations may take 2–5 days based on the destination and the volume of goods."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my moving cost in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can save money by: Booking your move in advance, decluttering unnecessary items, moving during weekdays or mid-month, and comparing 2–3 company quotations."
      }
    },
    {
      "@type": "Question",
      "name": "Do movers in Noida provide packing materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional movers use high-quality packing supplies such as bubble wraps, corrugated boxes, stretch film, and waterproof covers to ensure your goods stay safe during the move."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my goods while they are in transit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most reputed packers and movers in Noida provide real-time GPS tracking and regular updates via phone or WhatsApp so you can monitor your shipment."
      }
    },
    {
      "@type": "Question",
      "name": "Do packers and movers in Noida handle office or commercial shifting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several companies specialize in office, shop, and corporate relocations, ensuring safe handling of furniture, files, and electronics with minimal downtime."
      }
    },
    {
      "@type": "Question",
      "name": "When should I book packers and movers in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s best to book 7–10 days in advance, especially during weekends, holidays, or the end of the month when booking demand and prices are higher."
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
