import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-bold tracking-tight text-slate-100"
        >
          SY<span className="text-cyan-400">.</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-slate-800 text-cyan-400"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-slate-100"
            onClick={() => window.open("https://github.com/Siddharth1374", "_blank")}
          >
            <GithubIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-slate-100"
            onClick={() => window.open("https://www.linkedin.com/in/siddharth1374/", "_blank")}
          >
            <LinkedinIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-slate-800 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-slate-100"
                onClick={() => window.open("https://github.com/Siddharth1374", "_blank")}
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-slate-100"
                onClick={() => window.open("https://www.linkedin.com/in/siddharth1374/", "_blank")}
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}