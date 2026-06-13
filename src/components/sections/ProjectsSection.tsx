"use client";

import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function ProjectsSection({ projects }: { projects: any[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-bold font-mono tracking-tighter">
            <span className="text-primary">04.</span> projects/
          </h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative flex flex-col h-full bg-[#1a1a1a] border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-colors z-10">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FolderOpen className="w-8 h-8" />
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                        <FaGithub className="w-6 h-6" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link href={project.demo} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                        <ExternalLink className="w-6 h-6" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="text-gray-400 mb-8 flex-1">
                  <div className="prose prose-invert prose-p:my-0 prose-strong:text-white max-w-none font-light leading-relaxed text-sm md:text-base">
                    <ReactMarkdown>{project.content}</ReactMarkdown>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.technologies?.map((tech: string, i: number) => (
                      <span key={i} className="text-xs font-mono text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
