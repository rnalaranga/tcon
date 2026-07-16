"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  "End-to-end delivery accountability",
  "500+ certified engineers globally",
  "Agile and DevSecOps native",
  "24/7 managed support & SRE",
];

export const CtaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yForm = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-32 overflow-hidden text-white">
      
      {/* ── Photo Background with Parallax ────────────────── */}
      <motion.div style={{ y: yForm, willChange: "transform" }} className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/cta_bg.png"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text */}
          <motion.div style={{ y: yText }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full px-6 py-2 bg-cyan-400/5">
                Start Today
              </div>
              <h2 className="mb-8 text-[10vw] md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                Ready to lead <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Your Future?
                </span>
              </h2>
              <p className="mb-10 text-xl text-white/60 leading-relaxed font-medium max-w-lg">
                Partner with Tech Connect Global — a Kanrich Group company — to architect platforms that scale intelligently, perform reliably, and adapt continuously.
              </p>
              <ul className="mb-12 space-y-4">
                {reasons.map((r, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-4 text-white/80 font-semibold tracking-wide uppercase text-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    {r}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — Glassmorphism Form */}
          <motion.div style={{ y: yForm }} className="relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-[60px] pointer-events-none" />
              
              <h3 className="mb-2 text-3xl font-black text-white uppercase tracking-tighter">Let's Talk</h3>
              <p className="mb-10 text-sm font-bold uppercase tracking-widest text-cyan-400">Fill in the form for a 24h response.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="col-span-1 rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400 transition-all font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-1 rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400 transition-all font-medium"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400 transition-all font-medium"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400 transition-all font-medium"
                />
                <select className="w-full rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white/50 outline-none focus:border-cyan-400 focus:text-white transition-all font-medium appearance-none">
                  <option value="" className="bg-black">Area of Interest</option>
                  <option className="bg-black">Cloud Transformation</option>
                  <option className="bg-black">Enterprise ERP</option>
                  <option className="bg-black">AI & Data</option>
                  <option className="bg-black">Cybersecurity</option>
                  <option className="bg-black">Digital Engineering</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-none border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400 resize-none transition-all font-medium"
                />
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-5 text-sm font-bold text-black uppercase tracking-widest transition-transform hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-cyan-400 transition-transform duration-500 ease-out group-hover:scale-100" />
                </button>
              </form>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
