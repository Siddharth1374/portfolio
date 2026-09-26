import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const profiles = [
  {
    name: "GitHub",
    icon: GithubIcon,
    description: "Open source projects and code contributions",
    url: "https://github.com/Siddharth1374",
    color: "text-slate-300",
    bg: "bg-slate-800",
  },
  {
    name: "LeetCode",
    icon: Code2,
    description: "Data structures and algorithms practice",
    url: "https://leetcode.com/u/Siddharth_1374/",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    name: "GeeksforGeeks",
    icon: Code2,
    description: "Technical articles and problem solving",
    url: "https://www.geeksforgeeks.org/profile/calculu6nhp",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    description: "Professional network and experience",
    url: "https://www.linkedin.com/in/siddharth1374/",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function Profiles() {
  return (
    <section id="profiles" className="bg-slate-900/50 py-20">
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
              Coding Profiles
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700"
              >
                <div className={`mb-4 inline-flex rounded-lg p-3 ${profile.bg}`}>
                  <profile.icon className={`h-6 w-6 ${profile.color}`} />
                </div>
                <h3 className="mb-1 font-semibold text-slate-100">
                  {profile.name}
                </h3>
                <p className="mb-4 text-sm text-slate-400">
                  {profile.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-cyan-400 hover:text-cyan-300"
                  onClick={() => window.open(profile.url, "_blank")}
                >
                  Visit Profile
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}