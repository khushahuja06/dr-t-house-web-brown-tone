import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Dezi L.",
    text: "Me and my mom came here on our way home after church. I have been wanting to come to this shop for a while after seeing it a few times, and I was very excited to finally try it! I ordered the thai milk tea and it was very good, my mom ordered the strawberry banana smoothie and she really liked it and it also looked really pretty! The customer service was amazing, Shawn was very friendly and helpful! The shop itself has a really cute interior and some merch from small artists which is always nice to see as an artist myself :) they clearly love their community and love supporting other people in their businesses as well! I highly recommend coming and checking it out!",
    rating: 5,
  },
  {
    name: "Israel D.",
    text: "Customer service, good vibes, boba, games etc etccc !!! Came here today and the worker was so incredibly nice! Helped me out with what I needed n more :). Boba was 5/5 thank you !",
    rating: 5,
  },
  {
    name: "Tanya",
    text: "Stopped by since I was in the area and I was pleasantly surprised! The popcorn chicken was crispy and I would recommend the chili and garlic sauce as it was the right amount of spice and paired nicely together with the chicken. The service here was great as the staff were so lovely. The environment was decorated nicely as well.",
    rating: 5,
  },
  {
    name: "Thomas W.",
    text: "I don't ever write reviews but I have had several very good conversations with the manager of Dr T House. He is genuinely kind and shows interest in my recent experiences and always has a lot of warmth. A large group of folks with me really enjoyed the different teas and I liked the cups they come in",
    rating: 5,
  },
  {
    name: "Sandy S.",
    text: "Finally came over here after being lured in by the holiday giveaway. Ordered the fruit teas and really enjoyed how clear it was to customize. As a person who tends to prefer less sweet beverages, this is huge. I'll have to try the keto cheesecake next time!",
    rating: 5,
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            What our customers say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl text-foreground mb-8 leading-relaxed font-light">
              "{reviews[currentIndex].text}"
            </p>
            <p className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
              {reviews[currentIndex].name}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-8" : "bg-border w-1.5"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
