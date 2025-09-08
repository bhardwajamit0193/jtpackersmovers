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
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Moving to a new home or office can be stressful without proper planning and professional help. Choosing the right packers and movers ensures a smooth, safe, and efficient relocation.</p>`,
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">At <strong>JT Packers Movers</strong>, we provide reliable packing, transportation, and unpacking services across India, making your move hassle-free. Here's a complete guide to selecting the best movers for your needs.</p>`
    ]
  },
  {
    id: 'plan-move',
    title: '1. Plan Your Move in Advance',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Start planning your move well ahead of your moving date. Early planning allows you to book experienced movers and avoid last-minute hassles.</p>`,
      `<ul class="list-disc ml-6">
         <li class="fs-6"><strong>Book Early:</strong> Reserve your preferred date with JT Packers Movers to ensure availability</li>
         <li class="fs-6"><strong>Inventory Check:</strong> Make a list of items to move for better cost estimation</li>
         <li class="fs-6"><strong>Sort & Declutter:</strong> Reduce moving volume by donating or discarding unnecessary items</li>
      </ul>`
    ]
  },
  {
    id: 'choose-service',
    title: '2. Choose the Right Service',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Depending on your needs, you can choose from various services offered by JT Packers Movers:</p>`,
      `<ul class="list-disc ml-6">
         <li class="fs-6"><strong>Home Shifting:</strong> Complete packing, loading, transportation, and unpacking</li>
         <li class="fs-6"><strong>Office Relocation:</strong> Safe handling of office equipment, furniture, and documents</li>
         <li class="fs-6"><strong>Vehicle Transportation:</strong> Secure transport for cars, bikes, and other vehicles</li>
         <li class="fs-6"><strong>Storage Solutions:</strong> Temporary storage options for household or office items</li>
      </ul>`
    ]
  },
  {
    id: 'packing-tips',
    title: '3. Check Packing Materials and Techniques',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Proper packing ensures your belongings are safe during transit. Always check the packing materials and methods used by the movers:</p>`,
      `<ul class="list-disc ml-6">
         <li class="fs-6">High-quality boxes, bubble wrap, and packing tape</li>
         <li class="fs-6">Labeling of boxes for easy unpacking</li>
         <li class="fs-6">Special care for fragile items, electronics, and furniture</li>
         <li class="fs-6">Insurance options for valuable goods</li>
      </ul>`
    ]
  },
  {
    id: 'cost-estimation',
    title: '4. Compare Costs and Reviews',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">While cost is important, it should not compromise the quality of your move. Compare multiple movers based on price, services, and reviews.</p>`,
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">JT Packers Movers provides transparent pricing with no hidden charges, ensuring value for money along with professional service.</p>`
    ]
  },
  {
    id: 'final-thoughts',
    title: 'Final Thoughts',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Choosing professional movers and packers like <strong>JT Packers Movers</strong> takes the stress out of relocating. From expert packing to safe transport and timely delivery, we ensure your belongings reach their destination securely and efficiently.</p>`,
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp"><strong>Ready for a hassle-free move?</strong> Contact JT Packers Movers today and experience a smooth, reliable, and professional relocation service.</p>`
    ]
  }
];



  const tableItems = contentItems.map(({ id, title }) => ({ id, label: title }));


  return (

    <div className="page">

      <PageHeader
        title="The Ultimate Guide to Choosing Reliable Packers & Movers"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Ultimate Guide to Choosing Reliable Packers & Movers" }
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
                      src="/assets/images/post-2.jpg"
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