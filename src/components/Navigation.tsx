import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <span className="text-2xl font-display font-medium tracking-wider text-foreground uppercase">DR T HOUSE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border pb-6 pt-4 space-y-1">
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4"
            >
              Reviews
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
