import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShoppingCart, Network } from "lucide-react";
import ecommerceImage from "@/assets/service-ecommerce.jpg";
import integrationImage from "@/assets/service-integration.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "صفحات الهبوط",
      description: "تصميم وتطوير صفحات هبوط احترافية مدعومة بالذكاء الاصطناعي لزيادة التحويلات وتحقيق أهدافك التسويقية",
      image: null,
    },
    {
      icon: ShoppingCart,
      title: "التسوق الإلكتروني",
      description: "منصات تجارة إلكترونية متكاملة مع أنظمة ذكاء اصطناعي لتحليل السلوك وتحسين المبيعات",
      image: ecommerceImage,
    },
    {
      icon: Network,
      title: "التناسق بين الشركات",
      description: "حلول متقدمة لربط وتنسيق العمليات بين الأقسام والشركات التابعة لتحقيق أقصى كفاءة تشغيلية",
      image: integrationImage,
    },
  ];

  return (
    <section className="py-24 px-4 relative" id="services" dir="rtl">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              خدماتنا
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم حلول ذكاء اصطناعي متكاملة مصممة خصيصاً لتلبية احتياجات الشركات السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:scale-105 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <CardContent className={service.image ? "p-6" : "p-8"}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-12 border border-primary/20 animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            جاهز لتحويل شركتك رقمياً؟
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى الشركات السعودية الرائدة التي تستخدم حلولنا المدعومة بالذكاء الاصطناعي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966549793708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
