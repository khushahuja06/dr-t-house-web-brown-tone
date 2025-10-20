import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-display font-semibold mb-4">
              Dr T House
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Santa Monica's premier Taiwanese bubble tea destination. 
              Premium ingredients, exceptional service, vibrant community.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>1709 Pico Blvd<br />Santa Monica, CA 90405</p>
              <p>(310) 310-2211</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr T House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
