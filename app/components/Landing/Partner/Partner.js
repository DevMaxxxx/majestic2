"use client";
import PartnerCarousel from "../../PartnerCarousel/PartnerCarousel";
import images from "../../../utils/image";
import React, { useEffect, useRef } from "react";

const Partner = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.style.opacity = "1"; },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            id="realisations"
            ref={sectionRef}
            className="w-full pt-20 pb-24 flex flex-col transition-opacity duration-700"
            style={{ background: "#0D0D0D", opacity: 0 }}
        >
            <div className="text-center mb-4 px-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-px" style={{ background: "#C9922A" }} />
                    <span style={{ color: "#C9922A", fontSize: "14px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                        Portfolio
                    </span>
                    <span className="w-8 h-px" style={{ background: "#C9922A" }} />
                </div>

                <h2
                    className="font-bold mb-4"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "#F0EAD6",
                        lineHeight: 1.1
                    }}
                >
                    Galerie
                </h2>

                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-16 h-px" style={{ background: "linear-gradient(to right, transparent, #C9922A)" }} />
                    <div className="w-2 h-2 rotate-45" style={{ background: "#C9922A" }} />
                    <div className="w-16 h-px" style={{ background: "linear-gradient(to left, transparent, #C9922A)" }} />
                </div>

                <p
                    className="max-w-3xl mx-auto font-light"
                    style={{
                        fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                        color: "#B8A98A",
                        lineHeight: 1.8,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
                    }}
                >
                    Explorez les moments les plus envoûtants et spectaculaires des
                    spectacles de feu. Avec une maîtrise du feu et des techniques de
                    jongleries uniques, chaque performance est une œuvre d&apos;art
                    enflammée.
                </p>
            </div>

            <div className="ml-4 md:ml-16 mt-16">
                <PartnerCarousel images={images} />
            </div>
        </section>
    );
};

export default Partner;