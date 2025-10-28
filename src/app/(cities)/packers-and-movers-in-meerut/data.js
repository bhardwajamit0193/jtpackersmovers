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
                title="Packers and Movers in Meerut"
                img="/assets/images/meerut-bg.jpg"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities", href: "/cities" },
                    { label: "Packers and Movers in Meerut" }
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
                                                src="/assets/images/packers-and-movers-in-meerut.webp"
                                                alt="Meerut City"
                                                width={800}   // set width
                                                height={500}  // set height
                                                priority      // optional (for above-the-fold images)
                                            />
                                       
                                    </div>
                                    {/* Page Single Image End */}
                                    {/* Project Entry Start */}
                                    <div className="project-entry">
                                        <h2 className="text-anime-style-2 h2">
                                            Packers and Movers in <span>Meerut </span>
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Relocating to a new place is always an exciting experience, but it can also bring along stress and challenges. Packing household items, handling fragile goods, moving heavy furniture, and transporting them safely requires planning and expertise. That’s where JT Packers Movers in Meerut steps in as your trusted relocation partner. With years of experience and a dedicated team, we make shifting simple, smooth, and worry-free for families and businesses across Meerut and nearby areas.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                            At JT Packers Movers, our mission is to provide reliable, affordable, and hassle-free moving services. Whether you are planning a local move within Meerut, shifting to another city, or even transporting your car or office setup, our skilled team ensures that every step of the process is handled with care. From the moment we start packing to the time your belongings are delivered and unpacked at the new destination, we guarantee safety, punctuality, and complete satisfaction.


                                        </p>
                                        {/* Project Design Highlight Start */}
                                        <div className="project-essence-box">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Why Choose JT Packers Movers in <span>Meerut?</span>
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
                                                Our Packers and Movers Services in <span>Meerut</span>
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
                                                        <h3 className="wow fadeInUp">Household Shifting in Meerut</h3>
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
                                                        <h3 className="wow fadeInUp">Office Relocation in Meerut</h3>
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
                                                            Need temporary storage for your belongings? Our secure warehouses in Meerut provide safe and cost-effective storage solutions for short or long durations.
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
                                                Answers to your <span>Meerut moving questions</span>
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
                                                        How do I find the best packers and movers in Meerut?
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
                                                            To find trusted movers, check Google reviews, company registration, and GST number, and compare 2–3 quotes. Choose a company that offers door-to-door service, insurance, and transparent pricing.
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
                                                        What is the average cost of packers and movers in Meerut?
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
                                                            Local home shifting in Meerut generally costs between ₹3,000 – ₹9,000, while intercity relocations can range from ₹10,000 – ₹35,000 depending on distance, house size, and type of transport vehicle.
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
                                                        What services do packers and movers in Meerut offer?
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
                                                            Most movers provide packing, loading, transportation, unloading, unpacking, and rearranging services. Some also handle office shifting, warehouse storage, and vehicle transport.
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
                                                        Do movers in Meerut provide insurance for goods?
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
                                                            Yes, reputable packers and movers offer transit insurance to cover any damage or loss during transport. Always request a copy of the insurance policy before finalizing your move.
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
                                                        How long does it take to complete a shifting in Meerut?
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
                                                            A local move within Meerut typically takes 6–10 hours, while outstation relocations can take 2–5 days, depending on distance and weather conditions.
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
                                                        How can I reduce my shifting cost in Meerut?
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
                                                            You can lower the cost by:<br /><br />
                                                            • Decluttering unused items<br />
                                                            • Booking early<br />
                                                            • Choosing a weekday instead of weekend<br />
                                                            • Comparing multiple quotes before hiring
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
                                                        Do packers and movers in Meerut bring their own packing materials?
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
                                                            Yes, professional movers provide high-quality packing materials such as bubble wrap, corrugated boxes, stretch film, and foam sheets to ensure the safety of your belongings.
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
                                                        Can I track my goods during transportation?
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
                                                            Yes, many professional movers in Meerut offer real-time GPS tracking and updates via WhatsApp or phone calls for complete transparency and peace of mind.
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
                                                        Do movers in Meerut offer office or commercial shifting services?
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
                                                            Yes, most companies specialize in office, commercial, and industrial shifting, ensuring quick and secure relocation with minimal business downtime.
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
                                                        When should I book packers and movers in Meerut?
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
                                                            It’s best to book at least 7–10 days in advance, especially during weekends, festive seasons, or the end of the month when moving demand is high.
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