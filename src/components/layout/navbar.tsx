"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Technologies", href: "/technologies" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* 
        Ultra-clean Enterprise White Navbar 
        This replaces the floating pill design with a full-width solid white header.
      */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 flex items-center border-b border-slate-200/50 bg-white/90 backdrop-blur-xl",
          isScrolled ? "h-20 shadow-lg" : "h-24 shadow-none"
        )}
      >
        <div className="w-full mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (No text, no white box, purely native image integration) */}
          <Link href="/" className="relative flex items-center h-12 w-48 shrink-0 transition-transform hover:scale-105">
            <Image 
              src="/images/companylogo.png" 
              alt="Tech Connect Global Logo" 
              fill 
              className="object-contain object-left" 
              sizes="192px" 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold tracking-widest uppercase text-slate-800 hover:text-cyan-600 transition-colors group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 shadow-md"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-cyan-500 transition-transform duration-500 ease-out group-hover:scale-100" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-black md:hidden p-2 hover:text-cyan-600 transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu - Adapted for light theme styling */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[200] flex flex-col bg-white px-6 py-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative h-12 w-48 shrink-0">
                <Image 
                  src="/images/companylogo.png" 
                  alt="Tech Connect Global Logo" 
                  fill 
                  className="object-contain object-left" 
                  sizes="192px" 
                />
              </div>
              <button
                className="rounded-full bg-slate-100 p-3 text-black transition-colors hover:bg-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-left mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl sm:text-5xl font-black tracking-tighter text-black hover:text-cyan-600 transition-colors uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-8 py-4 text-base font-bold uppercase tracking-widest text-white shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
