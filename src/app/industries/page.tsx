"use client";
import { AnimatedTypography } from "@/components/ui/animated-typography";
import { GlowingEdgeCard } from "@/components/ui/glowing-edge-card";
import { motion } from "framer-motion";
import { HeartPulse, Building2, Factory, ShoppingCart, Landmark, GraduationCap, Building, Hotel, Truck, Radio } from "lucide-react";

const allIndustries = [
  { name: "Healthcare", icon: HeartPulse, desc: "Secure digital health records, telemedicine platforms, and compliance-ready data infrastructure." },
  { name: "Finance", icon: Landmark, desc: "High-frequency trading platforms, secure payment gateways, and modern FinTech solutions." },
  { name: "Manufacturing", icon: Factory, desc: "IoT-enabled supply chains, predictive maintenance, and Industry 4.0 automation." },
  { name: "Retail", icon: ShoppingCart, desc: "Omnichannel e-commerce, customer analytics, and dynamic pricing engines." },
  { name: "Construction", icon: Building2, desc: "Project management platforms, BIM integration, and resource optimization." },
  { name: "Education", icon: GraduationCap, desc: "Scalable EdTech platforms, virtual classrooms, and student analytics." },
  { name: "Government", icon: Building, desc: "Secure public sector portals, digital identity, and citizen engagement platforms." },
  { name: "Hospitality", icon: Hotel, desc: "Booking engines, guest experience personalization, and property management systems." },
  { name: "Logistics", icon: Truck, desc: "Real-time fleet tracking, route optimization, and warehouse automation." },
  { name: "Telecommunications", icon: Radio, desc: "5G network management, OSS/BSS modernization, and customer billing." },
];

export default function IndustriesPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#050912] min-h-screen pt-32 pb-24 transition-colors duration-300">
      
      <div className="container mx-auto px-6 max-w-7xl mb-24 pt-12 text-center flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 dark:border-sky-400/20 bg-sky-500/5 dark:bg-sky-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Industry Solutions
        </div>
        
        <AnimatedTypography 
          text="Transforming every sector of the economy."
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 justify-center"
          as="h1"
        />
        
        <p className="text-xl text-slate-600 dark:text-white/60 mb-12 max-w-2xl font-medium">
          Industry knowledge meets cutting-edge technology. We deliver bespoke solutions tailored to the unique regulatory and operational demands of your sector.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allIndustries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="h-full group relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10">
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 pointer-events-none transition-all duration-500 scale-150 blur-2xl">
                  <ind.icon className="w-32 h-32 text-sky-500" />
                </div>

                <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 mb-6 text-slate-900 dark:text-white transition-colors group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:border-sky-200 dark:group-hover:border-sky-500/50">
                  <ind.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{ind.name}</h3>
                <p className="text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
