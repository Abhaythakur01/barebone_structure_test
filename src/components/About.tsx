import { Building2, MapPin, Users, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Building2, label: '' },
    { icon: MapPin, label: '' },
    { icon: Users, label: '' },
    { icon: Award, label: '' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Project</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-5/6"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-4/5"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-3/4"></div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 w-3/4"></div>
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
