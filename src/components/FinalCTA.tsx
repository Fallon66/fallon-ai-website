export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-fallon-teal via-fallon-lavender to-fallon-coral relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐙</div>
        <div className="absolute bottom-10 right-10 text-8xl">🐙</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to stop drowning?
        </h2>

        <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
          One call. One week. Complete transformation.
        </p>

        <button className="bg-white text-fallon-teal px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 transform">
          Book Discovery Call
        </button>

        <p className="mt-8 text-white/80 text-lg">
          No commitment. No pressure. Just 30 minutes to see if we're a fit.
        </p>
      </div>
    </section>
  );
}
