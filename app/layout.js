"use client";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const AOS = dynamic(() => import("aos"), { ssr: false });

export default function RootLayout({ children }) {
    useEffect(() => {
        (async () => {
            const AOSModule = await import("aos");
            AOSModule.default.init({
                duration: 600,
                easing: "ease-out",
                once: true,
                offset: 80,
                delay: 0,
            });
        })();
    }, []);

    return (
        <html lang="fr">
        <head>
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
                crossOrigin="anonymous"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />

            <link
                rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;600;700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;600;700&display=swap"
                media="print"
                onLoad="this.media='all'"
            />
            <noscript>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;600;700&display=swap"
                />
            </noscript>

            <link
                rel="icon"
                type="image/webp"
                href="/assets/Logo_Majestic_Magma.webp"
            />
            <link
                rel="icon"
                type="image/png"
                href="/assets/favicon.png"
            />
            <link rel="apple-touch-icon" href="/assets/favicon.png" />

            <title>Spectacle de Feu en Belgique | Majestic Magma</title>
            <meta
                name="description"
                content="Majestic Magma propose des spectacles de feu en Belgique. Jonglerie, pyrotechnie et performances artistiques pour vos événements privés ou publics."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://www.majestic-magma.com/" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Spectacle de Feu - Majestic Magma" />
            <meta
                property="og:description"
                content="Troupe belge de spectacles de feu, pyrotechnie, jonglage et animation pour événements privés et professionnels."
            />
            <meta
                property="og:image"
                content="https://www.majestic-magma.com/assets/Logo_Majestic_Magma.webp"
            />
            <meta
                property="og:image:secure_url"
                content="https://www.majestic-magma.com/assets/Logo_Majestic_Magma.webp"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content="https://www.majestic-magma.com/" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Spectacle de Feu - Majestic Magma" />
            <meta
                name="twitter:description"
                content="Performances spectaculaires de jonglage de feu et d'effets pyrotechniques en Belgique."
            />
            <meta
                name="twitter:image"
                content="https://www.majestic-magma.com/assets/Logo_Majestic_Magma.webp"
            />
            <meta name="robots" content="index, follow" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "PerformingGroup",
                        name: "Majestic Magma",
                        alternateName: "Spectacle de feu en Belgique",
                        url: "https://www.majestic-magma.com",
                        logo: "https://www.majestic-magma.com/assets/Logo_Majestic_Magma.webp",
                        description:
                            "Troupe spécialisée dans les spectacles de feu, la pyrotechnie, la jonglerie et les animations artistiques en Belgique.",
                        sameAs: [
                            "https://www.instagram.com/majestic_magma",
                            "https://www.facebook.com/majesticmagma",
                        ],
                    }),
                }}
            />
        </head>

        <body
            className="antialiased"
            style={{ background: "#050505", color: "#F0EAD6" }}
        >
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        </body>
        </html>
    );
}