"use client";

import { useEffect, useState } from 'react';
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeadset,
  FaArrowUp,
  FaEnvelope,
} from 'react-icons/fa6';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {

 const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* About Footer */}
          <div className="col-lg-3 col-md-12">
            <div className="about-footer">
              {/* Logo */}
              <div className="footer-logo text-white fs-3 fw-bolder">
  <div className="p-2 rounded" style={{ backgroundColor: "transparent" }}>
    <Image
      src="/assets/images/logo.png"
      alt="JT Packers Movers"
      width={180}
      height={70}
      priority
    />
  </div>
</div>

              <div className="about-footer-content">
                <p>
                  Since 2007, as a leading moving company, we have been an ISO 9001:2015 and ISO 39001:2012 certified, IBA approved Packers and Movers company, promising and delivering throughout India.

                  All India Customer Support
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-5 col-md-5">
            <div className="footer-links">
              <h3>Cities</h3>
              <div className="row ms-2">
                <ul className="col-lg-6">
                  <li>
                    <Link href="/packers-and-movers-in-pune">Packers and Movers in Pune</Link>
                  </li>
                  <li>
                    <Link href="/packers-and-movers-in-noida">Packers and Movers in Noida</Link>
                  </li>
                 <li>
                    <Link href="/packers-and-movers-in-Delhi">Packers and Movers in Delhi</Link>
                  </li>
                  <li>
                    <Link href="/packers-and-movers-in-mathura">Packers and Movers in Mathura</Link>
                  </li>
                  <li>
                    <Link href="/packers-and-movers-in-agra">Packers and Movers in Agra</Link>
                  </li>
                 
                </ul>
                <ul className="col-lg-6">

                  <li>
                    <Link href="/packers-and-movers-in-meerut">Packers and Movers in Meerut</Link>
                  </li>
                  
                   <li>
                    <Link href="/packers-and-movers-in-ghaziabad">Packers and Movers in Ghaziabad</Link>
                  </li>
                  <li>
                    <Link href="/packers-and-movers-in-lucknow">Packers and Movers in Lucknow</Link>
                  </li>
                  
                   <li>
                    <Link href="/packers-and-movers-in-moradabad">Packers and Movers in Moradabad</Link>
                  </li>
                  <li>
                    <Link href="/packers-and-movers-in-kanpur">Packers and Movers in Kanpur</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/cities">Cities</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privay Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="col-lg-2 col-md-3">
            <div className="footer-links">
              <h3>Contact Us</h3>

              {/* Address */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <Image
                    src="/assets/images/icon-location.svg"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-contact-content">
                  <p>Hig-A 39 Indirapuram, 100 ft Road Near Shamshabad Road , 282001,  Agra.</p>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <Image
                    src="/assets/images/icon-mail.svg"
                    alt="Mail"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-contact-content">
                 
                  <p>
                    <a href="mailto:enquiry@jtpackersmovers.com">enquiry@jtpackersmovers.com</a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <Image
                    src="/assets/images/icon-phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="tel:+919058824450">+91 9058824450</a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="col-lg-12">
            <div className="footer-copyright">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
                
 
              </div>

            </div>
          </div>
        </div>
      </div>

      {showScroll && (
  <button
    onClick={scrollToTop}
    className="btn btn-warning rounded-circle position-fixed shadow"
    style={{
      width: '48px',
      height: '48px',
      bottom: '20px',
      right: '20px',
      zIndex: 2000,
    }}
    aria-label="Scroll to top"
  >
    <FaArrowUp className="text-white" />
  </button>
)}

    </footer>

   




      </>

  );
}
