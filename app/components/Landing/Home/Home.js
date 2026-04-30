"use client";
import Link from "next/link";

const HomeSection = () => {
    return (
        <section className="relative text-white w-full flex items-center min-h-screen overflow-hidden bg-[#050505]">
            <video
                className="absolute inset-0 w-full h-full object-cover z-10"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src="/assets/background.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute inset-0 z-20"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(to right, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.3) 60%, rgba(5,5,5,0.1) 100%)",
                }}
            />

            <div
                className="absolute left-[4%] top-1/2 -translate-y-1/2 w-[2px] z-30 hidden md:block"
                style={{
                    height: "35%",
                    background: "linear-gradient(to bottom, transparent, #C9922A, transparent)",
                }}
            />

            <div
                className="relative z-30 px-[6%] max-w-[820px]"
                data-aos="fade-right"
                data-aos-duration="600"
            >
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-7 h-[1px] bg-[#C9922A]" />
                    <span className="text-[#C9922A] text-[12px] font-bold tracking-[0.4em] uppercase">
                        Belgique & Europe
                    </span>
                </div>

                <h1 className="mb-8 leading-[1.0]">
                    <span
                        className="block text-white font-bold"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(3.2rem, 8vw, 6.2rem)",
                            textShadow: "0 4px 15px rgba(0,0,0,0.8)",
                        }}
                    >
                        Spectacles de Feu
                    </span>
                    <span
                        className="block font-bold italic text-[#E8B84B]"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(3.2rem, 8vw, 6.2rem)",
                            textShadow: "0 4px 15px rgba(0,0,0,0.8)",
                        }}
                    >
                        Pyrotechnie
                    </span>
                </h1>

                <p className="text-white font-light mb-12 max-w-[580px] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.95] [text-shadow:1px_1px_6px_rgba(0,0,0,0.95)]">
                    Découvrez l'art spectaculaire de la meilleure Compagnie de spectacle de feu de Belgique. Grâce à une maîtrise inégalée des flammes et de la pyrotechnie, ils transforment chaque spectacle en un moment unique, vibrant de passion et d'adrénaline.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <Link href="#contact" className="w-full sm:w-auto">
                        <button className="w-full h-[56px] px-10 font-bold text-[13px] tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-1 bg-[#C9922A] text-[#050505] border-none cursor-pointer shadow-[0_4px_20px_rgba(201,146,42,0.4)]">
                            Demander un devis
                        </button>
                    </Link>
                    <Link href="#spectacles" className="w-full sm:w-auto">
                        <button className="w-full h-[56px] px-10 font-semibold text-[13px] tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-1 bg-black/30 text-white border border-white/60 cursor-pointer">
                            Voir les spectacles
                        </button>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
                <span className="text-white text-[9px] tracking-[0.3em] uppercase opacity-70">Défiler</span>
                <div
                    className="w-[1px] h-12"
                    style={{
                        background: "linear-gradient(to bottom, #C9922A, transparent)",
                        animation: "scrollpulse 2s infinite",
                    }}
                />
            </div>
            <style jsx>{`
                @keyframes scrollpulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default HomeSection;