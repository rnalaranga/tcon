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
  Mail
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

      {/* 
        2. MacOS-Style Bottom Dock (Desktop & Mobile)
        Replaces the top menu and hamburger entirely.
      */}
      <motion.div 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 }, // slides down to hide
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 md:gap-2 p-2 md:p-3 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto w-[92vw] sm:w-auto max-w-[450px] sm:max-w-none overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex items-center gap-1 md:gap-2 mx-auto">
          {dockItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative group flex items-center justify-center shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip (Hidden on small mobile to prevent overflow clipping, visible on md+) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full mb-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap shadow-xl hidden md:block"
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
                    "relative flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full transition-colors duration-300",
                    isActive ? "bg-white/10" : "hover:bg-white/5",
                    isHovered ? "bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] border border-cyan-400/30" : "border border-transparent"
                  )}
                >
                  <Icon 
                    className={cn(
                      "h-4 w-4 md:h-5 md:w-5 transition-colors duration-300",
                      isActive ? "text-cyan-400" : "text-white/60 group-hover:text-cyan-400"
                    )} 
                  />
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div 
                      layoutId="dock-active" 
                      className="absolute -bottom-1 md:-bottom-2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
