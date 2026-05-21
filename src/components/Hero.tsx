"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigChevron from "./BigChevron";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainStripsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PINNING LOGIC FOR STACKING EFFECT
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false, // Allows next section to slide over
        anticipatePin: 1,
      });

      // 2. REVEAL ANIMATIONS
      if (window.scrollY < 10) {
        const tl = gsap.timeline({
          defaults: { ease: "expo.inOut" }
        });

        // Phase 1: Folding Curtain Reveal
        tl.to(
          curtainStripsRef.current,
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.8,
            stagger: {
              each: 0.1,
              from: "end"
            },
          }
        )
          // Phase 2: Big Chevron Entry
          .fromTo(
            ".home-hero__chevron",
            { opacity: 0, scale: 0.8 },
            { opacity: 0.3, scale: 1, duration: 1.5, ease: "power3.out" },
            "-=0.8"
          )
          // Phase 3: Character Reveal Animation (Luxury Curve)
          .to(
            ".char-inner",
            {
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: "power4.out",
              stagger: 0.04
            },
            "-=1.2"
          )
          // Phase 4: Subtext Reveal
          .fromTo(
            ".home-hero__text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 0.7, duration: 1.2, ease: "power4.out" },
            "-=0.8"
          );
      } else {
        // Skip animation, jump to final state
        gsap.set(curtainStripsRef.current, { scaleY: 0 });
        gsap.set(".home-hero__chevron", { opacity: 0.3, scale: 1 });
        gsap.set(".char-inner", { y: 0, opacity: 1 });
        gsap.set(".home-hero__text", { y: 0, opacity: 0.7 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderCharacters = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden align-bottom">
        <span
          className="char-inner inline-block translate-y-[110%] opacity-0 will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <section className="home-hero relative h-screen w-full overflow-hidden bg-white font-montserrat" ref={containerRef}>

      {/* Single Background Video - Bottom Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* White Curtain Overlay - 8 strips on top of the video */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => { curtainStripsRef.current[i] = el; }}
            className="w-full h-[12.5%] bg-white"
          ></div>
        ))}
      </div>

      {/* Chevron Holder */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <BigChevron className="home-hero__chevron text-white opacity-0" />
      </div>

      {/* Content */}
      <div className="container relative z-30 mx-auto flex h-full flex-col justify-center pt-20">
        <div className="max-w-4xl text-white">
          <div className="animatable-text">
            <h1 className="animatable-text__heading text-[12vw] leading-[0.8] tracking-[-0.04em] uppercase md:text-[10vw] lg:text-[11vw]">
              <span className="flex flex-wrap gap-x-[0.02em]">
                {renderCharacters("BUILD")}
              </span>
              <span className="flex flex-wrap gap-x-[0.02em]">
                {renderCharacters("SMARTER")}
              </span>
            </h1>
          </div>
          <p className="home-hero__text mt-12 max-w-xl text-[14px] font-extralight uppercase tracking-[0.15em] leading-[1.8] opacity-0 md:text-[15px]">
            Offsite production of world-leading homes for forward-thinking developers
          </p>
        </div>
      </div>

      {/* Scroll Button */}
      <button className="absolute bottom-12 left-8 md:left-12 z-40 flex items-center justify-center p-4 transition-transform hover:translate-y-2 opacity-0 home-hero__text">
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 8L9 16L1 8" stroke="white" strokeWidth="2" className="home-hero__arrow-chevron" />
          <path d="M9.17407 1.56519L9.00016 16" stroke="white" strokeWidth="2" className="home-hero__arrow-line" />
        </svg>
      </button>
    </section>
  );
}
