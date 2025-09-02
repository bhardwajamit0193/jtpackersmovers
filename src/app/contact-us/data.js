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
                title="Contact Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" }
                ]}
            />


            <>
   <>
  {/* Page Contact Us Start */}
  <div className="page-contact-us">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          {/* Contact Us Content Start */}
          <div className="contact-us-content">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">contact form</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Get in to <span>touch</span>
              </h2>
            </div>
            {/* Section Title End */}
            {/* Contact Info List Start */}
            <div className="contact-info-list">
              {/* Contact Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-phone.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <p>call to question</p>
                  <h3>
                    <a href="tel:123456789">+91 123 456 789</a>
                  </h3>
                </div>
              </div>
              {/* Contact Info Item End */}
              {/* Contact Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-mail.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <p>send e-mail</p>
                  <h3>
                    <a href="mailto:info@domain.com">info@domain.com</a>
                  </h3>
                </div>
              </div>
              {/* Contact Info Item End */}
              {/* Contact Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-location.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <p>visit anytime</p>
                  <h3>Nodia Delhi NCR</h3>
                </div>
              </div>
              {/* Contact Info Item End */}
            </div>
            {/* Contact Info List End */}
          </div>
          {/* Contact Us Content End */}
        </div>
        <div className="col-lg-8">
          {/* Contact Us Form Start */}
          <div className="contact-us-form">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Send message <span>with us</span>
              </h2>
            </div>
            {/* Section Title End */}
            {/* Contact Form Start */}
            <div className="contact-form">
              <form
                id="contactForm"
                action="#"
                method="POST"
                data-toggle="validator"
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      id="fname"
                      placeholder="First Name"
                      required=""
                    />
                    <i className="fa-regular fa-user" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="lname"
                      className="form-control"
                      id="lname"
                      placeholder="Last Name"
                      required=""
                    />
                    <i className="fa-regular fa-user" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <i className="fa-regular fa-envelope" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone Number"
                      required=""
                    />
                    <img src="images/icon-phone-primary.svg" alt="" />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-12 mb-5">
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
                  <div className="col-lg-12">
                    <div className="contact-form-btn">
                      <button type="submit" className="btn-default">
                        submit message
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Form End */}
          </div>
          {/* Contact Us Form End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Contact Us End */}
</>

<>
  {/* Google Map Start */}
  <div className="google-map">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          {/* Google Map Start */}
          <div className="google-map-iframe">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.96933955653!2d77.10645588985462!3d28.521882382289068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1756840296157!5m2!1sen!2sin" allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Google Map End */}
        </div>
      </div>
    </div>
  </div>
  {/* Google Map End */}
</>



            </>


        </div>
    );
}