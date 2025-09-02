import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DM_Sans } from "next/font/google"; // ✅ Import font

// Configure font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
  display: "swap",
});

export const metadata = {
  title: "JT Packers Movers",
  description: "Movers & Packers",
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
