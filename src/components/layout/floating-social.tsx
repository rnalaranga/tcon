"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61588100461285", color: "hover:text-[#1877F2]" },
  { name: "LinkedIn", Icon: FaLinkedin, href: "https://www.linkedin.com/company/tech-connect-pvt-ltd/posts/?feedView=all", color: "hover:text-[#0A66C2]" },
];

export const FloatingSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-2 md:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-[90] flex flex-col gap-4 md:gap-5 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full py-4 px-2 md:py-6 md:px-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    >
      {socialLinks.map(({ name, Icon, href, color }) => (
        <a
          key={name}
          href={href}
          target={href !== "#" ? "_blank" : undefined}
          rel={href !== "#" ? "noopener noreferrer" : undefined}
          title={name}
          className={`group relative flex items-center justify-center text-white/50 transition-all duration-300 ${color} hover:scale-125`}
        >
          <Icon className="h-5 w-5" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 rounded-md bg-black/80 px-2 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none backdrop-blur-md border border-white/10 whitespace-nowrap">
            {name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};
