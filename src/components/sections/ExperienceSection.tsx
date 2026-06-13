"use client";

import { motion } from "framer-motion";
import { GitCommit, GitBranch } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ExperienceSection({ experience }: { experience: any[] }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-bold font-mono tracking-tighter">
            <span className="text-primary">03.</span> experience.git
          </h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="relative pl-4 md:pl-8 border-l border-primary/20 space-y-12">
          {/* Decorative git branch line */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>

          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Git commit dot */}
              <div className="absolute -left-[21px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#111] border-2 border-primary group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(230,83,32,0.5)]"></div>
              
              <div className="bg-[#1a1a1a] border border-white/5 group-hover:border-primary/30 p-6 rounded-xl transition-all shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <GitCommit className="w-5 h-5 hidden md:block opacity-50" />
                      {job.role}
                    </h3>
                    <p className="text-lg text-gray-400 font-medium">
                      @ {job.company}
                    </p>
                  </div>
                  <div className="font-mono text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 w-fit">
                    {job.startDate} – {job.endDate || "Present"}
                  </div>
                </div>

                <div className="space-y-3">
                  {job.highlights.map((highlight: string, i: number) => (
                    <div key={i} className="flex gap-3 text-gray-400 font-light text-base leading-relaxed">
                      <span className="text-primary select-none mt-1.5 shrink-0">
                        <GitBranch className="w-4 h-4 opacity-70" />
                      </span>
                      <div className="prose prose-invert prose-p:my-0 prose-strong:text-white max-w-none">
                        <ReactMarkdown>{highlight}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
