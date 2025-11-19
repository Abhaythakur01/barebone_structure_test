import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-32 h-12 bg-gray-200">
              <p>Logo</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-gray-900 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#amenities" className="text-gray-700 hover:text-gray-900 transition">Amenities</a>
            <a href="#configurations" className="text-gray-700 hover:text-gray-900 transition">Floor Plans</a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900 transition">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-gray-900 transition">Location</a>
            <a href="#developer" className="text-gray-700 hover:text-gray-900 transition">Developer</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
          </nav>

          <button className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            <Download size={18} />
            <span>Download Brochure</span>
          </button>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a href="#hero" className="text-gray-700 hover:text-gray-900 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#amenities" className="text-gray-700 hover:text-gray-900 transition">Amenities</a>
            <a href="#configurations" className="text-gray-700 hover:text-gray-900 transition">Floor Plans</a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900 transition">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-gray-900 transition">Location</a>
            <a href="#developer" className="text-gray-700 hover:text-gray-900 transition">Developer</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              <Download size={18} />
              <span>Download Brochure</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
