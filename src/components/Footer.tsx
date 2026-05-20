import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("footer.brand")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.quick")}</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.sectors")}</a></li>
              <li><a href="/#results" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.results")}</a></li>
              <li><a href="/#team" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.team")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t("footer.address")}</li>
              <li>
                <a href="https://wa.me/966549793708" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li>
                <a href="mailto:info@arab.ai" className="hover:text-primary transition-colors">info@arab.ai</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
