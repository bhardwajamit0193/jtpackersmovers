"use client";

import BookingForm from "@/components/BookingForm";
import CitiesBottom from "@/components/Cities-bottom";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";


export default function Data() {
    return (
        <div className="page">
            <PageHeader
                title="Packers Movers Agra"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities", href: "/cities" },
                    { label: "Packers and Movers in Agra" }
                ]}
            />


            <>
                {/* Page Project Single Start */}
                <div className="page-project-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-2 order-lg-1 mt-3 md-mt-0">
                                {/* Project Sidebar Start */}
                                <Sidebar />
                                {/* Project Sidebar End */}
                            </div>
                            <div className="col-lg-8 order-1 order-lg-2  ">
                                {/* Project Single Content Start */}
                                <div className="project-single-content">
                                    {/* Page Single Image Start */}
                                    <div className="page-single-image">
                                        
                                            <Image
                                                src="/assets/images/packers-and-movers-in-agra.webp"
                                                alt="Agra City"
                                                width={800}   // set width
                                                height={600}  // set height
                                                priority      // optional (for above-the-fold images)
                                            />
                                        
                                    </div>
                                    {/* Page Single Image End */}
                                    {/* Project Entry Start */}
                                    <div className="project-entry">
                                        <h2 className="text-anime-style-2 h2">
                                            Packers Movers <span>Agra </span>
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Rely on professionals who know local roads and highways for your move, whether across Agra or beyond Uttar Pradesh.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                            Introducing <b>JT Packers Movers Agra</b>—Welcome to where our local expertise, reliable staff, and seamless process transform moving from a stressful task into a truly smooth experience, free from hassle or drama.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                                            We stand out as your most trusted partner by offering fast, affordable, and paradise-like moving experiences, tailored for everything from household goods and office gear to vehicles or bikes.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.6s">
                                            Ranging from packing and loading to transportation and delivery, our solutions take an end-to-end approach with 100% customer satisfaction as a concern.
                                        </p>
                                        <p className="wow fadeInUp" data-wow-delay="0.8s">
                                            With years of experience and a team of trained specialists, we ensure every move is error- and accident-free. Your belongings deserve this professional, no-nonsense service.
                                        </p>

                                        {/* Project Design Highlight Start */}
                                        <div className="project-essence-box">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Why Choose JT Packers Movers in <span>Agra?</span>
                                            </h2>
                                            <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                                <li>ISO-certified & government-approved packers and movers</li>
                                                <li>Trained staff for handling fragile, heavy, and valuable items</li>
                                                <li>Modern packing materials (bubble wrap, foam sheets, boxes)</li>
                                                <li>GPS-enabled vehicles for real-time tracking</li>
                                                <li>Door-to-door service across Agra & PAN India</li>
                                                <li>Transparent pricing with no hidden costs</li>
                                                <li>Free pre-move survey and quick quotation</li>
                                            </ul>

                                        </div>
                                        {/* Project Design Highlight End */}
                                        <div className="project-challenge">
                                            <h2 className="text-anime-style-2 fs-2">
                                                Home Relocation Services in <span>Agra</span>
                                            </h2>
                                            <p className="wow fadeInUp">
                                                A new residence should be a fun activity, not a source of anxiety. We remove the burden from your shoulders.
                                            </p>
                                            <p className="wow fadeInUp">
                                                Our home shifting in Agra service includes packing all the household goods, including furniture, appliances, as well as dishes. We are the trusted household movers in Agra that you need.
                                            </p>
                                            {/* Project Challenge Item List Start */}
                                            <div className="project-challenge-item-list">
                                                {/* Project Challenge Item Start */}
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/houseshifting.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Household Shifting in Agra</h3>
                                                        <p className="wow fadeInUp">
                                                            We provide safe transportation and direct delivery to your door.
                                                        </p>
                                                        <p><strong>Home House Move: What’s Included?</strong></p>
                                                        <ol style={{ listStyleType: "disc" }}>
                                                            <li style={{ marginBottom: "10px" }}>On-site pre-move inspection.</li>
                                                            <li style={{ marginBottom: "10px" }}>Electronic wrappings for fine products.</li>
                                                            <li style={{ marginBottom: "10px" }}>Loading and unloading are done by trained workers.</li>
                                                            <li style={{ marginBottom: "10px" }}>Rearranging and unpacking help when necessary.</li>
                                                            <li style={{ marginBottom: "10px" }}>Home-shifting insurance, domestic and intercity.</li>
                                                        </ol>
                                                        <p className="wow fadeInUp">
                                                            Our niche is local relocation inside <b>Agra</b> (Civil Lines, Kamla Nagar, Dayal Bagh, Shahganj, Sikandra), and long-distance moves to Delhi, Lucknow, Kanpur, Jaipur, Gurgaon, or any other city that you may be moving to. For the best <b>packers and movers near me in Agra</b>, just call us.
                                                        </p>

                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                {/* Project Challenge Item End */}
                                                {/* Project Challenge Item Start */}
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/office-shifting.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Office Relocation in Agra</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            In case your business is moving, our office relocation in Agra service will ensure that downtimes are minimal and necessary business assets are fully secured.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We coordinate all actions, managing computers, papers, servers, and furniture before installing your new workplace.
                                                        </p>
                                                        <p><strong>The Reason Why Agra Businesses Trust the Service:</strong></p>
                                                        <ol style={{ listStyleType: "disc" }}>
                                                            <li style={{ marginBottom: "10px" }}>Rapid assembly and expert re-assembly.</li>
                                                            <li style={{ marginBottom: "10px" }}>Dedicated IT equipment handling.</li>
                                                            <li style={{ marginBottom: "10px" }}>Moves during the weekend or after the workday to prevent inconveniences.</li>
                                                            <li style={{ marginBottom: "10px" }}>Easy setup through label-based systematic packing.</li>
                                                        </ol>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We will do all the logistics to ensure that your business is brought back on track with minimal time effect.
                                                        </p>
                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/car-and-bike-transport-services.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Car Carrier Services in Agra</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We provide car transport in Agra with fully enclosed carriers and hydraulic lifters for damage-free travel.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            In and out of UP or countrywide, our service would guarantee the safety of pickup to delivery.
                                                        </p>
                                                        <p><strong>Zero-Damage Transport Process of Cars:</strong></p>
                                                        <ol style={{ listStyleType: "disc" }}>
                                                            <li style={{ marginBottom: "10px" }}>Door-to-door delivery of pickup at your location.</li>
                                                            <li style={{ marginBottom: "10px" }}>Check before loading - Detailed inspection and documentation.</li>
                                                            <li style={{ marginBottom: "10px" }}>Selecting closed or open car carriers according to the budget.</li>
                                                            <li style={{ marginBottom: "10px" }}>GPS tracking is used in order to make everything transparent.</li>
                                                            <li style={{ marginBottom: "10px" }}>On time delivery and full insurance.</li>
                                                        </ol>

                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We take care of your car as we do ours, so that it will be in perfect condition.
                                                        </p>
                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/bike-transport-services.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Bike Transport Agra – The Two-Wheeler Care Package</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Your bike is something to be taken care of. In case of zero scratches, we use premium crates, bubble wrap, and special straps.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We move bikes from Agra to major cities (Delhi, Pune, Hyderabad, Bangalore, Chennai, etc.).
                                                        </p>
                                                        <h3 className="wow fadeInUp">Packing and Moving Agra – The Art of Secure Wrapping</h3>
                                                        <p>Our packing materials and labeling are also systematic and of international standard to avoid damage or confusion.</p>
                                                        <p><strong>It is Filled with The Elite Packing Materials We Use:</strong></p>
                                                        <ol style={{ listStyleType: "disc" }}>
                                                            <li style={{ marginBottom: "10px" }}>Bubble wrap of the highest quality, corrugated papers, and hard cardboard boxes.</li>
                                                            <li style={{ marginBottom: "10px" }}>Moisture protection and protective wrapping.</li>
                                                            <li style={{ marginBottom: "10px" }}>Special wooden boxes to carry delicate or priceless products.</li>
                                                            <li style={{ marginBottom: "10px" }}>Colour-coded and easy to identify and unload items.</li>
                                                        </ol>


                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/domestic.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Local & Domestic Shifting Services in Agra</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Our local moves in Agra and significant domestic moves across India make us the complete national experts in logistics.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Where local moves are concerned, we can normally get it over in less than 24 hours.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We have official permission to work between states and hire safe, reliable drivers.
                                                        </p>
                                                        <h4 className="wow fadeInUp">Interstate Relocation from Agra</h4>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Our services reach all parts of India: Agra to major metros and tier-2 cities: Delhi, Gurgaon, Noida, Jaipur, Lucknow, Mumbai, Pune, Hyderabad, Chennai, Kolkata.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Hassle-free interstate move. Our trained team will guarantee you a transparent track of your money without any problem.
                                                        </p>
                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/service-for-army-officers.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">A Salute to Service: Specializing in the Shifting of Indian Army Officers</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            It is an honor to serve the heroes in our country. We offer relocation services to officers and defense workers of the Indian Army in a special way.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                                                            Military life includes frequent moves, each requiring precision, trust, and respect.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.6s">
                                                            Our army relocation department can provide a hassle-free move at any part in India.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.8s">
                                                            Packing, secure loading, transport, and delivery on time will be taken care of through a military level of discipline and care.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="1.0s">
                                                            In cantonments, door-to-door service, vehicle transportation that is secure, and interim vehicle storage for the officers awaiting to get new accommodation are also under our umbrella.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="1.2s">
                                                            With JT Packers Movers Agra, you have a relocation partner who uniquely values your service and is dedicated to preserving your belongings with utmost respect and understanding.
                                                        </p>


                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                <div className="project-challenge-item">
                                                    {/* Project Challenge Image Start */}
                                                    <div className="project-challenge-image">
                                                        
                                                            <img
                                                                src="/assets/images/warehouse.webp"
                                                                alt=""
                                                            />
                                                        
                                                    </div>
                                                    {/* Project Challenge Image End */}
                                                    {/* Project Challenge Content Start */}
                                                    <div className="project-challenge-content">
                                                        <h3 className="wow fadeInUp">Storage and Warehouse in Agra -Safe House Your Stuff</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Requirement of a secure place to store before transit? Multiple short-term and long-term warehouses are available in Agra, which are fully insured.
                                                        </p>
                                                        <p><strong>Our Secure Storage has the following features:</strong></p>
                                                        <ol style={{ listStyleType: "disc" }}>
                                                            <li style={{ marginBottom: "10px" }}>24-hour CCTV monitoring and high security.</li>
                                                            <li style={{ marginBottom: "10px" }}>Infrastructural safety due to fire.</li>
                                                            <li style={{ marginBottom: "10px" }}>Regular pest control.</li>
                                                            <li style={{ marginBottom: "10px" }}>The convenience of being able to access easily.</li>
                                                        </ol>

                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            You are welcome to keep your consignments with us in a climate-controlled and very safe place until you are ready.
                                                        </p>
                                                        <h3 className="wow fadeInUp">Industrial and Commercial Shifting in Agra - Heavy Duty Moves</h3>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            Our other large industrial and commercial customers are those who move heavy machinery, shop goods, and complex machinery.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We use modern tools and equipment to handle very tough jobs.
                                                        </p>
                                                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                            We offer large-vehicle delivery and multi-city transfers for businesses.
                                                        </p>
                                                    </div>
                                                    {/* Project Challenge Content End */}
                                                </div>
                                                {/* Project Challenge Item End */}
                                            </div>
                                            {/* Project Challenge Item List End */}
                                        </div>
                                    </div>

                                    <>
                                        {/* Our Work Process Section Start */}
                                        <div className="dark-section rounded py-4 mb-5">
                                            <div className="container">
                                                <div className="row section-row mb-4">
                                                    <div className="col-lg-12">
                                                        {/* Section Title Start */}
                                                        <div className="section-title section-title-center">

                                                            <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                                Reliable moving services built <span>around you</span>
                                                            </h2>
                                                        </div>
                                                        {/* Section Title End */}
                                                    </div>
                                                </div>
                                                <div className="row px-3">
                                                    {/* Work Process List Start */}
                                                    <div className="wrok-process-list">
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-1.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>1</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Assign Us Service</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.2s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-2.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>2</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Packing and Loading</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.4s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-3.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>3</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Transportation Service</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                        {/* Work Process Item Start */}
                                                        <div className="work-process-item wow fadeInUp" data-wow-delay="0.6s">
                                                            <div className="icon-box">
                                                                <img src="/assets/images/icon-work-process-4.svg" alt="" />
                                                                <div className="work-process-number">
                                                                    <h3>4</h3>
                                                                </div>
                                                            </div>
                                                            <div className="work-process-content">
                                                                <h3>Unloading and Unpacking</h3>

                                                            </div>
                                                        </div>
                                                        {/* Work Process Item End */}
                                                    </div>
                                                    {/* Work Process List End */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Our Work Process Section End */}
                                    </>

                                    <>
                                        <div className="page-single">
                                            <div className="container">
                                                <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                    Movers and Packers Cost in Agra - Spreadsheet Transparency
                                                </h2>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    We believe in transparent pricing. You receive the exact moving cost in Agra upfront.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    The following is an approximate estimate; the prices depend on the volume and distance.
                                                </p>
                                                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8", textAlign: "left" }}>Moving Type</th>
                                                            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8", textAlign: "left" }}>Cost Approx. Range</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>1 BHK Local Shifting</td>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>₹3,000 – ₹6,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>2 BHK Local Shifting</td>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>₹6,000 – ₹9,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>3 BHK Local Shifting</td>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>₹8,000 – ₹12,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>Car Transport (within UP)</td>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>₹4,000 – ₹7,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>Domestic Move (Agra to Delhi)</td>
                                                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>₹8,000 – ₹15,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    These prices are estimates and may change depending on the actual distance, volume, and services required.
                                                </p>
                                                <br></br>
                                                <h3>Transit Insurance Coverage</h3>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    Our insurance package will provide all relocation types with accidental insurance, theft, and unpredictable risks.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.4s">
                                                    Our insurance partners enable fast claim settlements, giving you peace of mind from start to finish.
                                                </p>
                                                <br></br>
                                                <h4>How to Have a Smooth Relocation Process, Step by Step:</h4><br></br>
                                                <ol style={{ listStyleType: "disc" }}>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <b>Survey & Quotation:</b> We check your things and give a free, quick estimate on the spot.
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <b>Packing:</b> All the items are done using professional and high-quality materials, thus providing maximum protection.
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <b>Loading & Transport:</b> Goods are safely loaded and transported in our GPS-enabled trucks. The progress can be monitored in real time.
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <b>Delivery:</b> We do ensure that you receive prompt and efficient unloading at the point of your ultimate destination, as we promise.
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <b>Unpacking:</b> We also provide an unpacking service in case you want to move into your new home or office and have it installed within the minimum amount of time possible.
                                                    </li>
                                                </ol>
                                                <p className="wow fadeInUp" data-wow-delay="0.4s">This is a proven, organized methodology, which always ensures that we are the best packers and movers in Agra—the moving company Agra that never fails to respond.</p>
                                                <br></br>
                                                <h3>Why JT Packers & Movers is the Best Choice in Agra</h3><br></br>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                    We have more than a decade of long-learned experience in the field of logistics and professional relocation, and apply it to each of our moves.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.4s">
                                                    The number of our truly satisfied customers in India is thousands, which is evidence of our quality service and commitment.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                                    A low price, professionally rendered service, and the promise of delivery on time, all in one package.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                                    We also provide effective 24/7 customer care on all bookings, track updates, or any kind of query that you might have—we are 24/7.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                                    We guarantee 100% satisfaction because we combine proven reliability, thorough care, and a customer-focused approach unmatched in Agra.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay="1.2s">
                                                    Whether you are relocating locally or intend to make a massive inter-state shift, JT Packers Movers Agra will make the relocation process safe, fast, and cheap enough to the extent that we can say it is literally second to none, since your convenience and peace of mind are always number one on our list.
                                                </p>
                                                <br></br>
                                                <h5>Contact JT Packers Movers Agra</h5>
                                                <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "10px" }}>
                                                    <li style={{ marginBottom: "8px" }}> <b>Office Address:</b> Hig-A 39 Indirapuram, 100 ft Road Near Shamshabad Road , 282001, Agra.</li>
                                                    <li style={{ marginBottom: "8px" }}> <b>Phone/WhatsApp:</b> +91 9058824450</li>
                                                    <li style={{ marginBottom: "8px" }}> <b>Email:</b> enquiry@jtpackersmovers.com</li>
                                                    <li style={{ marginBottom: "8px" }}> <b>Website:</b> www.jtpackersmovers.com</li>
                                                </ul>
                                            </div>
                                            <br></br>
                                        </div>
                                    </>

                                    {/* Project Entry End */}
                                    {/* Page Single FAQs Start */}
                                    <div className="page-single-faqs">
                                        {/* Section Title Start */}
                                        <div className="section-title">
                                            <h2 className="text-anime-style-2 fs-2" data-cursor="-opaque">
                                                Answers to your <span>moving questions</span>
                                            </h2>
                                        </div>
                                        {/* Section Title End */}
                                        {/* FAQ Accordion Start */}
                                        <div className="faq-accordion" id="faqaccordion">
                                            {/* FAQ 1 */}
                                            <div className="accordion-item wow fadeInUp">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1"
                                                        aria-expanded="true"
                                                        aria-controls="collapse1"
                                                    >
                                                        How do I choose the best packers and movers in Agra?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse1"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="heading1"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Look for companies with verified licenses, positive customer reviews, transparent pricing, and experience in both local and long-distance moves. Always ask for a written quotation and check if insurance is included.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 2 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2"
                                                        aria-expanded="false"
                                                        aria-controls="collapse2"
                                                    >
                                                        What is the average cost of packers and movers in Agra?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse2"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading2"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            The cost usually ranges between ₹3,000 – ₹10,000 for local shifting and ₹10,000 – ₹35,000 for intercity relocations. Pricing depends on factors like distance, volume of goods, and type of vehicle used.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 3 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3"
                                                        aria-expanded="false"
                                                        aria-controls="collapse3"
                                                    >
                                                        What services do packers and movers in Agra provide?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse3"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading3"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Most professional movers offer complete relocation solutions including packing, loading, transportation, unloading, unpacking, and storage facilities. Some also offer vehicle transportation and office relocation services.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 4 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse4"
                                                        aria-expanded="false"
                                                        aria-controls="collapse4"
                                                    >
                                                        How much time does it take to complete a house shifting in Agra?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse4"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading4"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            A local move within Agra typically takes one day, while intercity relocations may take 2–5 days depending on distance and the size of the move.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 5 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse5"
                                                        aria-expanded="false"
                                                        aria-controls="collapse5"
                                                    >
                                                        Are packers and movers in Agra responsible for damages during transit?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse5"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading5"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, reputed companies offer transit insurance that covers any damage or loss during transportation. Always confirm insurance coverage before booking.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 6 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                                <h2 className="accordion-header" id="heading6">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6"
                                                        aria-expanded="false"
                                                        aria-controls="collapse6"
                                                    >
                                                        How can I reduce my shifting cost in Agra?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse6"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading6"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            You can save money by:<br /><br />
                                                            • Decluttering unused items before the move<br />
                                                            • Booking in advance<br />
                                                            • Choosing weekdays instead of weekends<br />
                                                            • Comparing at least 2–3 quotes before finalizing
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 7 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                                <h2 className="accordion-header" id="heading7">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse7"
                                                        aria-expanded="false"
                                                        aria-controls="collapse7"
                                                    >
                                                        Do packers and movers in Agra provide packing materials?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse7"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading7"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, professional movers use high-quality materials such as bubble wrap, corrugated sheets, packing foam, and boxes to ensure your belongings are protected during the move.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 8 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.4s">
                                                <h2 className="accordion-header" id="heading8">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse8"
                                                        aria-expanded="false"
                                                        aria-controls="collapse8"
                                                    >
                                                        Can I track my goods during relocation?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse8"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading8"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Many modern packers and movers in Agra provide GPS tracking and regular status updates via phone or WhatsApp to help customers monitor their goods in real time.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 9 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.6s">
                                                <h2 className="accordion-header" id="heading9">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse9"
                                                        aria-expanded="false"
                                                        aria-controls="collapse9"
                                                    >
                                                        Are there packers and movers in Agra for office or commercial relocation?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse9"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading9"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, most top companies handle office relocations, warehouse shifting, and industrial goods transport with specialized equipment and staff trained for corporate moves.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 10 */}
                                            <div className="accordion-item wow fadeInUp" data-wow-delay="1.8s">
                                                <h2 className="accordion-header" id="heading10">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse10"
                                                        aria-expanded="false"
                                                        aria-controls="collapse10"
                                                    >
                                                        How early should I book packers and movers in Agra?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse10"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading10"
                                                    data-bs-parent="#faqaccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            It’s best to book your move at least 7–10 days in advance, especially during weekends or peak moving seasons, to secure the best rates and availability.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Accordion End */}
                                    </div>

                                    {/* Page Single FAQs End */}





                                </div>
                                {/* Project Single Content End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Project Single End */}


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
                    <CitiesBottom />
                </>

            </>


        </div>
    );
}