import React from "react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#B8A98A] pt-32 pb-20 px-[6%]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[#F0EAD6] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Politique de Confidentialité
                </h1>

                <section className="space-y-8 text-sm leading-relaxed font-light">
                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">1. Collecte des données</h2>
                        <p>Nous collectons les informations que vous nous transmettez via le formulaire de contact (Nom, Email, message). Ces données sont nécessaires pour répondre à vos demandes de prestations.</p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">2. Utilisation des données</h2>
                        <p>Vos données sont utilisées exclusivement par Majestic Magma pour la gestion de la relation client et l'établissement de devis. Elles ne sont jamais cédées ou vendues à des tiers.</p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">3. Conservation</h2>
                        <p>Les données sont conservées pendant la durée nécessaire à la finalisation de votre projet de spectacle, ou pour une durée maximale de 3 ans après le dernier contact.</p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">4. Vos droits</h2>
                        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous directement via le formulaire pour toute demande.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}