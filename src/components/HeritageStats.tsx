"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeritageStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clippedBlockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Mobile (< 768px)
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(clippedBlockRef.current,
        { clipPath: "inset(20% 20% 20% 20% round 20px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
            toggleActions: "restart none none reverse",
          }
        }
      );
    });

    // Desktop (>= 768px)
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(clippedBlockRef.current,
        { clipPath: "inset(16.25% 40% 16.25% 40% round 20px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center 90%",
            end: "center center",
            scrub: true,
            toggleActions: "restart none none reverse",
          }
        }
      );
    });

    // Parallax scroll effect on background images
    gsap.fromTo(".expanding-callout__image",
      { yPercent: -12, scale: 1.25 },
      {
        yPercent: 12,
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="expanding-callout module home-page__expanding-callout">
      
      {/* Under Layer (Dark Text) */}
      <div className="expanding-callout__container kh-container">
        <h2 className="expanding-callout__heading expanding-callout__heading--under">
          Building on 75 years experience
        </h2>
      </div>

      {/* Clipped Over Layer (Reveals Image and White Text) */}
      <div 
        ref={clippedBlockRef} 
        className="expanding-callout__clipped-block kh-container"
      >
        <div className="asset expanding-callout__asset asset--with-parallax">
          {/* Mobile Image */}
          <picture className="asset__image-holder expanding-callout__image-holder expanding-callout__image-holder--mobile block md:hidden w-full h-full relative">
            <Image 
              src="https://www.kingshaus.co/_nuxt/image/2efde3.jpeg" 
              alt="a person measuring some wood" 
              fill 
              className="asset__image expanding-callout__image object-cover"
              data-speed=".8"
              priority
            />
          </picture>
          {/* Desktop Image */}
          <picture className="asset__image-holder expanding-callout__image-holder expanding-callout__image-holder--desktop hidden md:block w-full h-full relative">
            <Image 
              src="https://www.kingshaus.co/_nuxt/image/3479c3.jpeg" 
              alt="a person measuring some wood" 
              fill 
              className="asset__image expanding-callout__image object-cover"
              data-speed=".8"
              priority
            />
          </picture>
        </div>

        <span aria-hidden="true" className="expanding-callout__heading expanding-callout__heading--over">
          Building on 75 years experience
        </span>
      </div>

    </section>
  );
}
