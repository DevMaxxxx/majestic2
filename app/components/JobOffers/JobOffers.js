"use client";
import Image from "next/image";
import React, { useMemo, memo } from "react";

const OFFERS_DATA = [
    {
        title: "Démonstration de feu",
        image: "/assets/Burnout.webp",
        alt: "Jongleur de feu",
        num: "01",
        type: "Solo",
        duration: "20 minutes",
        badge: null,
        description: "Vous cherchez un spectacle de feu à petit budget ? Vous voulez le choix de la durée du spectacle, l'ambiance musicale ou encore choisir les effets ? Chez Majestic Magma nous sommes flexibles pour rendre votre événement inoubliable.",
        details: ["Nombre d'artiste : 1", "Sol : plat et dur", "Scène : 8m x 8m"],
        details2: "Si le budget est un frein, avec Majestic Magma il y a toujours une solution.",
    },
    {
        title: "Enigma",
        image: "/assets/enigmacharcol.webp",
        alt: "Spectacle Enigma",
        num: "02",
        type: "Duo",
        duration: "30 minutes",
        description: "Entre passion, désir et envie, les distances sont infimes. Deux êtres se questionnent, se laissent vivre l'instant présent. Enigma : quand l'émotion surgit, la vie s'épanouit ! Idéal pour un anniversaire, mariage, communion, etc.",
        details: ["Nombre d'artiste : 2", "Sol : plat et dur", "Scène : 15m x 15m"],
        details2: "Si le budget est un frein, avec Majestic Magma il y a toujours une solution.",
    },
    {
        title: "Retrouvailles",
        image: "/assets/LanceFlammes.webp",
        alt: "Retrouvailles",
        num: "03",
        type: "Duo",
        duration: "32 minutes",
        badge: "⭐ Meilleur spectacle 2023",
        description: "Deux amis de longue date se retrouvent pour partager leur passion pour le feu comme jamais personne ne l'a fait avant eux. Un spectacle intense dans une ambiance vintage.",
        details: ["Nombre d'artiste : 2", "Sol : plat et dur", "Scène : 15m x 15m"],
        details2: "Si le budget est un frein, avec Majestic Magma il y a toujours une solution.",
    },
    {
        title: "Cérémonie Viking",
        image: "/assets/Vinking.webp",
        alt: "Viking",
        num: "04",
        type: "Trio",
        duration: "30 minutes",
        description: "Vivez une cérémonie viking : votre Jarl, accompagné de son conseiller et de sa Völva, vous guidera vers un renouveau. Que la cérémonie commence, que nos prières soient entendues dans les neuf royaumes du Père de Tout. Gloire à Odin !",
        details: ["Nombre d'artiste : 3", "Sol : plat et dur", "Scène : 15m x 15m"],
        details2: "Si le budget est un frein, avec Majestic Magma il y a toujours une solution.",
    },
];

const JobOfferCard = memo(({ offer, index }) => (
    <div
        className="group relative flex flex-col bg-[#141414] rounded-lg overflow-hidden border border-white/5 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(201,146,42,0.15)] hover:-translate-y-1 w-full h-full"
        data-aos="fade-up"
        data-aos-delay={index * 100}
    >
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
            <Image
                src={offer.image}
                alt={offer.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                unoptimized
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
            {offer.badge && (
                <div className="absolute top-4 right-4 bg-[#C9922A] text-[#050505] px-4 py-1.5 text-[11px] font-black uppercase tracking-widest shadow-2xl z-20">
                    {offer.badge}
                </div>
            )}
        </div>

        <div className="flex flex-col flex-1 p-6 lg:p-7">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C9922A] text-2xl font-bold italic tracking-tighter">{offer.num}</span>
                <span className="w-10 h-px bg-[#C9922A]/30" />
                <span className="border border-[#C9922A]/40 text-[#B8A98A] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] bg-[#C9922A]/5">
          {offer.type}
        </span>
            </div>

            <h2 className="text-3xl lg:text-4xl text-[#F0EAD6] font-bold mb-3 leading-tight group-hover:text-[#C9922A] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {offer.title}
            </h2>

            <p className="text-[#6B5D45] text-[12px] font-bold uppercase tracking-[0.15em] mb-2">Durée : {offer.duration}</p>
            <p className="text-[#6B5D45] text-[13px] font-medium italic mb-5 leading-snug">TVA 6%, déplacements (Europe) 0,50€/km Aller-Retour depuis Bertogne (6687).</p>
            <p className="text-[#B8A98A] text-[16px] lg:text-[17px] leading-relaxed mb-8 font-light text-justify flex-1">{offer.description}</p>

            <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
                {offer.details.map((detail, i) => (
                    <p key={i} className="text-[#6B5D45] text-[15px] font-medium">{detail}</p>
                ))}
            </div>
            {offer.details2 && <p className="mt-6 text-[#C0392B] text-[13px] font-bold italic leading-tight">{offer.details2}</p>}
        </div>
    </div>
));

JobOfferCard.displayName = "JobOfferCard";

const JobOffers = memo(() => (
    <section className="w-full px-4 md:px-6 py-10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {OFFERS_DATA.map((offer, index) => (
                <JobOfferCard key={offer.num} offer={offer} index={index} />
            ))}
        </div>
    </section>
));

JobOffers.displayName = "JobOffers";
export default JobOffers;