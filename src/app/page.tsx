import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Airbnb Clone Backend",
    description: "A robust booking API handling complex availability logic, payment processing, and user reviews. Built for scale with proper database indexing and caching strategies.",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    links: {
      github: "https://github.com/Kelvyn2012",
      demo: "#",
    },
  },
  {
    title: "ALX Project Nexus",
    description: "High-throughput data aggregation service processing thousands of events per second. Implemented utilizing Go routines for concurrency and RabbitMQ for message queuing.",
    tags: ["Go", "RabbitMQ", "Docker", "gRPC"],
    links: {
      github: "https://github.com/Kelvyn2012",
      demo: "#",
    },
  },
  {
    title: "E-commerce API Engine",
    description: "Headless e-commerce backend supporting multi-tenant inventory management, tiered pricing, and real-time order tracking. Optimized for sub-100ms response times.",
    tags: ["FastAPI", "PostgreSQL", "AWS Lambda", "Stripe"],
    links: {
      github: "https://github.com/Kelvyn2012",
      demo: "#",
    },
  },
  {
    title: "Movie Recommendation App",
    description: "Content-based filtering engine providing personalized movie suggestions. Features a hybrid recommendation algorithm and efficient caching for rapid lookups.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "Redis"],
    links: {
      github: "https://github.com/Kelvyn2012",
      demo: "#",
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent" />
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
                I am a <strong>Software Engineer</strong> with a deep focus on Backend Architecture and Production Reliability. While my core strength lies in building robust APIs and scalable systems, I leverage <strong>AI-driven development</strong> to bridge the gap to the frontend.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
                 This approach allows me to deliver <strong>complete, polished applications</strong> independently—combining enterprise-grade backend logic with modern, high-fidelity user interfaces. I don't just write code; I engineer shipping products.
            </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
