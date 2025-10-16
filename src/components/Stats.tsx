export default function Stats() {
  const stats = [
    {
      value: '99.5%',
      label: 'Email Gone',
      gradient: 'from-fallon-teal to-fallon-lavender',
    },
    {
      value: '57',
      label: 'Systems Built',
      gradient: 'from-fallon-coral to-fallon-teal',
    },
    {
      value: '5 Days',
      label: 'to Freedom',
      gradient: 'from-fallon-lavender to-fallon-coral',
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
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl text-gray-700 font-medium">
                {stat.label}
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
