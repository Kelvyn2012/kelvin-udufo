"use client";

const skills = [
  "Python", "Go (Golang)", "PostgreSQL", "Docker", "AWS", "Redis", 
  "Django", "FastAPI", "Git", "Linux", "CI/CD", "Terraform", "Kubernetes",
  "Prompt Engineering", "System Design", "Microservices"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </div>

      <div className="flex relative overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/5 text-slate-300 hover:text-white hover:border-accent/50 transition-colors backdrop-blur-sm"
            >
              <span className="text-accent font-mono text-lg">•</span>
              <span className="font-medium text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse Marquee for Soft Skills / Tools if needed, or just one strong row */}
    </section>
  );
}
