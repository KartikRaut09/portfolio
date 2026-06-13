"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function SkillsSection({ skills }: { skills: any[] }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-bold font-mono tracking-tighter">
            <span className="text-primary">02.</span> skills.json
          </h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors group"
            >
              <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-3">
                <Terminal className="w-4 h-4 text-primary" />
                <h3 className="font-mono font-bold text-white group-hover:text-primary transition-colors">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm font-mono rounded hover:bg-primary/10 hover:border-primary/30 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
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
