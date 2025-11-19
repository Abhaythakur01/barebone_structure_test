import { Award, Building, Users, Target } from 'lucide-react';

export default function Developer() {
  const achievements = [
    { icon: Building, value: '', label: '' },
    { icon: Users, value: '', label: '' },
    { icon: Award, value: '', label: '' },
    { icon: Target, value: '', label: '' },
  ];

  return (
    <section id="developer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Developer</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 h-96 rounded-lg"></div>

          <div className="space-y-6">
            <div className="h-8 bg-gray-200 w-3/4"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-5/6"></div>
            <div className="h-6 bg-gray-200 w-full"></div>
            <div className="h-6 bg-gray-200 w-4/5"></div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <achievement.icon className="text-blue-600 mx-auto mb-3" size={40} />
                  <div className="h-8 bg-gray-200 w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-100 w-2/3 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
