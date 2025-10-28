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
                    <a href="tel:9058824450">+91 9058824450</a>
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
                    <a href="mailto:enquiry@jtpackersmovers.com">enquiry@jtpackersmovers.com</a>
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
                  <h3>Hig-A 39 Indirapuram, 100 ft Road Near Shamshabad Road , 282001, Agra.</h3>
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
                    <img src="/assets/images/icon-phone-primary.svg" alt="" />
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
             <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hig-A%2039%20Indirapuram,%20100%20ft%20Road%20Near%20Shamshabad%20Road%20,%20282001,%20Agra.+(JT%20Packers%20Movers)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowFullScreen=""
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
