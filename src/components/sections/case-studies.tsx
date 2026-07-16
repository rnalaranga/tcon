"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Intelligent ERP Ecosystem",
    clients: "RR Construction, REX Industries, A4Tours",
    desc: "Unifying island-wide operations with an intelligent ERP ecosystem. We installed complete ERP systems to manage all their business processes in one place.",
    image: "/images/cloud_erp.png",
    category: "ERP & Management"
  },
  {
    title: "Face Detector HR Solution",
    clients: "Famous Construction Company",
    desc: "We installed 50 face detector machines across different construction sites in Sri Lanka. They are interconnected via the internet for real-time live attendance tracking and HR management from the head office.",
    image: "/images/case_hr.png",
    category: "HR & Biometrics"
  },
  {
    title: "Logistics Dispatching IoT Solution",
    clients: "DARAZ PVT LTD",
    desc: "A smart IoT solution for tracking and dispatching logistics. It provides real-time updates and live fleet monitoring to ensure fast and secure package delivery across the country.",
    image: "/images/case_logistics.png",
    category: "IoT & Tracking"
  },
  {
    title: "Green House Management System",
    clients: "VMP Agri Business",
    desc: "A fully automated IoT system to manage greenhouses. It uses smart sensors to monitor temperature, humidity, and soil, helping farmers control the climate perfectly via mobile app.",
    image: "/images/case_factory.png",
    category: "IoT & Agriculture"
  },
  {
    title: "Printer Management & Monitoring",
    clients: "Quick Office Automation PVT Ltd",
    desc: "A live tracking system for enterprise printers. It shows real-time printer status, errors, number of prints, and lets managers easily control print users and quotas.",
    image: "/images/bento_cloud.png",
    category: "Hardware Automation"
  },
  {
    title: "Web Portfolio & E-Commerce",
    clients: "khkautoparts.com, a4tours.net, tdhandyman.au, hyattphotography.au, tol.lk",
    desc: "We developed high-quality, fast, and modern websites and e-commerce platforms for many international and local clients to grow their businesses online.",
    image: "/images/bento_ai.png",
    category: "Web Development"
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#050912] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 dark:border-sky-400/20 bg-sky-500/5 dark:bg-sky-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Featured Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Real solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500">real businesses.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/60">
              Take a look at how we have helped some of the most demanding enterprises in Sri Lanka and globally to solve their biggest problems using technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative flex flex-col bg-white dark:bg-[#0a0f1c] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1">
              
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-4">
                  {project.clients}
                </div>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
