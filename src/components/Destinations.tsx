import { MapPin } from 'lucide-react';
import { useState } from 'react';
import Gallery from './Gallery';

export default function Destinations() {
  const destinations = [
    {
      name: "Baghdad",
      description: "The historic capital blending ancient heritage with modern life. Explore the National Museum and vibrant markets.",
      image: "/imges/baghdad.jpg",
      highlights: [
        {
          name: "National Museum",
          details: "The National Museum of Iraq in Baghdad carries a different kind of gravity—like a vault holding the memories of the very first chapters of human civilization."
        },
        {
          name: "Mutanabbi Street",
          details: "Mutanabbi Street in Baghdad feels like a living artery made of ink and voices. It's the place where books spill out onto sidewalks, where the smell of old paper mingles with coffee."
        },
        {
          name: "Al-Shaheed Monument",
          details: "Al-Shaheed Monument in Baghdad rises from the ground like a quiet blue miracle—two halves of a giant shell poised in a gentle, almost contemplative separation."
        }
      ]
    },
    {
      name: "Babylon",
      description: "Walk through the legendary ancient city, home to the Hanging Gardens and Ishtar Gate.",
      image: "/imges/babylon.jpg",
      highlights: [
        {
          name: "Ishtar Gate",
          details: "The Ishtar Gate, the Hanging Gardens, and the ancient ruins of Babylon form a kind of archaeological constellation—three points where history blends with imagination."
        },
        {
          name: "Hanging Gardens Site",
          details: "The Hanging Gardens are a more mysterious story. No one knows their exact location, or even whether they existed in the dramatic form described by Greek writers."
        },
        {
          name: "Ancient Ruins",
          details: "The ruins of Babylon feel like a book with half its pages missing. You can walk through the outlines of streets, temple foundations, palace walls, and ancient ramparts."
        }
      ]
    },
    {
      name: "Erbil",
      description: "One of the oldest continuously inhabited cities in the world with a magnificent citadel.",
      image: "/imges/erbil.jpg",
      highlights: [
        {
          name: "Erbil Citadel",
          details: "The Erbil Citadel is considered one of the oldest continuously inhabited sites in the world, with a history of human occupation dating back over 6,000 years."
        },
        {
          name: "Kurdish Culture",
          details: "Kurdish culture is a diverse tapestry of traditions that includes rich literature, music, and dance, alongside distinct regional clothing styles and a varied cuisine."
        },
        {
          name: "Modern Bazaars",
          details: "In Erbil, \"modern bazaars\" can refer to a mix of new, internationally-inspired retail complexes and modern interpretations of traditional-style markets."
        }
      ]
    },
    {
      name: "Ur",
      description: "Birthplace of Abraham and site of the ancient Ziggurat, dating back to 2100 BCE.",
      image: "/imges/ur.webp",
      highlights: [
        {
          name: "Great Ziggurat",
          details: "The Great Ziggurat in Iraq, formally known as the Ziggurat of Ur (or the Great Ziggurat of Ur), is one of the best-preserved and most impressive structures from ancient Mesopotamia."
        },
        {
          name: "Royal Tombs",
          details: "The Royal Tombs of Ur refer to the rich and significant burials of the Sumerian elite in the ancient city of Ur, in modern-day Dhi Qar Province, southern Iraq."
        },
        {
          name: "Ancient City",
          details: "Ur was a pivotal ancient Sumerian city-state in Mesopotamia (modern Iraq), situated near the Persian Gulf on the Euphrates River, serving as the capital of the Sumerian Empire."
        }
      ]
    },
    {
      name: "Najaf & Karbala",
      description: "Sacred cities with stunning Islamic architecture and deep spiritual significance.",
      image: "/imges/najaf.jpg",
      highlights: [
        {
          name: "Imam Ali Shrine",
          details: "The Imam Ali Shrine is one of the holiest sites in Shia Islam, located in the city of Najaf."
        },
        {
          name: "Hussain Shrine",
          details: "The Imam Husayn Shrine is the mausoleum of Husayn ibn Ali, located in the city of Karbala, Iraq. It is one of the most revered places in the world for Shia Muslims."
        },
        {
          name: "Islamic Architecture",
          details: "The major shrines in Najaf (Imam Ali) and Karbala (Imam Husayn and Al-Abbas) are prime examples of monumental Shi'a Islamic architecture."
        }
      ]
    },
    {
      name: "Marshlands",
      description: "The Mesopotamian Marshes, a UNESCO site where ancient water culture still thrives.",
      image: "/imges/Marshlands.jpg",
      highlights: [
        {
          name: "Traditional Villages",
          details: "The most distinctive structure is the Mudhif (Guest House), but the villages consist of several types of reed buildings."
        },
        {
          name: "Wildlife",
          details: "The Iraqi Marshlands (or Mesopotamian Marshes) are one of the world's most critical wetland ecosystems, often referred to as the \"Garden of Eden.\""
        },
        {
          name: "Boat Tours",
          details: "The Mesopotamian Marshes are a UNESCO World Heritage site and boat tours are the primary way to experience this vast wetland ecosystem."
        }
      ]
    }
  ];

  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  return (
    <section id="destinations" className="py-24 px-4 bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-teal-600 font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Discover Iraq</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Must-Visit Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From ancient Mesopotamian ruins to sacred pilgrimage sites, explore destinations that shaped human civilization
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="break-inside-avoid group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredDestination(destination.name)}
              onMouseLeave={() => setHoveredDestination(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-teal-300" />
                    {destination.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-4">
                  <p className="font-semibold text-gray-800 uppercase tracking-wider">Highlights</p>
                  {destination.highlights.map((highlight) => (
                    <div key={highlight.name} className="relative overflow-hidden">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-semibold text-teal-700">{highlight.name}</p>
                      </div>
                      <div 
                        className={`transition-all duration-300 ease-in-out pl-5 ${hoveredDestination === destination.name ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-sm text-gray-600 leading-snug">{highlight.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
