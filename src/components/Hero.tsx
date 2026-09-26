import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
            >
              <Sparkles className="mr-2 h-3 w-3" />
              M.Tech CSE @ IIT Patna
            </Badge>

            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Siddharth Yadav
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-300">
              Software Developer | AI/GenAI Enthusiast
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              I build scalable software systems, AI agents, RAG applications,
              and intelligent developer tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                onClick={() => scrollTo("projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100"
                  onClick={() => window.open("https://github.com/Siddharth1374", "_blank")}
                >
                  <GithubIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100"
                  onClick={() => window.open("https://www.linkedin.com/in/siddharth1374/", "_blank")}
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Siddharth Yadav"
                  className="h-80 w-80 object-cover sm:h-96 sm:w-96"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-medium text-slate-300">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}