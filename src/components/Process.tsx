"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Design & Planning",
    description: "Collaboration with international architects and technical engineering.",
  },
  {
    number: "02",
    title: "Offsite Production",
    description: "Millimeter precision manufacturing in Sweden and the UAE.",
  },
  {
    number: "03",
    title: "Logistics & Assembly",
    description: "Rapid onsite engineering assembly in a matter of days.",
  },
  {
    number: "04",
    title: "Completion",
    description: "Turnkey delivery including interior finishes and smart systems.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-32 md:py-48" ref={containerRef}>
      <div className="container mx-auto">
        <div className="mb-24">
          <span className="mb-8 block text-[12px] font-bold tracking-[0.3em] uppercase text-forest/40">The Kingshaus Way</span>
          <h2 className="text-[48px] font-medium leading-[1.0] tracking-[-0.02em] uppercase sm:text-[64px] md:text-[80px]">
            A seamless journey <br /> from vision to reality.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="process-item border-t border-charcoal/10 pt-12">
              <span className="mb-8 block text-[14px] font-bold text-forest">
                {step.number}
              </span>
              <h3 className="mb-6 text-[24px] font-medium uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-[16px] font-light leading-[1.6] text-charcoal/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
