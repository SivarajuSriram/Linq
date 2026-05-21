"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const footerContainerRef = useRef<HTMLDivElement>(null);

  const links = [
    { text: "Build Smarter", href: "/build-smarter" },
    { text: "Sustainability", href: "/sustainability" },
    { text: "About", href: "/about" },
  ];

  // GSAP ScrollTrigger for BUILD SMARTER character reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-char-inner",
        {
          y: "110%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1.0,
          ease: "power4.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".footer-build-smarter",
            start: "top 95%", // Trigger when footer text is near the bottom of viewport
            toggleActions: "play none none none",
          },
        }
      );
    }, footerContainerRef);

    return () => ctx.revert();
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  const renderFooterCharacters = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden align-bottom">
        <span className="footer-char-inner inline-block translate-y-[110%] opacity-0 will-change-transform">
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <footer ref={footerContainerRef} className="relative bg-[#E1DFDD] pt-24 pb-12 px-6 md:px-12 overflow-hidden z-10">
      {/* Background SVG stroke lines at the brand chevron angle */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <svg
          className="w-full h-auto max-w-[1896px] opacity-10"
          fill="none"
          height="782"
          viewBox="0 0 1896 782"
          width="1896"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z"
            stroke="#282828"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[380px]">
        {/* Top Section: Giant Typography (Reduced font size and character anim) */}
        <div className="footer-build-smarter text-[10vw] md:text-[5rem] font-medium leading-[0.9] tracking-[-0.03em] text-[#282828] uppercase select-none mb-16">
          <div className="flex flex-wrap gap-x-[0.02em]">
            {renderFooterCharacters("BUILD")}
          </div>
          <div className="flex flex-wrap gap-x-[0.02em]">
            {renderFooterCharacters("SMARTER")}
          </div>
        </div>

        {/* Bottom Section: Logo, Navigation, and CTA Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand Logo (Increased size and custom click handler for reload transition) */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <Image
              src="/images/logo-dark.svg"
              alt="Kingshaus Logo"
              width={180}
              height={36}
              className="w-40 md:w-48 h-auto object-contain"
            />
          </a>

          {/* Navigation Links and Let's Work Together Button */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12">
            {links.map((link, idx) => {
              const isFaded = hoveredIndex !== null && hoveredIndex !== idx;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-sm font-medium text-[#282828] transition-opacity duration-300 ${
                    isFaded ? "opacity-30" : "opacity-100"
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="button-slide-fill button-footer-nav px-5 py-2 rounded-md font-medium text-sm shadow-sm"
            >
              Let's work together
            </Link>
          </div>
        </div>

        {/* Legal / Copyright Row */}
        <div className="mt-8 flex justify-end gap-6 text-xs text-[#282828]/50">
          <Link href="/privacy-policy" className="hover:text-[#282828] transition-colors duration-300">
            Privacy policy
          </Link>
          <span>© {new Date().getFullYear()} Kingshaus</span>
        </div>
      </div>
    </footer>
  );
}
