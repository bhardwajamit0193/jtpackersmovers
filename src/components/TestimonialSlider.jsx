import testimonials from "@//lib/testimonials"; // adjust path as needed

export default function TestimonialSlider() {
  return (
    <div className="testimonial-slider">
      <div className="swiper">
        <div className="swiper-wrapper" data-cursor-text="Drag">
          {testimonials.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <div className="testimonial-item">
                <div className="author-image">
                  <figure className="image-anime">
                    <img src={item.img} alt={item.name} />
                  </figure>
                </div>
                <div className="author-content">
                  <div className="author-title">
                    <h3>
                      {item.name}, {item.location}
                    </h3>
                  </div>
                  <div className="author-rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <i key={i} className="fa-solid fa-star" />
                      ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Swiper Navigation */}
        <div className="testimonial-btn">
          <div className="testimonial-btn-prev" />
          <div className="testimonial-btn-next" />
        </div>
      </div>
    </div>
  );
}
