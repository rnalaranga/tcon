"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const teamMembers = [
  {
    name: "Hasala Pathirage",
    role: "Project Manager",
    bio: "Driving digital transformation strategies and ensuring seamless execution of enterprise projects.",
    image: "/images/team/Hasala Pathirage.png",
  },
  {
    name: "Rashitha Nalaranga",
    role: "Engineer Technology",
    bio: "Engineering leader specializing in scalable cloud architectures and mission-critical software solutions.",
    image: "/images/team/Rashitha Nalaranga.jpg",
  },
  {
    name: "Thiwanga Dilshan",
    role: "Business Analyst",
    bio: "Analyzing operational workflows and bridging the gap between business needs and technological solutions.",
    image: "/images/team/Thiwanga Dilshan.png",
  },
  {
    name: "Hashan Kogul",
    role: "Software Engineer",
    bio: "Passionate about building scalable backend systems, robust APIs, and optimizing application performance.",
    image: "/images/team/Hashan Kogul - Software Engineer.png",
  },
  {
    name: "Hiruni Nawanjana",
    role: "Software Engineer",
    bio: "Specializes in developing high-performance web applications and delivering seamless user experiences.",
    image: "/images/team/Hiruni Nawanjana - Software Engineer.png",
  },
  {
    name: "Sudharaka Pathiraja",
    role: "Dev Ops Engineer",
    bio: "Expert in CI/CD pipelines, cloud infrastructure management, and ensuring zero-downtime enterprise deployments.",
    image: "/images/team/Sudharaka Pathiraja - Dev Ops Engineer.png",
  },
  {
    name: "Wathsala Amarasinghe",
    role: "UX UI Engineer",
    bio: "Crafting pixel-perfect, user-centric designs that elevate the digital experience for our enterprise clients.",
    image: "/images/team/Wathsala Amarasinghe UX UI Engineer.png",
  }
];

export function OurTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="py-40 bg-black overflow-hidden relative">
      
      {/* Background Animated Text */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none z-0">
        <motion.div style={{ x: xLeft, willChange: "transform" }} className="whitespace-nowrap mb-4">
          <span className="text-[15vw] font-black uppercase text-white">The Brains Behind The Code — </span>
          <span className="text-[15vw] font-black uppercase text-white">The Brains Behind The Code — </span>
        </motion.div>
        <motion.div style={{ x: xRight, willChange: "transform" }} className="whitespace-nowrap">
          <span className="text-[15vw] font-black uppercase text-white">Engineering The Future — </span>
          <span className="text-[15vw] font-black uppercase text-white">Engineering The Future — </span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 text-cyan-400 font-bold uppercase tracking-widest text-sm inline-block border border-cyan-400/30 rounded-full px-4 py-1 bg-cyan-400/5">
              Leadership
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
              Meet The Core.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-[#111] border border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  style={{ willChange: "transform, opacity" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Performant Hover Overlay instead of mix-blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              <div className="overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
                  {member.name}
                </h3>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest transform group-hover:translate-x-2 transition-transform duration-300 delay-75 mb-3">
                  {member.role}
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-white/50 font-medium leading-relaxed transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
