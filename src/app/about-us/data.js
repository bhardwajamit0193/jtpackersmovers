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
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />


      <>
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
                        Trusted Relocation <span>Experts in India</span>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        With over 12 years of experience, JT Packers & Movers has established itself as a trusted name in the packing and moving industry across India. We specialize in providing safe, efficient, and reliable relocation services for both residential and commercial clients.
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
                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                          Our Journey
                        </h2>
                        <p>
                          Founded over a decade ago with a simple vision — to make shifting easy and stress-free — JT Packers & Movers has grown steadily through hard work, dedication, and customer trust. From our humble beginnings with a small local team, we have expanded our operations across major Indian cities including <b>Delhi, Noida, Agra, Lucknow, Pune, Ghaziabad, Kanpur, Moradabad, Meerut and Mathura</b></p>
                        <br></br> <p>Our focus has always been on quality service, customer satisfaction, and complete transparency. Every move is handled by a professional, well-trained team that ensures your belongings are packed carefully, transported safely, and delivered on time.</p>
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
          <div className="container">
            <div className="success-story-content">
              <div className="section-title">
                <h2
                  className="text-anime-style-2"
                  data-cursor="-opaque"
                  style={{ fontSize: "2rem" }}
                >
                  What <span>We Do</span>
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
                >
                  Every relocation is unique — and so is our approach. At JT Packers & Movers, we provide end-to-end moving solutions tailored to your needs, ensuring a seamless experience from start to finish.
                </p>
              </div>

              <div className="success-story-body wow fadeInUp" data-wow-delay="0.4s">
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li><strong>Home Relocation:</strong> Expert packing, loading, transport, and unpacking — we make your house move simple and secure.</li>
                  <li><strong>Office Shifting:</strong> Organized relocation with minimal downtime so your business never stops.</li>
                  <li><strong>Car & Bike Transport:</strong> Door-to-door vehicle shifting with professional handling and insurance coverage.</li>
                  <li><strong>Local & Intercity Moves:</strong> Quick and reliable transportation whether within your city or across India.</li>
                  <li><strong>Storage & Warehousing:</strong> Clean, safe, and insured storage facilities for short or long durations.</li>
                </ul>
              </div>
            </div>
          </div>

        </>

        <>
          {/* Our Approach Section Start */}
          <div className="our-approach dark-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* Our Approach Image Start */}
                  <div className="our-approach-image">
                    {/* Our Approach Image Box Start */}
                    <div className="our-approach-img-box">
                      <div className="our-approach-img-1">
                      
                          <img src="/assets/images/img-7.webp" alt="" />
                      
                      </div>
                      <div className="trusted-client-box wow fadeInUp">
                        <h3>Trusted by 3500+ clients for reliable moves.</h3>
                      </div>
                    </div>
                    {/* Our Approach Image Box End */}
                    {/* Our Approach Image Box Start */}
                    <div className="our-approach-img-box">
                      <div className="our-approach-img-2">
                       
                          <img src="/assets/images/img-6.webp" alt="" />
                        
                      </div>
                    </div>
                    {/* Our Approach Image Box End */}
                  </div>
                  {/* Our Approach Image End */}
                </div>
                <div className="col-lg-6">
                  {/* Our Approch Content Start */}
                  <div className="our-approch-content">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h3 className="wow fadeInUp">our Strengths</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Discover the heart of <span>our Strengths</span>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        What makes JT Packers & Movers different is our commitment to quality and honesty.
                        Each relocation project is managed by trained professionals who follow a strict process — from packing and labeling to loading, transportation, and unpacking.
                      </p>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        We use high-grade packing materials, GPS-enabled vehicles, and an efficient tracking system to ensure complete peace of mind for our customers.
                      </p>
                    </div>
                    {/* Section Title End */}
                    {/* Mission Vision List Start */}
                    <div className="mission-vision-list">
                      {/* MIssion Vision Item Start */}
                      <div
                        className="mission-vision-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="icon-box">
                          <img src="/assets/images/icon-our-mission.svg" alt="" />
                        </div>
                        <div className="mission-vision-content">
                          <h3>our mission</h3>
                          <p>
                            Our mission is to deliver safe, reliable, and affordable relocation services that people can genuinely trust.
                            We aim to redefine the moving experience in India through professionalism, integrity, and innovation.
                          </p>
                        </div>
                      </div>
                      {/* MIssion Vision Item End */}
                      {/* MIssion Vision Item Start */}
                      <div
                        className="mission-vision-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="icon-box">
                          <img src="/assets/images/icon-our-vision.svg" alt="" />
                        </div>
                        <div className="mission-vision-content">
                          <h3>our vision</h3>
                          <p>
                            Our vision is to become the most preferred logistics and relocation company in India, recognized for quality service, customer satisfaction, and consistent growth.
                          </p>
                        </div>
                      </div>
                      {/* MIssion Vision Item End */}
                    </div>
                    {/* Mission Vision List End */}
                  </div>
                  {/* Our Approch Content End */}
                </div>
              </div>
            </div>
          </div>
          {/* Our Approach Section End */}
        </>

        <>
          {/* Our Success Story Section Start */}
          <div className="our-success-story">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* Success Story Images Start */}
                  <div className="success-story-images">
                    {/* Success Story Image 1 Start */}
                    <div className="success-story-img-1">
                   
                        <img src="/assets/images/img-5.webp" alt="" />
                      
                    </div>
                    {/* Success Story Image 1 End */}
                    {/* Success Story Image 2 Start */}
                    <div className="success-story-img-2">
                  
                        <img src="/assets/images/img-4.webp" alt="" />
                     
                    </div>
                    {/* Success Story Image 2 End */}
                    {/* Contact Now Box Start */}
                    <div className="contact-now-box">
                      <div className="icon-box">
                        <img src="/assets/images/icon-phone-primary.svg" alt="" />
                      </div>
                      <div className="contact-now-box-content">
                        <h3>call us now</h3>
                        <p>
                          <a href="tel:+919058824450">+91 9058824450</a>
                        </p>
                      </div>
                    </div>
                    {/* Contact Now Box End */}
                  </div>
                  {/* Success Story Images End */}
                </div>
                <div className="col-lg-6">
                  {/* Success Story Content Start */}
                  <div className="success-story-content">
                    {/* Section Title Start */}
                    <div className="section-title ">
                      <h3 className="wow fadeInUp">Choose Us</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Why Customers Choose <span>JT Packers & Movers</span>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        We’re not just another moving company — we’re a team built on trust, reliability, and experience. For over 12 years, families and businesses across India have chosen us because we deliver more than just a relocation — we deliver peace of mind.
                      </p>
                    </div>
                    {/* Section Title End */}
                    {/* Success Story Body Start */}
                    <div
                      className="success-story-body wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <ul>
                        <li><strong>Proven Expertise:</strong> With 12+ years of hands-on experience, we understand every challenge of shifting and how to handle it smoothly.</li>
                        <li><strong>Professional Team:</strong> Our trained staff ensures every item — from fragile glass to heavy furniture — is packed and delivered safely.</li>
                        <li><strong>Nationwide Reach:</strong> From Delhi, Agra, Lucknow, Pune, Jaipur, to Bangalore, we cover every major city in India.</li>
                        <li><strong>Safe & Timely Delivery:</strong> GPS-enabled tracking, verified drivers, and on-time delivery — every time.</li>
                        <li><strong>Transparent Pricing:</strong> No hidden charges, just clear, honest rates that fit your budget.</li>
                      </ul>
                    </div>
                    {/* Success Story Body End */}
                    {/* Success Story Button Start */}
                    <div
                      className="success-story-btn wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <a href="/contact-us" className="btn-default">
                        contact us
                      </a>
                    </div>
                    {/* Success Story Button End */}
                  </div>
                  {/* Success Story Content End */}
                </div>
              </div>
            </div>
          </div>
          {/* Our Success Story Section End */}
        </>


      </>


    </div>
  );
}