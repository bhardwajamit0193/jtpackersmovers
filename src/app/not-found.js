// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
  <>
  {/* Page Header Start */}
  <div className="page-header parallaxie">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Page Header Box Start */}
          <div className="page-header-box">
            <h1 className="text-anime-style-2" data-cursor="-opaque">
              Page not found
            </h1>
            
          </div>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* error section start */}
  <div className="error-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        
          <div className="error-page-content">
            <div className="section-title">
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Oops! page <span>not found</span>
              </h2>
            </div>
            <div className="error-page-content-body">
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                The page you are looking for does not exist.
              </p>
              <Link
                className="btn-default wow fadeInUp"
                data-wow-delay="0.4s"
                href="/"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* error section end */}
</>
  );
}
