import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fallon-teal/20 via-fallon-lavender/15 to-fallon-coral/20 animate-gradient"></div>

      {/* Animated Mesh Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blob top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-fallon-teal/30 to-fallon-lavender/30 rounded-full blur-3xl animate-blob"></div>

        {/* Medium blob bottom left */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-fallon-coral/30 to-fallon-teal/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Small blob top left */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-fallon-lavender/30 to-fallon-coral/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-fallon-teal/40 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-fallon-coral/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-fallon-lavender/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-fallon-teal/40 rounded-full animate-float-slow"></div>

        {/* Wavy Lines */}
        <svg className="absolute top-1/2 left-0 w-32 h-32 text-fallon-teal/20 animate-float" viewBox="0 0 100 100">
          <path d="M 0,50 Q 25,30 50,50 T 100,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-1/4 right-10 w-24 h-24 text-fallon-coral/20 animate-float-delayed" viewBox="0 0 100 100">
          <path d="M 0,50 Q 25,70 50,50 T 100,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
          Stop drowning in busywork. <span className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral bg-clip-text text-transparent animate-gradient-text">Start living.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          <span className="font-bold text-gray-900">Thousands of unorganised emails</span> to a system that actually works.
          <span className="font-bold text-gray-900"> Random AI experiments</span> to real automation.
          <span className="font-bold text-gray-900"> Chaos</span> to <span className="font-bold text-gray-900">clarity.</span>
          {' '}
          <span className="block mt-3 sm:mt-4 font-semibold text-fallon-teal text-xl sm:text-2xl md:text-3xl">
            AI automation that actually works for your brain.
          </span>
        </p>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-gradient-to-r from-fallon-teal to-fallon-lavender text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 animate-pulse-subtle"
        >
          Book Discovery Call →
        </button>

        {/* Trust Indicator */}
        <p className="mt-8 text-sm text-gray-600">
          🔒 No commitment. No pressure. Just 30 minutes to see if we're a fit.
        </p>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(5px); }
        }

        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(125, 211, 192, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(125, 211, 192, 0); }
        }

        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>

    <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
