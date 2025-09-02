"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* About Footer */}
          <div className="col-lg-3 col-md-12">
            <div className="about-footer">
              {/* Logo */}
              <div className="footer-logo text-white fs-3 fw-bolder">
                JT Packers Movers

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
          <div className="col-lg-3 col-md-5">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/projects">Cities</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

<div className="col-lg-3 col-md-5">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/projects">Cities</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="col-lg-3 col-md-7">
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
                  <p>3891 Ranchview Dr. Richardson, California 62639</p>
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
                    <a href="mailto:support@domainname.com">
                      support@domainname.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@domain.com">info@domain.com</a>
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
                    <a href="tel:+91123456789">+91 123 456 789</a>
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
    </footer>
  );
}
