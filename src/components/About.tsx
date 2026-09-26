import { motion } from "framer-motion";
import { User, Code2, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <User className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              About Me
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-slate-300">
                I am an M.Tech Computer Science student at IIT Patna with a
                strong foundation in Data Structures, Algorithms, Software
                Development, and Artificial Intelligence. I enjoy building
                practical systems using modern technologies such as LangGraph,
                MCP, RAG, and LLMs.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                My focus is on creating intelligent systems that solve real
                problems — from multi-agent orchestration to scalable backend
                services. I believe in writing clean, maintainable code and
                shipping products that matter.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <Code2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Developer</p>
                    <p className="text-sm text-slate-400">Full-Stack & AI</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-500/10 p-2">
                    <Brain className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Researcher</p>
                    <p className="text-sm text-slate-400">AI/GenAI Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}