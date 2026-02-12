"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    github: string;
    demo?: string;
  };
}

export default function ProjectCard({ title, description, tags, links }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-3xl bg-slate-900/40 border border-white/5 p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-secondary mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <Github size={18} /> Code
          </a>
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
