import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Siddharth Yadav. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Siddharth1374"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth1374/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:siddharthyadavcs99@gmail.com"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="flex items-center gap-1 text-sm text-slate-500">
          Built with <Heart className="h-3 w-3 text-cyan-400" /> using React &
          TypeScript
        </p>
      </div>
    </footer>
  );
}