import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPython, SiGo, SiRust,
  SiDocker, SiKubernetes, 
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiTailwindcss, SiGraphql
} from "react-icons/si";
import { FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function TechnologiesPage() {
  const categories = [
    {
      title: "Frontend & UI",
      desc: "Delivering blazing-fast, responsive, and accessible user interfaces.",
      techs: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]
    },
    {
      title: "Backend & Systems",
      desc: "Architecting high-concurrency, fault-tolerant server systems.",
      techs: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Python", icon: SiPython },
        { name: "Go", icon: SiGo },
        { name: "Rust", icon: SiRust },
        { name: "GraphQL", icon: SiGraphql },
      ]
    },
    {
      title: "Cloud & DevOps",
      desc: "Automating deployment, scaling, and management of containerized applications.",
      techs: [
        { name: "AWS", icon: FaAws },
        { name: "Google Cloud", icon: FaGoogle },
        { name: "Azure", icon: FaMicrosoft },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
      ]
    },
    {
      title: "Data & Caching",
      desc: "Structuring persistent data layers optimized for read/write velocity.",
      techs: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "Elasticsearch", icon: SiElasticsearch },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050912] pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 dark:border-sky-400/20 bg-sky-500/5 dark:bg-sky-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Technology Stack
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl mb-6">
            Engineered with <span className="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500 bg-clip-text text-transparent">precision.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/60">
            We utilize the most advanced and reliable technology stacks available today to build platforms that scale effortlessly and perform flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => {
            const BackgroundIcon = category.techs[0].icon;
            
            return (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 p-8 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <BackgroundIcon className="w-32 h-32 text-slate-900 dark:text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{category.title}</h2>
                <p className="text-slate-600 dark:text-white/60 mb-8 max-w-sm">{category.desc}</p>
                
                <div className="flex flex-wrap gap-4">
                  {category.techs.map((tech, tIdx) => {
                    const TechIcon = tech.icon;
                    return (
                      <div key={tIdx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 transition-colors hover:bg-sky-50 hover:border-sky-200 dark:hover:bg-white/10">
                        <TechIcon className="w-5 h-5 text-slate-700 dark:text-white/80" />
                        <span className="text-sm font-semibold text-slate-800 dark:text-white/90">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
