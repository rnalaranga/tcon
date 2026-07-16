"use client";

import { motion } from "framer-motion";

export const ClientLogosSection = () => {
  const logos = [
    { id: 1, src: "/images/CLIENTS/Dammika-s.webp", alt: "Dammika's" },
    { id: 2, src: "/images/CLIENTS/Daraz.webp", alt: "Daraz" },
    { id: 3, src: "/images/CLIENTS/FPS-Lanka.webp", alt: "FPS Lanka" },
    { id: 4, src: "/images/CLIENTS/Genius.webp", alt: "Genius" },
    { id: 5, src: "/images/CLIENTS/ITNIOTECH.webp", alt: "ITNIOTECH" },
    { id: 6, src: "/images/CLIENTS/Irr.webp", alt: "IRR" },
    { id: 7, src: "/images/CLIENTS/Life.webp", alt: "Life" },
    { id: 8, src: "/images/CLIENTS/Luminara-Global.webp", alt: "Luminara Global" },
    { id: 9, src: "/images/CLIENTS/granton.webp", alt: "Granton" },
    { id: 10, src: "/images/CLIENTS/medi-shine.webp", alt: "Medi Shine" },
    { id: 11, src: "/images/CLIENTS/pacific-cables.webp", alt: "Pacific Cables" },
    { id: 12, src: "/images/CLIENTS/raasa.webp", alt: "Raasa" },
    { id: 13, src: "/images/CLIENTS/yusuf-bhai.webp", alt: "Yusuf Bhai" }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 border-y border-white/5">
      <div className="w-full px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white"
          >
            Our Clients
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="mt-6 h-1 w-20 bg-cyan-500 mx-auto rounded-full" 
          />
        </div>

        {/* Full width Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 7) * 0.1 }}
              className="relative w-full aspect-[4/3] flex items-center justify-center p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain relative z-10 w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
