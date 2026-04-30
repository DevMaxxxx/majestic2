import { memo } from "react";

export const navLinks = [
    {
        href: "/",
        label: "Accueil",
        className: "text-2xl font-bold"
    },
    {
        href: "#realisations",
        label: "Galerie",
        className: "text-2xl font-bold",
    },
    {
        href: "#mes-tarifs",
        label: "Spectacles",
        className: "text-2xl font-bold",
    },
    {
        href: "#contact",
        label: "Contact",
        className: "text-2xl font-bold",
    },
    {
        href: "#contact",
        label: "Devis gratuit",
        className:
            "bg-gray-800 hover:bg-gray-700 text-white text-center w-80 h-16 flex items-center justify-center px-6 py-2 rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl border border-white focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all duration-200",
        isPrimary: true,
    },
];

export const NavComponent = memo(({ links = navLinks }) => {
    return (
        <nav className="flex gap-4">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={link.className}
                    aria-current={link.href === "/" ? "page" : undefined}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
});

NavComponent.displayName = "NavComponent";