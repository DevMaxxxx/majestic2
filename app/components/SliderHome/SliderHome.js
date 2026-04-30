"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SliderHome = ({ images }) => {
    const containerRef = useRef(null);
    const styleRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (!styleRef.current) {
            const style = document.createElement("style");
            const totalHeight = container.scrollHeight;
            const duration = Math.ceil(totalHeight / 25);

            style.textContent = `
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${totalHeight / 2}px); } 
        }
      `;

            document.head.appendChild(style);
            styleRef.current = style;

            requestAnimationFrame(() => {
                container.style.animation = `scrollVertical ${duration}s linear infinite`;
            });
        }

        return () => {
            if (styleRef.current && styleRef.current.parentNode) {
                styleRef.current.parentNode.removeChild(styleRef.current);
                styleRef.current = null;
            }
        };
    }, []);

    const limitedImages = images.slice(0, 6);

    return (
        <div className="relative overflow-hidden w-full h-screen flex justify-center items-center mb-7">
            <div
                ref={containerRef}
                className="grid grid-cols-2 gap-4 will-change-transform"
                style={{ height: `${(limitedImages.length / 2) * 350}px` }}
            >
                {[...limitedImages, ...limitedImages].map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className={`w-[130px] h-[200px] lg:w-[280px] lg:h-[360px] bg-gray-200 rounded-[12px] overflow-hidden flex justify-center items-center relative ${
                            index % 2 === 1 ? "transform translate-y-12 lg:translate-y-24" : ""
                        }`}
                    >
                        <Image
                            src={image.src}
                            alt={`Majestic Magma ${index}`}
                            width={250}
                            height={350}
                            placeholder="blur"
                            className="w-full h-full object-cover"
                            quality={75}
                            loading={index < 2 ? "eager" : "lazy"}
                            priority={index < 2}
                            sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderHome;
