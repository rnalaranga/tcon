import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingSocial } from "@/components/layout/floating-social";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Connect Global | Engineering Intelligent Digital Transformation",
  description: "Global technology consulting company delivering enterprise digital transformation solutions.",
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black bg-background text-foreground transition-colors duration-300`}>
        <SmoothScroll>
          <Navbar />
          <FloatingSocial />
          <main className="flex min-h-screen flex-col pt-0">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
