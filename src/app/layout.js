import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DM_Sans } from "next/font/google"; // ✅ Import font
import WhatsAppWidget from "../components/WhatsAppWidget";
import CallButton from "../components/CallButton";
// Configure font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://www.jtpackersmovers.com'),
  title: 'JT Packers Movers',
  description:
    'Trusted Packers and Movers in India – Safe, on-time and affordable home/office shifting, vehicle transport, packing & storage. 12+ years of reliable service.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'JT Packers Movers',
    title: 'JT Packers Movers',
    description:
      'Trusted Packers and Movers in India – Safe, on-time and affordable home/office shifting, vehicle transport, packing & storage. 12+ years of reliable service.',
    images: [
      {
        url: '/assets/images/img-4.webp', 
        width: 1200,
        height: 630,
        alt: 'JT Packers Movers – Trusted Packers and Movers in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JT Packers Movers',
    description:
      'India-wide packing & moving by JT Packers Movers: safe, timely, affordable relocation for homes, offices & vehicles.',
    images: ['/assets/images/img-4.webp'], // update path if needed
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  keywords: [
    'Packers and Movers India',
    'Best packers and movers',
    'Home shifting services',
    'Office relocation services',
    'Vehicle transport India',
    'Packing and moving company',
    'Door to door relocation',
    'Storage and warehousing',
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/favicon.png"
        />
        {/* ✅ Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7VZ3XPN5L0"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7VZ3XPN5L0');
          `}
        </Script>

        {/* CSS files */}
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/assets/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link href="/assets/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/mousecursor.css" />
        <link href="/assets/css/custom.css" rel="stylesheet" media="screen" />
      </head>

      {/* ✅ Add font className here */}
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
        <CallButton />
        {/* JS Scripts */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/assets/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
