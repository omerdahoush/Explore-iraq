import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-700 to-red-800">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <MapPin className="w-12 h-12" />
          <h1 className="text-6xl md:text-8xl font-bold">Explore Iraq</h1>
        </div>

        <p className="text-2xl md:text-3xl mb-8 text-center max-w-3xl font-light">
          Discover the Cradle of Civilization
        </p>

        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-100">
          Journey through ancient Mesopotamia, where history comes alive in every corner
        </p>

        <button className="bg-white text-orange-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
          Start Your Journey
        </button>
      </div>
    </div>
  );
}
