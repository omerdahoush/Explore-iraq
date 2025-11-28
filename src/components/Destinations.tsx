import { MapPin } from 'lucide-react';

export default function Destinations() {
  const destinations = [
    {
      name: "Baghdad",
      description: "The historic capital blending ancient heritage with modern life. Explore the National Museum and vibrant markets.",
      highlights: ["National Museum", "Mutanabbi Street", "Al-Shaheed Monument"]
    },
    {
      name: "Babylon",
      description: "Walk through the legendary ancient city, home to the Hanging Gardens and Ishtar Gate.",
      highlights: ["Ishtar Gate", "Hanging Gardens Site", "Ancient Ruins"]
    },
    {
      name: "Erbil",
      description: "One of the oldest continuously inhabited cities in the world with a magnificent citadel.",
      highlights: ["Erbil Citadel", "Kurdish Culture", "Modern Bazaars"]
    },
    {
      name: "Ur",
      description: "Birthplace of Abraham and site of the ancient Ziggurat, dating back to 2100 BCE.",
      highlights: ["Great Ziggurat", "Royal Tombs", "Ancient City"]
    },
    {
      name: "Najaf & Karbala",
      description: "Sacred cities with stunning Islamic architecture and deep spiritual significance.",
      highlights: ["Imam Ali Shrine", "Hussain Shrine", "Islamic Architecture"]
    },
    {
      name: "Marshlands",
      description: "The Mesopotamian Marshes, a UNESCO site where ancient water culture still thrives.",
      highlights: ["Traditional Villages", "Wildlife", "Boat Tours"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Must-Visit Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ancient ruins to sacred cities, Iraq offers unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {destination.name}
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {destination.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900">Highlights:</p>
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
