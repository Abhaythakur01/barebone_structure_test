import { Image as ImageIcon, Video } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('images');

  const images = Array(6).fill(null);
  const videos = Array(3).fill(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-md font-semibold transition ${
              activeTab === 'images'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ImageIcon size={20} />
            <span>Images</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-md font-semibold transition ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Video size={20} />
            <span>Videos</span>
          </button>
        </div>

        {activeTab === 'images' && (
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 h-64 rounded-lg hover:opacity-80 transition cursor-pointer"
              ></div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 h-64 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center justify-center"
              >
                <Video className="text-gray-500" size={48} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
