"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Abstract Frames/Decorations */}
              <motion.div 
                initial={{ opacity: 0, rotate: -6 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 border border-purple-500/30 rounded-3xl z-0 translate-x-4 translate-y-4"
              />
              <motion.div 
                initial={{ opacity: 0, rotate: 6 }}
                whileInView={{ opacity: 1, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 border border-blue-500/30 rounded-3xl z-0 -translate-x-4 -translate-y-4"
              />
              
              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                <Image
                  src="/images/kelvin.png"
                  alt="Kelvin Udufo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Float Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 z-30 bg-surface/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-[200px]"
              >
                <p className="text-sm font-medium text-white">
                  "Engineering reliability into every line of code."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              The Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Behind the Code
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-secondary leading-relaxed"
            >
              <p>
                I am a <strong>Software Engineer</strong> with a deep focus on Backend Architecture and Production Reliability. While my core strength lies in building robust APIs and scalable systems, I leverage <strong>AI-driven development</strong> to bridge the gap to the frontend.
              </p>
              <p>
                This approach allows me to deliver <strong>complete, polished applications</strong> independently—combining enterprise-grade backend logic with modern, high-fidelity user interfaces.
              </p>
              <p>
                When I'm not optimizing database queries or designing microservices, you'll find me exploring the latest in generative AI or contributing to open-source projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex gap-6"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">3+</span>
                <span className="text-sm text-secondary">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10k+</span>
                <span className="text-sm text-secondary">Daily Requests Handled</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">99.9%</span>
                <span className="text-sm text-secondary">Uptime Maintained</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
