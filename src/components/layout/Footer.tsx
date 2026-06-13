import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Kartik Raut
          </Link>
          <p className="text-sm text-gray-400">
            Building intelligent systems for the real world.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com/KartikRaut09" target="_blank" className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/kartik-raut-155186203" target="_blank" className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="mailto:kartikrautsr12@gmail.com" className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Kartik Raut. All rights reserved.</p>
        <p>Built with Next.js, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
