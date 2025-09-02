// components/FAQAccordion.js
"use client";

import faqs from "@/lib/faq";

export default function FAQAccordion() {
  return (
    <div className="faq-accordion" id="faqaccordion">
      {faqs.map((faq, index) => {
        const headingId = `heading${index}`;
        const collapseId = `collapse${index}`;

        return (
          <div
            className="accordion-item wow fadeInUp"
            key={index}
          >
            <h2 className="accordion-header" id={headingId}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={collapseId}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={headingId}
              data-bs-parent="#faqaccordion"
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
