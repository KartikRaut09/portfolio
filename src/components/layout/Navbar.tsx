"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          KR.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium transition-all"
          >
            Resume
          </Link>
          <button 
            onClick={() => (window as any).openRecruiterMode?.()}
            className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 text-sm font-medium transition-all"
          >
            Recruiter Mode
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 w-full" />
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-lg text-gray-300 hover:text-white"
          >
            Resume
          </Link>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              (window as any).openRecruiterMode?.();
            }}
            className="text-left text-lg text-primary font-medium"
          >
            Recruiter Mode
          </button>
        </motion.div>
      )}
    </header>
  );
}
