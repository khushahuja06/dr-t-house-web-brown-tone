import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Flame, Star } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: "Popular" | "Signature" | "New";
  dietary?: string[];
}

const menuData: Record<string, MenuItem[]> = {
  "Milk Tea": [
    {
      name: "Brown Sugar Boba Milk",
      description: "Our signature drink and most popular! Made with the highest quality brown sugar, this sweet and creamy delight already includes boba pearls for the ultimate experience.",
      price: "$6.95",
      badge: "Signature"
    },
    {
      name: "Thai Milk Tea",
      description: "The classic you know and love. Deliciously sweet and authentic, brewed extra long for a pleasant earthy punch. Our Thai tea is shipped straight from Bangkok, Thailand.",
      price: "$5.95",
      badge: "Popular"
    },
    {
      name: "Taro Milk Tea",
      description: "Our non-caffeinated favorite! Taro root creates a delicious candy-cake like taste that's super creamy. A boba staple and one of our most popular drinks!",
      price: "$5.95",
      badge: "Popular",
      dietary: ["Caffeine-Free"]
    },
    {
      name: "Old Fashioned Milk Tea",
      description: "Our house tea, brewed alongside vanilla and coffee beans. Strong, flavorful, and perfect for classic boba cravings. Handpicked on our family tea farm in Taiwan by licensed specialists.",
      price: "$6.45"
    },
    {
      name: "Jasmine Green Milk Tea",
      description: "Our most popular tea! Delicate floral and fruity notes make this refreshingly light. Perfect for a hot summer day!",
      price: "$5.95"
    },
    {
      name: "Golden Oolong Milk Tea",
      description: "Roasted and toasty with hints of barley. This classic Japanese-style tea is handpicked on our family farm in Taiwan for a truly authentic experience.",
      price: "$6.45"
    },
    {
      name: "Build Your Own Milk Tea",
      description: "Create your perfect milk tea! Pick your tea (Oolong, Jasmine, Earl Grey), milk type, toppings, and add a twist with brown sugar or honey.",
      price: "$5.95"
    }
  ],
  "Fruit Tea": [
    {
      name: "Passionfruit Mango Tea",
      description: "Our most popular fruit tea! Deliciously refreshing passionfruit meets vibrant mango with fragrant jasmine tea for the perfect tropical combination.",
      price: "$6.95",
      badge: "Popular"
    },
    {
      name: "Peach Tea",
      description: "Soft heavenly peach puree blended with your choice of jasmine green, oolong, or black tea. Light, sweet, and aromatic.",
      price: "$6.45"
    },
    {
      name: "Grapefruit Tea",
      description: "A healthy and refreshing choice! Meticulously brewed oolong tea combined with extracted grapefruit juice for wonderful citric flavors.",
      price: "$6.95"
    },
    {
      name: "Build Your Own Fruit Tea",
      description: "You're the barista! Mix and match your favorite fruits and teas for a custom creation made just for you.",
      price: "$6.45"
    }
  ],
  "Pure Tea": [
    {
      name: "Jasmine Green Tea",
      description: "Our most popular pure tea! Delicate floral and fruity notes, refreshingly light. Perfect when you want pure, authentic tea.",
      price: "$5.45"
    },
    {
      name: "Old Fashion Black Tea",
      description: "Brewed alongside vanilla and coffee beans. Strong, flavorful, and handpicked on our family tea farm in Taiwan by licensed specialists.",
      price: "$5.95"
    },
    {
      name: "Golden Oolong Tea",
      description: "Roasted and toasty with hints of barley. The classic Japanese tea that's always a winner. Handpicked on our Taiwan family farm.",
      price: "$5.95"
    },
    {
      name: "Build Your Own Pure Tea",
      description: "Choose from our quality fresh brewed teas. Simple and pure: just tea, your preferred sweetness level, and any toppings you desire.",
      price: "$5.45"
    }
  ],
  "Specialty Drinks": [
    {
      name: "Strawberry Matcha Latte",
      description: "Authentic matcha imported straight from Japan, packed with antioxidants and whisked to perfection. Enhanced with delicious strawberry puree for a fruity, candy-like flavor.",
      price: "$7.45",
      badge: "Signature"
    },
    {
      name: "Açaí Berry Delicious",
      description: "Savor the essence of South America! Antioxidant-rich blend of açaí, strawberries, mangoes, and green tea. Luxurious, aromatic, and uniquely ours!",
      price: "$9.95",
      badge: "New"
    },
    {
      name: "Avocado Smoothie",
      description: "A deliciously creamy and filling shake that's surprisingly sweet. Our avocado meets pudding in a smooth, creamy harmony you'll fall in love with!",
      price: "$7.95"
    },
    {
      name: "Strawberry Banana Smoothie",
      description: "Strawberry and banana blended with milk and our delicious strawberry puree. A customer favorite!",
      price: "$8.45",
      badge: "Popular"
    },
    {
      name: "Oreo Shake",
      description: "Blended with creamy milk and Oreo cookies for the ultimate indulgent treat.",
      price: "$6.95"
    }
  ],
  "Smoothies & Shakes": [
    {
      name: "Taro Milk Smoothie",
      description: "Non-caffeinated! Our delicious candy-cake like taro blended into a creamy milkshake. Popular in Japan and Taiwan.",
      price: "$6.95",
      dietary: ["Caffeine-Free"]
    },
    {
      name: "Mango Smoothie",
      description: "Tangy, chunky mango blended with milk and mango puree. A wonderfully filling and delicious tropical treat.",
      price: "$7.95"
    },
    {
      name: "Thai Tea Smoothie with Cold Foam",
      description: "Non-caffeinated. The perfect tea-milky smoothie topped with silky cold foam for extra indulgence.",
      price: "$8.45",
      dietary: ["Caffeine-Free"]
    },
    {
      name: "Build Your Own Smoothie",
      description: "Create your custom smoothie blend! Choose your fruits, milk type, and make it exactly how you like it.",
      price: "$7.95"
    }
  ],
  "Coffee & Espresso": [
    {
      name: "Sicily Lemon Coffee",
      description: "Our signature espresso blend with mashed and extracted lemon. A delicious zing that's a must-try!",
      price: "$6.45",
      badge: "Signature"
    },
    {
      name: "Caffè Caramel",
      description: "Two espresso shots swirled with Ghirardelli caramel sauce. Sweet, rich, and delicious!",
      price: "$6.45"
    },
    {
      name: "Caffè Mocha",
      description: "Our signature espresso blend with rich organic cocoa powder for chocolate lovers.",
      price: "$5.95"
    },
    {
      name: "Caffè Latte",
      description: "Our signature espresso with milk. Sweet coffee goodness, served iced.",
      price: "$5.95"
    },
    {
      name: "Americano",
      description: "A double shot of our signature espresso topped with water and iced. Comes sweet or bitter to your preference.",
      price: "$4.95"
    }
  ],
  "Snacks & Treats": [
    {
      name: "Taipei Popcorn Chicken",
      description: "Crispy, golden, and irresistibly savory! Marinated in traditional spices and fried to perfection. The ultimate authentic snack from Taipei!",
      price: "$9.95",
      badge: "Popular"
    },
    {
      name: "Rocco's Keto Cheesecake",
      description: "Scrumptious cheesecake from expert Johnny Rocco, perfected over decades. 100% clean keto with ZERO sugar! Takes an hour to thaw for creamy delicious goodness.",
      price: "$10.95"
    },
    {
      name: "Rocco's Classic Cheesecake",
      description: "Authentically made by cheesecake expert Johnny Rocco with precision, mastery and love. Pick from different flavors! Takes an hour to thaw for perfect texture.",
      price: "$9.95"
    },
    {
      name: "Crispy French Fries",
      description: "Made fresh to order! Heavily seasoned and packed with flavor. Soft and fluffy inside, crispy outside. Perfect boba companion!",
      price: "$4.95"
    },
    {
      name: "Fresh Baked Gourmet Bagel",
      description: "Freshly baked wholesome bagel that will win your heart on the first bite. You'll never think of LA bagels the same!",
      price: "$3.45"
    },
    {
      name: "Pain Au Chocolat",
      description: "Generous bread roll croissant stuffed with rich bitter chocolate. Limited availability!",
      price: "$6.45"
    }
  ]
};

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Milk Tea");
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-foreground">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted drinks with premium ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <Badge 
                        variant={item.badge === "Signature" ? "default" : "secondary"}
                        className="flex items-center gap-1"
                      >
                        {item.badge === "Signature" && <Sparkles className="w-3 h-3" />}
                        {item.badge === "Popular" && <Flame className="w-3 h-3" />}
                        {item.badge === "New" && <Star className="w-3 h-3" />}
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-2 mb-2">
                      {item.dietary.map((diet) => (
                        <span key={diet} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-lg font-semibold text-primary ml-4 flex-shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customization Info */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
            Fully Customizable
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Customize every drink to your preference. Choose your ice level, sugar level, 
            size, and toppings including boba pearls, crystal boba, pudding, and more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-md">
              Ice Level
            </span>
            <span className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-md">
              Sugar Level
            </span>
            <span className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-md">
              Toppings
            </span>
            <span className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-md">
              Size Options
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
