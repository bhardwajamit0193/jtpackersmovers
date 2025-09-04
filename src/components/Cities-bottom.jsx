
"use client";

import Link from "next/link";

const cities = [
  { name: "Agra", slug: "agra" },
  { name: "Noida", slug: "noida" },
  { name: "Ghaziabad", slug: "ghaziabad" },
  { name: "Mathura", slug: "mathura" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Moradabad", slug: "moradabad" },
  { name: "Meerut", slug: "meerut" },
  { name: "Delhi", slug: "delhi" },
  { name: "Pune", slug: "pune" },
  { name: "Kanpur", slug: "kanpur" },
];

export default function CitiesBottom() {
  return (
    <section className="our-faqs py-10">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="faq-content-box">
              {/* Section Title */}
              <div className="our-faqs-content">
                <div className="section-title mb-6">
                  <h3 className="wow fadeInUp">Cities</h3>
                  <h2
                    className="text-anime-style-2"
                    data-cursor="-opaque"
                  >
                    Trusted Moving Solutions in <span>Your City</span>
                  </h2>
                </div>

                {/* City Links */}
                <div className="post-tags">
                  <span className="tag-links flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/packers-and-movers-in-${city.slug}`}
                        className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm transition"
                      >
                        Packers and Movers in {city.name}
                      </Link>
                    ))}
                  </span>
                </div>
              </div>
              {/* End Section Title */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
