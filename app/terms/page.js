import React from "react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#B8A98A] pt-32 pb-20 px-[6%]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[#F0EAD6] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Conditions Générales d'Utilisation
                </h1>

                <section className="space-y-8 text-sm leading-relaxed font-light">
                    <p>L'utilisation du site Majestic Magma implique l'acceptation pleine et entière des conditions d'utilisation ci-après décrites.</p>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Services fournis</h2>
                        <p>Le site a pour objet de fournir une information concernant l'ensemble des activités de spectacle de feu de Majestic Magma.</p>
                    </div>

                    <div>
                        <h2 className="text-[#C9922A] uppercase tracking-widest font-bold mb-4">Limitation de responsabilité</h2>
                        <p>Majestic Magma ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}