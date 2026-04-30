"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

const HomeSection = dynamic(
    () => import("./components/Landing/Home/Home"),
    {
        loading: () => <div className="min-h-screen bg-gray-900" />,
        ssr: true
    }
);

const Partner = dynamic(
    () => import("./components/Landing/Partner/Partner"),
    {
        loading: () => <div className="h-40 bg-gray-900" />,
        ssr: true
    }
);

const Job = dynamic(
    () => import("./components/Landing/Job/Job"),
    {
        loading: () => <div className="h-40 bg-gray-900" />,
        ssr: true
    }
);

const Value = dynamic(
    () => import("./components/Landing/Value/Value"),
    {
        loading: () => <div className="h-40 bg-gray-900" />,
        ssr: true
    }
);

const Contact = dynamic(
    () => import("./components/Landing/Contact/Contact"),
    {
        loading: () => <div className="h-40 bg-gray-900" />,
        ssr: true
    }
);

const JobPartnerSection = dynamic(
    () => import("@/app/components/JobPartnerSection/JobPartnerSection"),
    {
        loading: () => <div className="h-40 bg-gray-900" />,
        ssr: true
    }
);

export default function Home() {
    return (
        <>
            <div className="min-h-screen w-full">
                <main className="flex flex-col items-center w-full">
                    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
                        <HomeSection />
                    </Suspense>

                    <Suspense fallback={<div className="h-40 bg-gray-900" />}>
                        <Partner />
                    </Suspense>

                    <Suspense fallback={<div className="h-40 bg-gray-900" />}>
                        <Job />
                    </Suspense>

                    <Suspense fallback={<div className="h-40 bg-gray-900" />}>
                        <JobPartnerSection />
                    </Suspense>

                    <Suspense fallback={<div className="h-40 bg-gray-900" />}>
                        <Value />
                    </Suspense>

                    <Suspense fallback={<div className="h-40 bg-gray-900" />}>
                        <Contact
                            title="Jongleur de feu - Belgique"
                            description="Vous souhaitez organiser un événement inoubliable avec un spectacle de jonglerie de feu ? Contactez-moi pour discuter de vos besoins et créer une animation unique qui émerveillera vos invités."
                        />
                    </Suspense>
                </main>
            </div>

            <Analytics />
        </>
    );
}