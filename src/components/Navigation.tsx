import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          <Link to="/" className="cursor-pointer">
            <img src="/logo.png" alt="Fallon AI" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto max-w-md" />
          </Link>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold"
                >
                  FAQ
                </button>
              </>
            ) : (
              <Link to="/" className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold">
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold"
            >
              About
            </Link>
            {/* <Link
              to="/blog"
              className="text-xl text-gray-900 hover:text-fallon-teal transition-colors font-bold"
            >
              Blog
            </Link> */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-fallon-teal to-fallon-coral text-white px-10 py-3.5 rounded-lg text-xl font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
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
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
                >
                  FAQ
                </button>
              </>
            ) : (
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
            >
              About
            </Link>
            {/* <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-fallon-teal hover:bg-opacity-10 rounded-lg transition-colors font-semibold"
            >
              Blog
            </Link> */}
            <button
              onClick={() => {
                setIsBookingOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-fallon-teal to-fallon-coral text-white px-6 py-3 rounded-lg text-lg font-bold hover:shadow-2xl transition-all duration-300"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </nav>
  );
}
