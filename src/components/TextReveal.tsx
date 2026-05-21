"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextBlock {
  type: "textBlock";
  textBlock: string;
}

interface ButtonItem {
  type: string;
  link: {
    url: string;
    text: string;
  };
}

interface ButtonBlock {
  type: "buttonBlock";
  buttons: ButtonItem[];
}

type ContentAreaItem = TextBlock | ButtonBlock;

interface TextRevealProps {
  module?: {
    revealableText: string;
    contentArea: ContentAreaItem[];
  };
}

export default function TextReveal({ module }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const textToReveal = module?.revealableText || "We have deep experience of premium Scandinavian home construction.";
  
  // Find text block dynamically with type guards
  const textBlockItem = module?.contentArea?.find(
    (item): item is TextBlock => item.type === "textBlock"
  );
  const textBlock = textBlockItem?.textBlock || 
    "<p>For over 75 years, we have been developing homes of the highest quality that provide endless possibilities for architectural design.</p>";
  
  // Find button block dynamically with type guards
  const buttonBlockItem = module?.contentArea?.find(
    (item): item is ButtonBlock => item.type === "buttonBlock"
  );
  const buttons = buttonBlockItem?.buttons || [
    {
      type: "link-green",
      link: {
        url: "/about/",
        text: "About us"
      }
    }
  ];

  // Helper to split text into characters while keeping words grouped
  const splitTextIntoSpans = (text: string, isAnimated: boolean) => {
    return text.split(" ").map((word, wordIdx, arr) => (
      <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'bottom' }}>
        {word.split("").map((char, charIdx) => (
          <span 
            key={charIdx} 
            className="revealable-text__letter"
            style={isAnimated ? { clipPath: "inset(0% 100% 0% 0%)", willChange: "clip-path" } : undefined}
          >
            {char}
          </span>
        ))}
        {wordIdx < arr.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  };

  useGSAP(() => {
    const letters = textRef.current?.querySelectorAll(".revealable-text__text--animated .revealable-text__letter");
    if (!letters || letters.length === 0) return;

    // Create sequential letter-by-letter reveal timeline (slow scrub)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    letters.forEach((letter) => {
      tl.to(letter, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="text-reveal module home-page__text-reveal">
      <div className="text-reveal__container kh-container">
        
        {/* Revealable Text Block */}
        <div ref={textRef} className="revealable-text text-reveal__revealable-text">
          <div className="revealable-text__text-holder">
            {/* Active (Animated) Layer */}
            <div className="text-block revealable-text__text revealable-text__text--animated">
              {splitTextIntoSpans(textToReveal, true)}
            </div>

            {/* Ghost (Background) Layer */}
            <div className="text-block revealable-text__text revealable-text__text--ghost">
              {splitTextIntoSpans(textToReveal, false)}
            </div>
          </div>
        </div>

        {/* Content area with text paragraph & buttons */}
        <div className="content-area text-reveal__content-area">
          <div 
            className="text-block content-area__text-block"
            dangerouslySetInnerHTML={{ __html: textBlock }}
          />

          {buttons && buttons.length > 0 && (
            <div className="button-block content-area__button-block button-block--standard">
              {buttons.map((btn, idx) => (
                <Link 
                  key={idx}
                  href={btn.link.url}
                  className={`button button--${btn.type}`}
                >
                  <span className="button__text">{btn.link.text}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
