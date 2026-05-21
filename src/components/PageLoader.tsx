"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Total animation: 0.5s delay + 2.2s animation = 2.7s
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <section className="page-loader" aria-hidden="true">
      <div className="page-loader__container">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className={`page-loader__shutter page-loader__shutter--${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
