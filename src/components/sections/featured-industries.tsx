"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  {
    name: "Mobile App Development",
    desc: "We build intuitive, high-performance native and cross-platform mobile applications that deliver flawless user experiences and drive engagement on iOS and Android ecosystems.",
    image: "/images/bento_ai.png",
  },
  {
    name: "Website Development",
    desc: "From immersive brand portals to ultra-fast corporate web applications, we engineer scalable web solutions using modern frameworks that convert visitors into loyal customers.",
    image: "/images/abstract_network.png",
  },
  {
    name: "Finance Software Solutions",
    desc: "Architecting secure, compliant, and high-velocity financial systems. We develop fintech platforms, trading interfaces, and banking applications that demand zero latency.",
    image: "/images/case_banking.png",
  },
  {
    name: "HR Software Solutions",
    desc: "Streamlining workforce management with intelligent HR systems. Our platforms integrate biometric tracking, payroll automation, and live attendance dashboards for large-scale operations.",
    image: "/images/case_hr.png",
  },
  {
    name: "Office 365 Support & Setup",
    desc: "Seamless enterprise migration and comprehensive support for Microsoft Office 365. We optimize your collaborative workflows, ensure data security, and manage unified communications.",
    image: "/images/bento_erp.png",
  },
  {
    name: "Cloud Server Provisioning",
    desc: "Deploying resilient, auto-scaling cloud architectures. We provide end-to-end cloud infrastructure management, server provisioning, and DevOps automation to ensure maximum uptime.",
    image: "/images/bento_cloud.png",
  }
];

export const FeaturedIndustriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full bg-[#050505] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[10vw] leading-[0.9] font-black tracking-tighter text-white uppercase md:text-[6vw]">
              Core Capabilities <br />
              <span className="text-white/30">We Deliver.</span>
            </h2>
          </motion.div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.name} cap={cap} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

const CapabilityRow = ({ cap, index }: { cap: any, index: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  });

  // Parallax for image inside the mask
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  return (
    <div ref={rowRef} className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      
      {/* Number & Text */}
      <div className="w-full md:w-5/12 flex flex-col order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="text-xl font-bold text-cyan-400 mb-4">
            0{index + 1}
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            {cap.name}
          </h3>
          <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed">
            {cap.desc}
          </p>
        </motion.div>
      </div>

      {/* Mask Revealed Image */}
      <div className="w-full md:w-7/12 order-1 md:order-2 h-[300px] md:h-[450px] relative overflow-hidden bg-[#111]">
        <motion.div
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ willChange: "clip-path" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div style={{ y: yImage, willChange: "transform" }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
            <Image
              src={cap.image}
              alt={cap.name}
              fill
              className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-700"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Color Overlay */}
            <div className="absolute inset-0 bg-cyan-900/20 hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
};
