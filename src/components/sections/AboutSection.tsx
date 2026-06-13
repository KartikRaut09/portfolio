"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Code2 } from "lucide-react";

export function AboutSection({ profile }: { profile: any }) {
  if (!profile) return null;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-bold font-mono tracking-tighter">
            <span className="text-primary">01.</span> About.system
          </h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-lg border border-white/10 bg-[#1e1e1e] p-2 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-sm text-primary mb-2 animate-pulse">&gt; STATUS: {profile.education.degree}</div>
                <div className="text-xl font-bold text-white mb-1">{profile.education.university}</div>
                <div className="text-gray-400 text-sm flex justify-between">
                  <span>{profile.education.duration}</span>
                  <span>CGPA: {profile.education.cgpa}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/50 rounded-tr-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50 rounded-bl-xl"></div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-gray-300 leading-relaxed font-light text-lg">
              {profile.about.map((paragraph: string, index: number) => (
                <p key={index} className="flex gap-4">
                  <span className="text-primary mt-1 select-none">~</span>
                  <span>{paragraph}</span>
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[
                { icon: <Terminal className="w-5 h-5" />, title: "Agentic AI", desc: "Building autonomous systems" },
                { icon: <Database className="w-5 h-5" />, title: "Vector DBs", desc: "ChromaDB, FAISS, scaling" },
                { icon: <Code2 className="w-5 h-5" />, title: "LLM Fine-tuning", desc: "GRPO, TRL, LLaMA 3" },
                { icon: <Cloud className="w-5 h-5" />, title: "MLOps", desc: "Docker, CI/CD, FastAPI" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg flex items-start gap-4 group">
                  <div className="p-2 rounded bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-mono">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
