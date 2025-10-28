import React from 'react';


import PostLoop from './PostLoop';
import { BlogList } from '@/lib/Blog';
import { PhoneCall, Mail } from 'react-feather';

const LatestBlog = () => {
  // Randomizing and getting the first 4 items
  const randomizedPackages = BlogList
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 4); // Get the first 4 after shuffling

  return (
    <>



      <div
        className="contact-info-item wow fadeInUp mb-3"
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

      <div className="mb-4 rounded shadow p-4">



        <div className="mb-3">
          <h2 className="h4 fw-bold text-dark">Latest</h2>
        </div>

        <div className="row g-4">
          {randomizedPackages.map((item) => (
            <div key={item.key} className="col-12">
              <PostLoop
                imageSrc={item.imageSrc}
                linkHref={item.linkHref}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>


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

    </>

  );
};

export default LatestBlog;
