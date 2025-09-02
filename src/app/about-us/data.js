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
                  <figure className="image-anime reveal">
                    <img src="/assets/images/blog-img-01.jpg" alt="" />
                  </figure>
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
                    <figure className="image-anime reveal">
                      <img src="/assets/images/service-img-03.jpg" alt="" />
                    </figure>
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
                <figure className="image-anime reveal">
                  <img src="/assets/images/our-approach-image-1.jpg" alt="" />
                </figure>
              </div>
              <div className="trusted-client-box wow fadeInUp">
                <h3>Trusted by 3500+ clients for reliable moves.</h3>
              </div>
            </div>
            {/* Our Approach Image Box End */}
            {/* Our Approach Image Box Start */}
            <div className="our-approach-img-box">
              <div className="our-approach-img-2">
                <figure className="image-anime reveal">
                  <img src="/assets/images/our-approach-image-2.jpg" alt="" />
                </figure>
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
              <h3 className="wow fadeInUp">our approach</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Discover the heart of <span>our mission</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Our mission is rooted in providing seamless, stress-free moving
                experiences tailored to your unique needs, ensuring that every
                step of your relocation is handled with care, efficiency, and
                professionalism.
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
                    Our mission is to provide hassle-free, customized moving
                    services with a focus on care and efficiency
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
                    Our vision is to redefine the moving experience by
                    prioritizing customer satisfaction and innovative solutions.
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
              <figure className="image-anime ">
                <img src="/assets/images/success-story-image-1.jpg" alt="" />
              </figure>
            </div>
            {/* Success Story Image 1 End */}
            {/* Success Story Image 2 Start */}
            <div className="success-story-img-2">
              <figure className="image-anime">
                <img src="/assets/images/success-story-image-2.jpg" alt="" />
              </figure>
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
                  <a href="tel:+91123456789">+91 123 456 789</a>
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
              <h3 className="wow fadeInUp">Real Stories, Real Moves</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Transforming moves into <span>success stories</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                We take pride in delivering seamless moving
                experiences that lead to happy clients. Read the success stories
                of those who trusted us to handle their relocations with care
                and efficiency.
              </p>
            </div>
            {/* Section Title End */}
            {/* Success Story Body Start */}
            <div
              className="success-story-body wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <ul>
                <li>See how we simplify moves.</li>
                <li>Effortless moving with experts.</li>
                <li>Explore our stress moving process.</li>
                <li>Making relocation simple.</li>
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