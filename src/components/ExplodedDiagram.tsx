"use client";

import { IsometricLayers } from "./IsometricLayers";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExplodedDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphicWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Mobile (< 1024px)
    mm.add("(max-width: 1023px)", () => {
      // Content Area fade-in
      gsap.fromTo(".animated-graphic__content-area",
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".animated-graphic__content-area",
            start: "top 90%",
            end: "top center",
            scrub: true,
          }
        }
      );

      // Graphic layers explosion timeline - slow scroll scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: graphicWrapperRef.current,
          start: "center bottom",
          end: "center center",
          scrub: true,
        }
      });

      tl.fromTo(".layer-1", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -97.96, yPercent: -35.14, duration: 0.5 }, { xPercent: -53.26, yPercent: -20.50, duration: 0.5 }] }, 0)
        .fromTo(".layer-2", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -58.68, yPercent: -21.09, duration: 0.5 }, { xPercent: -32.05, yPercent: -12.30, duration: 0.5 }] }, 0)
        .fromTo(".layer-3", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -19.86, yPercent: -6.44, duration: 0.5 }, { xPercent: -10.83, yPercent: -4.10, duration: 0.5 }] }, 0)
        .fromTo(".layer-4", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 19.86, yPercent: 6.44, duration: 0.5 }, { xPercent: 10.83, yPercent: 4.10, duration: 0.5 }] }, 0)
        .fromTo(".layer-5", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 58.68, yPercent: 21.09, duration: 0.5 }, { xPercent: 32.05, yPercent: 12.30, duration: 0.5 }] }, 0)
        .fromTo(".layer-6", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 97.96, yPercent: 35.14, duration: 0.5 }, { xPercent: 53.26, yPercent: 20.50, duration: 0.5 }] }, 0);
    });

    // Desktop (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      const is5xl = window.innerWidth >= 1600;
      const holderX = is5xl ? -352 : "-22vw";

      // Graphic layers explosion timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center bottom",
          end: "center center",
          scrub: true,
        }
      });

      tl.fromTo(".animated-graphic__content-area",
        { xPercent: -50, opacity: 0 },
        {
          keyframes: [
            { xPercent: -25, opacity: 1, duration: 0.5 },
            { xPercent: 0, opacity: 1, duration: 0.5 }
          ]
        },
        0
      );

      tl.fromTo(".animated-graphic__graphic-holder",
        { x: 0 },
        { x: holderX },
        0
      );

      tl.fromTo(".layer-1", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -97.96, yPercent: -35.14, duration: 0.5 }, { xPercent: -53.26, yPercent: -20.50, duration: 0.5 }] }, 0)
        .fromTo(".layer-2", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -58.68, yPercent: -21.09, duration: 0.5 }, { xPercent: -32.05, yPercent: -12.30, duration: 0.5 }] }, 0)
        .fromTo(".layer-3", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: -19.86, yPercent: -6.44, duration: 0.5 }, { xPercent: -10.83, yPercent: -4.10, duration: 0.5 }] }, 0)
        .fromTo(".layer-4", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 19.86, yPercent: 6.44, duration: 0.5 }, { xPercent: 10.83, yPercent: 4.10, duration: 0.5 }] }, 0)
        .fromTo(".layer-5", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 58.68, yPercent: 21.09, duration: 0.5 }, { xPercent: 32.05, yPercent: 12.30, duration: 0.5 }] }, 0)
        .fromTo(".layer-6", { xPercent: 0, yPercent: 0 }, { keyframes: [{ xPercent: 97.96, yPercent: 35.14, duration: 0.5 }, { xPercent: 53.26, yPercent: 20.50, duration: 0.5 }] }, 0);
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="build-better" className="animated-graphic module home-page__animated-graphic bg-[#F8F7F4] w-full overflow-hidden relative z-10">
      <div className="animated-graphic__container kh-container">

        {/* Graphic Holder */}
        <div ref={graphicWrapperRef} className="animated-graphic__graphic-holder">
          <IsometricLayers />
        </div>

        {/* Content Area */}
        <div className="content-area animated-graphic__content-area flex flex-col justify-center">
          <div className="heading content-area__heading h2">
            <h2 className="heading__heading heading__heading--h2 text-[28px] md:text-[38px] lg:text-[40px] font-normal leading-[1.1] tracking-[-0.02em] text-[#1C1E1D] mb-6 uppercase">
              A better, faster way <br /> to build homes
            </h2>
          </div>
          <div className="text-block content-area__text-block text-[#1C1E1D]/70 text-lg font-light leading-relaxed mb-8 max-w-xl">
            By pre-constructing our homes offsite, we save valuable resources including time, energy, and manpower. This maximises efficiency, reduces costs and guarantees their quality.
          </div>
          <div className="button-block content-area__button-block button-block--standard flex gap-8">
            <Link href="/contact" className="button--link-green">
              Partner with us
            </Link>
            <Link href="/build-smarter" className="button--link-green">
              Learn more
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

