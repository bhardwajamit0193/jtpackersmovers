"use client";

import BookingForm from "./BookingForm";


export default function Sidebar() {
  return (
     <div className="page-single-sidebar">
                                    <div
                                        className="contact-info-item wow fadeInUp"
                                        data-wow-delay="0.2s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.2s",
                                            animationName: "fadeInUp"
                                        }}
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

                                    {/* Project Detail List Start */}
                                    <div className="project-detail-box wow fadeInUp">
                                        {/* Project Deatil Title Start */}
                                        <div className="project-detail-title">
                                            <h3>Get Your Free Quote Today</h3>
                                        </div>
                                        <div>
                                            <BookingForm />
                                        </div>



                                    </div>
                                    {/* Project Detail List End */}
                                    {/* Sidebar CTA Box Start */}
                                    <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                                        {/* Cta Content Start */}

                                        {/* Sidebar CTA Content Start */}
                                        <div className="sidebar-cta-content">
                                            <h3>How can we help?</h3>
                                            <p className="mb-2">We are innovative enough to Safeguard your goods</p>
                                            <p>
                                                <a href="mailto:enquiry@jtpackersmovers.com">enquiry@jtpackersmovers.com
                                                </a>
                                            </p>
                                        </div>
                                        {/* Sidebar CTA Content End */}
                                        {/* Sidebar CTA Button Start */}
                                        <div className="sidebar-cta-btn">
                                            <a href="tel:+919058824450">
                                                <img src="/assets/images/icon-phone.svg" alt="" />
                                                +91 9058824450
                                            </a>
                                        </div>
                                        {/* Sidebar CTA Button End */}
                                    </div>
                                    {/* Sidebar CTA Box End */}
                                </div>
  );
}
