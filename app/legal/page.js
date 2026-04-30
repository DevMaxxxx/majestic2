import React from "react";

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#B8A98A] pt-32 pb-20 px-[6%]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[#F0EAD6] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Mentions Légales
                </h1>

                <section className="space-y-8 text-sm leading-relaxed font-light">
                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Éditeur du site</h2>
                        <p>
                            <strong>Majestic Magma</strong><br />
                            Directeur artistique : MajesticMagma<br />
                            Siège social : Rue Coenraets 72, 1060 Bruxelles, Belgique
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Structure Juridique</h2>
                        <p>
                            Prestataire de services via l'<strong>ASBL Productions Associées</strong><br />
                            N° TVA : BE 0896.755.397<br />
                            Numéro d'entreprise : 0896.755.397
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Hébergement</h2>
                        <p>Ce site est hébergé par [Vercel].</p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Propriété Intellectuelle</h2>
                        <p>Tous les contenus (photos, vidéos, textes) sont la propriété exclusive de Majestic Magma. Toute reproduction est interdite sans accord écrit préalable.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}