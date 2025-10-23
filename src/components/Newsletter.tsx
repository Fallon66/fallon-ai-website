export default function Newsletter() {
  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-fallon-lavender/10 via-fallon-coral/10 to-fallon-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Want In? Join the Waitlist
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testing 10 free pilots right now. When the next round opens, you'll be first to know. Plus weekly AI tips that don't suck.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card-strong rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300">
          <a
            href="https://forms.gle/bzZKhWNCaG8xsL768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fallon-teal to-fallon-coral rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-fallon-teal/90 hover:to-fallon-coral/90 active:scale-95"
          >
            Join Waitlist
          </a>

          <p className="text-sm text-gray-500 mt-6">
            No spam. Unsubscribe anytime. Just humans + AI being honest.
          </p>
        </div>
      </div>
    </section>
  );
}
