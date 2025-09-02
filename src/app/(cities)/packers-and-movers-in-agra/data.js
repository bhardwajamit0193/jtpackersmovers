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
                title="Packers and Movers in Agra"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities", href: "/cities" },
                    { label: "Packers and Movers in Agra" }
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
                                        <figure className="image-anime reveal">
                                            <Image
                                                src="/assets/images/agra-img.jpeg"
                                                alt="Agra City"
                                                width={800}   // set width
                                                height={500}  // set height
                                                priority      // optional (for above-the-fold images)
                                            />
                                        </figure>
                                    </div>
                                    {/* Page Single Image End */}
                                    {/* Project Entry Start */}
                                    <div className="project-entry">
                                        <h1 className="text-anime-style-2 h2">
                                            Packers and Movers in <span>Agra </span>
                                        </h1>
                                        <p className="wow fadeInUp">
                                            Relocating to a new place is always an exciting experience, but it can also bring along stress and challenges. Packing household items, handling fragile goods, moving heavy furniture, and transporting them safely requires planning and expertise. That’s where JT Packers Movers in Agra steps in as your trusted relocation partner. With years of experience and a dedicated team, we make shifting simple, smooth, and worry-free for families and businesses across Agra and nearby areas.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                            At JT Packers Movers, our mission is to provide reliable, affordable, and hassle-free moving services. Whether you are planning a local move within Agra, shifting to another city, or even transporting your car or office setup, our skilled team ensures that every step of the process is handled with care. From the moment we start packing to the time your belongings are delivered and unpacked at the new destination, we guarantee safety, punctuality, and complete satisfaction.


                                        </p>
                                        {/* Project Design Highlight Start */}
                                        <div className="project-essence-box">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Why Choose JT Packers Movers in <span>Agra?</span>
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
                                                Our Packers and Movers Services in <span>Agra</span>
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
                                                        <figure className="image-anime reveal">
                                                            <img
                                                                src="/assets/images/service-entry-image.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Household Shifting in Agra</h3>
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
                                                        <figure className="image-anime reveal">
                                                            <img
                                                                src="/assets/images/ss1.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Office Relocation in Agra</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Planning to shift your office? We handle files, computers, servers, furniture, and workstations, ensuring minimum downtime and smooth transition to your new office space.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        <figure className="image-anime reveal">
                                                            <img
                                                                src="/assets/images/pll.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
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
                                                        <figure className="image-anime reveal">
                                                            <img
                                                                src="/assets/images/success-story-image-1.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
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
                                                        <figure className="image-anime reveal">
                                                            <img
                                                                src="/assets/images/post-2.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Warehousing & Storage Services</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Need temporary storage for your belongings? Our secure warehouses in Agra provide safe and cost-effective storage solutions for short or long durations.
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
                                                Answers to your <span>moving questions</span>
                                            </h2>
                                        </div>
                                        {/* Section Title End */}
                                        {/* FAQ Accordion Start */}
                                        <div className="faq-accordion" id="faqaccordion">
                                            {/* FAQ Item Start */}
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
                                                        How do I book Packers and Movers with JT Packers Movers?
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
                                                            You can easily book our services by calling us, filling out the contact form on our website, or requesting a free quote. Our team will guide you through the process and provide a customized relocation plan.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* FAQ Item End */}
                                            {/* FAQ Item Start */}
                                            <div
                                                className="accordion-item wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <h2 className="accordion-header" id="heading2">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2"
                                                        aria-expanded="false"
                                                        aria-controls="collapse2"
                                                    >
                                                        What services do you offer ?
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
                                                            We provide household shifting, office relocation, car & bike transport, local and domestic moving, and warehousing & storage solutions across Agra and nearby areas.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* FAQ Item End */}
                                            {/* FAQ Item Start */}
                                            <div
                                                className="accordion-item wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <h2 className="accordion-header" id="heading3">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3"
                                                        aria-expanded="false"
                                                        aria-controls="collapse3"
                                                    >
                                                        How much do packers and movers charge?
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
                                                            The cost depends on several factors such as distance, volume of items, type of packing materials used, and additional services like storage or insurance. At JT Packers Movers, we offer transparent pricing with no hidden charges.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* FAQ Item End */}
                                            {/* FAQ Item Start */}
                                            <div
                                                className="accordion-item wow fadeInUp"
                                                data-wow-delay="0.6s"
                                            >
                                                <h2 className="accordion-header" id="heading4">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse4"
                                                        aria-expanded="false"
                                                        aria-controls="collapse4"
                                                    >
                                                        How long will my relocation take?
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
                                                            The time required depends on the type and distance of the move. Local shifting usually takes 1–2 days, while domestic moves may take 3–7 days depending on the destination.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* FAQ Item End */}
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
                    {/* Our Faqs Section Start */}
                    <div className="our-faqs">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-12">
                                    <div className="faq-content-box">
                                        {/* Our Faqs Content Start */}
                                        <div className="our-faqs-content">
                                            {/* Section Title Start */}
                                            <div className="section-title">
                                                <h3 className="wow fadeInUp">Cities</h3>
                                                <h2 className="text-anime-style-2" data-cursor="-opaque">

                                                    Trusted Moving Solutions in <span> Your City</span>
                                                </h2>
                                            </div>
                                            {/* Section Title End */}
                                            {/* FAQ Accordion Start */}
                                            <div className="post-tags">
                                                <span class="tag-links">

                                                    <a href="/packers-and-movers-in-agra">Packers and Movers in Agra</a>
                                                    <a href="/packers-and-movers-in-noida">Packers and Movers in Noida</a>
                                                    <a href="/packers-and-movers-in-ghaziabad">Packers and Movers in Ghaziabad</a>
                                                    <a href="/packers-and-movers-in-Kanpur">Packers and Movers in Kanpur</a>
                                                    <a href="/packers-and-movers-in-lucknow">Packers and Movers in Lucknow</a>
                                                    <a href="/packers-and-movers-in-moradabad">Packers and Movers in Moradabad</a>
                                                    <a href="/packers-and-movers-in-meerut">Packers and Movers in Meerut</a>
                                                    <a href="/packers-and-movers-in-delhi">Packers and Movers in Delhi</a>
                                                    <a href="/packers-and-movers-in-pune">Packers and Movers in Pune</a>
                                                    <a href="/packers-and-movers-in-mathura">Packers and Movers in Mathura</a>

                                                </span>
                                            </div>
                                            {/* FAQ Accordion End */}
                                        </div>
                                        {/* Our Faqs Content End */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Our Faqs Section End */}
                </>

            </>


        </div>
    );
}