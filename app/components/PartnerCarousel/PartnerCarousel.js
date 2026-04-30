"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const PartnerCarousel = ({ images = [] }) => {
    if (!images.length) return null;

    return (
        <div className="w-full relative py-6 md:py-12 [&_.swiper-pagination-bullet-active]:!bg-[#C9922A] [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-sm">
            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor centeredSlides loop
                slidesPerView="auto"
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={1200}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="!pb-16"
            >
                {[...images, ...images].map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[85vw] md:!w-[420px] aspect-[3/4] md:aspect-[9/12]"
                    >
                        <div className="group relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-[#C9922A]/50">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 85vw, 450px"
                                className="object-cover transition-transform duration-1000 ease-out md:group-hover:scale-110 md:group-hover:rotate-1"
                                priority={index < 3}
                                quality={75}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PartnerCarousel;