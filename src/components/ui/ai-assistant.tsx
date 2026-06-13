"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User } from "lucide-react";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Kartik's AI Assistant. Ask me anything about his experience, projects, or skills!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");

    // Simulate RAG / LLM response
    setTimeout(() => {
      let botResponse = "I'm still learning, but you can find more details in the sections above!";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes("who is")) {
        botResponse = "Kartik Raut is an AI Engineer specializing in Generative AI, Agentic Systems, RAG Pipelines and Reinforcement Learning.";
      } else if (lowerInput.includes("experience") || lowerInput.includes("work")) {
        botResponse = "He has worked as an AI Engineer Intern building production RAG pipelines, and as an ML Engineer optimizing voice AI models and Docker deployments.";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
        botResponse = "Kartik's stack includes Python, Next.js, FastAPI, LangChain, Docker, AWS, and PyTorch.";
      } else if (lowerInput.includes("project")) {
        botResponse = "One of his highlighted projects is an Autonomous Agent Workflow System built with LangChain and FastAPI!";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
        botResponse = "You can reach Kartik at kartikrautsr12@gmail.com or via LinkedIn!";
      } else if (lowerInput.includes("resume")) {
        botResponse = "You can download his resume directly from the top navigation bar or the Hero section.";
      }

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-black shadow-lg shadow-primary/20 hover:scale-105 transition-transform z-50 ${isOpen ? "hidden" : "block"}`}
      >
        <Bot size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Bot size={20} className="text-primary" />
                <span>Kartik's AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}>
                  <div className={`p-2 rounded-full h-fit ${msg.role === "user" ? "bg-primary/20 text-primary" : "bg-white/10 text-white"}`}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-primary text-black rounded-tr-none" : "bg-white/10 text-gray-200 rounded-tl-none"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Kartik..."
                  className="w-full bg-black/50 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors pr-12"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 rounded-full bg-primary text-black disabled:opacity-50 disabled:bg-gray-500 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
