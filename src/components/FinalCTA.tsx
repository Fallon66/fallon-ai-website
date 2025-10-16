export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-fallon-teal via-fallon-lavender to-fallon-coral relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐙</div>
        <div className="absolute bottom-10 right-10 text-8xl">🐙</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">🐙</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          Ready to <span className="font-extrabold">stop drowning</span>?
        </h2>

        <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <span className="font-bold">One call.</span> <span className="font-bold">One week.</span> <span className="font-bold text-2xl md:text-3xl">Complete transformation.</span>
        </p>

        <button
          className="bg-white text-fallon-teal px-14 py-6 rounded-lg text-2xl font-bold hover:bg-gray-50 transition-all hover:shadow-2xl transform animate-pulse-button"
          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
          }}
        >
          Book Discovery Call
        </button>

        <p className="mt-8 text-white text-lg font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
          No commitment. No pressure. Just 30 minutes to see if we're a fit.
        </p>
      </div>

      <style>{`
        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 0 8px 20px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0.5);
          }
          50% {
            box-shadow: 0 8px 20px rgba(0,0,0,0.3), 0 0 0 10px rgba(255,255,255,0);
          }
        }
        .animate-pulse-button {
          animation: pulse-button 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
