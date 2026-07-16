import Image from "next/image";
import { AboutCompanySection } from "@/components/sections/about-company";
import { Users, Globe2, ShieldCheck, Zap } from "lucide-react";

const values = [
  {
    icon: Globe2,
    title: "Global Standards, Local Context",
    desc: "We bring Tier-1 enterprise architecture and operational discipline, seamlessly adapted to the nuances of regional markets."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Security",
    desc: "From zero-trust networks to compliance-ready data pipelines, security is engineered into the very fabric of our solutions."
  },
  {
    icon: Zap,
    title: "Agile Execution",
    desc: "Speed without sacrificing stability. We utilize advanced CI/CD pipelines to deploy robust solutions at unprecedented velocity."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    desc: "We don't just act as vendors; we embed ourselves as dedicated extensions of your internal engineering and strategic teams."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-24 pb-24 transition-colors duration-300">
      
      {/* Kanrich Group Hero Banner for About Page */}
      <section className="relative w-full py-20 overflow-hidden bg-black border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/10 mix-blend-color-dodge pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
          
          <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 shadow-[0_0_40px_rgba(255,255,255,0.15)] mb-8">
            <Image src="/images/clients/logo.webp" alt="Kanrich Group" fill className="object-contain" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            A Proud Member of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Kanrich Group
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mt-4">
            Leveraging the financial strength and national reach of the Kanrich Group to deliver unparalleled technology solutions and enterprise software.
          </p>
        </div>
      </section>

      {/* Re-use the existing component for the primary introduction */}
      <AboutCompanySection />

      {/* Values Section */}
      <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-6">
              Our Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values.</span>
            </h2>
            <p className="text-lg text-white/60 font-medium">
              The foundational principles that drive our engineering culture and define how we deliver value to our enterprise partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  <v.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">{v.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership hook */}
      <section className="py-32" id="leadership">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10">
            <div className="absolute inset-0">
              <Image 
                src="/images/ai_brain.png" 
                alt="Leadership Background" 
                fill 
                className="object-cover opacity-10 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-6">
                Led by visionaries, <br/>driven by engineers.
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-medium mb-10">
                Backed by the financial strength of the Kanrich Group, our leadership brings decades of collective experience spanning enterprise architecture, global finance, and operational scaling.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 backdrop-blur-md">
                <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Leadership profiles coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
