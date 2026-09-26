import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "GATE CSE 2025",
    detail: "99.20 Percentile",
    extra: "AIR 1374",
    link: "https://drive.google.com/file/d/106gEg4Lc8eQsBfmDCISgcyYusXPKAPU6/view?usp=drive_link",
  },
  {
    title: "Competitive Programming",
    detail: "Data Structures & Algorithms",
    extra: "Problem Solving",
    link: "https://leetcode.com/u/Siddharth_1374/",
  },
  {
    title: "Academic Excellence",
    detail: "B.Tech Computer Science",
    extra: "Strong academic record",
    link: "https://www.gkv.ac.in/",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Achievements
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-semibold text-slate-100">
                    {achievement.title}
                  </h3>
                  <Button
                    variant="ghost"
                    
                    className="h-8 w-8 text-slate-400 hover:text-slate-100"
                    onClick={() => window.open(achievement.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-lg font-bold text-cyan-400">
                  {achievement.detail}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {achievement.extra}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}