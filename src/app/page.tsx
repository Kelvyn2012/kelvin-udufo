import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import About from "@/components/About";

const projects = [
  {
    title: "Airbnb Clone Backend",
    description: "A robust booking API handling complex availability logic, payment processing, and user reviews. Built for scale with proper database indexing and caching strategies.",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    image: "/images/projects/airbnb.png",
    links: {
      github: "https://github.com/Kelvyn2012/alx-airbnb-database",
      demo: "https://airbnb-green-eight-37.vercel.app/",
    },
  },
  {
    title: "ALX Project Nexus",
    description: "High-throughput data aggregation service processing thousands of events per second. Implemented utilizing Go routines for concurrency and RabbitMQ for message queuing.",
    tags: ["Go", "RabbitMQ", "Docker", "gRPC"],
    image: "/images/projects/nexus.png",
    links: {
      github: "https://github.com/Kelvyn2012/alx-project-nexus",
      demo: "https://social-media-feed-frontend-six.vercel.app/",
    },
  },
  {
    title: "E-commerce API Engine",
    description: "Headless e-commerce backend supporting multi-tenant inventory management, tiered pricing, and real-time order tracking. Optimized for sub-100ms response times.",
    tags: ["FastAPI", "PostgreSQL", "AWS Lambda", "Stripe"],
    image: "/images/projects/ecommerce.png",
    links: {
      github: "https://github.com/Kelvyn2012/e_commerce_API",
      demo: "https://ecommerce-nu-cyan-50.vercel.app/",
    },
  },
  {
    title: "Movie Recommendation App",
    description: "Content-based filtering engine providing personalized movie suggestions. Features a hybrid recommendation algorithm and efficient caching for rapid lookups.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "Redis"],
    image: "/images/projects/movie.png",
    links: {
      github: "https://github.com/Kelvyn2012/Movie-Recommendation-App",
      demo: "https://movie-recommendation-app-frontend-nu.vercel.app/",
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

      <About />

      <Footer />
    </main>
  );
}
