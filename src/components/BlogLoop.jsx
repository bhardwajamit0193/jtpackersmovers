import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';

export const BlogLoop = ({ title, img, link, descr }) => {
  return (
    <div className='col-md-4 p-2'>

  <div className="card shadow-sm h-100 post-item wow fadeInUp">
  {/* Post Featured Image */}
  <Link href={link} className="d-block post-featured-image" data-cursor-text="View">
    <figure className="image-anime m-0">
      <Image
        src={img}
        width={250}
        height={250}
        alt={title}
        className="card-img-top"
        style={{ height: '260px', objectFit: 'cover' }}
      />
    </figure>
  </Link>

  {/* Card Body */}
  <div className="card-body d-flex flex-column post-item-body">
    {/* Author and Date Section */}
  

    {/* Post Title */}
    <h5 className="card-title post-item-content">
      <Link href={link} className="text-decoration-none text-black line2">
        {title}
      </Link>
    </h5>

    {/* Post Description */}
    <p className="card-text text-muted pb-1 mb-0 line3">{descr}</p>

    {/* Read More Button */}
    <Link href={link} 
    style={{ background: 'var(--accent-color)' }}
    className="btn btn-primary mt-auto post-item-btn text-center border-0">
      Read More
    </Link>
  </div>
</div>

</div>

  );
};
