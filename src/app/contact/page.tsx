
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Kelvin Udufo",
  description: "Get in touch for freelance projects or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col justify-center pt-20">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
