"use client";

import Link from "next/link";
import { Terminal, Cpu, GitBranch, FolderOpen, Mail, CodeXml, Trophy } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#111]/95 backdrop-blur-md z-50 md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="grid grid-cols-7 items-center px-2 py-2">
        <Link href="#hero" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <CodeXml className="w-5 h-5" />
        </Link>
        <Link href="#about" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <Terminal className="w-5 h-5" />
        </Link>
        <Link href="#skills" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <Cpu className="w-5 h-5" />
        </Link>
        <Link href="#experience" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <GitBranch className="w-5 h-5" />
        </Link>
        <Link href="#projects" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <FolderOpen className="w-5 h-5" />
        </Link>
        <Link href="#achievements" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <Trophy className="w-5 h-5" />
        </Link>
        <Link href="#contact" className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-primary hover:bg-primary/10">
          <Mail className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
}
