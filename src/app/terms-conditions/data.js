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
        title="Terms & Conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" }
        ]}
      />


      <>
        <>
          {/* Page Contact Us Start */}
          <div className="py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <article class="terms-content">

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">1. Services</h2>
                      <p className="wow fadeInUp">
                        JT Packers Movers provides packing, moving, loading, unloading, storage, and transportation
                        services, including vehicle relocation. All services are subject to availability and acceptance
                        of your booking request.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">2. Booking and Payment</h2>
                      <p className="wow fadeInUp">
                        Customers must provide complete and accurate details during booking. Service charges must be
                        paid as agreed (advance and balance payment). Payments can be made via cash, bank transfer,
                        UPI, or other accepted methods. Any additional services requested may incur extra charges.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">3. Customer Responsibilities</h2>
                      <p className="wow fadeInUp">
                        Customers must ensure all items are properly declared and documented, remove valuable items
                        before packing, provide correct pickup and delivery addresses, and be present or assign a
                        representative during loading and unloading.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">4. Vehicle Relocation</h2>
                      <p className="wow fadeInUp">
                        Vehicle shifting services are provided via open/covered carriers depending on your choice.
                        Customers must hand over all necessary documents (RC, insurance, PUC, etc.) before transportation.
                        JT Packers Movers is not responsible for minor scratches or dents caused by road conditions
                        beyond our control.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">5. Liability</h2>
                      <p className="wow fadeInUp">
                        While we take maximum care of your belongings, JT Packers Movers shall not be liable for damages
                        caused by natural calamities, accidents, strikes, or unavoidable delays, items not packed by our
                        staff, or loss/damage due to incorrect information provided by the customer. Insurance coverage
                        is available on request and is strongly recommended.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">6. Delays and Cancellations</h2>
                      <p className="wow fadeInUp">
                        Delivery schedules are estimates and may vary due to traffic, weather, or unforeseen events.
                        In case of cancellations, any advance payment may be non-refundable depending on the stage
                        of service preparation.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">7. Prohibited Items</h2>
                      <p className="wow fadeInUp">
                        Customers must not include hazardous, flammable, illegal, or perishable goods in their consignments.
                        JT Packers Movers reserves the right to refuse such items.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">8. Intellectual Property</h2>
                      <p className="wow fadeInUp">
                        All content, logos, and materials on our website are the property of JT Packers Movers and may not
                        be used without prior written consent.
                      </p>
                    </section>

                    <section class="mb-4">
                      <h2 className="text-anime-style-2 fs-5 mb-3">9. Governing Law</h2>
                      <p className="wow fadeInUp">
                        These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the
                        jurisdiction of the courts in <strong>Agra, Uttar Pradesh</strong>.
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