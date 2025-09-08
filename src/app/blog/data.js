"use client";
import { BlogLoop } from '@/components/BlogLoop';
import PageHeader from '@/components/PageHeader';


import { BlogList } from '@/lib/Blog';

export default function PageData() {




    return (
        <div className="page">

            <PageHeader
                title="Blog"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog" }
                ]}
            />

            <main>




                <section className="bg-gray py-12">
                    <div className="container mx-auto px-4">


                        <div className="row my-5">
                            {BlogList.map((item) => (
                                <BlogLoop
                                    key={item.key}
                                    img={item.imageSrc} // ✅ rename this to match `img` in BlogLoop
                                    link={item.linkHref}
                                    title={item.title}
                                    descr={item.description}
                                />


                            ))}

                        </div>


                    </div>
                </section>


            </main>

        </div>
    );
}