import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Mail, TrendingUp, GitBranch, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import sectorImage from "@/assets/sector-services.jpg";

const ServicesPage = () => {
  const features = [
    {
      icon: Users,
      title: "إدارة العملاء B2B",
      description: "نظام متطور لإدارة علاقات العملاء في قطاع الأعمال مع تحليلات ذكية"
    },
    {
      icon: GitBranch,
      title: "بناء Sales Funnel",
      description: "تصميم وإدارة قمع المبيعات بشكل احترافي مع تتبع دقيق لكل مرحلة"
    },
    {
      icon: Mail,
      title: "حملات تسويقية ذكية",
      description: "حملات بريد إلكتروني وواتساب مخصصة تلقائياً حسب مرحلة العميل"
    },
    {
      icon: TrendingUp,
      title: "تحليلات متقدمة",
      description: "تقارير وتحليلات شاملة لقياس الأداء وتحسين معدلات التحويل"
    },
    {
      icon: Zap,
      title: "أتمتة Workflow",
      description: "أتمتة كاملة لسير العمل من الاستفسار حتى إتمام الصفقة"
    },
    {
      icon: Briefcase,
      title: "إدارة العروض",
      description: "إنشاء وإرسال عروض احترافية مخصصة مع متابعة تلقائية"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden" dir="rtl">
        <div className="absolute inset-0">
          <img 
            src={sectorImage} 
            alt="قطاع الخدمات" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              ← العودة للرئيسية
            </Button>
          </Link>
          
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                حلول الذكاء الاصطناعي
              </span>
              <br />
              لقطاع الخدمات
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              نظام متكامل لتحسين العمل الداخلي في شركات الخدمات باستخدام الذكاء الاصطناعي، البيع B2B وإدارة Funnel احترافي
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4" dir="rtl">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                المميزات الرئيسية
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              حلول شاملة لإدارة وتحسين عمليات البيع B2B في قطاع الخدمات
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
      <section className="py-24 px-4 bg-card/30" dir="rtl">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                مراحل Sales Funnel
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
                    <h3 className="text-2xl font-bold mb-3">جذب العملاء المحتملين</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      استقطاب العملاء من مصادر متعددة وتصنيفهم تلقائياً حسب الاهتمام والجاهزية للشراء مع استخدام أنظمة ذكاء اصطناعي لتقييم جودة كل عميل.
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
                    <h3 className="text-2xl font-bold mb-3">التفاعل والتأهيل</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      تواصل ذكي ومخصص عبر القنوات المناسبة (واتساب، بريد إلكتروني، مكالمات) مع محتوى مخصص حسب احتياجات كل عميل ومرحلته في رحلة الشراء.
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
                    <h3 className="text-2xl font-bold mb-3">التحويل والإغلاق</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      تقديم عروض احترافية مخصصة، متابعة ذكية مع تذكيرات تلقائية، واستخدام أفضل ممارسات B2B لإغلاق الصفقات بنجاح.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4" dir="rtl">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                جاهز لتطوير عمليات البيع في شركتك؟
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض توضيحي للنظام
              </p>
              <a 
                href="https://wa.me/966500000000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-[var(--gradient-primary)] hover:scale-105 transition-transform shadow-[var(--shadow-glow)]"
                >
                  تواصل معنا عبر واتساب
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
