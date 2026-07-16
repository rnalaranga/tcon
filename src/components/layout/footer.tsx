"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = {
  Services: [
    { name: "Enterprise ERP", href: "/services" },
    { name: "Cloud Transformation", href: "/services" },
    { name: "AI & Data", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
    { name: "Digital Engineering", href: "/services" },
    { name: "IoT & Automation", href: "/services" },
  ],
  Industries: [
    { name: "Financial Services", href: "/industries" },
    { name: "Healthcare", href: "/industries" },
    { name: "Manufacturing", href: "/industries" },
    { name: "Retail & Commerce", href: "/industries" },
    { name: "Government", href: "/industries" },
    { name: "Education", href: "/industries" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Insights & Blog", href: "/insights" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Main grid ───────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-20 border-b border-slate-200 dark:border-white/10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-5 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-4 w-fit">
              <div className="relative flex h-12 w-44 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg shrink-0">
                <Image src="/images/companylogo.png" alt="Tech Connect Global Logo" fill className="object-contain p-1.5" sizes="176px" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-slate-900 dark:text-white">Tech Connect Global</span>
                <span className="text-[10px] text-slate-500 dark:text-white/40 tracking-widest uppercase mt-1">A Kanrich Group Company</span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-white/50 leading-relaxed max-w-xs mt-2">
              Engineering Intelligent Digital Transformation for enterprises across Sri Lanka. We build platforms that scale, perform, and endure.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-white/50 mt-2">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-slate-400 dark:text-white/40 flex-shrink-0" />
                <span>No 93, Kynsey Road, Colombo 08, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400 dark:text-white/40 flex-shrink-0" />
                <span>+94 70 799 3375 (HotLine)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 dark:text-white/40 flex-shrink-0" />
                <span>pm@tech-connect.net</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white/50">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-white/35 transition-colors hover:text-sky-600 dark:hover:text-white/80"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter ──────────────────────── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-slate-200 dark:border-white/[0.06]">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white/70">Stay ahead of enterprise technology trends.</p>
            <p className="text-xs text-slate-500 dark:text-white/30 mt-1">Subscribe to our monthly insights & reports.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 md:w-64 rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/4 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/25 outline-none focus:border-sky-500/40 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-600 dark:text-sky-400 transition-all hover:bg-sky-100 dark:hover:bg-sky-500/20 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* ── Bottom bar ──────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs text-slate-500 dark:text-white/25 text-center md:text-left">
            © {new Date().getFullYear()} Tech Connect Global Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {["Terms", "Privacy", "Cookies", "Sitemap"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-xs text-slate-500 dark:text-white/25 transition-colors hover:text-slate-900 dark:hover:text-white/60">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
