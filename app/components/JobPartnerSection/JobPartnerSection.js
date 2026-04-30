"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import React, { useEffect, useRef, memo, useMemo } from "react";
import "swiper/css";
import { PARTNERS_DATA } from "@/app/utils/partner";

const JobPartnerSection = memo(({ partners = [] }) => {
    const sectionRef = useRef(null);

    const partnerList = useMemo(
        () => (partners.length > 0 ? partners : PARTNERS_DATA),
        [partners]
    );

    const duplicated = useMemo(
        () => [...partnerList, ...partnerList, ...partnerList, ...partnerList],
        [partnerList]
    );

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            id="partenaires"
            ref={sectionRef}
            className="w-full py-8 transition-all duration-700 overflow-hidden"
            style={{
                background: "#0D0D0D",
                borderTop: "1px solid rgba(201,146,42,0.3)",
                borderBottom: "1px solid rgba(201,146,42,0.3)",
                opacity: 0,
                transform: "translateY(20px)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="w-8 h-px bg-[#C9922A]" />
                    <span className="text-[#C9922A] text-[11px] font-bold uppercase tracking-[0.4em]">
                        Partenaires & Clients
                    </span>
                    <span className="w-8 h-px bg-[#C9922A]" />
                </div>
                <h2 className="font-bold text-[#F0EAD6]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
                    Ils nous font confiance
                </h2>
            </div>

            <div className="w-full h-[100px] md:h-[220px] flex items-center">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    breakpoints={{
                        768: { spaceBetween: 50 },
                    }}
                    centeredSlides={true}
                    speed={8000}
                    allowTouchMove={false}
                    simulateTouch={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="h-full swiper-nav-linear w-full"
                >
                    {duplicated.map((partner, index) => (
                        <SwiperSlide key={`${partner.src}-${index}`} style={{ width: 'auto' }} className="flex items-center justify-center">
                            <a
                                href={partner.href || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block transition-all duration-500 hover:scale-110 px-4 md:px-0"
                            >
                                <div className="relative h-[80px] w-[200px] md:h-[170px] md:w-[400px]">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt || partner.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 200px, 400px"
                                        unoptimized={true}
                                        priority={index < 8}
                                    />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-nav-linear .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
});

JobPartnerSection.displayName = "JobPartnerSection";
export default JobPartnerSection;