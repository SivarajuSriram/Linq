"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  const isContact = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate header items dropping down on the homepage
  useEffect(() => {
    if (isHome) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".header-anim-item",
          { y: -30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.1, 
            ease: "power3.out",
            delay: 2.7 // Wait for the PageLoader shutter animation
          }
        );
      }, headerRef);
      return () => ctx.revert();
    }
  }, [isHome]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  // Determine logo color
  const logoSrc = isContact ? "/images/logo-dark.svg" : "/images/logo-white.svg";

  // Determine nav styling
  const navContainerClass = isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border border-brand-border/30 rounded-full px-6 py-2 flex items-center space-x-8"
    : "flex items-center space-x-8 py-2";

  const navLinkClass = isHome
    ? "text-brand-charcoal hover:text-brand-green font-medium text-sm transition-colors duration-300"
    : "text-brand-charcoal hover:text-brand-green font-semibold text-sm transition-colors duration-300";

  const contactButtonClass = "button-slide-fill button-header-contact px-5 py-2 rounded-full font-medium text-sm shadow-sm";

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="relative z-50 header-anim-item">
          <Image
            src={logoSrc}
            alt="Kingshaus Logo"
            width={160}
            height={32}
            className="w-36 md:w-44 h-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className={navContainerClass}>
            <Link
              href="/build-smarter"
              className={`${navLinkClass} header-anim-item ${pathname === "/build-smarter" ? "text-brand-green" : ""}`}
            >
              Build Smarter
            </Link>
            <Link
              href="/sustainability"
              className={`${navLinkClass} header-anim-item ${pathname === "/sustainability" ? "text-brand-green" : ""}`}
            >
              Sustainability
            </Link>
            <Link
              href="/about"
              className={`${navLinkClass} header-anim-item ${pathname === "/about" ? "text-brand-green" : ""}`}
            >
              About
            </Link>
            <div className="header-anim-item">
              <Link href="/contact" className={contactButtonClass}>
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 p-2 flex flex-col justify-between h-5 w-6 focus:outline-none header-anim-item pointer-events-auto"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full transition-transform duration-300 ${
              isContact ? "bg-brand-charcoal" : "bg-white"
            } ${mobileMenuOpen ? "transform rotate-45 translate-y-2 bg-brand-charcoal!" : ""}`}
          />
          <span
            className={`block h-0.5 w-full transition-opacity duration-300 ${
              isContact ? "bg-brand-charcoal" : "bg-white"
            } ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full transition-transform duration-300 ${
              isContact ? "bg-brand-charcoal" : "bg-white"
            } ${mobileMenuOpen ? "transform -rotate-45 -translate-y-2 bg-brand-charcoal!" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-brand-cream z-40 flex flex-col justify-center px-12 transition-transform duration-500 ease-in-out md:hidden pointer-events-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-8 text-2xl font-semibold text-brand-charcoal">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:text-brand-green transition-colors ${pathname === "/" ? "text-brand-green" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/build-smarter"
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:text-brand-green transition-colors ${pathname === "/build-smarter" ? "text-brand-green" : ""}`}
          >
            Build Smarter
          </Link>
          <Link
            href="/sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:text-brand-green transition-colors ${pathname === "/sustainability" ? "text-brand-green" : ""}`}
          >
            Sustainability
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`hover:text-brand-green transition-colors ${pathname === "/about" ? "text-brand-green" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block bg-brand-green text-white text-center py-3 rounded-full font-medium text-lg hover:bg-brand-green-hover transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
