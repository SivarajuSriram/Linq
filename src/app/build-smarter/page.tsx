"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuildSmarter() {
  // Timeline comparison toggle
  const [timelineType, setTimelineType] = useState<"kingshaus" | "traditional">("kingshaus");

  // Engineered to perfection active detail
  const [activeDetail, setActiveDetail] = useState<"frame" | "insulation" | "ventilation">("frame");

  // Carousel ref for Wood Architecture section
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420; // Match approximate card width + gap
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const detailImages = {
    frame: "https://www.kingshaus.co/_nuxt/image/17e385.jpeg",
    insulation: "https://www.kingshaus.co/_nuxt/image/920527.jpeg",
    ventilation: "https://www.kingshaus.co/_nuxt/image/6eeccf.jpeg",
  };

  const carouselCards = [
    {
      title: "STRONG",
      description: "Wood is lightweight with a high strength-to-weight ratio. It can be treated to further enhance its resistance to environmental factors.",
      image: "https://www.kingshaus.co/_nuxt/image/e5cb61.jpeg",
    },
    {
      title: "VERSATILE",
      description: "Wood is a versatile material. It is easier to make alterations to the building in the future, if needed.",
      image: "https://www.kingshaus.co/_nuxt/image/e70201.jpeg",
    },
    {
      title: "SAFE",
      description: "Our wooden frames are well-protected to ensure they maintain their load-bearing capacity and stability in the event of a fire.",
      image: "https://www.kingshaus.co/_nuxt/image/6ef10f.jpeg",
    },
    {
      title: "ENERGY-EFFICIENT",
      description: "Wood saves energy during construction. It is also an excellent insulator and does not retain heat or cold, so our homes save energy over their lifetime.",
      image: "https://www.kingshaus.co/_nuxt/image/d2374a.jpeg",
    },
    {
      title: "SUSTAINABLE",
      description: "Trees absorb carbon dioxide through photosynthesis during growth. Building with wood traps carbon and helps to counteract the greenhouse effect.",
      image: "https://www.kingshaus.co/_nuxt/image/75f9f1.jpeg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-brand-cream overflow-x-clip">
      <Navbar />

      {/* Hero Split Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Half: Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-brand-charcoal">
          <Image
            src="https://www.kingshaus.co/_nuxt/image/bf14a7.jpeg"
            alt="Kingshaus Sandy-Toned Villa"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>

        {/* Right Half: Content */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen bg-brand-cream-dark flex flex-col justify-center px-8 md:px-20 relative pt-24 lg:pt-0">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-4">
              Build Smarter
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-charcoal leading-none mb-6">
              A BETTER
              <br />
              APPROACH TO
              <br />
              BUILDING HOMES
            </h1>
          </div>

          <div className="absolute bottom-10 right-10 hidden lg:block">
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className="flex items-center justify-center p-4"
              aria-label="Scroll Down"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Offsite pre-construction */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
            Efficiency
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            We pre-construct our homes offsite
          </h2>
          <p className="text-brand-charcoal/80 text-base md:text-lg font-medium leading-relaxed">
            We build homes offsite in quality-controlled environments to save valuable resources, including time, energy, and manpower.
          </p>
          <p className="text-brand-charcoal/60 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            It allows us to maximise efficiency and deliver energy efficient homes at the highest quality in under six months, with minimal wastage.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-green"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Sticky Turnkey aspect management */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-16 relative">
          {/* Left Sticky Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[50vh] lg:-translate-y-1/2 h-fit space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              End-to-End
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
              We manage every
              <br />
              aspect of
              <br />
              homebuilding
            </h2>
            <p className="text-brand-charcoal/70 text-base font-medium leading-relaxed max-w-md">
              From planning to final handover, we manage turnkey home construction at the highest international standards. This end-to-end control means we guarantee price, product quality and delivery time.
            </p>
          </div>

          {/* Right Scrolling Column */}
          <div className="w-full lg:w-1/2 space-y-12">
            {[
              {
                num: "01",
                title: "Design & Planning",
                desc: "We work with top-tier architects to translate your aesthetic goals into structured engineering plans optimized for modern timber systems.",
              },
              {
                num: "02",
                title: "Offsite production",
                desc: "Precision manufacturing in our controlled indoor Swedish facilities protects wood elements from weather, ensuring zero mold and exact structural joints.",
              },
              {
                num: "03",
                title: "Logistics",
                desc: "Flat-pack panels or volumetric modules are safely packaged and shipped directly from Sweden to ports, arriving damage-free and on-schedule.",
              },
              {
                num: "04",
                title: "Onsite assembly",
                desc: "Highly-trained teams assemble structural walls, roofs, and windows on-site in a matter of days, avoiding months of loud construction disruptions.",
              },
              {
                num: "05",
                title: "Completion & Delivery",
                desc: "Final architectural finishes, electrical systems, and plumbing are connected, resulting in a turnkey certified building handed over on the promised date.",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 rounded-[24px] border border-brand-border/40 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-xl md:text-2xl font-bold text-brand-green/45">
                  {phase.num}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-charcoal mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Timeline comparison */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Speed Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              The right balance between speed, quality and cost
            </h2>
            <p className="text-brand-charcoal/60 text-sm md:text-base font-medium">
              Toggle the models below to see how our offsite workflow compares to traditional on-site brick and concrete construction timelines.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center mb-16">
            <div className="bg-brand-cream-dark p-1.5 rounded-full border border-brand-border/40 flex space-x-2">
              <button
                onClick={() => setTimelineType("kingshaus")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${timelineType === "kingshaus"
                    ? "bg-brand-green text-white shadow"
                    : "text-brand-charcoal/60 hover:text-brand-charcoal"
                  }`}
              >
                Kingshaus Offsite (6 Months)
              </button>
              <button
                onClick={() => setTimelineType("traditional")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${timelineType === "traditional"
                    ? "bg-brand-green text-white shadow"
                    : "text-brand-charcoal/60 hover:text-brand-charcoal"
                  }`}
              >
                Traditional Build (12+ Months)
              </button>
            </div>
          </div>

          {/* Timeline visual representation */}
          <div className="bg-brand-cream-dark p-8 md:p-12 rounded-[32px] border border-brand-border/40 shadow-inner">
            {timelineType === "kingshaus" ? (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest pb-4 border-b border-brand-border/30">
                  <span>Project Phases</span>
                  <span>Duration</span>
                </div>
                {[
                  { label: "Design & Custom Engineering", pct: "20%", duration: "Month 1" },
                  { label: "Swedish Factory Production & Shipping", pct: "40%", duration: "Months 2-3" },
                  { label: "Foundation Prep & Site Work", pct: "20%", duration: "Month 4" },
                  { label: "Onsite Assembly (Walls, Roof, Enclosure)", pct: "10%", duration: "Month 5 (1 week)" },
                  { label: "Interior Finishes & Keys Handover", pct: "10%", duration: "Month 6" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8">
                    <span className="w-full md:w-1/3 text-sm md:text-base font-bold text-brand-charcoal">
                      {item.label}
                    </span>
                    <div className="w-full md:w-1/2 bg-brand-border/20 h-6 rounded-full overflow-hidden relative">
                      <div
                        className="bg-brand-green h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: item.pct }}
                      />
                    </div>
                    <span className="w-full md:w-20 text-right text-xs md:text-sm font-bold text-brand-green">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest pb-4 border-b border-brand-border/30">
                  <span>Project Phases</span>
                  <span>Duration</span>
                </div>
                {[
                  { label: "Architectural Planning & Permits", pct: "25%", duration: "Months 1-3" },
                  { label: "Concrete Foundation & Curing", pct: "15%", duration: "Months 4-5" },
                  { label: "Brick Masonry & Frame Structure", pct: "30%", duration: "Months 6-9" },
                  { label: "Drywall, Insulation & Roof Installation", pct: "15%", duration: "Months 10-11" },
                  { label: "Finishes, Commissioning & Handover", pct: "15%", duration: "Months 12-14+" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8">
                    <span className="w-full md:w-1/3 text-sm md:text-base font-bold text-brand-charcoal">
                      {item.label}
                    </span>
                    <div className="w-full md:w-1/2 bg-brand-border/20 h-6 rounded-full overflow-hidden relative">
                      <div
                        className="bg-brand-charcoal/50 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: item.pct }}
                      />
                    </div>
                    <span className="w-full md:w-20 text-right text-xs md:text-sm font-bold text-brand-charcoal/60">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Engineered to perfection (Interactive Detail Swapper) */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left interactive details */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-4">
                Details
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight mb-6">
                Engineered to perfection
              </h2>
              <p className="text-brand-charcoal/60 text-sm md:text-base font-medium">
                Click on the components below to explore the structural engineering of our offsite home systems.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {[
                {
                  id: "frame",
                  title: "Frame",
                  desc: "The exterior walls consist of sturdy wooden joists and dimensionally stable boards.",
                },
                {
                  id: "insulation",
                  title: "Insulation",
                  desc: "Multiple layers of insulation ensure homes always stay warm or cool, as required.",
                },
                {
                  id: "ventilation",
                  title: "Ventilation",
                  desc: "Protective vapour barriers allow for breathability and a better indoor climate.",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDetail(item.id as any)}
                  className={`text-left p-6 rounded-[20px] transition-all duration-300 border ${activeDetail === item.id
                      ? "bg-brand-green text-white border-brand-green"
                      : "bg-white text-brand-charcoal border-brand-border/40 hover:bg-white/70"
                    }`}
                >
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p
                    className={`text-xs md:text-sm font-medium ${activeDetail === item.id ? "text-white/80" : "text-brand-charcoal/50"
                      }`}
                  >
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right Image Display */}
          <div className="relative w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden bg-white shadow border border-brand-border/40">
            {Object.entries(detailImages).map(([key, src]) => (
              <div
                key={key}
                className={`absolute inset-0 p-8 transition-opacity duration-500 ease-in-out ${activeDetail === key ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image
                  src={src}
                  alt={`Kingshaus Engineering - ${key}`}
                  fill
                  className="object-contain p-8 transition-transform duration-500 transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Panelized or modular (Sticky split) */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-16">
          {/* Left sticky column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[50vh] lg:-translate-y-1/2 h-fit space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Platforms
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
              Panelized or
              <br />
              modular
            </h2>
            <p className="text-brand-charcoal/70 text-base font-medium leading-relaxed max-w-md">
              We produce houses from two different platforms. Flat modules (panelized) for single family homes and volumetric modules for apartment buildings.
            </p>
          </div>

          {/* Right Column details */}
          <div className="w-full lg:w-1/2 space-y-16">
            <div className="bg-brand-cream-dark p-8 md:p-10 rounded-[28px] border border-brand-border/40 shadow-sm space-y-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-[20px] overflow-hidden shadow-sm">
                <Image
                  src="https://www.kingshaus.co/_nuxt/image/d47189.jpeg"
                  alt="Flat panelized transport"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal">Flat Panelized System</h3>
              <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
                Prefabricated wall panels, pre-installed with premium insulation, Vapor barriers, and window structures. Perfect for modular shipping over oceans and rapid assembly for modern single-family estates.
              </p>
            </div>

            <div className="bg-brand-cream-dark p-8 md:p-10 rounded-[28px] border border-brand-border/40 shadow-sm space-y-6">
              <div className="relative w-full h-[250px] md:h-[300px] rounded-[20px] overflow-hidden shadow-sm">
                <Image
                  src="https://www.kingshaus.co/_nuxt/image/b74d2b.jpeg"
                  alt="Volumetric modular blocks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal">Volumetric Modular Platform</h3>
              <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
                Three-dimensional apartment pods fabricated fully completed inside the factory floor. They include tiling, flooring, paint, and lights. Blocks are stacked on-site to erect high-end multi-family complexes in weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Wood benefits Carousel */}
      <section className="py-24 md:py-36 px-6 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
                Wood Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
                Renewable resource
              </h2>
              <p className="text-brand-charcoal/60 text-sm md:text-base font-medium">
                Building with timber harnesses the natural benefits of the world's most sustainable building block. Use the arrows or swipe to view.
              </p>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll left"
                className="w-12 h-12 rounded-full border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll right"
                className="w-12 h-12 rounded-full border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal scrollable carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 pb-10 scrollbar-none snap-x snap-mandatory"
          >
            {carouselCards.map((card, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-[24px] border border-brand-border/40 shadow-sm overflow-hidden flex-shrink-0 snap-start flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
                <div className="p-8 space-y-3 flex-grow">
                  <h3 className="text-lg font-bold text-brand-green tracking-wider uppercase">
                    {card.title}
                  </h3>
                  <p className="text-brand-charcoal/70 text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Semi-automated facilities */}
      <section className="relative min-h-[600px] flex items-center justify-start px-6 md:px-20 py-24 text-white overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 z-0 bg-black/60">
          <Image
            src="https://www.kingshaus.co/_nuxt/image/7735db.jpeg"
            alt="Sweden Factory Production"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-2xl bg-brand-green/90 backdrop-blur-md p-10 md:p-14 rounded-[32px] border border-white/10 shadow-xl space-y-6">
          <span className="text-xs uppercase tracking-widest text-white/60 font-bold block">
            The Future of Home Construction
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Our facilities in Sweden can produce 500 buildings a year
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
            Our semi-automated production lines manufacture structural elements as modules, including walls, beams, and roofing. New facilities will soon be added in Dubai.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="bg-white text-brand-green px-8 py-4 rounded-full font-bold text-sm hover:bg-brand-cream transition-colors shadow-sm inline-block"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
