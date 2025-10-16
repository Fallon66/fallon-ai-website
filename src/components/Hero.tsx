export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fallon-teal/10 via-white to-fallon-lavender/10 overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🐙</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float-delayed">🐙</div>
        <div className="absolute bottom-32 left-1/4 text-4xl opacity-10 animate-float-slow">🐙</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Stop drowning in busywork.{' '}
          <span className="bg-gradient-to-r from-fallon-teal to-fallon-lavender bg-clip-text text-transparent">
            Start living.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          200+ emails to inbox zero. LinkedIn ghost to thought leader. Chaos to clarity.{' '}
          <span className="font-semibold text-fallon-teal">
            Get your life back in 5 days with AI that actually works.
          </span>
        </p>

        <button className="bg-fallon-teal text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-2xl hover:scale-105 transform">
          Book Discovery Call
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
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
      `}</style>
    </section>
  );
}
