"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  {
    name: "Build Smarter",
    href: "/build-smarter",
    description: "By pre-constructing our homes offsite, we save valuable resources",
  },
  {
    name: "Sustainability",
    href: "/sustainability",
    description: "We can lower the carbon footprint of home construction by 80%",
  },
  {
    name: "About",
    href: "/about",
    description: "Kingshaus has been developing quality homes for over 75 years",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Contact Kingshaus",
    isButton: true,
  },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);
  const navBoxRef = useRef<HTMLDivElement>(null);
  
  const isWhiteLogoPage = pathname === "/" || pathname === "/sustainability";

  useEffect(() => {
    // Only animate drop-down on the home page if at the very top
    if (pathname === "/" && window.scrollY < 10) {
      gsap.to([logoRef.current, navBoxRef.current], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 2.2,
        ease: "power3.out",
        stagger: 0.1,
      });
    } else {
      // For all other pages, or if scrolled down on home page, show immediately
      gsap.set([logoRef.current, navBoxRef.current], {
        y: 0,
        opacity: 1,
      });
    }
  }, [pathname]);

  useEffect(() => {
    // ABSOLUTELY INSTANT LOGO HIDE/SHOW ON SCROLL
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top top",
        onUpdate: (self) => {
          const scrollY = self.scroll();
          if (scrollY > 5) { 
            // Instant hide
            gsap.to(logoRef.current, {
              y: -100,
              opacity: 0,
              duration: 0.05,
              ease: "none",
              overwrite: "auto"
            });
          } else {
            // Instant show (matched speed)
            gsap.to(logoRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.05,
              ease: "none",
              overwrite: "auto"
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <header className="fixed top-8 left-0 z-50 w-full px-8 md:px-12 flex items-start justify-between pointer-events-none font-montserrat">

        {/* LOGO */}
        <div
          ref={logoRef}
          className="pointer-events-auto transform -translate-y-[150%] opacity-0"
        >
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="block w-20 md:w-24">
            <Image
              src={isWhiteLogoPage ? "/images/logo-white.svg" : "/images/logo-dark.svg"}
              alt="Kingshaus logo"
              width={96}
              height={24}
              className="w-full object-contain"
              priority
            />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div ref={navBoxRef} className="hidden md:block pointer-events-auto transform -translate-y-[150%] opacity-0">
          <div
            className={`bg-white rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden w-[420px] transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) ${
              hoveredIndex !== null ? 'h-[120px]' : 'h-[56px]'
            }`}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="px-3 h-[56px] flex items-center">
              <nav className="flex items-center w-full justify-between">
                {navLinks.map((link, index) => (
                  <div
                    key={link.name}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="flex items-center"
                  >
                    {!link.isButton ? (
                      <Link
                        href={link.href}
                        className={`text-[13px] px-2 py-2 font-semibold transition-colors duration-300 ${
                          hoveredIndex !== null && hoveredIndex !== index
                            ? "text-charcoal/20"
                            : "text-charcoal"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="group relative z-10 ml-1 overflow-hidden rounded-md bg-[#354D43] px-3 py-2.5 text-[12px] font-bold text-white transition-all duration-300"
                      >
                        <span className="relative z-20">{link.name}</span>
                        <span
                          className={`absolute inset-0 z-10 bg-[#282828] transition-transform duration-200 ${
                            hoveredIndex === index
                              ? "scale-y-100 origin-bottom ease-out"
                              : "scale-y-0 origin-top ease-in group-hover:scale-y-100 group-hover:origin-bottom group-hover:ease-out"
                          }`}
                        ></span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="px-5 pb-4">
              <p
                className={`text-[13px] font-light leading-[1.4] text-charcoal/40 w-full transition-all duration-500 ${    
                  hoveredIndex !== null
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                {hoveredIndex !== null ? navLinks[hoveredIndex].description : ""}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden w-12 h-12 bg-white rounded-lg flex flex-col items-center justify-center gap-1.5 shadow-sm pointer-events-auto"
        >
          <span className="w-6 h-[2px] bg-charcoal"></span>
          <span className="w-6 h-[2px] bg-charcoal"></span>
        </button>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[60] md:hidden flex flex-col px-8 py-12 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full invisible pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-start mb-16">
          <Image src="/images/logo-dark.svg" alt="Kingshaus logo" width={140} height={36} className="object-contain" />      
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="flex flex-col gap-10">
          {navLinks.filter(l => !l.isButton).map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-charcoal">{link.name}</Link>
              <p className="text-sm text-charcoal/50">{link.description}</p>
            </div>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-[#354D43] text-white text-center py-4 rounded-lg font-bold">Contact</Link>
        </nav>
      </div>
    </>
  );
}
