"use client";

interface TaglineContentProps {
  module?: {
    tagline: string;
    contentArea: Array<{
      type: string;
      textBlock: string;
    }>;
  };
}

export default function TaglineContent({ module }: TaglineContentProps) {
  // Use default data if not provided
  const tagline = module?.tagline || "We don't just build homes, we build responsibly.";
  const textHtml = module?.contentArea?.[0]?.textBlock || 
    "<p>Our building systems use modern technology in advanced, quality-controlled, indoor environments to ensure the highest standard of every detail.</p>";

  return (
    <section className="tagline-content module home-page__tagline-content">
      <div className="tagline-content__container kh-container">
        <h2 
          className="tagline-content__tagline"
          dangerouslySetInnerHTML={{ __html: tagline }}
        />
        <div className="content-area tagline-content__content-area">
          <div 
            className="text-block content-area__text-block"
            dangerouslySetInnerHTML={{ __html: textHtml }}
          />
        </div>
      </div>
    </section>
  );
}
