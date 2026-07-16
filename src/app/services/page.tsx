import Image from "next/image";
import { Code2, Database, Landmark, Server, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "engineering",
    title: "Digital Platform Engineering",
    tagline: "Mission-critical architectures for scale.",
    description: "We architect and deploy high-availability bespoke software platforms. Leveraging microservices, event-driven architectures, and cloud-native paradigms, we engineer solutions that eliminate operational bottlenecks and drive enterprise agility.",
    features: ["Microservices Architecture", "Event-Driven Systems", "Legacy Modernization", "High-Availability Clusters"],
    tech: ["Next.js", "Node.js", "Go", "Rust"],
    icon: Code2,
    image: "/images/hero_tech.png",
  },
  {
    id: "erp",
    title: "ERP & HR Solutions",
    tagline: "Unifying human capital and operations.",
    description: "End-to-end deployment of tier-1 ERP and HCM (Human Capital Management) ecosystems. We unify nationwide supply chains, employee lifecycles, and financial operations into a single immutable source of truth optimized by intelligent workflow automation.",
    features: ["Enterprise HCM Implementation", "Oracle Cloud ERP", "Supply Chain Automation", "Payroll Integration"],
    tech: ["Workday", "Snowflake", "Oracle Cloud", "Microsoft Dynamics"],
    icon: Database,
    image: "/images/bento_erp.png",
  },
  {
    id: "fintech",
    title: "Next-Gen FinTech Platforms",
    tagline: "Secure, compliant, high-velocity finance.",
    description: "Building robust financial technology ecosystems compliant with stringent national regulatory frameworks. We enable secure payment gateways, cross-border digital wallets, algorithmic trading platforms, and enterprise Web3 infrastructure.",
    features: ["Enterprise Payment Gateways", "Algorithmic Trading Systems", "Web3 & Blockchain", "PCI-DSS Compliance"],
    tech: ["Solidity", "Go", "Kafka", "PostgreSQL"],
    icon: Landmark,
    image: "/images/abstract_network.png",
  },
  {
    id: "iot",
    title: "IoT & Infrastructure",
    tagline: "From Sensor to Dashboard.",
    description: "Designing end-to-end IoT architectures that connect physical assets to powerful command centers. We implement edge computing nodes, robust telemetry pipelines, and real-time visualization dashboards to unlock predictive maintenance.",
    features: ["Edge Computing", "Hardware Telemetry Pipelines", "Command Center Dashboards", "Predictive Maintenance"],
    tech: ["AWS IoT", "MQTT", "TimescaleDB", "React"],
    icon: Server,
    image: "/images/bento_cloud.png",
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050912] pt-32 pb-24 transition-colors duration-300">
      
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 dark:border-sky-400/20 bg-sky-500/5 dark:bg-sky-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Our Services
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl mb-6">
          Architecting <span className="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500 bg-clip-text text-transparent">the future.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-white/60">
          We deliver bespoke, high-performance technology solutions designed to solve the most complex operational challenges for enterprise clients.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-24">
        {services.map((svc, idx) => (
          <div key={svc.id} id={svc.id} className="scroll-mt-32">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
              
              {/* Image */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-slate-900/60 to-transparent mix-blend-overlay opacity-80" />
                <div className="absolute bottom-6 left-6 h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <svc.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {svc.title}
                </h2>
                <div className="text-sky-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm mb-6">
                  {svc.tagline}
                </div>
                
                <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-8">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {svc.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                      <span className="font-semibold text-slate-800 dark:text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                  <div className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40 font-bold mb-4">Core Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {svc.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
