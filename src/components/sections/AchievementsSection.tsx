"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function AchievementsSection({ achievements }: { achievements: any[] }) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-bold font-mono tracking-tighter">
            <span className="text-primary">05.</span> achievements.log
          </h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1a1a] border border-white/5 hover:border-primary/30 p-6 rounded-xl transition-all group flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-[#111] text-primary transition-all shadow-[0_0_15px_rgba(230,83,32,0)] group-hover:shadow-[0_0_15px_rgba(230,83,32,0.5)]">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-mono text-gray-500 mb-3">
                  {item.organization} <span className="text-primary/50">|</span> {item.location}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
