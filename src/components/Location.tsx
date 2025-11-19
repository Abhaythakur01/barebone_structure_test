import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Prime Location</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <MapPin className="text-gray-500" size={64} />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Connectivity</h3>
            <div className="space-y-4">
              {Array(5).fill(null).map((_, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Navigation className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 w-full mb-2"></div>
                    <div className="h-4 bg-gray-100 w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
