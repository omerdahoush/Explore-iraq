import { MapPin } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      title: 'Babylon - Ishtar Gate',
      location: 'Southern Iraq',
      description: 'Ancient Mesopotamian gate with distinctive blue tiles',
      image: 'https://images.pexels.com/photos/11632711/pexels-photo-11632711.jpeg'
    },
    {
      title: 'Baghdad Skyline',
      location: 'Baghdad',
      description: 'Modern Baghdad along the Tigris River',
      image: 'https://images.pexels.com/photos/3355365/pexels-photo-3355365.jpeg'
    },
    {
      title: 'Marshlands',
      location: 'Southern Iraq',
      description: 'Traditional reed houses in the Mesopotamian Marshes',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
    },
    {
      title: 'Ancient Ruins',
      location: 'Ur',
      description: 'Archaeological remains of ancient Mesopotamian cities',
      image: 'https://images.pexels.com/photos/258363/pexels-photo-258363.jpeg'
    },
    {
      title: 'Desert Landscape',
      location: 'Western Iraq',
      description: 'Golden desert of Iraq under clear skies',
      image: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg'
    },
    {
      title: 'Traditional Bazaar',
      location: 'Baghdad',
      description: 'Vibrant traditional markets filled with local crafts',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual journey through Iraq's stunning landscapes and heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {image.title}
                </h3>
                <div className="flex items-center gap-2 text-orange-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{image.location}</span>
                </div>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
