export default function BigChevron({ className = "opacity-30" }: { className?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <svg fill="none" height="782" viewBox="0 0 1896 782" width="1896" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto max-w-[90vw] ${className}`}>
        <path d="m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z" stroke="currentColor"></path>
      </svg>
    </div>
  );
}
