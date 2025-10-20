import { MapPin, Phone, Clock } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="location" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Visit us
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Santa Monica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  1709 Pico Blvd<br />
                  Santa Monica, CA 90405
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <a
                  href="tel:+13103102211"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (310) 310-2211
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-foreground">11:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0779845647747!2d-118.48168!3d34.01825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bad1a91c55bd%3A0x4a88ffb6a9da4e8f!2s1709%20Pico%20Blvd%2C%20Santa%20Monica%2C%20CA%2090405!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr T House Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
