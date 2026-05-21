"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "Kristian Petersson",
      title: "Board Member / Co-Founder",
      image: "https://www.kingshaus.co/_nuxt/image/c2fc46.jpeg",
    },
    {
      name: "Viktor Petersson",
      title: "Board Member / Co-Founder",
      image: "https://www.kingshaus.co/_nuxt/image/ea1d95.jpeg",
    },
    {
      name: "Philip Ebbersten",
      title: "Chief Executive Officer",
      image: "https://www.kingshaus.co/_nuxt/image/14e68e.jpeg",
    },
    {
      name: "Fredrik Anheim",
      title: "Chief Technology Officer",
      image: "https://www.kingshaus.co/_nuxt/image/0d4343.jpeg",
    },
    {
      name: "Klas Scherdén",
      title: "Head of Project Delivery",
      image: "https://www.kingshaus.co/_nuxt/image/70d52b.jpeg",
    },
    {
      name: "Per Modig",
      title: "Head of Supply Chain",
      image: "https://www.kingshaus.co/_nuxt/image/24c913.jpeg",
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
            src="https://www.kingshaus.co/_nuxt/image/70e6e9.jpeg"
            alt="Kingshaus Volumetric Complex"
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
              About us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-charcoal leading-none mb-6">
              BUILDING
              <br />
              BETTER
              <br />
              FUTURES
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
              className="flex items-center justify-center p-4 bg-transparent hover:text-brand-green transition-colors duration-300"
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

      {/* Section 2: Offsite Fabrication Overview */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-b border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Innovation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Harnessing innovation to accomplish more
            </h2>
            <p className="text-brand-charcoal/80 text-base font-medium leading-relaxed">
              Our homes are manufactured offsite, and then transported for final assembly. This ensures complete control at every step, with minimal time onsite and greatly reduced wastage of materials, manpower and energy.
            </p>
            <p className="text-brand-charcoal/60 text-sm font-medium leading-relaxed">
              Because our structures are engineered in a fully-controlled environment, nothing is left to chance – so we can guarantee the quality of every detail.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] bg-white rounded-[32px] overflow-hidden border border-brand-border/40 p-6 flex justify-center items-center shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src="https://www.kingshaus.co/_nuxt/image/50105b.jpeg"
                alt="3D Wireframe structural model"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-brand-green text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Scandinavian Partnership Badge */}
      <section className="py-20 bg-brand-cream-dark border-b border-brand-border/30 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
            Legacy Collaboration
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            Building on a legacy of premium Scandinavian homes
          </h2>
          <p className="text-brand-charcoal/60 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            We are a Dubai-based homebuilder and partner of Sweden’s Surewood Housing AB, one of the world’s leading producers of engineered wooden buildings. Together, we have a seventy-five-year legacy of constructing premium homes.
          </p>
          <div className="flex justify-center pt-4">
            <div className="relative w-72 h-20 md:w-96 md:h-28">
              <Image
                src="https://www.kingshaus.co/_nuxt/image/c4fdc8.jpeg"
                alt="Kingshaus x Surewood Housing Crest"
                fill
                className="object-contain"
                sizes="384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Smarter in every way layout */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-b border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-md">
            <Image
              src="https://www.kingshaus.co/_nuxt/image/a6737a.jpeg"
              alt="Timber Milling Factory Sweden"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Generational Build
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Smarter in every way
            </h2>
            <p className="text-brand-charcoal/70 text-base font-medium leading-relaxed">
              Our proven engineering processes combined with decades of experience means we can guarantee that our homes will be finished within the agreed timelines at competitive costs. While the outstanding quality of each home ensures it will last for generations to come.
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
        </div>
      </section>

      {/* Section 5: ICC-ES Compliance Report */}
      <section className="py-24 bg-brand-green text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-white/50 font-bold block">
              Global Compliance
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Kingshaus® has been evaluated by ICC-ES
            </h2>
            <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
              Kingshaus® has been successfully evaluated by ICC-ES, the leading agency for building product code compliance in the United States, with over ninety years of expertise.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-[24px] border border-white/10 shadow-lg relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="https://www.kingshaus.co/_nuxt/image/80f220.jpeg"
                alt="ICC-ES compliance stamp and QR code"
                fill
                className="object-contain p-4"
                sizes="224px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Leadership Team */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-4">
              Our Board & Management
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              LEADERSHIP TEAM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-brand-cream-dark rounded-[24px] overflow-hidden border border-brand-border/40 shadow-sm flex flex-col group hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-[320px] bg-brand-charcoal/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center space-y-2 bg-white">
                  <h3 className="text-lg font-bold text-brand-charcoal tracking-tight">
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="text-xs font-semibold text-brand-green uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Parent Holding Company */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream-dark border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Investment Holding
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              KP Confidencia
            </h2>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              Kingshaus® is owned by KP Confidencia, a UAE-based holding and leading investor in Middle Eastern companies since 1992. Confidencia conducts its business operations in related industries and in markets with long-term growth potential.
            </p>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              It is an engaged owner who works actively through the boards of its companies to drive innovation, efficiency, and continuous improvement in performance. Business ethics and governance are the foundation of the Confidencia ownership model.
            </p>
            <div className="pt-2">
              <Link
                href="#"
                className="text-brand-green hover:underline font-bold text-sm"
              >
                kpconfidencia.com
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-md">
            <Image
              src="https://www.kingshaus.co/_nuxt/image/27add2.jpeg"
              alt="Dubai skyline reflection at night"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 8: Sister Company */}
      <section className="py-24 md:py-36 px-6 md:px-20 bg-brand-cream border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-md order-2 lg:order-1">
            <Image
              src="https://www.kingshaus.co/_nuxt/image/344ee4.jpeg"
              alt="KPS Modern Collaborative Office Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block">
              Sister Company
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              KPS
            </h2>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              Kingshaus is the sister company of KPS, a technology-led and design-focused interior contractor. Over the past thirty years, KPS has transformed over 20 million square feet of space. With a presence in nine countries across Europe and the Middle East, KPS has an annual turnover of US$150 million and over 500 employees.
            </p>
            <p className="text-brand-charcoal/70 text-sm md:text-base font-medium leading-relaxed">
              KPS relishes a challenge and the feeling of accomplishment that comes when it solves a problem that others said couldn't be solved.
            </p>
            <div className="pt-2">
              <Link
                href="#"
                className="text-brand-green hover:underline font-bold text-sm"
              >
                Find out more at kpsworld.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
