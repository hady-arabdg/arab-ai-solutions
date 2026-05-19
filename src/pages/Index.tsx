import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Team from "@/components/Team";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const prevLang = document.documentElement.lang;
    const prevDir = document.documentElement.dir;
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    return () => {
      document.documentElement.lang = prevLang || "en";
      document.documentElement.dir = prevDir || "ltr";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="ar">
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
