export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Kelvin Udufo. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div className="flex gap-6">
           <a href="https://github.com/Kelvyn2012" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
           <a href="https://www.linkedin.com/in/kelvin-udufo" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
           <a href="mailto:kudufo@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
