"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const JobOffers = dynamic(
    () => import("./../../JobOffers/JobOffers"),
    {
        loading: () => <div className="h-96 bg-gray-900" />,
        ssr: true
    }
);

const Job = () => {
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
        <div
            id="spectacles"
            ref={sectionRef}
            className="min-h-screen w-full flex flex-col items-center justify-around relative transition-opacity duration-700 bg-[#050505]"
            style={{ opacity: 0 }}
        >
            <div className="relative z-10 text-center mt-24 mb-12 w-full max-w-2xl px-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-6 h-px bg-[#C9922A]" />
                    <span className="text-[#C9922A] text-[12px] font-bold tracking-[0.4em] uppercase">
                        Nos créations
                    </span>
                    <span className="w-6 h-px bg-[#C9922A]" />
                </div>

                <h2 className="font-bold mb-6" style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                    background: "linear-gradient(to right, #C9922A, #F5D78E, #C9922A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}>
                    Spectacles de feu
                </h2>
            </div>

            <div className="relative z-10 w-full">
                <JobOffers />
            </div>

            <div className="relative z-10 mt-16 mb-20">
                <Link href="#contact">
                    <button
                        className="h-[60px] px-14 font-bold text-[13px] tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-1 bg-[#C9922A] text-[#050505] border-none cursor-pointer shadow-[0_4px_24px_rgba(201,146,42,0.3)]"
                    >
                        Devis Gratuit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Job;