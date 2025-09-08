import React from 'react';
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6"
import { FaFacebookF } from 'react-icons/fa';
import { Authors } from '@/lib/Authors';
import Image from 'next/image';


const Author = ({ id = '1' }) => {
    const author = Authors.find((a) => a.id === id);

    if (!author) return null;
    return (
        <div className="d-flex flex-column flex-sm-row align-items-start p-3 mt-0 rounded shadow-sm">
  
  <div className="position-relative rounded-circle overflow-hidden border border-white shadow" style={{ width: '96px', height: '60px' }}>
    <Image
      src={author.image || '/assets/images/man.png'}
      alt={author.name || 'Author'}
      fill
      className="img-fluid object-cover"
    />
  </div>

  <div className="text-center text-sm-start ms-sm-3 mt-3 mt-sm-0">
    <h3 className="fs-5 text-dark">{author.name}</h3>
    <p className="text-muted small">{author.bio}</p>

    <div className="d-flex justify-content-center justify-content-sm-start gap-3 text-warning">
      {author.socials?.facebook && (
        <a href={author.socials.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={20} className="text-black" />
        </a>
      )}

      {author.socials?.twitter && (
        <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={20} className="text-black" />
        </a>
      )}

      {author.socials?.linkedin && (
        <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={20} className="text-black" />
        </a>
      )}
    </div>
  </div>
</div>

    );
};

export default Author;
