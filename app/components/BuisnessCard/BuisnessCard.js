import Logos from "./../../../public/assets/Logo_Majestic_Magma.webp";
import React, { memo } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const ICON_STYLE = { color: "#C9922A", flexShrink: 0, width: 14, height: 14 };

const BusinessCard = memo(() => (
    <div
        className="w-[300px] sm:w-[360px] md:w-[400px] rounded-none overflow-hidden shadow-2xl"
        style={{
            backgroundImage: `url('/assets/Background.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid rgba(201,146,42,0.3)",
        }}
    >
        <div
            className="h-full flex flex-row items-center justify-between p-5"
            style={{ background: "rgba(5,5,5,0.72)", backdropFilter: "blur(4px)" }}
        >
            <div className="flex-shrink-0">
                <Image
                    src={Logos}
                    alt="Majestic Magma"
                    width={75}
                    height={75}
                    className="object-contain"
                    style={{ filter: "brightness(1.1)" }}
                    quality={80}
                    priority={false}
                    loading="lazy"
                />
            </div>

            <div className="w-[1px] h-16 mx-4" style={{ background: "rgba(201,146,42,0.3)" }} />

            <div className="flex flex-col flex-grow">
                <h2 className="text-[17px] font-extrabold mb-1" style={{ color: "#F0EAD6" }}>
                    Majestic Magma
                </h2>
                <p className="text-[11px] mb-3 font-light" style={{ color: "#B8A98A" }}>
                    Spectacle de feu | Directeur artistique
                </p>

                <div className="w-full h-[1px] mb-3" style={{ background: "rgba(201,146,42,0.2)" }} />

                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[12px]">
                        <FaPhone style={ICON_STYLE} />
                        <span style={{ color: "#B8A98A" }}>0470.66.23.76</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                        <FaEnvelope style={ICON_STYLE} />
                        <span style={{ color: "#B8A98A" }}>majesticmagma@hotmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

BusinessCard.displayName = "BusinessCard";
export default BusinessCard;