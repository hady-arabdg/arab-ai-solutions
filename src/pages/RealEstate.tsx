import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MessageCircle, Mail, Target, Filter, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import sectorImage from "@/assets/sector-realestate.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const RealEstate = () => {
  const { t } = useLanguage();
  const features = [
    { icon: Target, title: t("re.f1.title"), description: t("re.f1.desc") },
    { icon: MessageCircle, title: t("re.f2.title"), description: t("re.f2.desc") },
    { icon: Mail, title: t("re.f3.title"), description: t("re.f3.desc") },
    { icon: TrendingUp, title: t("re.f4.title"), description: t("re.f4.desc") },
    { icon: Filter, title: t("re.f5.title"), description: t("re.f5.desc") },
    { icon: Building2, title: t("re.f6.title"), description: t("re.f6.desc") },
  ];

  const steps = [
    { n: 1, title: t("re.s1.title"), desc: t("re.s1.desc") },
    { n: 2, title: t("re.s2.title"), desc: t("re.s2.desc") },
    { n: 3, title: t("re.s3.title"), desc: t("re.s3.desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sectorImage} alt="Real Estate Sector" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container mx-auto relative z-10">
          <Link to="/"><Button variant="ghost" className="mb-8">{t("page.back")}</Button></Link>
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t("re.hero.title1")}</span>
              <br />
              {t("re.hero.title2")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{t("re.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t("page.features.title")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("re.features.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:scale-105 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="p-3 rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] w-fit mb-4">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t("re.how.title")}</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((s) => (
              <Card key={s.n} className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center text-primary-foreground font-bold text-xl">{s.n}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{t("page.cta.ready")}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("page.cta.subtitle")}</p>
              <a href="https://wa.me/966549793708" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[var(--gradient-primary)] hover:scale-105 transition-transform shadow-[var(--shadow-glow)]">{t("page.cta.whatsapp")}</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
