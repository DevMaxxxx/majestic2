"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "./../../../public/assets/Header.webp";
import { navLinks } from "./../../utils/NavLink";

const HEADER_STYLES = {
    linkBase: { color: "#B8A98A", fontSize: "15px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" },
    button: { border: "1px solid #C9922A", color: "#C9922A", background: "transparent", cursor: "pointer", fontSize: "14px" },
    dropdown: { background: "#0D0D0D", border: "1px solid rgba(201,146,42,0.3)", boxShadow: "0 8px 30px rgba(0,0,0,0.8)" },
};

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getHeaderStyle = () => ({
        height: "90px",
        background: scrolled ? "rgba(5,5,5,0.97)" : "linear-gradient(to bottom, rgba(5,5,5,0.95), rgba(5,5,5,0.0))",
        borderBottom: scrolled ? "1px solid rgba(201,146,42,0.25)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
    });

    const toggleDropdown = (state) => setDropdownOpen(state);

    const NavLink = ({ link, index }) => (
        <div
            key={index}
            className="relative"
            onMouseEnter={() => link.subMenu && toggleDropdown(true)}
            onMouseLeave={() => link.subMenu && toggleDropdown(false)}
        >
            <Link
                href={link.href}
                className="group relative flex items-center gap-1 transition-colors duration-300"
                style={HEADER_STYLES.linkBase}
                onMouseEnter={e => e.currentTarget.style.color = "#E8B84B"}
                onMouseLeave={e => e.currentTarget.style.color = "#B8A98A"}
            >
                {link.label}
                {link.subMenu && <RiArrowDownSFill className="w-5 h-5" />}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C9922A] transition-all duration-300 group-hover:w-full" />
            </Link>

            {link.subMenu && isDropdownOpen && (
                <div className="absolute mt-2 right-[-40px] w-[240px] z-50">
                    <div className="mt-8 w-[240px] p-2" style={HEADER_STYLES.dropdown} onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
                        {link.subMenu.map((subLink, subIndex) => (
                            <Link
                                key={subIndex}
                                href={subLink.href}
                                className="block px-4 py-3 text-sm tracking-wider transition-all duration-200"
                                style={{ color: "#B8A98A", textDecoration: "none" }}
                                onMouseEnter={e => { e.currentTarget.style.color = "#E8B84B"; e.currentTarget.style.background = "rgba(201,146,42,0.08)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "#B8A98A"; e.currentTarget.style.background = "transparent"; }}
                            >
                                {subLink.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <header className="w-full fixed z-50 transition-all duration-300" style={getHeaderStyle()}>
            <div className="flex items-center justify-between h-full px-4 md:px-8 lg:px-14 w-full">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src={Logo}
                            width={180}
                            height={70}
                            alt="MajesticMagma"
                            className="object-contain w-[120px] md:w-[150px] lg:w-[180px] h-auto"
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden custom1400:flex flex-1 justify-center items-center space-x-12">
                    {navLinks.slice(0, 4).map((link, index) => (
                        <NavLink key={index} link={link} index={index} />
                    ))}
                </nav>

                <div className="hidden custom1400:flex items-center ml-auto">
                    <Link href={navLinks[4].href} target={navLinks[4].target}>
                        <button
                            className="font-bold tracking-[0.15em] uppercase transition-all duration-300 px-7 py-3"
                            style={HEADER_STYLES.button}
                            onMouseEnter={e => { e.currentTarget.style.background = "#C9922A"; e.currentTarget.style.color = "#050505"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9922A"; }}
                        >
                            {navLinks[4].label}
                        </button>
                    </Link>
                </div>

                <div className="custom1400:hidden">
                    <BurgerMenu links={navLinks} />
                </div>
            </div>
        </header>
    );
};

export default Header;