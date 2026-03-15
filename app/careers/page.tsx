import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CareersHero from "@/components/sections/CareersHero";
import CareersBenefits from "@/components/sections/CareersBenefits";
import CareersPositions from "@/components/sections/CareersPositions";
import CareersCTA from "@/components/sections/CareersCTA";
import CareersProcess from "@/components/sections/CareersProcess";

export const metadata: Metadata = {
  title: "Careers | Kanan Services Limited",
  description:
    "Explore career opportunities at Kanan Services Limited across logistics, trading and supply chain.",
};

export default function CareersPage() {
  return (
    <main className="theme-shell min-h-screen">

      <Navbar />

      <CareersHero />
      <CareersBenefits />
        <CareersProcess />
      <CareersPositions />
      <CareersCTA />

      <Footer />

    </main>
  );
}