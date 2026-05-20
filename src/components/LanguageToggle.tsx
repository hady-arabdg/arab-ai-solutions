import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 hover:border-primary/60 hover:bg-card transition-all shadow-lg text-sm font-semibold text-foreground"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4 text-primary" />
      <span>{t("lang.toggle")}</span>
    </button>
  );
};

export default LanguageToggle;
