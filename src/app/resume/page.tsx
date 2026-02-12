import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white flex flex-col">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-secondary hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          
          <a 
            href="/resume.pdf" 
            download="Kelvin_Udufo_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto w-full h-full min-h-[800px] flex flex-col">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
                <p className="text-secondary text-lg">
                    Latest version, updated February 2026
                </p>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-grow w-full bg-surface rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group">
                <iframe 
                    src="/resume.pdf" 
                    className="w-full h-[850px] md:h-[1100px] border-none"
                    title="Resume Preview"
                />
                
                {/* Fallback / Overlay for Mobile if needed */}
                <div className="absolute inset-0 bg-background/90 z-10 flex flex-col items-center justify-center gap-6 p-8 md:hidden">
                    <FileText size={64} className="text-accent opacity-50" />
                    <p className="text-center text-secondary">
                        PDF preview is optimized for desktop. <br />
                        Please download the file to view on mobile.
                    </p>
                    <a 
                        href="/resume.pdf" 
                        download="Kelvin_Udufo_Resume.pdf"
                        className="flex items-center gap-2 px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10"
                    >
                        <Download size={20} />
                        Download File
                    </a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
