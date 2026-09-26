import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2025 – Present",
    title: "M.Tech in Computer Science",
    organization: "IIT Patna",
    description:
      "Advanced coursework in AI/ML, distributed systems, and software engineering. Research focus on AI agents and RAG systems.",
    technologies: ["Python", "LangGraph", "RAG", "ML"],
  },
  {
    period: "2024 – 2025",
    title: "AI/ML Project Work",
    organization: "Independent Projects",
    description:
      "Built multi-agent systems, RAG applications, and AI-powered developer tools using modern GenAI technologies.",
    technologies: ["LangGraph", "MCP", "Groq", "ChromaDB"],
  },
  {
    period: "2020 – 2024",
    title: "B.Tech in Computer Science",
    organization: "Gurukula Kangri University",
    description:
      "Strong foundation in data structures, algorithms, operating systems, and software development.",
    technologies: ["C++", "Python", "DSA", "DBMS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Experience
            </h2>
          </div>

          <div className="relative border-l border-slate-800 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="mb-3 text-sm font-medium text-slate-300">
                    {exp.organization}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}