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
                  <article className="terms-content">

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">1. General Terms</h2>
    <p className="wow fadeInUp">
      By booking services with JT Packers & Movers (Unit of Comrade Total Web Solution), the customer agrees to abide by the terms and conditions mentioned herein.
      These terms constitute a legally binding agreement between the client and the company.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">2. Service Scope</h2>
    <p className="wow fadeInUp">
      Our services include, but are not limited to:
      <br />
      <ul>
        <li> Household goods packing and moving</li>
        <li>Office relocation</li>
        <li>Vehicle (Car/Bike) transportation</li>
        <li>Local and intercity shifting</li>
        <li>Loading, unloading, and unpacking</li>
        <li>Storage and warehousing services</li>
       
      </ul>

      All services are subject to availability and confirmation at the time of booking.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">3. Quotation and Charges</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>All quotations are provided based on the inventory list, distance, and service type shared by the client.</li>
        <li>Any additional goods or services requested after finalization will incur extra charges.</li>
        <li>GST and applicable government taxes are charged as per current regulations.</li>
        <li>Prices quoted are valid for 7 days from the date of quotation.</li>
        <li>JT Packers & Movers reserves the right to revise charges in case of fuel price hike, road permit changes, or unforeseen logistical factors.</li>
      </ul>
     
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">4. Booking & Payment Terms</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>A minimum advance of 50% of the total amount is required to confirm the booking.</li>
        <li>Remaining balance must be paid before unloading at the destination.</li>
        <li>Payment methods accepted: UPI, Bank Transfer, Cash, or Cheque (subject to clearance).</li>
        <li>Goods will not be delivered unless full payment is received.</li>
        <li>Advance payments are non-refundable in case of client cancellation after service confirmation.</li>
      </ul>
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">5. Packing Materials and Handling</h2>
    <p className="wow fadeInUp">
      <ul>
       <li>Packing materials are used according to the nature of items.</li>
       <li>The company ensures best possible care but is not responsible for damages due to poor quality of goods, natural wear, or client’s self-packed items.</li>
       <li>Fragile or high-value items (glass, antiques, electronics, jewelry, documents, etc.) must be declared beforehand and packed separately.</li>
      </ul>
      
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">6. Transportation & Delivery</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>Delivery time is estimated based on distance, weather, and road conditions.</li>
        <li>JT Packers & Movers is not liable for delays due to traffic, strikes, natural calamities, or government restrictions.</li>
        <li>Customers are advised to be present during loading and unloading.</li>
        <li>In case the customer is unavailable, delivery will be made to the authorized representative after proper verification.</li>
      </ul>
    
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">7. Insurance Coverage</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>Transit insurance is optional and available upon client request.</li>
        <li>The company acts only as a facilitator between the customer and the insurance provider.</li>
        <li>Claims, if any, must be made directly to the insurance company as per their terms.</li>
        <li>In absence of insurance, JT Packers & Movers shall not be liable for loss or damage due to unforeseen incidents like accidents, theft, or natural disasters.</li>
      </ul>
      
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">8. Liability Limitations</h2>
    <p className="wow fadeInUp">
      Our liability is restricted to the service fee amount paid for the specific move.<br />
      <b>JT Packers & Movers is not responsible for:</b>
      <ul>
        <li>Items not declared or packed by the customer</li>
        <li>Electrical or mechanical failure of appliances</li>
        <li>Goods damaged due to poor roads, rain, or mishandling by third-party carriers</li>
        <li>Delays or non-delivery caused by incorrect address or absence of receiver</li>
      </ul>
    
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">9. Storage and Warehousing</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>Stored goods are insured only if specifically requested and declared in writing.</li>
        <li>Rental is charged per day or per month depending on storage duration.</li>
        <li>Access to stored goods requires 48-hour prior notice.</li>
        <li>If payment for storage is delayed beyond 30 days, the company reserves the right to dispose of or auction goods to recover dues.</li>
      </ul>
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">10. Car & Bike Transportation Terms</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>Vehicle should be in running condition with minimal fuel (2–3 liters).</li>
        <li>Pre-existing scratches or dents must be noted before transport.</li>
        <li>Company is not liable for mechanical or electrical failure post-delivery.</li>
        <li>Delay in car/bike delivery due to road conditions or RTO inspection does not attract compensation.</li>
      </ul>
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">11. Customer Responsibilities</h2>
    <p className="wow fadeInUp">
      <b>The customer agrees to:</b>
      <ul>
        <li>Provide correct and complete delivery address and contact details.</li>
        <li>Be available during packing, loading, and delivery.</li>
        <li>Ensure payment completion as per agreed schedule.</li>
        <li>Avoid including illegal, perishable, or inflammable items in the goods.</li>
        <li>Verify goods before signing the delivery receipt.</li>
      </ul>
      
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">12. Cancellation Policy</h2>
    <p className="wow fadeInUp">
      <ul>
        <li>Cancellation within 24 hours of booking confirmation: 25% deduction.</li>
        <li>Cancellation after vehicle dispatch or packing: no refund.</li>
        <li>Postponement of shifting dates will be accepted based on vehicle availability.</li>
      </ul>
      
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">13. Jurisdiction</h2>
    <p className="wow fadeInUp">
      All disputes or claims arising from this agreement shall fall under the jurisdiction of Agra (Uttar Pradesh) courts only.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">14. Force Majeure</h2>
    <p className="wow fadeInUp">
      JT Packers & Movers shall not be held responsible for failure or delay in services due to events beyond our control — including natural disasters, strikes, lockdowns, or government restrictions.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">15. Privacy and Data Protection</h2>
    <p className="wow fadeInUp">
      All personal data shared by the client (address, contact, ID proof, etc.) is kept confidential and used strictly for logistics and communication purposes.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">16. Amendment of Terms</h2>
    <p className="wow fadeInUp">
      JT Packers & Movers (Unit of Comrade Total Web Solution) reserves the right to update or modify these Terms & Conditions at any time without prior notice.
      The latest version will always be available on our website.
    </p>
  </section>

  <section className="mb-4">
    <h2 className="text-anime-style-2 fs-5 mb-3">17. Acknowledgment</h2>
    <p className="wow fadeInUp">
      By confirming a booking with JT Packers & Movers, the customer acknowledges that they have read, understood, and agreed to the above Terms & Conditions.
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