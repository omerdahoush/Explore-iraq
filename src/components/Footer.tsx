import { MapPin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Explore Iraq</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover the ancient wonders and rich cultural heritage of Mesopotamia
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Iraq</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Culture</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Travel Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@exploreiraq.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" />
                <span>www.exploreiraq.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Explore Iraq. Experience the Cradle of Civilization.</p>
        </div>
      </div>
    </footer>
  );
}
