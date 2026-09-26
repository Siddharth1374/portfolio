import { motion } from "framer-motion";
import { Folder, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    name: "Multi-Agent Travel Planner",
    description:
      "Multi-agent travel planning system that orchestrates destination research, weather information, and flight data through MCP-enabled tools.",
    technologies: ["Python", "LangGraph", "MCP", "Groq"],
    features: [
      "LangGraph orchestration",
      "MCP tool integration",
      "Groq LLM",
      "Tavily search",
      "Weather MCP",
      "AviationStack MCP",
    ],
    github: "https://github.com/Siddharth1374",
    demo: "https://demo.com",
  },
  {
    name: "DocChat — Multi-Agent RAG System",
    description:
      "A multi-agent RAG system for document chat with advanced retrieval and generation capabilities.",
    technologies: ["Python", "LangGraph", "ChromaDB", "Docling", "IBM watsonx AI", "Gradio"],
    features: [
      "Multi-agent architecture",
      "Vector search with ChromaDB",
      "Document processing with Docling",
      "IBM watsonx AI integration",
    ],
    github: "https://github.com/Siddharth1374",
    demo: "https://demo.com",
  },
  {
    name: "Self-Improving AI Agent",
    description:
      "An AI agent that generates, reflects, critiques, revises, and produces final answers through an iterative improvement loop.",
    technologies: ["Python", "LangGraph", "Groq"],
    features: [
      "Generate → Reflect → Critique → Revise → Final Answer",
      "Iterative self-improvement",
      "Groq-powered LLM",
    ],
    github: "https://github.com/Siddharth1374",
    demo: "https://demo.com",
  },
  {
    name: "Scalable URL Shortener",
    description:
      "A high-performance URL shortening service built with a focus on scalability and reliability.",
    technologies: ["Node.js", "MongoDB", "Redis", "Base62"],
    features: [
      "Base62 encoding for short URLs",
      "Redis caching for fast lookups",
      "MongoDB for persistent storage",
    ],
    github: "https://github.com/Siddharth1374",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <Folder className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-100"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-100"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-slate-700 text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <ArrowRight className="h-3 w-3 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}