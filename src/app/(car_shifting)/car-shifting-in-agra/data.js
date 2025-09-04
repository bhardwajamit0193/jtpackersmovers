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
                title="Car Shifting in Agra"
                img="/assets/images/best-car-transport-service-in-india.jpg"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities", href: "/cities" },
                    { label: "Car Shifting in Agra" }
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
                                                src="/assets/images/car2.png"
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
                                            Car Shifting in Agra <span>Agra </span>
                                        </h1>
                                        <p className="wow fadeInUp">
                                            Are you searching for a trusted company for car shifting in Agra? Look no further than JT Packers Movers, your reliable partner for safe and hassle-free vehicle transportation. We understand how valuable your car is to you, and that’s why our team provides professional, secure, and affordable car relocation services in Agra. Whether you are shifting your vehicle within the city, relocating to another state, or transporting it across India, we ensure smooth and timely delivery with complete peace of mind.
                                        </p>

                                        <p className="wow fadeInUp fw-bold ">Professional Car Shifting Services in Agra</p>
                                        <p className="wow fadeInUp">
                                            At JT Packers Movers, we specialize in providing end-to-end vehicle transportation services. Our services are designed to meet the needs of individuals, families, and businesses who want to move their cars without stress. Using modern equipment, specially designed car carriers, and experienced drivers, we make sure your vehicle is handled with the utmost care. From inspection to delivery, every step of the process is carried out with precision and attention to detail.
                                        </p>
                                        {/* Project Design Highlight Start */}
                                        <div className="project-essence-box">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Why Choose JT Packers Movers for Car Transportation in <span>Agra?</span>
                                            </h2>
                                            <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                                <li><b>Safe & Secure Relocation </b>– We use hydraulic ramps, wheel locks, and safety belts to prevent any scratches or damages during transit.</li>
                                                <li><b>Comprehensive Protection </b> – Cars are carefully loaded and covered to safeguard them from dust, rain, and road risks.</li>
                                                <li><b>Door-to-Door Service </b>– No need to drive your car to a transport hub; we pick it up from your doorstep and deliver it to your chosen location.</li>
                                                <li><b>On-Time Delivery</b> – We value your time and guarantee timely pickups and deliveries.</li>
                                                <li><b>Customer Support</b> – Our team is available 24/7 to answer your queries and assist you throughout the relocation process.</li>

                                            </ul>
                                        </div>


                                        <>
                                            {/* Service Entry Start */}
                                            <div className="service-entry">
                                                <p className="wow fadeInUp">
                                                    At MoveIn, we understand that moving to a new home is an exciting yet
                                                    overwhelming experience. Our Residential Moving service is designed to
                                                    take the stress out of your move, whether you're relocating across the
                                                    street or to a different city. From packing your belongings with care to
                                                    ensuring they are safely transported and unpacked, we handle every step
                                                    with precision and professionalism. Our team is trained to manage all
                                                    types of residential moves, including apartments, houses, and condos. With
                                                    MoveIn, you can trust that your possessions will be treated like our own,
                                                    ensuring a seamless, efficient, and hassle-free moving experience.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    Moving to a new home is a fresh start. At MoveIn, our Residential Moving
                                                    service ensures a smooth and hassle-free transition. Our expert team
                                                    handles everything from packing your valuables to safely transporting
                                                    them, whether locally or long-distance, providing a seamless and
                                                    stress-free experience.
                                                </p>
                                                {/* Service Solution Box Start */}
                                                <div className="service-solution-box">
                                                    <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                        Our Car Shifting <span>Process</span>
                                                    </h2>
                                                    <p className="wow fadeInUp">
                                                        We follow a structured and transparent process to guarantee the safe movement of your vehicle:
                                                    </p>
                                                    {/* Service Entry Step List Start */}
                                                    <div className="service-solution-steps">
                                                        {/* Service Entry Step Item Start */}
                                                        <div
                                                            className="service-solution-step-item wow fadeInUp"
                                                            data-wow-delay="0.2s"
                                                        >
                                                            <div className="service-solution-step-box">
                                                                <div className="service-solution-step-no">
                                                                    <h2>01</h2>
                                                                </div>
                                                                <div className="service-solution-step-content">
                                                                    <h3>
                                                                        Vehicle Inspection</h3>
                                                                    <p> Before transportation, we inspect and document your car’s condition.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-service-solution-step-1.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        {/* Service Entry Step Item Endtart */}
                                                        {/* Service Entry Step Item Start */}
                                                        <div
                                                            className="service-solution-step-item active wow fadeInUp"
                                                            data-wow-delay="0.4s"
                                                        >
                                                            <div className="service-solution-step-box">
                                                                <div className="service-solution-step-no">
                                                                    <h2>02</h2>
                                                                </div>
                                                                <div className="service-solution-step-content">
                                                                    <h3>Secure Packing & Loading</h3>
                                                                    <p>
                                                                        Cars are carefully loaded using hydraulic equipment and safety locks.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-service-solution-step-2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        {/* Service Entry Step Item Endtart */}
                                                        {/* Service Entry Step Item Start */}
                                                        <div
                                                            className="service-solution-step-item wow fadeInUp"
                                                            data-wow-delay="0.6s"
                                                        >
                                                            <div className="service-solution-step-box">
                                                                <div className="service-solution-step-no">
                                                                    <h2>03</h2>
                                                                </div>
                                                                <div className="service-solution-step-content">
                                                                    <h3>Transportation in Car Carriers</h3>
                                                                    <p>
                                                                        Vehicles are transported in covered or open car carriers depending on your preference.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-service-solution-step-3.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        {/* Service Entry Step Item Endtart */}
                                                        {/* Service Entry Step Item Start */}
                                                        <div
                                                            className="service-solution-step-item active wow fadeInUp"
                                                            data-wow-delay="0.4s"
                                                        >
                                                            <div className="service-solution-step-box">
                                                                <div className="service-solution-step-no">
                                                                    <h2>04</h2>
                                                                </div>
                                                                <div className="service-solution-step-content">
                                                                    <h3>Safe & Timely Delivery</h3>
                                                                    <p>
                                                                        We ensure your car reaches its destination in the same condition as it was handed over.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-service-solution-step-2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        {/* Service Entry Step Item Endtart */}
                                                    </div>
                                                    {/* Service Entry Step List End */}
                                                </div>

                                                {/* Service Secure Box End */}
                                                {/* Service Entry Item Box Start */}

                                                {/* Service Entry Item Box End */}
                                            </div>
                                            {/* Service Entry End */}
                                        </>


                                        <h2 className="text-anime-style-2 fs-2">
                                            Car Relocation Within and Outside <span>Agra </span>
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Whether you are moving within Agra or need intercity or interstate car shifting, JT Packers Movers has you covered. We provide flexible and reliable services across Uttar Pradesh and pan-India, ensuring complete safety and punctuality. From compact cars to SUVs and luxury vehicles, we have the right expertise and equipment to handle all types of cars.
                                        </p>

                                        <p className="wow fadeInUp fw-bold ">Trusted Car Shifting Company in Agra</p>
                                        <p className="wow fadeInUp">
                                            Over the years, JT Packers Movers has built a reputation as one of the most trusted names for car transportation in Agra. Our customer-first approach, skilled workforce, and advanced logistics support make us the preferred choice for hundreds of car owners.
                                        </p>
                                        {/* Project Design Highlight Start */}



                                    </div>



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

               <CitiesBottom
               />

            </>


        </div>
    );
}