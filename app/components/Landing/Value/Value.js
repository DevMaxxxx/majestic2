"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Logo from "./../../../../public/assets/Logo_Majestic_Magma.webp";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const CardValue = dynamic(
    () => import("../../CardValue/CardValue"),
    {
        loading: () => <div className="h-96 bg-gray-900" />,
        ssr: true
    }
);

const Value = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    obs.unobserve(el);
                }
            },
            { threshold: 0.05, rootMargin: "50px" }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-8 flex flex-col transition-opacity duration-700"
            style={{ background: "#0D0D0D", opacity: 0 }}
        >
            <div className="mx-auto flex flex-col items-center w-full px-6 md:px-12">
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-6 h-px" style={{ background: "#C9922A" }} />
                        <span style={{ color: "#C9922A", fontSize: "12px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                            Notre promesse
                        </span>
                        <span className="w-6 h-px" style={{ background: "#C9922A" }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                        color: "#F0EAD6",
                        fontWeight: "bold",
                        marginBottom: "1.5rem"
                    }}>
                        Des prestations <span style={{ color: "#E8B84B", fontStyle: "italic" }}>de feu</span>
                    </h2>

                    <p style={{
                        fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                        color: "#B8A98A",
                        lineHeight: 1.95
                    }}>
                        Découvrez des spectacles de jonglerie de feu inoubliables, alliant créativité, performance et sécurité. Chaque prestation est une expérience unique.                    </p>
                </div>

                <div className="w-full max-w-6xl">
                    <CardValue />
                </div>

                <div className="flex justify-center mt-20 mb-28">
                    <Link href="#contact">
                        <button
                            className="h-[58px] px-16 font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "#C9922A",
                                color: "#050505",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "13px",
                                boxShadow: "0 4px 20px rgba(201,146,42,0.25)"
                            }}
                        >
                            Réservez un spectacle
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-16 lg:gap-28 px-4">
                    <div className="text-center lg:text-left">
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(2rem, 5vw, 3.8rem)",
                            lineHeight: 1.15,
                            color: "#F0EAD6",
                            fontWeight: "bold",
                            marginBottom: "1.5rem"
                        }}>
                            <span style={{ color: "#E8B84B", fontStyle: "italic" }}>Valorisez</span> votre événement
                        </h2>

                        <p style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                            color: "#B8A98A",
                            lineHeight: 1.95
                        }}>
                            Offrez à votre public un spectacle éblouissant de jonglerie de feu. Laissez-nous ajouter de la magie à votre événement !                        </p>
                    </div>

                    <div className="flex-shrink-0 relative p-6">
                        <Image
                            src={Logo}
                            alt="Majestic Magma Logo"
                            width={340}
                            height={340}
                            className="object-contain w-[220px] md:w-[280px] lg:w-[340px] h-auto"
                            style={{ filter: "brightness(1.1)" }}
                            quality={85}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;