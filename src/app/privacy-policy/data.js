"use client";

import BookingForm from "@/components/BookingForm";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";


export default function Data() {
  return (
    <div className="page">
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" }
        ]}
      />


      <>
        <>
          {/* Page Contact Us Start */}
          <div className="py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <article class="policy-content">
                    <section aria-labelledby="what-we-collect" class="mb-4">
                      <h2 id="what-we-collect" class="fs-4">1. Information We Collect</h2>
                      <p class="wow fadeInUp">
                        We collect information you provide directly to us (for example, when requesting a quote,
                        making a booking, or contacting customer support) and information collected automatically
                        when you use our website and services.
                      </p>


                    </section>

                    <section aria-labelledby="how-we-use" class="mb-4">
                      <h2 id="how-we-use" class="fs-4">2. How We Use Your Information</h2>
                      <p class="wow fadeInUp">
                        We use collected information to process bookings, provide customer support, improve our services,
                        prevent fraud, and communicate important updates (including service notifications and, where you consent,
                        promotional messages).
                      </p>
                    </section>

                    <section aria-labelledby="sharing" class="mb-4">
                      <h2 id="sharing" class="fs-4">3. Sharing & Disclosure</h2>
                      <p class="wow fadeInUp">
                        We do not sell your personal data. We may share information with trusted third parties only when needed
                        to deliver services (e.g., carriers, insurers) or when required by law. We require partners to protect
                        personal information and use it only for agreed purposes.
                      </p>
                    </section>

                    <section aria-labelledby="security" class="mb-4">
                      <h2 id="security" class="fs-4">4. Data Security</h2>
                      <p class="wow fadeInUp">
                        We implement reasonable administrative, technical, and physical safeguards to protect your information.
                        While we strive to secure your data, no online system is completely secure — by using our services you
                        acknowledge this inherent risk.
                      </p>
                    </section>

                    <section aria-labelledby="cookies" class="mb-4">
                      <h2 id="cookies" class="fs-4">5. Cookies & Tracking</h2>
                      <p class="wow fadeInUp">
                        Our website uses cookies and similar tracking technologies to improve user experience and analyze site usage.
                        You can manage cookie preferences through your browser settings, but disabling cookies may affect site functionality.
                      </p>
                    </section>

                    <section aria-labelledby="your-rights" class="mb-4">
                      <h2 id="your-rights" class="fs-4">6. Your Rights</h2>
                      <p class="wow fadeInUp">
                        You may request access to, correction of, or deletion of your personal information. You can also opt out of
                        marketing communications at any time by contacting us or following the unsubscribe instructions in those messages.
                      </p>
                    </section>

                    <section aria-labelledby="third-party" class="mb-4">
                      <h2 id="third-party" class="fs-4">7. Third-Party Links</h2>
                      <p class="wow fadeInUp">
                        Our website may link to third-party sites. We are not responsible for the privacy practices of those sites.
                        Review their privacy policies before sharing personal information.
                      </p>
                    </section>

                    <section aria-labelledby="updates" class="mb-4">
                      <h2 id="updates" class="fs-4">8. Updates to This Policy</h2>
                      <p class="wow fadeInUp">
                        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will
                        be posted on this page with a revised effective date.
                      </p>
                    </section>

                    <section aria-labelledby="contact" class="mb-5">
                      <h2 id="contact" class="fs-4">9. Contact Us</h2>
                      <p class="wow fadeInUp">
                        If you have questions or requests regarding this policy or your personal data, please contact:
                      </p>

                    </section>



                  </article>
                </div>

              </div>
            </div>
          </div>
          {/* Page Contact Us End */}
        </>





      </>


    </div>
  );
}