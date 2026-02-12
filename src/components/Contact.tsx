"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-accent">Scalable?</span>
          </h2>
          
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and open to full-time opportunities. 
            If you need a backend that never fails or a full-stack application that impresses, let's talk.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:kudufo@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
            >
              <span>Say Hello</span>
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/kelvin-udufo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 rounded-full font-medium text-white hover:bg-white/5 transition-all hover:border-white/20"
            >
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-secondary text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
            
            <div className="flex gap-6">
                <a href="https://github.com/Kelvyn2012" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    X (Twitter)
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
