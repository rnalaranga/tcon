"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
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
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
            isScrolled ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
          )}>
            
            {/* Logo */}
            <Link href="/" className="group relative z-10 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold text-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                TC
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Tech Connect
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold tracking-wide text-white/70 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-cyan-400 transition-transform duration-300 ease-out group-hover:scale-100" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="text-white md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[200] flex flex-col bg-black px-6 py-10"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold text-xl">
                TC
              </div>
              <button
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
