import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "IIT Patna",
    degree: "M.Tech in Computer Science",
    period: "2025 – Present",
    details: "Advanced studies in AI/ML, systems, and software engineering",
  },
  {
    school: "Gurukula Kangri University",
    degree: "B.Tech in Computer Science",
    period: "2020 – 2024",
    details: "Core computer science fundamentals and software development",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Education
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-slate-700"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {edu.school}
                  </h3>
                  <span className="text-sm text-cyan-400">{edu.period}</span>
                </div>
                <p className="mb-2 font-medium text-slate-300">{edu.degree}</p>
                <p className="text-sm text-slate-400">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}