"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    github: string;
    demo: string;
  };
}

export default function ProjectCard({ title, description, tags, image, links }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-3xl bg-slate-900/40 border border-white/5 overflow-hidden backdrop-blur-sm hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Thumbnail Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col flex-grow p-8">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-secondary mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all"
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
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group/link"
          >
            <Github size={18} />
            <span className="border-b border-transparent group-hover/link:border-white transition-colors">Code</span>
          </a>
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-accent transition-colors group/link"
          >
            <ExternalLink size={18} />
            <span className="border-b border-transparent group-hover/link:border-accent transition-colors">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
