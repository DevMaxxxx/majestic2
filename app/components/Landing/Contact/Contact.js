"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "emailjs-com";
import dynamic from "next/dynamic";

const BusinessCard = dynamic(() => import("../../BuisnessCard/BuisnessCard"), {
    loading: () => <div className="w-[300px] h-[200px] bg-gray-900" />,
});

const SHOWS_OPTIONS = [
    { value: "Spectacle Feu et Flammes", label: "Spectacle : Démonstration de feu" },
    { value: "Jonglerie Lumineuse", label: "Spectacle de feu : Enigma" },
    { value: "Retrouvailles", label: "Spectacle de feu : Retrouvailles" },
    { value: "Ceremonie Viking", label: "Spectacle de feu : Cérémonie Viking" },
    { value: "Haute Tension Luminescente", label: "Spectacle lumineux : Haute tension" },
];

const INPUT_STYLE = { background: "black/50", border: "1px solid rgba(201,146,42,0.35)", color: "#F0EAD6", padding: "0.9rem" };

const InputField = ({ label, id, type = "text", isTextArea, ...props }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8B84B] mb-2 cursor-pointer">
            {label}
        </label>
        {isTextArea ? (
            <textarea id={id} name={id} {...props} className="w-full bg-black/50 border border-[#C9922A]/35 text-[#F0EAD6] p-[0.9rem] outline-none transition-colors focus:border-[#C9922A] h-[130px] resize-none" />
        ) : (
            <input id={id} name={id} type={type} {...props} className="w-full bg-black/50 border border-[#C9922A]/35 text-[#F0EAD6] p-[0.9rem] outline-none transition-colors focus:border-[#C9922A]" />
        )}
    </div>
);

const Contact = () => {
    const sectionRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [formState, setFormState] = useState({ firstName: "", name: "", email: "", phone: "", message: "", selectedShow: "" });

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                obs.disconnect();
            }
        }, { threshold: 0.05 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setFormState(prev => ({ ...prev, [id]: value }));
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await emailjs.send("service_7q08zmu", "template_c8ulztk", {
                from_prenom: formState.firstName,
                from_nom: formState.name,
                from_email: formState.email,
                from_phone: formState.phone,
                message: formState.message,
                spectacle: formState.selectedShow,
            }, "HBpZJ2wluUegTK97m");

            setIsSubmitted(true);
            setFormState({ firstName: "", name: "", email: "", phone: "", message: "", selectedShow: "" });
        } catch (err) {
            setError(`Erreur : ${err?.text || "Problème lors de l'envoi"}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 transition-opacity duration-700 opacity-0">
            <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/assets/Contact.webp')" }} />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 w-full max-w-6xl px-6 lg:px-12">
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4 uppercase text-[#C9922A] text-[12px] font-bold tracking-[0.4em]">
                        <span className="w-6 h-px bg-[#C9922A]" aria-hidden="true" />
                        Réservation
                        <span className="w-6 h-px bg-[#C9922A]" aria-hidden="true" />
                    </div>
                    <h2 className="text-white text-shadow-lg font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.2rem)] font-bold">Contactez-moi</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center w-full">
                    <div className="w-full lg:w-1/2">
                        {!isSubmitted ? (
                            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                                    <InputField label="Prénom" id="firstName" value={formState.firstName} onChange={handleChange} required />
                                    <InputField label="Nom" id="name" value={formState.name} onChange={handleChange} required />
                                </div>
                                <InputField label="Email" id="email" type="email" value={formState.email} onChange={handleChange} required />
                                <InputField label="Téléphone" id="phone" type="tel" value={formState.phone} onChange={handleChange} required />

                                <div className="w-full">
                                    <label htmlFor="selectedShow" className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8B84B] mb-2 cursor-pointer">
                                        Spectacle souhaité
                                    </label>
                                    <select id="selectedShow" name="selectedShow" value={formState.selectedShow} onChange={handleChange} required className="w-full bg-black/50 border border-[#C9922A]/35 text-[#F0EAD6] p-[0.9rem] outline-none cursor-pointer focus:border-[#C9922A] transition-colors">
                                        <option value="" className="bg-gray-900">Sélectionner un spectacle</option>
                                        {SHOWS_OPTIONS.map(opt => (
                                            <option key={opt.value} value={opt.value} className="bg-gray-900">{opt.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <InputField label="Message" id="message" isTextArea value={formState.message} onChange={handleChange} placeholder="N'oubliez pas d'indiquer le lieu" required />

                                {error && <p className="text-[#ff6b6b] text-sm font-semibold bg-black/30 p-2.5">{error}</p>}

                                <button type="submit" disabled={isLoading} className="w-full h-[56px] bg-[#C9922A] text-black font-bold uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(201,146,42,0.4)] disabled:opacity-50 hover:brightness-110 active:scale-[0.98]">
                                    {isLoading ? "Envoi en cours..." : "Envoyer →"}
                                </button>
                            </form>
                        ) : (
                            <div className="w-full border border-[#C9922A]/40 bg-black/50 p-12 text-center animate-in fade-in duration-500">
                                <p className="text-[#E8B84B] text-xl font-bold mb-4">✓ Message envoyé</p>
                                <p className="text-white mb-4">Merci ! Je vous répondrai rapidement.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-[#C9922A] text-xs underline hover:text-white transition-colors">
                                    Envoyer un autre message
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                        <BusinessCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;