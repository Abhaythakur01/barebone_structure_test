import { Download, Bed, Square } from 'lucide-react';

export default function Configurations() {
  const configurations = [
    { type: '', size: '' },
    { type: '', size: '' },
    { type: '', size: '' },
  ];

  return (
    <section id="configurations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Configurations & Floor Plans</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {configurations.map((config, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="bg-gray-300 h-64"></div>

              <div className="p-6 space-y-4">
                <div className="h-8 bg-gray-200 w-2/3"></div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="text-blue-600" size={20} />
                    <div className="h-6 bg-gray-200 w-16"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="text-blue-600" size={20} />
                    <div className="h-6 bg-gray-200 w-20"></div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold">
                  <Download size={18} />
                  <span>Download Floor Plan</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
