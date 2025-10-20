import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-boba-cup.png";
import heroImage2 from "@/assets/hero-lineup.png";
import heroImage3 from "@/assets/hero-interior.png";

const images = [heroImage1, heroImage2, heroImage3];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Dr T House ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-6 leading-[1.1] tracking-tight">
              Welcome to Dr T House!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
              Taiwanese bubble tea, popcorn chicken, and Santa Monica charm
            </p>
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-base font-medium shadow-md transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/40 w-1"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
