"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Home, 
  Layers, 
  Building2, 
  Cpu, 
  Info, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Industries", href: "/industries", icon: Building2 },
  { name: "Technologies", href: "/technologies", icon: Cpu },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* 
        1. Bare Top Logo (No Menu Bar)
        Floats purely in the top left, disconnected from any traditional navbar.
      */}
      <motion.div 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-4 md:left-12 z-[100] pointer-events-auto"
      >
        <Link 
          href="/" 
          className="group relative flex items-center justify-center px-5 py-4 md:px-8 md:py-6 bg-white/80 backdrop-blur-xl border-x border-b border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-none transition-transform hover:translate-y-1"
        >
          <div className="relative w-40 h-10 md:w-56 md:h-12">
            <Image 
              src="/images/companylogo.png" 
              alt="Tech Connect Global Logo" 
              fill 
              className="object-contain" 
              sizes="(max-width: 768px) 160px, 224px" 
              priority 
            />
          </div>
        </Link>
      </motion.div>

      {/* Mobile Hamburger (Only visible on small screens, floats top right) */}
      <motion.div 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -50, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 right-4 z-[100] md:hidden pointer-events-auto"
      >
        <button
          className="flex items-center justify-center h-12 w-12 rounded-[1rem] bg-black/60 backdrop-blur-2xl border border-white/10 text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.div>

      {/* 
        2. MacOS-Style Bottom Dock (Desktop Only)
        Replaces the top menu entirely.
      */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center gap-2 p-3 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto">
        {dockItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative group flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap shadow-xl"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Container with Magnification Effect */}
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.4 : 1,
                  y: isHovered ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  "relative flex items-center justify-center h-12 w-12 rounded-full transition-colors duration-300",
                  isActive ? "bg-white/10" : "hover:bg-white/5",
                  isHovered ? "bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] border border-cyan-400/30" : "border border-transparent"
                )}
              >
                <Icon 
                  className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    isActive ? "text-cyan-400" : "text-white/60 group-hover:text-cyan-400"
                  )} 
                />
                
                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div 
                    layoutId="dock-active" 
                    className="absolute -bottom-2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Fullscreen Mobile Menu - Adapted for the menu-less feel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col bg-black/80 px-6 py-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="relative h-16 w-64 px-6 bg-white/75 backdrop-blur-xl border border-white/20 shadow-xl rounded-none flex items-center justify-center">
                <Image 
                  src="/images/companylogo.png" 
                  alt="Tech Connect Global Logo" 
                  fill 
                  className="object-contain p-2" 
                  sizes="160px" 
                />
              </div>
              <button
                className="flex items-center justify-center h-12 w-12 rounded-[1rem] bg-white/10 backdrop-blur-md border border-white/10 text-white transition-colors hover:bg-white/20"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              {dockItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-6 text-2xl font-black tracking-tighter text-white uppercase p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black/50 text-cyan-400 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span>{item.name}</span>
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
