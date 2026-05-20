import { MapPin, Users, Award, Headset } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  const cards = [
    { icon: MapPin, bg: "bg-primary/10", text: "text-primary", title: t("team.card1.title"), desc: t("team.card1.desc") },
    { icon: Users, bg: "bg-secondary/10", text: "text-secondary", title: t("team.card2.title"), desc: t("team.card2.desc") },
    { icon: Award, bg: "bg-accent/10", text: "text-accent", title: t("team.card3.title"), desc: t("team.card3.desc") },
    { icon: Headset, bg: "bg-primary/10", text: "text-primary", title: t("team.card4.title"), desc: t("team.card4.desc") },
  ];
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t("team.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("team.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((c, i) => (
            <div key={i} className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`mb-4 inline-block p-4 rounded-xl ${c.bg}`}>
                <c.icon className={`w-8 h-8 ${c.text}`} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-10 border border-primary/20 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("team.p1")}</p>
          <p className="text-lg text-foreground font-semibold">{t("team.p2")}</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
