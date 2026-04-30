import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./../../../public/assets/Header.webp";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const FOOTER_DATA = {
    links: [
        { href: "/", label: "Accueil" },
        { href: "#realisations", label: "Galerie" },
        { href: "#mes-tarifs", label: "Spectacles" },
        { href: "#contact", label: "Contact" },
    ],
    legal: [
        { href: "/legal", label: "Mentions légales" },
        { href: "/terms", label: "CGU" },
        { href: "/privacy", label: "Confidentialité" },
    ],
    social: [
        { href: "https://www.facebook.com/majesticmagma?locale=fr_FR", label: "Facebook", icon: FaFacebookF },
        { href: "https://www.youtube.com/@majesticmagma5073", label: "YouTube", icon: FaYoutube },
        { href: "https://www.instagram.com/majesticmagma/", label: "Instagram", icon: FaInstagram },
    ],
};

const FOOTER_STYLES = {
    divider: "1px solid rgba(201,146,42,0.15)",
    textMuted: { color: "#6B5D45" },
    textGold: { color: "#C9922A" },
    linkStyle: { color: "#6B5D45", textDecoration: "none", fontSize: "13px", fontWeight: 300 },
    socialBox: { width: 34, height: 34, border: "1px solid rgba(201,146,42,0.25)", color: "#6B5D45" },
};

const LinkList = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item) => (
            <li key={item.label}>
                <Link
                    href={item.href}
                    className="transition-colors duration-200"
                    style={FOOTER_STYLES.linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = "#E8B84B"}
                    onMouseLeave={e => e.currentTarget.style.color = "#6B5D45"}
                >
                    {item.label}
                </Link>
            </li>
        ))}
    </ul>
);

const SocialLinks = () => (
    <div className="flex gap-2">
        {FOOTER_DATA.social.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href} target="_blank" aria-label={label} className="flex items-center justify-center transition-all duration-200" style={FOOTER_STYLES.socialBox} onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9922A"; e.currentTarget.style.color = "#E8B84B"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,146,42,0.25)"; e.currentTarget.style.color = "#6B5D45"; }}>
                <Icon size={13} />
            </Link>
        ))}
    </div>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: "#050505", borderTop: FOOTER_STYLES.divider }}>
            <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #C9922A, #8B0000, #C9922A, transparent)" }} />

            <div className="px-[6%] pt-14 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 max-[767px]:text-center max-[767px]:items-center max-[767px]:flex max-[767px]:flex-col">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
                            <Image src={Logo} width={180} height={70} alt="Majestic Magma" className="object-contain" style={{ filter: "brightness(1.1)" }} />
                        </Link>
                        <p className="text-[13px] font-light max-w-[260px] max-[767px]:mx-auto" style={{ ...FOOTER_STYLES.textMuted, lineHeight: 1.8 }}>
                            Spectacle de feu · Directeur artistique<br /> Belgique & Europe
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="flex flex-col max-[767px]:items-center">
                        <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={FOOTER_STYLES.textGold}>Parcours</h4>
                        <LinkList items={FOOTER_DATA.links} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="flex flex-col max-[767px]:items-center">
                        <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={FOOTER_STYLES.textGold}>Liens Utiles</h4>
                        <div className="flex gap-2 mb-6">
                            <SocialLinks />
                        </div>
                        <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={FOOTER_STYLES.textGold}>RGPD</h4>
                        <LinkList items={FOOTER_DATA.legal} />
                    </div>
                </div>

                <div className="pt-5 flex flex-col md:flex-row justify-between items-center gap-3 flex-wrap max-[767px]:text-center" style={{ borderTop: FOOTER_STYLES.divider }}>
                    <div className="space-y-1">
                        <p className="text-[11px] font-light" style={FOOTER_STYLES.textMuted}>
                            © {currentYear} Majestic Magma. Tous droits réservés. · ASBL Productions Associées · N° TVA: BE 0896.755.397
                        </p>
                        <p className="text-[11px] font-light" style={FOOTER_STYLES.textMuted}>
                            Rue Coenraets 72, 1060 Bruxelles · IBAN: BE27 0689 0175 5473 – BIC: GKCCBEBB · Belfius, Rue des Champs 6, 1040 Bruxelles
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;