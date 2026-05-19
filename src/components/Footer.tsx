const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Arab AI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced AI solutions for Saudi businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="/#results" className="text-muted-foreground hover:text-primary transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="/#team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Jeddah, Saudi Arabia</li>
              <li>
                <a
                  href="https://wa.me/966549793708"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +966 54 979 3708
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arab.ai"
                  className="hover:text-primary transition-colors"
                >
                  info@arab.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p>© 2024 Arab AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
