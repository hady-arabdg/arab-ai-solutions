import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Mail, TrendingUp, GitBranch, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import sectorImage from "@/assets/sector-services.jpg";

const ServicesPage = () => {
  const features = [
    {
      icon: Users,
      title: "B2B Client Management",
      description: "An advanced CRM tailored for B2B with smart analytics.",
    },
    {
      icon: GitBranch,
      title: "Sales Funnel Design",
      description: "Build and manage your sales funnel professionally with precise stage-by-stage tracking.",
    },
    {
      icon: Mail,
      title: "Smart Marketing Campaigns",
      description: "Email and WhatsApp campaigns automatically tailored to each client's funnel stage.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to measure performance and improve conversion.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Full workflow automation from initial inquiry to closed deal.",
    },
    {
      icon: Briefcase,
      title: "Proposal Management",
      description: "Create and send tailored professional proposals with automatic follow-up.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sectorImage}
            alt="Services Sector"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              ← Back to Home
            </Button>
          </Link>

          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              for the Services Sector
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              An end-to-end system to improve internal operations in service companies through AI, B2B sales, and professional funnel management.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to manage and grow B2B sales operations in services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="p-3 rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Funnel Process */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sales Funnel Stages
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Lead Generation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attract leads from multiple sources and classify them automatically by interest and buying readiness, using AI to score each lead's quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center text-primary-foreground font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Engagement & Qualification</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Smart, personalized communication across the right channels (WhatsApp, email, calls) with content tailored to each client's needs and stage in the buying journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center text-primary-foreground font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Conversion & Closing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deliver tailored professional proposals, follow up intelligently with automated reminders, and apply B2B best practices to close deals successfully.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to upgrade your sales operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch for a free consultation and a system demo.
              </p>
              <a
                href="https://wa.me/966549793708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[var(--gradient-primary)] hover:scale-105 transition-transform shadow-[var(--shadow-glow)]"
                >
                  Chat with us on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
