"use client";

import BookingForm from "@/components/BookingForm";
import CitiesLoop from "@/components/CitiesLoop";
import PageHeader from "@/components/PageHeader";
import Sidebar from "@/components/Sidebar";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";


export default function Data() {
    return (
        <div className="page">
            <PageHeader
                title="Cities"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cities" }
                ]}
            />


            <>
   <>
  {/* Page Contact Us Start */}
  <div className="page-contact-us">
    <div className="container">
        <div className="row">
                   
               
               <CitiesLoop/>
      
                  </div>
    </div>
  </div>
  {/* Page Contact Us End */}
</>




            </>


        </div>
    );
}