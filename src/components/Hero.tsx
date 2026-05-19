import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI Technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up">
          <Sparkles className="w-6 h-6 text-secondary" />
          <span className="text-secondary font-semibold">AI Solutions for Saudi Businesses</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Arab AI
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          We help companies in the Kingdom streamline operations and internal alignment
          <br />
          <span className="text-foreground font-semibold">through advanced AI solutions</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="https://wa.me/966549793708" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[var(--gradient-primary)] hover:scale-105 transition-transform shadow-[var(--shadow-glow)] text-lg px-8"
            >
              Start Your Digital Journey
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg px-8"
            >
              Explore Our Sectors
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold text-primary mb-2">60-90%</div>
            <div className="text-muted-foreground">Performance Improvement</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold text-secondary mb-2">100+</div>
            <div className="text-muted-foreground">Saudi Companies Trust Us</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Continuous Support</div>
          </div>
        </div>

        {/* Location badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground animate-slide-up" style={{ animationDelay: '1s' }}>
          <MessageCircle className="w-5 h-5 text-primary" />
          <span>Our team is based in Jeddah</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
