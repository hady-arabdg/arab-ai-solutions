import { TrendingUp, Target, Zap, Award } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      percentage: "60-90%",
      title: "تحسين الأداء",
      description: "زيادة ملموسة في كفاءة العمليات التشغيلية",
    },
    {
      icon: Target,
      percentage: "95%",
      title: "دقة الحلول",
      description: "حلول مخصصة بدقة لتلبية احتياجاتك",
    },
    {
      icon: Zap,
      percentage: "50%",
      title: "توفير الوقت",
      description: "تقليل الوقت المستغرق في المهام المتكررة",
    },
    {
      icon: Award,
      percentage: "100%",
      title: "رضا العملاء",
      description: "التزامنا بالجودة ينعكس في سعادة عملائنا",
    },
  ];

  return (
    <section id="results" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(hsl(145 85% 35% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 85% 35% / 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              النتائج التي نحققها
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أرقام حقيقية تعكس أثر حلولنا على الشركات الشريكة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-card)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="mb-4 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {result.percentage}
                </div>

                <h3 className="text-xl font-bold mb-2">{result.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-12 border border-primary/20 text-center animate-fade-in">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            "حلول عرب للذكاء الاصطناعي ساعدتنا على تحقيق نقلة كبيرة في أداء شركتنا، بتحسن وصل إلى 85% في كفاءة العمليات."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="font-bold text-lg">محمد العتيبي</div>
              <div className="text-muted-foreground">الرئيس التنفيذي، شركة التقنية المتقدمة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
