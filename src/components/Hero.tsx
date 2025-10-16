export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-fallon-teal/10 via-white to-fallon-lavender/10"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-fallon-teal/20 rounded-full blur-3xl animate-wave"></div>
          <div className="absolute top-1/3 right-20 w-96 h-96 bg-fallon-coral/20 rounded-full blur-3xl animate-wave-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-fallon-lavender/20 rounded-full blur-3xl animate-wave-slow"></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 text-5xl opacity-10 animate-float-subtle">🐙</div>
        <div className="absolute bottom-40 left-10 text-4xl opacity-10 animate-float-subtle-delayed">🐙</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Stop drowning in busywork.{' '}
          <span className="bg-gradient-to-r from-fallon-teal to-fallon-lavender bg-clip-text text-transparent">
            Start living.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          Thousands of unorganized emails to a system that actually works. Random AI experiments to real automation. Chaos to clarity.{' '}
          <span className="font-semibold text-fallon-teal">
            Get your life back in 5 days with AI that actually works.
          </span>
        </p>

        <button className="bg-fallon-teal text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-2xl hover:scale-105 transform">
          Book Discovery Call
        </button>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes wave-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }

        @keyframes wave-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); opacity: 0.1; }
          50% { transform: translateY(-15px); opacity: 0.15; }
        }

        @keyframes float-subtle-delayed {
          0%, 100% { transform: translateY(0px); opacity: 0.1; }
          50% { transform: translateY(-10px); opacity: 0.15; }
        }

        .animate-wave {
          animation: wave 20s ease-in-out infinite;
        }

        .animate-wave-delayed {
          animation: wave-delayed 25s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave-slow 30s ease-in-out infinite;
        }

        .animate-float-subtle {
          animation: float-subtle 8s ease-in-out infinite;
        }

        .animate-float-subtle-delayed {
          animation: float-subtle-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
