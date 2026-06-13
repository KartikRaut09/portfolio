"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function HeroSection({ profile }: { profile: any }) {
  if (!profile) return null;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-0">
      <div className="absolute top-20 right-20 font-mono text-xs text-primary/20 hidden lg:block">&lt;System.Init /&gt;</div>
      <div className="absolute bottom-20 left-40 font-mono text-xs text-green-500/20 hidden lg:block">while(alive) &#123; code() &#125;</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4 animate-slide-in-up">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_6px_rgba(230,83,32,0.6)]"></span>
              </span> 
              SYSTEM.KERNEL :: v2.5.0 ONLINE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-slide-in-up">
              <span className="text-foreground">Hello, I&apos;m </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 relative inline-block">
                {profile.name}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 animate-slide-in-up font-light" style={{ animationDelay: "0.1s" }}>
              <span className="text-primary font-mono">&lt;Architect /&gt;</span> {profile.subtitle}
            </p>
          </div>

          <div className="animate-slide-in-up flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-xl mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
            <Link href="/resume.pdf" target="_blank" className="relative group cursor-pointer flex-1 min-w-[200px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 opacity-30 group-hover:opacity-70 transition duration-500" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}></div>
              <div className="relative bg-[#1a1a1a] border border-primary/30 p-4 flex items-center gap-4 hover:bg-[#202020] transition-colors shadow-2xl h-full" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
                <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-primary/10 rounded-sm border border-primary/20 group-hover:border-primary/50 group-hover:scale-105 transition-all">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors truncate">Initialize OS</h3>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-primary transition-colors ml-2" />
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden mb-1">
                    <div className="h-full bg-primary w-[60%] group-hover:w-[85%] transition-all duration-700 ease-out relative">
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between font-mono text-[9px] text-gray-500">
                    <span className="truncate mr-2">&gt; sudo boot_gui</span>
                    <span className="text-primary group-hover:animate-pulse whitespace-nowrap">Loading...</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/KartikRaut09" target="_blank" className="relative group cursor-pointer sm:w-auto shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-400 opacity-20 group-hover:opacity-50 transition duration-500" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}></div>
              <div className="relative bg-[#1a1a1a] border border-primary/30 group-hover:border-primary/50 p-4 flex items-center justify-center gap-3 hover:bg-[#202020] transition-colors shadow-xl h-full min-w-[120px]" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
                <FaGithub className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-mono leading-none mb-0.5">Check out</div>
                  <div className="font-bold text-white group-hover:text-primary transition-colors leading-none">GitHub</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-2 opacity-80 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-xs font-mono text-gray-500 mr-2 py-1">LOADED_MODULES:</span>
            {["PYTHON", "FASTAPI", "LLMs", "RAG", "DOCKER", "PYTORCH"].map((mod) => (
              <span key={mod} className="px-2 py-1 bg-primary/5 border border-primary/20 text-primary/80 text-[10px] font-mono rounded tracking-wider hover:bg-primary/10 hover:border-primary/40 transition-colors cursor-default">
                {mod}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-xl relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
            <div className="terminal w-full max-w-2xl shadow-2xl overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>portfolio.tsx
                </div>
                <div className="w-10"></div>
              </div>
              
              <div className="p-4 sm:p-6 overflow-x-auto text-sm lg:text-base font-mono">
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">1</span><span className="text-purple-400">import</span> <span className="text-yellow-400">&#123;</span> Developer <span className="text-yellow-400">&#125;</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;./universe&apos;</span>;</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">2</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">3</span><span className="text-purple-400">const</span> <span className="text-blue-400">Portfolio</span> = <span className="text-yellow-400">()</span> =&gt; <span className="text-yellow-400">&#123;</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">4</span>  <span className="text-purple-400">return</span> (</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">5</span>    &lt;<span className="text-orange-400">Developer</span> </div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">6</span>      name=<span className="text-green-400">&quot;{profile.name}&quot;</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">7</span>      role=<span className="text-green-400">&quot;AI/ML Engineer&quot;</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">8</span>      specialties=<span className="text-yellow-400">&#123;</span>[<span className="text-green-400">&quot;RAG&quot;</span>, <span className="text-green-400">&quot;Agents&quot;</span>]<span className="text-yellow-400">&#125;</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">9</span>    /&gt;</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">10</span>  );</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none w-4">11</span><span className="text-yellow-400">&#125;</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
