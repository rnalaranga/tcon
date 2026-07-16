"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutionsList = [
  "Full ERP Solutions",
  "IoT Solutions",
  "BPO Services",
  "Cloud Solutions"
];

export const AboutCompanySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden text-white border-y border-white/5">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              About Company
            </div>
            
            <h2 className="text-5xl md:text-7xl xl:text-[8rem] font-black tracking-tighter text-white leading-[0.9] uppercase">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Businesses.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-start md:justify-end mt-4 md:mt-auto"
          >
            <Link
              href="/about"
              className="group relative inline-flex h-16 w-64 items-center justify-center overflow-hidden rounded-full bg-white text-black font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Discover More 
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-2">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </span>
              <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-cyan-400 transition-transform duration-500 ease-out group-hover:scale-100" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Column (Text & Solutions) */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* Main Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col gap-6 shadow-2xl h-full"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold border-l-4 border-cyan-400 pl-6">
                Tech Connect Global Pvt Ltd is a technology company dedicated to transforming businesses through innovative and reliable digital solutions.
              </p>
              
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
                As a member of the Kanrich Group, we combine financial strength, proven execution, and digital innovation to deliver high-quality services. We offer a comprehensive range of solutions, including Full ERP Solutions, IoT Solutions, BPO Services, and Cloud Solutions, designed to support modern business needs. Our focus is on developing scalable, secure, and customizable systems that streamline operations, improve efficiency, and enable better decision-making. At Tech Connect Global, we are committed to helping organizations embrace digital transformation and achieve sustainable growth through smart and effective technology solutions.
              </p>
            </motion.div>

            {/* Solutions Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutionsList.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-[1.5rem] p-5 transition-all duration-300"
                >
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="font-bold text-white uppercase tracking-wider text-xs md:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column (Massive New Image) */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 group"
            >
              <motion.div style={{ scale: scaleImage }} className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/corporate_tech_office.png"
                  alt="Corporate Technology Office"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Gradient Overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505]/50 pointer-events-none" />
              </motion.div>

              {/* Overlaid Kanrich Logo inside the image */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-6 rounded-[2rem] bg-black/70 backdrop-blur-2xl p-6 md:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform hover:-translate-y-2">
                
                <div className="relative w-36 h-12 md:w-48 md:h-14 bg-white rounded-xl p-3 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center">
                  <Image src="/images/companylogo.png" alt="Kanrich Group" fill className="object-contain p-2" />
                </div>
                
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">A Member of</p>
                  <p className="text-sm md:text-base font-bold uppercase tracking-widest text-white">Kanrich Group</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
