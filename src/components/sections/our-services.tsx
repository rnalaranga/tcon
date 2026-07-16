"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "engineering",
    title: "Digital Engineering",
    subtitle: "Architecting the impossible.",
    desc: "Building the future of software with scalable architectures and modern cloud-native paradigms. We deliver robust backend systems and intuitive frontends.",
    image: "/images/case_factory.png",
    num: "01",
    color: "from-cyan-500 to-blue-500",
    colSpan: "md:col-span-2", // Full width on top
  },
  {
    id: "ai",
    title: "Applied AI",
    subtitle: "Intelligence at scale.",
    desc: "Integrating intelligent machine learning models into your enterprise core to automate workflows and predict outcomes.",
    image: "/images/bento_ai.png",
    num: "02",
    color: "from-purple-500 to-pink-500",
    colSpan: "md:col-span-1", // Half width
  },
  {
    id: "fintech",
    title: "FinTech Infrastructure",
    subtitle: "Global commerce engines.",
    desc: "High-velocity, compliant financial systems designed for secure, instantaneous global transactions.",
    image: "/images/case_banking.png",
    num: "03",
    color: "from-orange-500 to-red-500",
    colSpan: "md:col-span-1", // Half width
  },
];

export const OurServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#020202] py-32 md:py-48 overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10vw] md:text-[6vw] font-black uppercase text-white leading-[0.9] tracking-tighter mb-4">
              Intelligent Solutions
            </h2>
            <h2 className="text-[7vw] md:text-[4vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-none tracking-tighter">
              For Complex Challenges
            </h2>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between ${service.colSpan} min-h-[400px] md:min-h-[500px]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                {/* Gradient Overlay for text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent`} />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${service.color} mix-blend-overlay`} />
              </div>

              {/* Top Content */}
              <div className="relative z-10 flex justify-between items-start mb-20">
                <div className="text-4xl md:text-5xl font-black text-white/20">
                  {service.num}
                </div>
                <button className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300">
                  <ArrowUpRight className="h-6 w-6" />
                </button>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4`}>
                  {service.subtitle}
                </h4>
                <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4 leading-none">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed max-w-xl">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
