"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for New Opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
            Software <br />
            Engineer.
          </h1>
          
          <p className="text-lg text-secondary max-w-lg mb-8 leading-relaxed">
            Backend specialist leveraging <span className="text-white font-medium">AI & Modern Tech</span> to build complete, high-performance applications.
            Expert in Python, Go, and scalable infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/Kelvyn2012"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium flex items-center gap-2"
            >
              GitHub Profile <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Visual Content (Right Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
             {/* Abstract Code/Terminal Visualization */}
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-pink-400">def</span>
                    <span className="text-blue-400">optimize_system</span>
                    <span className="text-slate-400">(self):</span>
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-purple-400">await</span> self.scale_infrastructure()
                  </div>
                   <div className="pl-4 text-slate-400">
                    <span className="text-purple-400">return</span>
                    <span className="text-green-400"> "99.9% Uptime"</span>
                  </div>
                  <div className="h-20" />
                  <div className="pl-4 text-slate-500">// Production metrics</div>
                  <div className="pl-4 text-slate-300">
                    api_latency = <span className="text-yellow-400">24ms</span>
                  </div>
                   <div className="pl-4 text-slate-300">
                    error_rate = <span className="text-green-400">0.01%</span>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
