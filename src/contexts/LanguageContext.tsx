import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, { ar: string; en: string }>;

export const translations: Dict = {
  // Hero
  "hero.badge": { ar: "حلول الذكاء الاصطناعي للشركات السعودية", en: "AI Solutions for Saudi Companies" },
  "hero.title": { ar: "عرب للذكاء الاصطناعي", en: "Arab AI" },
  "hero.subtitle1": { ar: "نساعد الشركات في المملكة على تحسين العمليات والتنسيق الداخلي", en: "We help companies in the Kingdom improve internal operations and coordination" },
  "hero.subtitle2": { ar: "من خلال حلول الذكاء الاصطناعي المتقدمة", en: "through advanced AI solutions" },
  "hero.cta1": { ar: "ابدأ رحلتك الرقمية", en: "Start Your Digital Journey" },
  "hero.cta2": { ar: "استكشف قطاعاتنا", en: "Explore Our Sectors" },
  "hero.stat1": { ar: "تحسين الأداء", en: "Performance Boost" },
  "hero.stat2": { ar: "شركة سعودية تثق بنا", en: "Saudi Companies Trust Us" },
  "hero.stat3": { ar: "دعم متواصل", en: "Continuous Support" },
  "hero.location": { ar: "فريقنا في جدة", en: "Our team is in Jeddah" },

  // Services (sectors)
  "services.title": { ar: "قطاعاتنا", en: "Our Sectors" },
  "services.subtitle": { ar: "تحسين العمليات الداخلية للشركات من خلال الذكاء الاصطناعي وسير العمل الذكي", en: "Improving internal company operations through AI and smart workflows" },
  "services.realestate.title": { ar: "قطاع العقارات", en: "Real Estate Sector" },
  "services.realestate.desc": { ar: "تتبع العملاء المحتملين، الممارسة الصحيحة للبيع عبر الواتساب والإيميل، المتابعة والفولو أب الاحترافي، فلترة العملاء، واستخدام خبرات التقفيل.", en: "Lead tracking, proper sales practices via WhatsApp and email, professional follow-up, lead filtering, and closing expertise." },
  "services.services.title": { ar: "قطاع الخدمات", en: "Services Sector" },
  "services.services.desc": { ar: "حلول بيع B2B متكاملة، تصميم قمع مبيعات احترافي، أتمتة سير العمل، ورفع معدلات التحويل بالذكاء الاصطناعي.", en: "End-to-end B2B sales solutions, professional sales funnel design, workflow automation, and higher conversion rates with AI." },
  "services.cta.title": { ar: "جاهز لتحويل شركتك رقميًا؟", en: "Ready to digitally transform your company?" },
  "services.cta.subtitle": { ar: "انضم للشركات السعودية الرائدة التي تستخدم حلولنا المدعومة بالذكاء الاصطناعي", en: "Join leading Saudi companies using our AI-powered solutions" },
  "services.cta.whatsapp": { ar: "تواصل معنا عبر الواتساب", en: "Contact us on WhatsApp" },

  // Results
  "results.title": { ar: "النتائج التي نحققها", en: "Results We Deliver" },
  "results.subtitle": { ar: "أرقام حقيقية تعكس أثر حلولنا على الشركات الشريكة", en: "Real numbers reflecting our impact on partner companies" },
  "results.r1.title": { ar: "تحسين الأداء", en: "Performance Boost" },
  "results.r1.desc": { ar: "زيادة ملموسة في كفاءة العمليات التشغيلية", en: "Tangible increase in operational efficiency" },
  "results.r2.title": { ar: "دقة الحلول", en: "Solution Accuracy" },
  "results.r2.desc": { ar: "حلول مخصصة بدقة لتلبية احتياجاتك", en: "Solutions precisely tailored to your needs" },
  "results.r3.title": { ar: "توفير الوقت", en: "Time Savings" },
  "results.r3.desc": { ar: "تقليل الوقت المستغرق في المهام المتكررة", en: "Reduce time spent on repetitive tasks" },
  "results.r4.title": { ar: "رضا العملاء", en: "Client Satisfaction" },
  "results.r4.desc": { ar: "التزامنا بالجودة ينعكس في سعادة عملائنا", en: "Our commitment to quality shows in our clients' happiness" },
  "results.quote": { ar: "حلول عرب للذكاء الاصطناعي ساعدتنا على تحقيق نقلة كبيرة في أداء شركتنا، بتحسن وصل إلى 85% في كفاءة العمليات.", en: "Arab AI's solutions helped us achieve a major leap in our company's performance, with up to 85% improvement in operational efficiency." },
  "results.author": { ar: "محمد العتيبي", en: "Mohammed Al-Otaibi" },
  "results.role": { ar: "الرئيس التنفيذي، شركة التقنية المتقدمة", en: "CEO, Advanced Technology Co." },

  // Team
  "team.title": { ar: "فريقنا", en: "Our Team" },
  "team.subtitle": { ar: "خبراء سعوديون متخصصون في تقديم حلول الذكاء الاصطناعي", en: "Saudi experts specialized in delivering AI solutions" },
  "team.card1.title": { ar: "جدة", en: "Jeddah" },
  "team.card1.desc": { ar: "مقرنا الرئيسي", en: "Our headquarters" },
  "team.card2.title": { ar: "فريق متكامل", en: "Integrated Team" },
  "team.card2.desc": { ar: "خبراء في كل المجالات", en: "Experts across all fields" },
  "team.card3.title": { ar: "خبرة محلية", en: "Local Expertise" },
  "team.card3.desc": { ar: "فهم عميق للسوق السعودي", en: "Deep understanding of the Saudi market" },
  "team.card4.title": { ar: "دعم 24/7", en: "24/7 Support" },
  "team.card4.desc": { ar: "نحن دائمًا في خدمتك", en: "Always at your service" },
  "team.p1": { ar: "فريق عرب للذكاء الاصطناعي مكوّن من نخبة من المتخصصين السعوديين في الذكاء الاصطناعي، وتطوير البرمجيات، وإدارة المشاريع. نفخر بفهمنا العميق للسوق المحلي واحتياجات الشركات السعودية.", en: "The Arab AI team is composed of elite Saudi specialists in artificial intelligence, software development, and project management. We take pride in our deep understanding of the local market and the needs of Saudi companies." },
  "team.p2": { ar: "مع عرب للذكاء الاصطناعي، أنت تعمل مع فريق يتحدث لغتك ويفهم طموحاتك.", en: "With Arab AI, you work with a team that speaks your language and understands your ambitions." },

  // Footer
  "footer.brand": { ar: "عرب للذكاء الاصطناعي", en: "Arab AI" },
  "footer.tagline": { ar: "حلول ذكاء اصطناعي متقدمة للشركات السعودية", en: "Advanced AI solutions for Saudi companies" },
  "footer.quick": { ar: "روابط سريعة", en: "Quick Links" },
  "footer.sectors": { ar: "القطاعات", en: "Sectors" },
  "footer.results": { ar: "النتائج", en: "Results" },
  "footer.team": { ar: "فريقنا", en: "Our Team" },
  "footer.contact": { ar: "تواصل معنا", en: "Contact Us" },
  "footer.address": { ar: "جدة، المملكة العربية السعودية", en: "Jeddah, Saudi Arabia" },
  "footer.whatsapp": { ar: "واتساب: ‎+966 54 979 3708", en: "WhatsApp: +966 54 979 3708" },
  "footer.rights": { ar: "© 2024 عرب للذكاء الاصطناعي. جميع الحقوق محفوظة.", en: "© 2024 Arab AI. All rights reserved." },

  // WhatsApp
  "wa.label": { ar: "تواصل معنا عبر الواتساب", en: "Contact us on WhatsApp" },
  "wa.chat": { ar: "دردش معنا", en: "Chat with us" },

  // Language toggle
  "lang.toggle": { ar: "English", en: "العربية" },

  // Sector pages shared
  "page.back": { ar: "← العودة للرئيسية", en: "← Back to Home" },
  "page.features.title": { ar: "أبرز المزايا", en: "Key Features" },
  "page.cta.ready": { ar: "هل أنت جاهز للانطلاق؟", en: "Ready to get started?" },
  "page.cta.subtitle": { ar: "تواصل معنا للحصول على استشارة مجانية وعرض توضيحي للنظام.", en: "Get in touch for a free consultation and a system demo." },
  "page.cta.whatsapp": { ar: "تواصل معنا عبر الواتساب", en: "Chat with us on WhatsApp" },

  // Real Estate
  "re.hero.title1": { ar: "حلول الذكاء الاصطناعي", en: "AI Solutions" },
  "re.hero.title2": { ar: "لقطاع العقارات", en: "for the Real Estate Sector" },
  "re.hero.subtitle": { ar: "نظام متكامل لتحسين العمليات الداخلية في شركات العقارات باستخدام الذكاء الاصطناعي وسير العمل الذكي.", en: "An end-to-end system to improve internal operations in real estate companies using AI and smart workflows." },
  "re.features.subtitle": { ar: "حلول شاملة لإدارة وتحسين عمليات البيع في قطاع العقارات.", en: "Comprehensive solutions to manage and improve sales operations in real estate." },
  "re.f1.title": { ar: "تتبع العملاء المحتملين", en: "Lead Tracking" },
  "re.f1.desc": { ar: "نظام متقدم لتتبع وإدارة العملاء المحتملين بكفاءة مع تحليلات ذكية.", en: "An advanced system to track and manage leads efficiently with smart analytics." },
  "re.f2.title": { ar: "البيع عبر الواتساب", en: "Selling via WhatsApp" },
  "re.f2.desc": { ar: "ممارسات بيع صحيحة عبر الواتساب مع أتمتة ذكية للردود والمتابعة.", en: "Proper sales practices through WhatsApp with smart automation for responses and follow-ups." },
  "re.f3.title": { ar: "حملات البريد الإلكتروني", en: "Email Campaigns" },
  "re.f3.desc": { ar: "إدارة احترافية لحملات البريد الإلكتروني مع تخصيص ذكي للرسائل.", en: "Professional email campaign management with intelligent message personalization." },
  "re.f4.title": { ar: "متابعة احترافية", en: "Professional Follow-up" },
  "re.f4.desc": { ar: "نظام متابعة احترافي يضمن عدم تفويت أي فرصة بيع.", en: "A professional follow-up system that ensures no sales opportunity is missed." },
  "re.f5.title": { ar: "فلترة العملاء", en: "Lead Filtering" },
  "re.f5.desc": { ar: "تصنيف وفلترة العملاء بذكاء حسب الاهتمام والقدرة الشرائية.", en: "Smart classification and filtering of leads based on interest and purchasing power." },
  "re.f6.title": { ar: "خبرات التقفيل", en: "Closing Expertise" },
  "re.f6.desc": { ar: "الاستفادة من أفضل الممارسات وتقنيات التقفيل المثبتة لرفع معدلات التحويل.", en: "Leverage best practices and proven closing techniques to boost conversion rates." },
  "re.how.title": { ar: "كيف يعمل النظام", en: "How the System Works" },
  "re.s1.title": { ar: "تتبع العملاء المحتملين", en: "Lead Tracking" },
  "re.s1.desc": { ar: "يُسجّل ويُتتبَّع كل عميل محتمل تلقائيًا من مصادر متعددة (الموقع، الواتساب، المكالمات) مع تصنيف ذكي حسب مستوى الاهتمام.", en: "Every lead is recorded and tracked automatically from multiple sources (website, WhatsApp, calls) with smart classification by interest level." },
  "re.s2.title": { ar: "تواصل ذكي", en: "Smart Communication" },
  "re.s2.desc": { ar: "إرسال رسائل مخصصة عبر الواتساب والبريد بناءً على سلوك واهتمام كل عميل، مع اقتراحات محتوى ذكية.", en: "Send personalized messages via WhatsApp and email based on each client's behavior and interests, with smart content suggestions." },
  "re.s3.title": { ar: "المتابعة والتقفيل", en: "Follow-up & Closing" },
  "re.s3.desc": { ar: "نظام متابعة احترافي مع تذكيرات ذكية وخطط عمل موصى بها لكل عميل، باستخدام أفضل ممارسات التقفيل لرفع معدلات النجاح.", en: "A professional follow-up system with smart reminders and recommended action plans per client, using proven closing best practices to lift success rates." },

  // Services page
  "sv.hero.title1": { ar: "حلول الذكاء الاصطناعي", en: "AI Solutions" },
  "sv.hero.title2": { ar: "لقطاع الخدمات", en: "for the Services Sector" },
  "sv.hero.subtitle": { ar: "نظام متكامل لتحسين العمل الداخلي في شركات الخدمات من خلال الذكاء الاصطناعي والبيع B2B وإدارة قمع المبيعات باحترافية.", en: "An end-to-end system to improve internal operations in service companies through AI, B2B sales, and professional funnel management." },
  "sv.features.subtitle": { ar: "حلول شاملة لإدارة وتنمية عمليات البيع B2B في قطاع الخدمات.", en: "Comprehensive solutions to manage and grow B2B sales operations in services." },
  "sv.f1.title": { ar: "إدارة عملاء B2B", en: "B2B Client Management" },
  "sv.f1.desc": { ar: "نظام CRM متقدم مخصص لقطاع B2B مع تحليلات ذكية.", en: "An advanced CRM tailored for B2B with smart analytics." },
  "sv.f2.title": { ar: "تصميم قمع المبيعات", en: "Sales Funnel Design" },
  "sv.f2.desc": { ar: "تصميم وإدارة قمع المبيعات باحترافية مع تتبع دقيق لكل مرحلة.", en: "Build and manage your sales funnel professionally with precise stage-by-stage tracking." },
  "sv.f3.title": { ar: "حملات تسويق ذكية", en: "Smart Marketing Campaigns" },
  "sv.f3.desc": { ar: "حملات بريد وواتساب مخصصة تلقائيًا لكل مرحلة من مراحل قمع العميل.", en: "Email and WhatsApp campaigns automatically tailored to each client's funnel stage." },
  "sv.f4.title": { ar: "تحليلات متقدمة", en: "Advanced Analytics" },
  "sv.f4.desc": { ar: "تقارير وتحليلات شاملة لقياس الأداء وتحسين معدل التحويل.", en: "Comprehensive reporting and analytics to measure performance and improve conversion." },
  "sv.f5.title": { ar: "أتمتة سير العمل", en: "Workflow Automation" },
  "sv.f5.desc": { ar: "أتمتة كاملة لسير العمل من الاستفسار الأولي حتى إغلاق الصفقة.", en: "Full workflow automation from initial inquiry to closed deal." },
  "sv.f6.title": { ar: "إدارة العروض", en: "Proposal Management" },
  "sv.f6.desc": { ar: "إنشاء وإرسال عروض احترافية مخصصة مع متابعة تلقائية.", en: "Create and send tailored professional proposals with automatic follow-up." },
  "sv.funnel.title": { ar: "مراحل قمع المبيعات", en: "Sales Funnel Stages" },
  "sv.s1.title": { ar: "توليد العملاء المحتملين", en: "Lead Generation" },
  "sv.s1.desc": { ar: "جذب العملاء المحتملين من مصادر متعددة وتصنيفهم تلقائيًا حسب الاهتمام والجاهزية للشراء، باستخدام الذكاء الاصطناعي لتقييم جودة كل عميل.", en: "Attract leads from multiple sources and classify them automatically by interest and buying readiness, using AI to score each lead's quality." },
  "sv.s2.title": { ar: "التفاعل والتأهيل", en: "Engagement & Qualification" },
  "sv.s2.desc": { ar: "تواصل ذكي مخصص عبر القنوات المناسبة (واتساب، بريد، مكالمات) بمحتوى مفصّل حسب احتياج كل عميل ومرحلته في رحلة الشراء.", en: "Smart, personalized communication across the right channels (WhatsApp, email, calls) with content tailored to each client's needs and stage in the buying journey." },
  "sv.s3.title": { ar: "التحويل والإغلاق", en: "Conversion & Closing" },
  "sv.s3.desc": { ar: "تقديم عروض احترافية مخصصة، متابعة ذكية بتذكيرات تلقائية، وتطبيق أفضل ممارسات B2B لإغلاق الصفقات بنجاح.", en: "Deliver tailored professional proposals, follow up intelligently with automated reminders, and apply B2B best practices to close deals successfully." },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (saved === "en" || saved === "ar") ? saved : "ar";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("lang", lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
