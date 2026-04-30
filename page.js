"use client";

import HomeSection from "./components/Landing/Home/Home";
import Partner from "./components/Landing/Partner/Partner";
import Job from "./components/Landing/Job/Job";
import Value from "./components/Landing/Value/Value";
import Contact from "./components/Landing/Contact/Contact";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full">
        <main className="flex flex-col items-center w-full">
          <HomeSection />
          <Partner />
          <Job />
          <Value />
          <Contact
            title="Jongleur de feu - Belgique"
            description="Vous souhaitez organiser un événement inoubliable avec un spectacle de jonglerie de feu ? Contactez-moi pour discuter de vos besoins et créer une animation unique qui émerveillera vos invités."
          />
        </main>
      </div>

      <Analytics />
    </>
  );
}
