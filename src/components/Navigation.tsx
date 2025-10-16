import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-3xl">🐙</span>
            <span className="text-xl md:text-2xl font-semibold text-gray-900">Fallon AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-fallon-teal transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-fallon-teal transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-fallon-teal transition-colors font-medium"
            >
              Results
            </button>
            <button className="bg-fallon-teal text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg">
              Book Discovery Call
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-medium"
            >
              Results
            </button>
            <button className="w-full bg-fallon-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
              Book Discovery Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
