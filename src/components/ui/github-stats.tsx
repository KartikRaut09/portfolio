"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function GithubIntegration() {
  const [stats, setStats] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithub() {
      try {
        const userRes = await fetch("https://api.github.com/users/KartikRaut09");
        const userData = await userRes.json();
        
        const repoRes = await fetch("https://api.github.com/users/KartikRaut09/repos?sort=updated&per_page=4");
        const repoData = await repoRes.json();

        if (userData && !userData.message) {
          setStats(userData);
        }
        if (Array.isArray(repoData)) {
          setRepos(repoData);
        }
      } catch (error) {
        console.error("Failed to fetch Github stats", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithub();
  }, []);

  if (loading) return null;
  if (!stats) return null;

  return (
    <section className="py-24 relative z-10 bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-primary font-mono text-sm">
            <FaGithub size={16} />
            <span>04. Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">GitHub Activity</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4"
          >
            <img src={stats.avatar_url} alt="Profile" className="w-24 h-24 rounded-full border-2 border-primary/50" />
            <div>
              <h3 className="text-2xl font-bold text-white">{stats.name}</h3>
              <p className="text-gray-400">@{stats.login}</p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stats.public_repos}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Repos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stats.followers}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Followers</span>
              </div>
            </div>
            <Link href={stats.html_url} target="_blank" className="mt-4 px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors">
              Follow on GitHub
            </Link>
          </motion.div>

          {/* Recent Repos */}
          <div className="col-span-1 lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-primary/30 transition-colors flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-3 text-white">
                  <BookOpen size={18} className="text-primary" />
                  <Link href={repo.html_url} target="_blank" className="font-semibold hover:underline">
                    {repo.name}
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mb-6 flex-1 line-clamp-2">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
