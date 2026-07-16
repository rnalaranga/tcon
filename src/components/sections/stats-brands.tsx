"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
type Stat = { value: number; suffix: string; label: string; desc: string; prefix?: string };

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Enterprise Clients", desc: "Across Sri Lanka" },
  { value: 99, suffix: "%", label: "Client Retention", desc: "Long-term partnerships" },
  { value: 99.9, suffix: "%", label: "System Uptime", desc: "SLA guaranteed" },
  { value: 9, suffix: "", label: "Regional Offices", desc: "Across 9 provinces" },
];

function AnimatedNumber({ value, suffix, prefix, inView }: { value: number; suffix: string; prefix?: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((start + (value - start) * ease).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>{prefix}{display}{suffix}</span>
  );
}

const partners = ["Microsoft", "AWS", "Oracle", "Google Cloud", "Salesforce", "IBM", "Snowflake"];

export const StatsBrandsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#050912] py-28 z-10 transition-colors duration-300" ref={ref}>
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-sky-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Stats grid ─────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start p-8 md:p-10 bg-white dark:bg-[#080d1a] hover:bg-slate-50 dark:hover:bg-[#0c1428] transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={isInView} />
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500 dark:text-white/35">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Partners row ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="mb-10 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/30 text-center">
            Certified partner ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((name, i) => (
              <div
                key={i}
                className="text-lg md:text-xl font-bold text-slate-400 dark:text-white/20 tracking-tight transition-all duration-300 hover:text-slate-800 dark:hover:text-white/60 cursor-default select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
    </section>
  );
};
