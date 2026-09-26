import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    window.location.href = `mailto:siddharthyadavcs99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center gap-3">
            <Mail className="h-6 w-6 text-cyan-400" />
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Let's Build Something Together
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-8 text-lg text-slate-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:siddharthyadavcs99@gmail.com"
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan-400"
                >
                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  siddharthyadavcs99@gmail.com
                </a>
                <a
                  href="https://github.com/Siddharth1374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan-400"
                >
                  <div className="rounded-lg bg-slate-800 p-2">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  github.com/Siddharth1374
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth1374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan-400"
                >
                  <div className="rounded-lg bg-blue-500/10 p-2">
                    <LinkedinIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  linkedin.com/in/siddharth1374
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-slate-300">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-slate-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 min-h-[120px] border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}