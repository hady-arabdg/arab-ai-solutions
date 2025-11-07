import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Team from "@/components/Team";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Results />
      <Team />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
