import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CitiesLoop from "@/components/CitiesLoop";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";


export default function Home() {
  return (

    <>



      <>
        {/* Hero Section Start */}
        <div className="hero hero-slider-layout dark-section">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hero-slide">
                  {/* Slider Image Start */}
                  <div className="hero-slider-image bg-img">
                    <img src="/assets/images/img-4.webp" alt="" />
                  </div>
                  {/* Slider Image End */}
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6 position-relative z-1">
                        {/* Hero Content Box Start */}
                        <span className="text-white mb-2 d-block">Are you looking for...</span>
                        <h1 className="text-white hero-t text-anime-style-2" data-cursor="-opaque" >
                          Fast, Friendly , And Stress-free Moving Services ?
                        </h1>
                        <div className="about-us-btn wow fadeInUp mb-4  position-relative" data-wow-delay="0.4s">
                          <Link href="/" className="btn-default mb-5">
                            Explore Cities
                          </Link>
                        </div>

                        {/* Hero Content Box End */}
                      </div>
                      <div className="col-lg-6">
                        {/* Hero Content Box Start */}


                        {/* Hero Content Box End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Slide Start */}
              <div className="swiper-slide">
                <div className="hero-slide">
                  {/* Slider Image Start */}
                  <div className="hero-slider-image bg-img">
                    <img src="/assets/images/img-5.webp" alt="" />
                  </div>
                  {/* Slider Image End */}
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6 position-relative z-1">
                        {/* Hero Content Box Start */}
                        <span className="text-white mb-2 d-block">Government of India Registered Company</span>

                        <h2 className="text-white hero-t text-anime-style-2" data-cursor="-opaque" >
                          IBA Approved Packers and Movers
                        </h2>
                        <p className="wow fadeInUp text-white d-none d-md-block" data-wow-delay="0.2s">With over 15 years
                          of experience, we make it easy for you to trust our services.
                          IBA approved Packers and Movers company, promising and delivering throughout India</p>

                        <div className="about-us-btn wow fadeInUp mb-4  position-relative" data-wow-delay="0.4s">
                          <Link href="/" className="btn-default mb-5">
                            Explore Cities
                          </Link>
                        </div>

                        {/* Hero Content Box End */}
                      </div>
                      <div className="col-lg-6">
                        {/* Hero Content Box Start */}


                        {/* Hero Content Box End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Slide End */}
              {/* Hero Slide Start */}

              {/* Hero Slide End */}
            </div>
          </div>
        </div>

        {/* Hero Section End */}
      </>
      <section className="bg-accent	py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center">
              <span className="feature-number">01</span>
              <h3 className="text-white">Packaging & Storage</h3>
              <p className="text-white">Tailored solutions with flexible pack sizes and safe storage for every customer need.</p>
            
            </div>
            <div className="col-lg-4 text-center">
              <span className="feature-number">02</span>
              <h3 className="text-white">Safety & Quality</h3>
              <p className="text-white">Strict quality checks and global standards to ensure product safety and reliability.</p>
            
            </div>
            <div className="col-lg-4 text-center">
              <span className="feature-number">03</span>
              <h3 className="text-white">Packaging & Storage</h3>
              <p className="text-white">Reliable logistics and global network ensuring your commodities arrive as promised.</p>
            
            </div>
          </div>
        </div>

      </section>

      <>
        {/* About Us Section Start */}
        <div className="about-us">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                {/* About Us Image Start */}
                <div className="about-us-image">
                 
                    <img src="/assets/images/img-1.webp" alt="" />
                 
                </div>
                {/* About Us Image End */}
              </div>
              <div className="col-lg-6  order-lg-2 order-1">
                {/* About Us Content Start */}
                <div className="about-us-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="wow fadeInUp">About us</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Shaping the Future of <span>Moving Services</span>
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      At JT Packers Movers, we go beyond just shifting belongings—we deliver peace of mind. With a strong focus on professionalism, trust, and innovation, we redefine the relocation experience for homes, offices, and businesses.

From careful packing and secure transport to timely delivery, every step is handled with precision and care. Our personalized solutions, advanced logistics, and dedicated team ensure a smooth, stress-free move, every time.
                </p>
                  </div>
                  {/* Section Title End */}
                  {/* About Counter Box Start */}
                  <div className="about-counter-box">
                    {/* About Counter Item Start */}
                    <div className="about-counter-item">
                      <h2>
                        <span className="counter">92</span>%
                      </h2>
                      <p>Our customer satisfaction rate stands at impressive</p>
                    </div>
                    {/* About Counter Item End */}
                    {/* About Counter Item Start */}
                    <div className="about-counter-item">
                      <h2>
                        <span className="counter">1082</span>+
                      </h2>
                      <p>Helping families and businesses to their new destinations</p>
                    </div>
                    {/* About Counter Item End */}
                  </div>
                  {/* About Counter Box End */}
                  {/* About Us Button Start */}
                  <div className="about-us-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a href="/about-us" className="btn-default">
                      more about us
                    </a>
                  </div>
                  {/* About Us Button End */}
                </div>
                {/* About Us Content End */}
              </div>
              <div className="col-lg-12 order-3">
                {/* About Owner Box Start */}
                <div className="about-owner-box">
                  {/* About Owner Info Start */}
                  <div className="about-owner-info">
                    <div className="about-owner-content wow fadeInUp">
                      <p>
                        Backed by a strong network and years of expertise, we set new benchmarks in the industry by combining efficiency, affordability, and trust. When you choose JT Packers Movers, you choose a partner who moves more than just goods—we move your world with care.
                       
                        We are not just movers—we are partners in your journey, committed to setting new standards in safety, reliability, and customer satisfaction.
                      </p>
                    </div>
                  
                  </div>
                  {/* About Owner Info End */}
                  {/* About Owner Image Start */}
                  <div className="about-owner-image">
                   
                      <img src="/assets/images/img-2.webp" alt="" />
                   
                  </div>
                  {/* About Owner Image End */}
                </div>
                {/* About Owner Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* About Us Section End */}
      </>


      <>
        {/* Our Services Section Start */}
        <div className="our-services dark-section">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Services</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Trusted Packing and Moving <span>Solutions</span>
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/assets/images/icon-service-item-1.svg" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="#">Residential Moving</a>
                    </h3>
                    <p>
                      Hassle-free home relocation services tailored to your needs. to
                      your needs.
                    </p>
                  </div>
                  <div className="service-btn">
                
                  </div>
                </div>
                {/* Service Item End */} 
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/assets/images/icon-service-item-2.svg" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="#">Commercial Moving</a>
                    </h3>
                    <p>
                      Professional moving services tailored to business ensuring
                      efficient timely relocations.
                    </p>
                  </div>
                  <div className="service-btn">
                   
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/assets/images/icon-service-item-3.svg" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="#">Specialty Item Moving</a>
                    </h3>
                    <p>
                      Expert handling for fragile and valuable items, ensuring safe
                      transport of antiques.
                    </p>
                  </div>
                  <div className="service-btn">
                   
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/assets/images/icon-service-item-4.svg" alt="" />
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="#">Courier & Cargo Services</a>
                    </h3>
                    <p>
                     Fast, Reliable & Secure Delivery Across Destinations
                    </p>
                  </div>
                  <div className="service-btn">
                 
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div
                  className="section-footer-text wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <p>
                    Expert packing for your move.{" "}
                    <a href="/contact-us/">Contact now</a>
                  </p>
             
                </div>
                {/* Section Footer Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Services Section End */}
      </>



      <>
        {/* Our Projects Section Start */}
        <div className="our-projects">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-6">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">We Serve</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Trusted Moving Solutions in <span>Your City </span>
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-lg-6">
                {/* Section Title Content Start */}
                <div
                  className="section-title-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                    Take a closer look at our recent projects and see how we turn
                    every move into a seamless experience. From small local moves to
                    large-scale relocations, we're proud to showcase the care.
                  </p>
                </div>
                {/* Section Title Content End */}
              </div>
            </div>
            <div className="row">
             
         
         <CitiesLoop/>

            </div>
          </div>
        </div>
        {/* Our Projects Section End */}
      </>


      <>
        {/* Our Work Process Section Start */}
        <div className="our-work-process dark-section">
          <div className="container">
            <div className="row section-row">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">our work process</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Reliable moving services built <span>around you</span>
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
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
                    <p>
                 Once you are satisfied with our quotation, simply confirm the booking and we’ll take it from there.
                    </p>
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
                    <p>
                     Our team carefully packs all your belongings using quality materials and loads them securely into our vehicle
                    </p>
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
                    <p>
                     We ensure safe and timely transportation of your goods to the desired destination with our reliable fleet.
                    </p>
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
                    <p>
                    Upon arrival, we unload your goods and help set them up safely at your new location.
                    </p>
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


      <>
        {/* Why Choose Us Section Start */}
        <div className="why-choose-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="why-choose-box">
                  {/* Why Choose Content Start */}
                  <div className="why-choose-content">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h3 className="wow fadeInUp">why choose us</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        The Trusted Choice for Stress-Free  <span>Moving</span>
                      </h2>
                    </div>
                    {/* Section Title End */}
                    {/* Why Choose Body Start */}
                    <div
                      className="why-choose-body wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <ul>
                        <li className="text-dark">On-Time Service – Punctual relocations with complete transparency and no hidden charges..</li>
                        <li className="text-dark">Safe & Secure – Your belongings are handled with the utmost care and protection.</li>
                        <li className="text-dark">Tailored Solutions – Moving plans designed to suit your unique requirements.</li>
                        <li className="text-dark">Eco-Friendly Approach – Sustainable practices that care for both you and the environment.</li>
                      </ul>
                    </div>
                    {/* Why Choose Body End */}
                  </div>
                  {/* Why Choose Content End */}
                  {/* Request Quote Form Start */}
                  <div
                    className="request-quote-form-box wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h3>request a quote</h3>
                    {/* Request Quote Form Start */}
                    <div className="request-quote-form">
                      <form id="requestquoteForm" action="#" method="POST">
                        <div className="row">
                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="name"
                              required=""
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              required=""
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              required=""
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="date"
                              name="date"
                              className="form-control"
                              id="date"
                              required=""
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <input
                              type="text"
                              name="city"
                              className="form-control"
                              id="city"
                              placeholder="City"
                              required=""
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group col-md-12 mb-4">
                           <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              rows={4}
                              placeholder="Message"
                              defaultValue={""}
                            />  
                            <div className="help-block with-errors" />
                          </div>
                          
                          <div className="form-group col-md-12">
                            <button type="submit" className="btn-default">
                              Submit
                            </button>
                            <div id="msgSubmit" className="h3 hidden" />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Request Quote Form End */}
                  </div>
                  {/* Request Quote Form End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section End */}
      </>


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
            <TestimonialSlider/>
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
              <div className="col-lg-6">
                <div className="faq-content-box">
                  {/* Our Faqs Content Start */}
                  <div className="our-faqs-content">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h3 className="wow fadeInUp">frequently asked questions</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Everything You Need to Know About <span> JT Packers Movers</span>
                      </h2>
                    </div>
                    {/* Section Title End */}
                    {/* FAQ Accordion Start */}
                    <FAQAccordion/>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* Our Faqs Content End */}
                </div>
              </div>
              <div className="col-lg-6">
                {/* Faqs Image Start */}
                <div className="faqs-image">
                  <div className="faq-image">
                  
                      <img src="/assets/images/img-3.webp" alt="" />
                   
                  </div>
                  {/* Intro Video Button Start */}
              
                  {/* Intro Video Button End */}
                </div>
                {/* Faqs Image End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Faqs Section End */}
      </>

      <>
        {/* Scrolling Ticker Section Start */}
        <div className="our-scrolling-ticker">
          {/* Scrolling Ticker Start */}
          <div className="scrolling-ticker-box">
            <div className="scrolling-content">
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                100% trusted trasportation
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                Safe & secure packing
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                On-time delivery guaranteed
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
               Affordable moving solutions
              </span>
            </div>
            <div className="scrolling-content">
             <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                100% trusted trasportation
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                Safe & secure packing
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
                On-time delivery guaranteed
              </span>
              <span>
                <img src="/assets/images/icon-asterisk.svg" alt="" />
               Affordable moving solutions
              </span>
            </div>
          </div>
          {/* Scrolling Ticker End */}
        </div>
        {/* Scrolling Ticker Section End */}
      </>





    </>



  );
}
