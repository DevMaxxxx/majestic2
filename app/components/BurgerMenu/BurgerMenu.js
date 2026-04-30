"use client";
import { useState, useEffect, useCallback, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import React from "react";
import Link from "next/link";

const MENU_STYLES = {
    button: { color: "#C9922A", fontSize: "1.6rem" },
    overlay: { background: "rgba(5,5,5,0.97)", backdropFilter: "blur(16px)", animation: "fadeInMenu 0.25s ease-out" },
    divider: { background: "#C9922A" },
    label: { color: "#C9922A", fontSize: "10px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" },
    link: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#F0EAD6", textDecoration: "none" },
    subLink: { color: "#B8A98A", textDecoration: "none" },
};

const BurgerMenu = memo(({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) {
            setDropdownOpen(false);
            document.body.style.position = "";
            document.body.style.top = "";
            return;
        }

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;

        return () => {
            const savedScrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY || "0") * -1);
        };
    }, [menuOpen]);

    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const toggleDropdown = useCallback(() => setDropdownOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
        <div className="custom1400:hidden">
            <button
                onClick={toggleMenu}
                className="focus:outline-none relative z-[60] p-2 transition-colors duration-200"
                style={MENU_STYLES.button}
                title="Menu"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {menuOpen && (
                <div className="fixed inset-0 flex flex-col items-center justify-center z-[55]" style={MENU_STYLES.overlay}>
                    <style>{`@keyframes fadeInMenu { from { opacity: 0; } to { opacity: 1; } }`}</style>

                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px" style={MENU_STYLES.divider} />
                        <span style={MENU_STYLES.label}>Navigation</span>
                        <span className="w-8 h-px" style={MENU_STYLES.divider} />
                    </div>

                    <div className="flex flex-col items-center gap-5 w-full px-8">
                        {links.map((link, index) => (
                            <div key={index} className="w-full text-center">
                                {link.label === "À propos" ? (
                                    <div className="w-full">
                                        <button
                                            onClick={toggleDropdown}
                                            className="w-full flex items-center justify-center gap-2 py-1 transition-colors duration-200"
                                            style={MENU_STYLES.link}
                                        >
                                            {link.label}
                                            <RiArrowDownSFill
                                                style={{
                                                    color: "#C9922A",
                                                    transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)",
                                                    transition: "transform 0.2s ease-out",
                                                }}
                                            />
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="mt-2">
                                                {link.subMenu?.map((subLink, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subLink.href}
                                                        className="block py-2 text-xl font-light transition-colors duration-200"
                                                        style={MENU_STYLES.subLink}
                                                        onClick={closeMenu}
                                                    >
                                                        {subLink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block py-1 transition-colors duration-200"
                                        style={MENU_STYLES.link}
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

BurgerMenu.displayName = "BurgerMenu";
export default BurgerMenu;