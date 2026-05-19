import { MapPin, Users, Award, Headset } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Saudi experts specialized in delivering AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up">
            <div className="mb-4 inline-block p-4 rounded-xl bg-primary/10">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Jeddah</h3>
            <p className="text-muted-foreground">Our headquarters</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-secondary/10">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Full-stack Team</h3>
            <p className="text-muted-foreground">Experts across every domain</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-accent/10">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Local Expertise</h3>
            <p className="text-muted-foreground">Deep understanding of the Saudi market</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-primary/10">
              <Headset className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">We're always at your service</p>
          </div>
        </div>

        {/* About text */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-10 border border-primary/20 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Arab AI team is made up of elite Saudi specialists in artificial intelligence,
            software development, and project management. We're proud of our deep understanding
            of the local market and the needs of Saudi companies.
          </p>
          <p className="text-lg text-foreground font-semibold">
            With Arab AI, you work with a team that speaks your language and understands your ambitions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
