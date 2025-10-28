"use client";

import BookingForm from "@/components/BookingForm";
import CitiesBottom from "@/components/Cities-bottom";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";


export default function Data() {
    return (
        <div className="page">
            <PageHeader
                title="Packers and Movers in Moradabad"
                img="/assets/images/moradabad-bg.jpeg"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities", href: "/cities" },
                    { label: "Packers and Movers in Moradabad" }
                ]}
            />


            <>
                {/* Page Project Single Start */}
                <div className="page-project-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-2 order-lg-1 mt-3 md-mt-0">
                                {/* Project Sidebar Start */}
                                <Sidebar />
                                {/* Project Sidebar End */}
                            </div>
                            <div className="col-lg-8 order-1 order-lg-2  ">
                                {/* Project Single Content Start */}
                                <div className="project-single-content">
                                    {/* Page Single Image Start */}
                                    <div className="page-single-image">
                                        
                                            <Image
                                                src="/assets/images/packers-and-movers-in-moradabad.webp"
                                                alt="Moradabad City"
                                                width={800}   // set width
                                                height={500}  // set height
                                                priority      // optional (for above-the-fold images)
                                            />
                                       
                                    </div>
                                    {/* Page Single Image End */}
                                    {/* Project Entry Start */}
                                    <div className="project-entry">
                                        <h2 className="text-anime-style-2 h2">
                                            Packers and Movers in <span>Moradabad </span>
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Relocating to a new place is always an exciting experience, but it can also bring along stress and challenges. Packing household items, handling fragile goods, moving heavy furniture, and transporting them safely requires planning and expertise. That’s where JT Packers Movers in Moradabad steps in as your trusted relocation partner. With years of experience and a dedicated team, we make shifting simple, smooth, and worry-free for families and businesses across Moradabad and nearby areas.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                            At JT Packers Movers, our mission is to provide reliable, affordable, and hassle-free moving services. Whether you are planning a local move within Moradabad, shifting to another city, or even transporting your car or office setup, our skilled team ensures that every step of the process is handled with care. From the moment we start packing to the time your belongings are delivered and unpacked at the new destination, we guarantee safety, punctuality, and complete satisfaction.


                                        </p>
                                        {/* Project Design Highlight Start */}
                                        <div className="project-essence-box">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Why Choose JT Packers Movers in <span>Moradabad?</span>
                                            </h2>
                                            <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                                <li><b>Professional Expertise </b>– Our trained staff knows the best techniques for packing and handling different types of items, including delicate glassware, electronic appliances, furniture, and office equipment.</li>
                                                <li><b>Safe & Secure Packing</b> – We use high-quality boxes, bubble wrap, stretch film, and other protective materials to ensure zero damage during transit.</li>
                                                <li><b>Affordable & Transparent Pricing </b>– No hidden charges or last-minute surprises; we provide clear quotations that suit your budget.</li>
                                                <li><b>On-Time Delivery</b> – We value your time and guarantee timely pickups and deliveries.</li>
                                                <li><b>Customer Support</b> – Our team is available 24/7 to answer your queries and assist you throughout the relocation process.</li>

                                            </ul>
                                        </div>
                                        {/* Project Design Highlight End */}
                                        <div className="project-challenge">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Our Packers and Movers Services in <span>Moradabad</span>
                                            </h2>
                                            <p className="wow fadeInUp">
                                                At JT Packers Movers, we provide a wide range of relocation and logistics services tailored to your needs:
                                            </p>
                                            {/* Project Challenge Item List Start */}
                                            <div className="project-challenge-item-list">
                                                {/* Project Challenge Item Start */}
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/houseshifting.webp"
                                                                alt=""
                                                            />
                                                       
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Household Shifting in Moradabad</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Moving homes becomes effortless with our complete household relocation solutions. From kitchen items and clothes to heavy furniture and fragile décor, we pack, load, transport, and unload everything with care
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                {/* Project Challenge Item End */}
                                                {/* Project Challenge Item Start */}
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/office-shifting.webp"
                                                                alt=""
                                                            />
                                                       
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Office Relocation in Moradabad</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Planning to shift your office? We handle files, computers, servers, furniture, and workstations, ensuring minimum downtime and smooth transition to your new office space.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/car-and-bike-transport-services.webp"
                                                                alt=""
                                                            />
                                                       
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Car & Bike Transportation</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Our specialized carriers ensure that your vehicles are transported safely to your new city without scratches or damage.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/domestic.webp"
                                                                alt=""
                                                            />
                                                       
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Local and Domestic Shifting</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Whether you are moving just a few kilometers away or to another state, our services cover both short and long distances with the same level of professionalism.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/warehouse.webp"
                                                                alt=""
                                                            />
                                                       
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Warehousing & Storage Services</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Need temporary storage for your belongings? Our secure warehouses in Moradabad provide safe and cost-effective storage solutions for short or long durations.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                {/* Project Challenge Item End */}
                                            </div>
                                            {/* Project Challenge Item List End */}
                                        </div>
                                    </div>

                                    <>
                                        {/* Our Work Process Section Start */}
                                        <div className="dark-section rounded py-4 mb-5">
                                            <div className="container">
                                                <div className="row section-row mb-4">
                                                    <div className="col-lg-12">
                                                        {/* Section Title Start */}
                                                        <div className="section-title section-title-center">

                                                            <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                                Reliable moving services built <span>around you</span>
                                                            </h2>
                                                        </div>
                                                        {/* Section Title End */}
                                                    </div>
                                                </div>
                                                <div className="row px-3">
                                                    {/* Work Process List Start */}
                                                    <div className="wrok-process-list">
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-1.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>1</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Assign Us Service</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.2s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-2.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>2</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Packing and Loading</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.4s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-3.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>3</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Transportation Service</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.6s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-4.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>4</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Unloading and Unpacking</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                    </div>
                                                    {/* Work Process List End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Our Work Process Section End */}
                                    </>
                                    {/* Project Entry End */}
                                    {/* Page Single FAQs Start */}
                                    <div className="page-single-faqs">
                                        {/* Section Title Start */}
                                        <div className="section-title">
                                            <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                Answers to your <span>Moradabad moving questions</span>
                                            </h2>
                                        </div>
                                        {/* Section Title End */}
                                        {/* FAQ Accordion Start */}
                                        <div className="faq-accordion" id="faqaccordion">
                                            {/* FAQ 1 */}
                                            <div className="accordion-item wow fadeInUp">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1"
                                                        aria-expanded="true"
                                                        aria-controls="collapse1"
                                                    >
                                                        How can I find trusted packers and movers in Moradabad?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse1"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="heading1"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Look for movers with verified licenses, good Google reviews, transparent pricing, and insurance coverage. Always compare quotes from 2–3 companies before finalizing your move.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 2 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2"
                                                        aria-expanded="false"
                                                        aria-controls="collapse2"
                                                    >
                                                        What is the average cost of packers and movers in Moradabad?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse2"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading2"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            For local shifting, prices range between ₹3,000 – ₹9,000, while intercity moves can cost between ₹10,000 – ₹35,000, depending on distance, number of items, and type of vehicle used.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 3 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3"
                                                        aria-expanded="false"
                                                        aria-controls="collapse3"
                                                    >
                                                        What services do packers and movers in Moradabad offer?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse3"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading3"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Professional movers provide packing, loading, transportation, unloading, and unpacking services. Many also offer office shifting, vehicle transport, and warehouse storage solutions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 4 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse4"
                                                        aria-expanded="false"
                                                        aria-controls="collapse4"
                                                    >
                                                        Are packers and movers in Moradabad responsible for damages during relocation?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse4"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading4"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, if you choose transit insurance, your goods are covered against any damage or loss during the move. Always confirm insurance details before booking.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 5 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse5"
                                                        aria-expanded="false"
                                                        aria-controls="collapse5"
                                                    >
                                                        How long does it take to complete a house shifting in Moradabad?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse5"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading5"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            A local move can be completed in 6–10 hours, while an intercity relocation may take 2–5 days depending on distance, route, and vehicle type.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 6 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                                <h2 className="accordion-header" id="heading6">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6"
                                                        aria-expanded="false"
                                                        aria-controls="collapse6"
                                                    >
                                                        How can I reduce my packers and movers charges in Moradabad?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse6"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading6"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            You can save money by:<br /><br />
                                                            • Decluttering before packing<br />
                                                            • Booking early to avoid last-minute surcharges<br />
                                                            • Comparing multiple quotes<br />
                                                            • Choosing a weekday or mid-month move
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 7 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                                <h2 className="accordion-header" id="heading7">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse7"
                                                        aria-expanded="false"
                                                        aria-controls="collapse7"
                                                    >
                                                        Do movers in Moradabad provide packing materials?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse7"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading7"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, reputed movers use premium-quality packing materials like bubble wraps, corrugated boxes, waterproof sheets, and stretch films to protect items during transit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 8 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.4s">
                                                <h2 className="accordion-header" id="heading8">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse8"
                                                        aria-expanded="false"
                                                        aria-controls="collapse8"
                                                    >
                                                        Can I track my belongings during the move?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse8"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading8"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, most professional packers and movers in Moradabad offer GPS tracking and regular updates via WhatsApp or phone calls for full transparency.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 9 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.6s">
                                                <h2 className="accordion-header" id="heading9">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse9"
                                                        aria-expanded="false"
                                                        aria-controls="collapse9"
                                                    >
                                                        Do packers and movers in Moradabad handle office or factory relocation?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse9"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading9"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, experienced companies manage office, industrial, and commercial relocations, ensuring safe and timely delivery with minimal disruption to your business.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 10 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.8s">
                                                <h2 className="accordion-header" id="heading10">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse10"
                                                        aria-expanded="false"
                                                        aria-controls="collapse10"
                                                    >
                                                        How early should I book packers and movers in Moradabad?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse10"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading10"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            It’s recommended to book at least 7–10 days in advance, especially during weekends or festive periods when moving services are in high demand.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Accordion End */}
                                    </div>

                                    {/* Page Single FAQs End */}





                                </div>
                                {/* Project Single Content End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Project Single End */}


                <>
                    {/* Our Testimonials Section Start */}
                    <div className="our-testimonials">
                        <div className="container">
                            <div className="row section-row">
                                <div className="col-lg-12">
                                    {/* Section Title Start */}
                                    <div className="section-title section-title-center">
                                        <h3 className="wow fadeInUp">testimonials</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Voices of Our Valued <span>our customers</span>
                                        </h2>
                                    </div>
                                    {/* Section Title End */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Testimonial Slider Start */}
                                    <TestimonialSlider />
                                    {/* Testimonial Slider End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Testimonials Section End */}
                </>

                <>
                    <CitiesBottom />
                </>

            </>


        </div>
    );
}