import { motion } from "framer-motion";
import { Code2, Cpu, Brain, Wrench, Cloud } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    skills: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Computer Science",
    icon: Cpu,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    title: "AI / GenAI",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    skills: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "MCP",
      "Prompt Engineering",
      "Context Engineering",
      "Vector Databases",
    ],
  },
  {
    title: "Tools / Backend",
    icon: Wrench,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    skills: [
      "FastAPI",
      "Node.js",
      "Redis",
      "MongoDB",
      "MySQL",
      "Git",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Cloud / MLOps",
    icon: Cloud,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    skills: ["AWS", "MLflow", "W&B"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-lg p-2 ${group.bg}`}>
                    <group.icon className={`h-5 w-5 ${group.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-100">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}