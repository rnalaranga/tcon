"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      
      {/* Photo Background with Parallax and Slow Scale */}
      <motion.div style={{ y, opacity, willChange: "transform, opacity" }} className="absolute inset-0 z-0 overflow-hidden bg-black">
        
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/hero_tech.png"
            alt="Future of Tech"
            fill
            priority
            className="object-cover opacity-[0.35]"
          />
        </motion.div>
        
        {/* Dark overlay to blend seamlessly into the black page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto w-full max-w-7xl mt-8 md:mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            
            <motion.div variants={itemVariants} className="overflow-hidden">
              {/* Removed mix-blend-difference for massive performance gain */}
              <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white/90 uppercase md:text-[8vw]">
                We build
              </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase md:text-[8vw] drop-shadow-2xl">
                The Future
              </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="overflow-hidden mb-12">
              <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white/90 uppercase md:text-[8vw]">
                Of Tech.
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="overflow-hidden max-w-2xl mt-6">
              <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed">
                We are a premier technology consulting firm specializing in engineering scalable digital ecosystems, intelligent automation, and enterprise-grade software solutions for global industry leaders.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-md text-lg text-white/70 font-medium">
                An ultra-modern creative engineering agency delivering high-performance digital experiences and scalable enterprise solutions.
              </p>
              
              <Link
                href="/work"
                className="group relative flex h-16 w-64 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black font-bold uppercase tracking-widest transition-transform hover:scale-105 mt-4 md:mt-0 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-cyan-400 transition-transform duration-500 ease-out group-hover:scale-100" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
