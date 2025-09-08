'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PostLoop({ imageSrc, linkHref, title }) {
  return (
    <div className="bg-white overflow-hidden border rounded shadow-sm mb-0">
      <div className="row align-items-center p-2">
        {/* Image Column */}
        <div className="col-4">
          <Link href={linkHref || "#"} className="d-block position-relative">
            <Image
              src={imageSrc}
              alt={title}
              width={150}
              height={150}
              className="img-fluid rounded leat-img"
            />
          </Link>
        </div>

        {/* Title Column */}
        <div className="col-8">
          <Link
            href={linkHref || "#"}
            className="d-block text-decoration-none text-dark fw-bold"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
