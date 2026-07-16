"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cloud, Brain, Shield, Database, Code2, Cpu } from "lucide-react";

const bentoItems = [
  {
    id: "erp",
    title: "Enterprise ERP",
    subtitle: "Unified Operations",
    description: "SAP S/4HANA, Oracle Cloud, and custom ERP implementations that unify your global operations — from supply chain to financial consolidation.",
    icon: Database,
    image: "/images/bento_erp.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ai",
    title: "AI & Data",
    subtitle: "Predictive Intelligence",
    description: "Generative AI, machine learning pipelines, and real-time analytics tailored to enterprise scale.",
    icon: Brain,
    image: "/images/bento_ai.png",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "cloud",
    title: "Cloud",
    subtitle: "Transformation",
    description: "Multi-cloud and hybrid environments engineered for 99.99% uptime and 40% cost reduction.",
    icon: Cloud,
    image: "/images/bento_cloud.png",
    color: "from-sky-500 to-blue-500",
  },
  {
    id: "security",
    title: "Cybersecurity",
    subtitle: "Zero-Trust Architecture",
    description: "End-to-end security frameworks — from identity management to SOC operations — protecting your critical digital assets.",
    icon: Shield,
    image: "/images/abstract_network.png",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "digital",
    title: "Digital Engineering",
    subtitle: "Full-Stack Development",
    description: "Next.js, React, Node.js, and cloud-native applications at enterprise velocity.",
    icon: Code2,
    image: "/images/hero_tech.png",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "iot",
    title: "IoT & Automation",
    subtitle: "Industry 4.0",
    description: "Connected devices, edge computing, and intelligent workflow automation for industrial enterprises.",
    icon: Cpu,
    image: "/images/case_factory.png",
    color: "from-rose-500 to-pink-500",
  },
];

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden" ref={ref}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full px-6 py-2 bg-cyan-400/5"
            >
              Enterprise Solutions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[10vw] leading-[0.9] font-black tracking-tighter text-white uppercase md:text-[6vw]"
            >
              Intelligent solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                complex challenges
              </span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="group flex items-center gap-4 text-white uppercase font-bold tracking-widest text-sm"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">All Services</span>
                <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-cyan-400">All Services</span>
              </span>
              <div className="h-[2px] w-12 bg-white group-hover:bg-cyan-400 transition-colors" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10 transition-all duration-500">
                
                {/* Background image & gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${item.color} mix-blend-overlay`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  
                  {/* Icon */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Text */}
                  <div className="mt-auto">
                    <p className={`mb-2 text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      {item.subtitle}
                    </p>
                    <h3 className="mb-4 text-3xl font-black text-white uppercase tracking-tighter leading-none">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 font-medium leading-relaxed mb-8">
                      {item.description}
                    </p>
                    
                    {/* Action */}
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-cyan-400 transition-colors">
                      Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

                {/* Hover Glow Border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
