"use client";



import Image from 'next/image';

import LatestBlog from '@/components/LatestBlog';
import Author from '@/components/Author';
import TableOfContents from '@/components/TableOfContents';
import PageHeader from '@/components/PageHeader';
import TestimonialSlider from '@/components/TestimonialSlider';
import CitiesBottom from '@/components/Cities-bottom';


export default function PageData() {

const contentItems = [
  {
    id: 'intro',
    title: 'Introduction',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Office relocation requires meticulous planning and professional handling. At <strong>JT Packers Movers</strong>, we specialize in seamless corporate moves, ensuring minimal downtime and maximum efficiency.</p>`,
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Here’s why choosing our services is the best decision for your office relocation.</p>`
    ]
  },
  {
    id: 'experienced-team',
    title: '1. Experienced Team for Efficient Relocation',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Our trained team has years of experience handling office equipment, furniture, and IT assets, ensuring a safe and organized move.</p>`
    ]
  },
  {
    id: 'customized-packaging',
    title: '2. Customized Packaging for Valuable Equipment',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">We use specialized packing materials and techniques to safeguard sensitive equipment like computers, servers, and electronics during transit.</p>`
    ]
  },
  {
    id: 'timely-delivery',
    title: '3. Timely Delivery and Setup',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">We ensure that your office is relocated and set up on schedule, so your business operations can resume without unnecessary delays.</p>`
    ]
  },
  {
    id: 'insurance-benefits',
    title: '4. Insurance and Safety',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Your assets are protected during transit with our comprehensive insurance options, giving you peace of mind.</p>`
    ]
  },
  {
    id: 'contact-us',
    title: 'Final Thoughts',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Choosing <strong>JT Packers Movers</strong> guarantees a professional, safe, and hassle-free office relocation. Contact us today to plan your corporate move with confidence.</p>`
    ]
  }
];



  const tableItems = contentItems.map(({ id, title }) => ({ id, label: title }));


  return (

    <div className="page">

      <PageHeader
        title="Why Choosing JT Packers Movers is the Best Decision for Your Office Relocation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Choosing JT Packers Movers is the Best Decision for Your Office Relocation" }
        ]}
      />
      <main>

        <div className="container mx-auto">
          <div className="row ">


            <div className="col-md-8 left-col">
              {/* Left content (60%) */}

              <div className="container">
                <div className="card shadow-lg rounded-3 my-3">
                  <div className="card-body px-3 pt-2">
                    <img
                      src="/assets/images/blog2.jpg"
                      width={450}
                      height={350}
                      className="img-fluid my-3 rounded w-100"
                      alt="Tempo Traveller"
                    />



                    <TableOfContents items={tableItems} />

                    {contentItems.map((item) => (
                      <div id={item.id} key={item.id} className="post-entry">
                        <h2 className="text-anime-style-2 fs-2">{item.title}</h2>
                        {item.paragraphs.map((para, index) => (
                          <div
                            key={index}
                            className="text-secondary small mb-2 wow fadeInUp"
                            dangerouslySetInnerHTML={{ __html: para }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='post-entry p-4'>

                <Author id="1" />

              </div>
            </div>
            <div className="col-md-4 right-col">
              {/* Right content (40%) */}
              <div className="sticky top-0 mt-4">
                <div className='mb-4'>

                </div>

                <LatestBlog />
              </div>
            </div>
          </div>
        </div>





  <>
                    {/* Our Testimonials Section Start */}
                    <div className="our-testimonials">
                        <div className="container">
                            <div className="row section-row">
                                <div className="col-lg-12">
                                    {/* Section Title Start */}
                                    <div className="section-title section-title-center">
                                        <h3 className="wow fadeInUp">testimonials</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Voices of Our Valued <span>our customers</span>
                                        </h2>
                                    </div>
                                    {/* Section Title End */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Testimonial Slider Start */}
                                    <TestimonialSlider />
                                    {/* Testimonial Slider End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Testimonials Section End */}
                </>

                <>
                   <CitiesBottom/>
                </>


      </main>
    </div>


  );
}