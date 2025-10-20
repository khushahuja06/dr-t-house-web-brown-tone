import { Heart, Users, Leaf, Globe, Award, Sparkles } from "lucide-react";
import interiorImage from "@/assets/hero-3.jpg";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "Our shop features merchandise from local artists, interactive games, and our unique spin-the-wheel promotion that makes every visit special.",
  },
  {
    icon: Users,
    title: "Exceptional Service",
    description:
      "Our friendly staff creates a welcoming atmosphere where every customer feels at home. We're known for genuine connections and exceptional hospitality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to our planet with compostable containers, plastic-free packaging, and reusable tableware. We make it easy to enjoy great drinks responsibly.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <img
              src={interiorImage}
              alt="Dr T House interior - cozy bubble tea shop in Santa Monica"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <p className="text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 leading-tight">
              Taiwanese-Inspired Bubble Tea in Santa Monica
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dr T House, located in Santa Monica, CA, is a trendy Taiwanese bubble tea and juice bar known for 
                its exceptional customer service and delicious drinks.
              </p>
              <p>
                The shop features a cute interior with merchandise from local artists, showcasing a love for 
                community support. We offer interactive games and a unique spin-the-wheel promotion. We're committed 
                to sustainability with compostable containers, plastic-free packaging, and reusable tableware.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - Now 2 rows of 3 */}
        <div>
          <h3 className="text-3xl font-display font-semibold text-center mb-12">What We Stand For</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="text-center p-8 rounded-lg bg-card border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
