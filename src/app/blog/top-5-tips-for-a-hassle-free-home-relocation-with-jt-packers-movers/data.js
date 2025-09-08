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
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Moving to a new home can be exciting, but it can also be stressful without proper planning. At <strong>JT Packers Movers</strong>, we ensure a smooth and safe relocation experience for you and your family.</p>`,
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">From packing delicate items to transporting heavy furniture, our expert team handles everything efficiently. Here are the top 5 tips to make your home move hassle-free.</p>`
    ]
  },
  {
    id: 'plan-early',
    title: '1. Plan Early and Make a Checklist',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Start your move planning at least a few weeks in advance. Create a checklist of tasks like packing, transportation, and utility transfers to stay organized.</p>`
    ]
  },
  {
    id: 'choose-professional',
    title: '2. Choose Professional Packers & Movers',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Hiring reliable professionals like <strong>JT Packers Movers</strong> ensures that your belongings are packed securely, transported safely, and delivered on time.</p>`
    ]
  },
  {
    id: 'pack-smart',
    title: '3. Pack Smart and Label Boxes',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Use sturdy boxes and packing materials. Label each box with its contents and destination room to make unpacking easier and faster.</p>`
    ]
  },
  {
    id: 'safeguard-essentials',
    title: '4. Safeguard Essential Items',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">Keep important documents, valuables, and essentials with you during the move to avoid misplacement or delays.</p>`
    ]
  },
  {
    id: 'final-thoughts',
    title: '5. Final Thoughts',
    paragraphs: [
      `<p class="text-secondary fs-6 mb-2 wow fadeInUp">With careful planning and professional support from <strong>JT Packers Movers</strong>, your relocation can be stress-free and smooth. Contact us today to schedule your move!</p>`
    ]
  }
];



  const tableItems = contentItems.map(({ id, title }) => ({ id, label: title }));


  return (

    <div className="page">

      <PageHeader
        title="Top 5 Tips for a Hassle-Free Home Relocation with JT Packers Movers"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Top 5 Tips for a Hassle-Free Home Relocation with JT Packers Movers" }
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
                      src="/assets/images/blog1.jpg"
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