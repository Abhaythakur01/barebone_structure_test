import { Dumbbell, Waves, Trees, CarFront, Shield, Gamepad2, HeartPulse, Baby } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: Dumbbell, label: '' },
    { icon: Waves, label: '' },
    { icon: Trees, label: '' },
    { icon: CarFront, label: '' },
    { icon: Shield, label: '' },
    { icon: Gamepad2, label: '' },
    { icon: HeartPulse, label: '' },
    { icon: Baby, label: '' },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Amenities</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="text-blue-600" size={32} />
              </div>
              <div className="h-6 bg-gray-200 w-3/4 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
