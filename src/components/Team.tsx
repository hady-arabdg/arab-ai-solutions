import { MapPin, Users, Award, Headset } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              فريقنا
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خبراء سعوديون متخصصون في تقديم حلول الذكاء الاصطناعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up">
            <div className="mb-4 inline-block p-4 rounded-xl bg-primary/10">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">جدة</h3>
            <p className="text-muted-foreground">مقرنا الرئيسي</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-secondary/10">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">فريق متكامل</h3>
            <p className="text-muted-foreground">خبراء في كل المجالات</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-accent/10">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">خبرة محلية</h3>
            <p className="text-muted-foreground">فهم عميق للسوق السعودي</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-4 inline-block p-4 rounded-xl bg-primary/10">
              <Headset className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">دعم 24/7</h3>
            <p className="text-muted-foreground">نحن دائمًا في خدمتك</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-10 border border-primary/20 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            فريق عرب للذكاء الاصطناعي مكوّن من نخبة من المتخصصين السعوديين في الذكاء الاصطناعي،
            وتطوير البرمجيات، وإدارة المشاريع. نفخر بفهمنا العميق للسوق المحلي واحتياجات الشركات السعودية.
          </p>
          <p className="text-lg text-foreground font-semibold">
            مع عرب للذكاء الاصطناعي، أنت تعمل مع فريق يتحدث لغتك ويفهم طموحاتك.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
