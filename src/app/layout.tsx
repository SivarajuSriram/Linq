import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kingshaus | Offsite Production of World-Leading Homes",
  description: "Offsite production of world-leading homes for forward-thinking developers. Engineered to perfection, built responsibly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onbeforeunload = function () {
                window.scrollTo(0, 0);
              };
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
