import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "GlassBazzar | Transparent AI Commerce",
  description: "An AI-powered ecommerce experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-body text-foreground-muted bg-background selection:bg-accent selection:text-background">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}