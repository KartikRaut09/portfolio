"use client";

import Link from "next/link";
import { Terminal, Cpu, GitBranch, FolderOpen, Mail, CodeXml, Trophy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 lg:w-64 bg-[#111] border-r border-white/10 z-50 hidden md:flex flex-col">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <CodeXml className="w-5 h-5 text-white" />
          </div>
          <span className="font-mono font-bold text-lg hidden lg:block">
            <span className="text-primary">&lt;</span> Dev<span className="text-primary">/&gt;</span>
          </span>
        </div>
      </div>
      
      <nav className="flex-1 py-4 flex flex-col gap-2">
        <Link href="#hero" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <CodeXml className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">main.ts</span>
        </Link>
        <Link href="#about" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <Terminal className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">about.md</span>
        </Link>
        <Link href="#skills" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <Cpu className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">skills.json</span>
        </Link>
        <Link href="#experience" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <GitBranch className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">experience.git</span>
        </Link>
        <Link href="#projects" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <FolderOpen className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">projects/</span>
        </Link>
        <Link href="#achievements" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <Trophy className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">achievements.log</span>
        </Link>
        <Link href="#contact" className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 group hover:bg-white/5 text-gray-400 hover:text-white">
          <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm hidden lg:block">contact.exe</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <a href="https://github.com/KartikRaut09" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kartik-raut-155186203" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:kartikrautsr12@gmail.com" className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
