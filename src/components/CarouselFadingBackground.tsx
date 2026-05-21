"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Slide {
  heading: string;
  text: string;
  imageSrcDesktop: string;
  imageSrcMobile: string;
  alt: string;
}

const SLIDES_DATA: Slide[] = [
  {
    heading: "Reducing our carbon footprint",
    text: "<p>Our homes capture and store atmospheric carbon in their timber frames, so we can lower the carbon footprint of home construction by 80%.</p>",
    imageSrcDesktop: "https://www.kingshaus.co/_nuxt/image/59d394.jpeg",
    imageSrcMobile: "https://www.kingshaus.co/_nuxt/image/a8ea8d.jpeg",
    alt: "an overhead view of a dense forest"
  },
  {
    heading: "Responsible FSC‑certified materials",
    text: "<p>The forests we source from preserve biological diversity and benefit the lives of local people and workers.</p>",
    imageSrcDesktop: "https://www.kingshaus.co/_nuxt/image/e3976c.jpeg",
    imageSrcMobile: "https://www.kingshaus.co/_nuxt/image/cc0234.jpeg",
    alt: "a small bird perching on a branch"
  }
];

export default function CarouselFadingBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax scroll effect on background images
    gsap.fromTo(".carousel-fading-background__image",
      { yPercent: -12, scale: 1.25 },
      {
        yPercent: 12,
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  const nextSlide = () => {
    if (activeIndex < SLIDES_DATA.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  return (
    <section ref={containerRef} className="carousel-fading-background module home-page__carousel-fading-background">
      {/* Background images loop with fading transitions */}
      {SLIDES_DATA.map((slide, idx) => (
        <div
          key={idx}
          className={`asset carousel-fading-background__asset asset--with-parallax ${
            idx === activeIndex ? "carousel-fading-background__asset--active" : ""
          }`}
        >
          <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--desktop hidden md:block">
            <Image
              src={slide.imageSrcDesktop}
              alt={slide.alt}
              fill
              className="asset__image carousel-fading-background__image object-cover"
              sizes="100vw"
              data-speed=".8"
              priority={idx === 0}
            />
          </picture>
          <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--mobile block md:hidden">
            <Image
              src={slide.imageSrcMobile}
              alt={slide.alt}
              fill
              className="asset__image carousel-fading-background__image object-cover"
              sizes="100vw"
              data-speed=".8"
              priority={idx === 0}
            />
          </picture>
        </div>
      ))}

      {/* Floating White Content Card container */}
      <div className="carousel-fading-background__container kh-container">
        <div className="carousel-fading-background__content-holder">
          <div className="carousel-fading-background__carousel gsap-carousel">
            <div 
              className="gsap-carousel-wrapper carousel-fading-background__wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {SLIDES_DATA.map((slide, idx) => (
                <div 
                  key={idx} 
                  className="gsap-carousel-slide carousel-fading-background__text-slide min-w-full"
                >
                  <h2 
                    className="carousel-fading-background__slide-heading"
                    dangerouslySetInnerHTML={{ __html: slide.heading }}
                  />
                  <div 
                    className="text-block carousel-fading-background__slide-text"
                    dangerouslySetInnerHTML={{ __html: slide.text }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="carousel-fading-background__navigation">
            <div
              onClick={prevSlide}
              aria-label="carousel previous slide button"
              className={`carousel-fading-background__button carousel-fading-background__button--previous ${
                activeIndex === 0 ? "carousel-fading-background__button--disabled" : ""
              }`}
            >
              <svg 
                width="10" 
                height="16" 
                viewBox="0 0 10 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="carousel-fading-background__button-icon" 
              >
                <path d="M8.76667 1.7832L2.23334 8.31654L8.76667 14.8499" stroke="white" strokeWidth="3"></path>
              </svg>
            </div>

            <div
              onClick={nextSlide}
              aria-label="carousel next slide button"
              className={`carousel-fading-background__button carousel-fading-background__button--next ${
                activeIndex === SLIDES_DATA.length - 1 ? "carousel-fading-background__button--disabled" : ""
              }`}
            >
              <svg 
                width="10" 
                height="16" 
                viewBox="0 0 10 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="carousel-fading-background__button-icon" 
              >
                <path d="M1.23333 14.8501L7.76666 8.31676L1.23333 1.78343" stroke="white" strokeWidth="3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
