"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Sustainability() {
  const natureCards = [
    {
      title: "Renewable",
      desc: "Wood is a fantastic and fully renewable resource.",
      image: "https://www.kingshaus.co/_nuxt/image/7e721b.jpeg",
    },
    {
      title: "CO2 binding",
      desc: "Trees bind atmospheric carbon through photosynthesis as they grow.",
      image: "https://www.kingshaus.co/_nuxt/image/20a1dd.jpeg",
    },
    {
      title: "Energy-efficient",
      desc: "Wood is an excellent insulator that does not retain heat or cold.",
      image: "https://www.kingshaus.co/_nuxt/image/006601.jpeg",
    },
  ];

  const designCards = [
    {
      title: "Resource-conscious design",
      desc: "We create homes that harness innovation to do more with fewer valuable resources.",
      image: "https://www.kingshaus.co/_nuxt/image/3fb1a7.jpeg",
    },
    {
      title: "Energy-saving construction",
      desc: "Our homes capture and store CO2 in their timber frames so we can lower the carbon footprint of home construction by over 80%.",
      image: "https://www.kingshaus.co/_nuxt/image/9708cd.jpeg",
    },
    {
      title: "Energy-efficient homes",
      desc: "Our homes use around 40% less energy over their lifetime than a traditional house built from brick or concrete.",
      image: "https://www.kingshaus.co/_nuxt/image/23cd9a.jpeg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar />

      {/* Hero Split Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Half: Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-brand-charcoal">
          <Image
            src="https://www.kingshaus.co/_nuxt/image/4614a3.jpeg"
            alt="Aerial Forest View"
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
              Sustainability
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-charcoal leading-none mb-6">
              FRESH
              <br />
              THINKING
              <br />
              FROM THE
              <br />
              GROUND UP
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

      {/* Section 2: Responsible Living Overview */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
            Eco Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            New standards for responsible living
          </h2>
          <p className="text-brand-charcoal/80 text-base md:text-lg font-medium leading-relaxed">
            We create homes that not only save energy but also actively contribute to a carbon-neutral future, setting new standards for environmentally responsible living.
          </p>
          <p className="text-brand-charcoal/60 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Our homes are better sealed and insulated to reduce the energy needed for cooling and heating. Smart building controls manage cooling and lighting more efficiently, while our roofs feature integrated solar panels to generate power directly in each home.
          </p>
        </div>
      </section>

      {/* Section 3: Sustainable by Nature Grid */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Natural Building blocks
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Sustainable by nature
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {natureCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] border border-brand-border/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="text-lg font-bold text-brand-charcoal">{card.title}</h3>
                  <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Eco-friendly by Design Grid */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Engineering Future
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Eco-friendly by design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] border border-brand-border/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="text-lg font-bold text-brand-charcoal">{card.title}</h3>
                  <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Responsible Sourcing */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Certifications
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              We source from responsibly-managed, FSC‑certified forests
            </h2>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              Forest Stewardship Council (FSC) certified forests adhere to strict environmental, social, and economic standards. The wood we source is all FSC‑certified.
            </p>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              The certification confirms that the forest is being managed in a way that preserves biological diversity and benefits the lives of local people and workers, while ensuring it sustains economic viability.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-md">
            <Image
              src="https://www.kingshaus.co/_nuxt/image/3d4922.jpeg"
              alt="FSC Forestry Sourcing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Net Zero UAE Alignment */}
      <section className="relative min-h-[600px] flex items-center justify-end px-6 md:px-20 py-24 text-white overflow-hidden bg-brand-green">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black/50">
          <Image
            src="https://www.kingshaus.co/_nuxt/image/131c05.jpeg"
            alt="Kingshaus Integrated Solar Panel Roofs"
            fill
            className="object-cover opacity-80 mix-blend-multiply"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-2xl bg-white/95 backdrop-blur-md p-8 md:p-14 rounded-[32px] text-brand-charcoal border border-brand-border/40 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-6 flex-grow">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              UAE Alignment
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
              Supporting Net Zero by 2050
            </h2>
            <p className="text-xs md:text-sm text-brand-charcoal/70 font-semibold leading-relaxed">
              The UAE is the first MENA nation to commit to net-zero emissions by 2050. This aligns with the Paris Agreement goal of reducing greenhouse gas, transforming The Emirates into the world’s most dynamic economy.
            </p>
            <p className="text-xs md:text-sm text-brand-charcoal/70 font-semibold leading-relaxed">
              Our construction methods help provide many of the new homes needed for regional growth, while enabling the UAE’s ambitious CO2 reduction targets.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-green"
              >
                Work with us
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="https://www.kingshaus.co/_nuxt/image/dd756e.png"
              alt="UAE Net Zero Stamp Logo"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
