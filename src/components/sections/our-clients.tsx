"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "daraz",
    client: "DARAZ PVT LTD",
    category: "Logistics & IoT",
    title: "Smart tracking for fast package delivery.",
    description: "We built an advanced IoT system to track delivery vehicles live on a map. This helps Daraz optimize routes, send packages faster, and maintain complete organizational visibility.",
    image: "/images/case_logistics.png"
  },
  {
    id: "face-detector",
    client: "Construction Industry",
    category: "HR & Biometrics",
    title: "Live Face Detection HR System.",
    description: "We installed more than 50 internet-connected face detection machines at different construction sites across Sri Lanka, allowing the head office to monitor live staff attendance and manage payroll seamlessly.",
    image: "/images/case_hr.png"
  },
  {
    id: "greenhouse",
    client: "VMP Agri",
    category: "Smart Agriculture",
    title: "Automated Greenhouse Management.",
    description: "A complete IoT ecosystem for automated climate control, precise irrigation, and real-time monitoring of greenhouse conditions to maximize crop yield and eliminate manual errors.",
    image: "/images/case_factory.png" 
  },
  {
    id: "websites",
    client: "Enterprise Clients",
    category: "Web Platforms",
    title: "High-Performance Corporate Websites.",
    description: "We design and develop ultra-modern, lightning-fast corporate websites and web applications. Browse our recent work:",
    links: [
      { name: "MediConnect", url: "https://mediconnect.com.lk/" },
      { name: "RR Construction", url: "https://www.rrconstruction.lk" },
      { name: "REX Industries", url: "https://www.rexindustries.com" },
      { name: "A4Tours", url: "https://www.a4tours.com" }
    ],
    image: "/images/bento_cloud.png"
  }
];

export const OurClientsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#020202] py-32 md:py-48 overflow-hidden">
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden z-0">
        <motion.h2 
          style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]), willChange: "transform" }}
          className="text-[25vw] font-black uppercase text-white whitespace-nowrap"
        >
          Selected Works
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 max-w-3xl">
            Pushing the boundaries of digital space.
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full" />
        </div>

        {/* Detailed Projects List */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative border-t border-white/10 pt-10 md:pt-16 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
              
              {/* Left Details */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                
                {/* Meta */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    {project.category}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/50">
                    {project.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="mb-10">
                  <p className="text-lg text-white/60 font-medium leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  
                  {/* Example Links if they exist */}
                  {project.links && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full px-4 py-2 hover:bg-cyan-400 hover:text-black transition-all"
                        >
                          {link.name} <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action */}
                <button className="flex items-center gap-3 text-white uppercase font-bold tracking-widest text-sm w-max hover:text-cyan-400 transition-colors">
                  View Case Study <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Image (Smaller, elegant) */}
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020202] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
