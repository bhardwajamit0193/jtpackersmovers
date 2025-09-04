"use client";

import Link from "next/link";

export default function PageHeader({ title, img =null, breadcrumbs = [] }) {
  return (
    <div className="page-header parallaxie"
      style={img ? { backgroundImage: `url(${img})` } : {}}
    >
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-12">
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  {breadcrumbs.map((crumb, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${
                        index === breadcrumbs.length - 1 ? "active" : ""
                      }`}
                      aria-current={
                        index === breadcrumbs.length - 1 ? "page" : undefined
                      }
                    >
                      {crumb.href ? (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      ) : (
                        crumb.label
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  );
}
