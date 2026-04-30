"use client";
import { FaFire, FaShieldAlt, FaHandsWash } from "react-icons/fa";
import React, { useEffect, useRef, useMemo, useCallback, memo } from "react";

const CARD_STYLES = {
    container: { background: "#141414", opacity: 0, transform: "translateY(24px)", border: "1px solid rgba(201,146,42,0.1)" },
    topBar: { background: "linear-gradient(to right, transparent, #C9922A, transparent)", opacity: 0 },
    iconBox: { border: "1px solid rgba(201,146,42,0.3)" },
};

const CARDS_DATA = [
    {
        icon: <FaShieldAlt size={44} color="#C9922A" />,
        title: "Sécurité",
        text: "Des spectacles de jonglerie de feu réalisés dans les meilleures conditions de sécurité.",
    },
    {
        icon: <FaFire size={44} color="#E8B84B" />,
        title: "Créativité",
        text: "Chaque spectacle est une performance unique et créative.",
        link: "https://www.instagram.com/majesticmagma/",
    },
    {
        icon: <FaHandsWash size={44} color="#C9922A" />,
        title: "Expertise",
        text: "Une expertise avérée dans la jonglerie de feu pour des performances spectaculaires.",
    },
];

const CardItem = memo(({ card, index }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    }, index * 140);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "50px" }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [index]);

    const handleMouseEnter = useCallback((e) => {
        e.currentTarget.style.background = "#1A1A1A";
        e.currentTarget.style.borderColor = "rgba(201,146,42,0.35)";
        e.currentTarget.querySelector(".top-bar").style.opacity = "1";
    }, []);

    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.background = "#141414";
        e.currentTarget.style.borderColor = "rgba(201,146,42,0.1)";
        e.currentTarget.querySelector(".top-bar").style.opacity = "0";
    }, []);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center text-center p-10 xl:p-14 relative transition-all duration-500 rounded-sm group"
            style={CARD_STYLES.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="top-bar absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-400" style={CARD_STYLES.topBar} />

            <div className="flex items-center justify-center mb-8" style={{ width: 80, height: 80, ...CARD_STYLES.iconBox }}>
                {card.icon}
            </div>

            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", color: "#E8B84B", fontWeight: "bold", marginBottom: "1.5rem" }}>
                {card.title}
            </h3>

            <p style={{ color: "#B8A98A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.95 }}>
                {card.text}
                {card.link && (
                    <>
                        {" "}
                        <a href={card.link} style={{ color: "#E8B84B", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
                            Découvrez nos créations
                        </a>
                    </>
                )}
            </p>
        </div>
    );
});

CardItem.displayName = "CardItem";

const CardValue = memo(() => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
        {CARDS_DATA.map((card, i) => (
            <CardItem key={i} card={card} index={i} />
        ))}
    </div>
));

CardValue.displayName = "CardValue";
export default CardValue;