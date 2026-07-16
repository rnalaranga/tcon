"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Building2, User, LayoutGrid } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden text-white border-t border-white/5">
      
      {/* ── Background Glows ────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Main Glass Card */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-black/40 p-6 sm:p-10 md:p-16 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Internal Glow for Glass Card */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[80px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                Ready to lead <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Your Future?
                </span>
              </h2>
              <p className="mb-10 text-base sm:text-lg text-white/70 leading-relaxed font-medium">
                Partner with Tech Connect Global — a Kanrich Group company — to architect platforms that scale intelligently, perform reliably, and adapt continuously.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "End-to-end delivery accountability",
                  "500+ certified engineers globally",
                  "Agile and DevSecOps native",
                  "24/7 managed support & SRE",
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 transition-colors hover:bg-white/10 hover:border-cyan-500/30">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden"
            >
              {/* Form subtle grid background */}
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="mb-2 text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Let's Talk</h3>
                <p className="mb-8 text-xs font-bold uppercase tracking-widest text-cyan-400">Fill in the form for a 24h response.</p>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 h-5 w-5 text-white/30" />
                      <input type="text" placeholder="First Name" className="w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400 focus:bg-white/10 transition-all font-medium" />
                    </div>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 h-5 w-5 text-white/30" />
                      <input type="text" placeholder="Last Name" className="w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400 focus:bg-white/10 transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-white/30" />
                    <input type="email" placeholder="Work Email" className="w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400 focus:bg-white/10 transition-all font-medium" />
                  </div>
                  
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 h-5 w-5 text-white/30" />
                    <input type="text" placeholder="Company" className="w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400 focus:bg-white/10 transition-all font-medium" />
                  </div>
                  
                  <div className="relative">
                    <LayoutGrid className="absolute left-4 top-3.5 h-5 w-5 text-white/30 pointer-events-none" />
                    <select className="w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 py-3.5 text-sm text-white/50 outline-none focus:border-cyan-400 focus:text-white focus:bg-white/10 transition-all font-medium appearance-none">
                      <option value="" className="bg-[#0a0a0a]">Area of Interest</option>
                      <option className="bg-[#0a0a0a]">Cloud Transformation</option>
                      <option className="bg-[#0a0a0a]">Enterprise ERP</option>
                      <option className="bg-[#0a0a0a]">AI & Data</option>
                      <option className="bg-[#0a0a0a]">Cybersecurity</option>
                      <option className="bg-[#0a0a0a]">Digital Engineering</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="group relative w-full overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-bold text-black uppercase tracking-widest transition-transform hover:scale-[1.02] mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-xl bg-cyan-400 transition-transform duration-500 ease-out group-hover:scale-100" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
