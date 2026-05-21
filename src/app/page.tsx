"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExplodedDiagram from "@/components/ExplodedDiagram";
import HeritageStats from "@/components/HeritageStats";
import TaglineContent from "@/components/TaglineContent";
import InteractiveStats from "@/components/InteractiveStats";
import CarouselFadingBackground from "@/components/CarouselFadingBackground";
import TextReveal from "@/components/TextReveal";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#F8F7F4] overflow-x-hidden">
      {showLoader && <PageLoader onComplete={() => setShowLoader(false)} />}
      <Navbar />
      <Hero />
      <ExplodedDiagram />
      <HeritageStats />
      <TaglineContent />
      <InteractiveStats />
      <CarouselFadingBackground />
      <TextReveal />
      <Footer />
    </main>
  );
}
