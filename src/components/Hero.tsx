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
        {/* CRO: Outcome-focused headline with specific benefit */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
          Get 5+ Hours Back <span className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral bg-clip-text text-transparent animate-gradient-text">Every Week</span>
        </h1>

        {/* CRO: Specific value proposition with clarity on what's different */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          Custom AI systems for overwhelmed founders and businesses drowning in repetitive tasks.
          {' '}
          <span className="block mt-3 sm:mt-4 font-semibold text-fallon-teal text-xl sm:text-2xl md:text-3xl">
            8-figure co-founder (exited 2020), Fractional CMO/COO, AI since 2015. Designed for neurodivergent brains, works for everyone.
          </span>
        </p>

        {/* CRO: Clear primary and secondary CTAs, mobile-optimized button sizes (min 44px height) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto bg-gradient-to-r from-fallon-teal to-fallon-lavender text-white px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 animate-pulse-subtle hover:from-fallon-teal/90 hover:to-fallon-lavender/90 active:scale-95"
            style={{ minHeight: '56px' }}
          >
            Book Free 30-Min Discovery Call →
          </button>

          <a
            href="#newsletter"
            className="w-full sm:w-auto border-2 border-fallon-teal text-fallon-teal px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl font-bold hover:bg-fallon-teal hover:text-white hover:shadow-lg transform transition-all duration-300 active:scale-95"
            style={{ minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Join Pilot Waitlist
          </a>
        </div>

        {/* CRO: Trust signals with specific proof */}
        <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium">
          Free 30-minute call + custom AI roadmap. No charge while I prove this works.
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          🔒 No commitment. No pressure. Just honest conversation about what you need.
        </p>

        {/* CRO: Social proof badge */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
            📈 Building in Public on LinkedIn
          </span>
          <span className="inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
            ⭐ Open Source on GitHub
          </span>
        </div>
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
