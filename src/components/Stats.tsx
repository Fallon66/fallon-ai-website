export default function Stats() {
  const stats = [
    {
      value: '5',
      label: 'Days to Your First AI System',
      subtitle: 'From chaos to clarity, faster than you think',
      gradient: 'from-fallon-teal to-fallon-lavender',
      icon: '⚡',
    },
    {
      value: '100%',
      label: 'Built in Public',
      subtitle: 'Every step documented, transparent process',
      gradient: 'from-fallon-lavender to-fallon-coral',
      icon: '📖',
    },
    {
      value: '3+',
      label: 'Hours Saved Daily',
      subtitle: 'Time back for what actually matters',
      gradient: 'from-fallon-coral to-fallon-teal',
      icon: '⏰',
    },
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-fallon-teal/10 via-fallon-lavender/10 to-fallon-coral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Real Results, Real Fast
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl"
            >
              <div
                className={`font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}
                style={{ fontSize: 'clamp(60px, 15vw, 120px)', lineHeight: '1', textShadow: '0 4px 12px rgba(125, 211, 192, 0.3)' }}
              >
                {stat.value}
              </div>
              <div className="text-xl sm:text-2xl text-gray-900 font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-base sm:text-lg text-gray-600">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the entrepreneurs and executives who've already{' '}
            <span className="font-semibold text-fallon-teal">
              stopped drowning in busywork
            </span>
            {' '}and started focusing on what actually matters.
          </p>
        </div>
      </div>
    </section>
  );
}
