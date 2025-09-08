"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {


    const nav = [
        {
            label: "Home",
            href: "/",
        },
        { label: "About Us", href: "/about-us" },
        { label: "Blog", href: "/blog" },
        { label: "Cities", href: "/cities" },
        { label: "Contact Us", href: "/contact-us" },
    ];



    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand text-white fs-2 fw-bolder" href="/">
                      
                            <Image
                                src="/assets/images/logo.jpg"
                                alt="JT Packers Movers"
                                width={180}
                                height={70}
                                priority
                            />
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    {nav.map((item, i) => (
                                        <li
                                            key={i}
                                            className={`nav-item ${item.submenu ? "submenu" : ""}`}
                                        >
                                            <Link className="nav-link" href={item.href}>
                                                {item.label}
                                            </Link>

                                            {item.submenu && (
                                                <ul>
                                                    {item.submenu.map((sub, j) => (
                                                        <li key={j} className="nav-item">
                                                            <Link className="nav-link" href={sub.href}>
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Header Btn Start */}
                            <div className="header-btn">
                                <Link href="/contact-us" className="btn-default btn-default2 btn-highlighted">
                                    Call Now
                                </Link>
                            </div>
                            {/* Header Btn End */}
                        </div>
                        {/* Main Menu End */}

                        <div className="navbar-toggle" />
                    </div>
                </nav>
                <div className="responsive-menu" />
            </div>
        </header>
    );
}
