"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out border-2 ${
        hovered
          ? "bg-brand-green/20 border-brand-green"
          : "border-brand-green bg-transparent"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate3d(-50%, -50%, 0) scale(${hovered ? 1.6 : 1})`,
      }}
    />
  );
}
