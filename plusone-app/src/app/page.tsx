import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedProviders from "@/components/landing/FeaturedProviders";
import CategoriesSection from "@/components/landing/CategoriesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SafetySection from "@/components/landing/SafetySection";
import TrustSection from "@/components/landing/TrustSection";
import CTASection from "@/components/landing/CTASection";

export const metadata: Metadata = {
  title: "PlusOne — Find someone for any plan.",
  description:
    "The world's safest marketplace for finding verified people to share real-life activities. Your friend cancelled? We've got you.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturedProviders />
        <CategoriesSection />
        <HowItWorks />
        <SafetySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
