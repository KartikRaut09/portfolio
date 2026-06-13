"use client";

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import Link from "next/link";

export function ContactSection({ profile }: { profile: any }) {
  if (!profile) return null;

  return (
    <section id="contact" className="py-24 relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="font-mono text-primary flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-4 h-4" />
            <span>05. What&apos;s Next?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities as an AI/ML Engineer. 
            Whether you have a question or just want to say hi, I&apos;ll try my best 
            to get back to you!
          </p>

          <div className="pt-8">
            <Link 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </Link>
          </div>
          
          <div className="pt-24 font-mono text-xs text-gray-600">
            <p>Designed & Built by {profile.name}</p>
            <p className="mt-1">Terminal UI Theme</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
