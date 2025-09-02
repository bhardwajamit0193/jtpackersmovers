import cities from "@/lib/cities"; // adjust path as needed

export default function CitiesLoop() {
  return (
    <div className="row">
      {cities.map((city, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          {/* Project Item Start */}
          <div
            className="project-item wow fadeInUp"
            data-wow-delay={`${0.2 + index * 0.1}s`}
          >
            <div className="project-image">
              <figure className="image-anime">
                <img src={city.img} alt={city.name} />
              </figure>
              <div className="project-btn">
                <a href={city.link}>
                  <img src="/assets/images/arrow-white.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>
                <a href={city.link}>{city.name}</a>
              </h3>
            
            </div>
          </div>
          {/* Project Item End */}
        </div>
      ))}
    </div>
  );
}
