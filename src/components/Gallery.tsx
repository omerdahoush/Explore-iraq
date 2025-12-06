import { MapPin } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      title: 'Babylon',
      location: 'Babil Governorate, Iraq',
      description: 'The ancient city of Babylon, a major city of ancient Mesopotamia.',
      image: '/imges/babylon.jpg'
    },
    {
      title: 'Baghdad',
      location: 'Baghdad, Iraq',
      description: 'The capital of Iraq and one of the largest cities in the Arab world.',
      image: '/imges/baghdad.jpg'
    },
    {
      title: 'Erbil',
      location: 'Kurdistan Region, Iraq',
      description: 'The capital and most populated city in the Kurdistan Region of Iraq.',
      image: '/imges/erbil.jpg'
    },
    {
      title: 'Najaf',
      location: 'Najaf Governorate, Iraq',
      description: 'A city in central Iraq about 160 km south of Baghdad. It is the capital of Najaf Governorate.',
      image: '/imges/najaf.jpg'
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
