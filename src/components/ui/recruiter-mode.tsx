"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, FileText, Mail, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export function RecruiterMode() {
  const [isOpen, setIsOpen] = useState(false);

  // Expose a global method to open the recruiter mode from the navbar
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).openRecruiterMode = () => setIsOpen(true);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <Briefcase className="text-primary" size={24} />
                <h2 className="text-xl font-bold text-white">Recruiter Overview</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex flex-col gap-8">
              {/* Quick Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Kartik Raut</h3>
                  <p className="text-primary font-medium mb-4">AI Engineer</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Specializing in Generative AI, RAG pipelines, and Multi-Agent systems. Proven track record of deploying robust ML models and reducing latency.
                  </p>
                  <div className="flex items-center gap-3">
                    <Link href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors">
                      <FileText size={16} /> Resume
                    </Link>
                    <Link href="mailto:kartikrautsr12@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-md hover:bg-white/20 border border-white/10 transition-colors">
                      <Mail size={16} /> Contact
                    </Link>
                  </div>
                </div>

                <div className="bg-black/50 border border-white/5 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "LangChain", "LLMs", "RAG", "Docker", "AWS", "Next.js"].map(s => (
                      <span key={s} className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Experience Highlights</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">AI Engineer Intern <span className="text-gray-500">@ Tech Innovations Inc.</span></p>
                      <p className="text-gray-400 text-sm mt-1">Reduced RAG retrieval latency by 40% and built multi-agent workflows.</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">Jan 2025 - Present</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">Machine Learning Engineer <span className="text-gray-500">@ OpenSource Analytics</span></p>
                      <p className="text-gray-400 text-sm mt-1">Engineered scalable voice AI agents, reduced inference cost by 25%.</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">May 2024 - Dec 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
