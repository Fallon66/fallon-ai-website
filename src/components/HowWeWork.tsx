import { Phone, Map, Rocket } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Phone,
      number: '1',
      title: '30-Minute Discovery Call',
      description: 'Free 30-60 minute chat about your biggest time-drains and what AI can solve.',
    },
    {
      icon: Map,
      number: '2',
      title: 'Custom Solution',
      description: 'Your personalized AI roadmap. No fluff, just what you actually need.',
    },
    {
      icon: Rocket,
      number: '3',
      title: 'Launch',
      description: '5-day transformation. We build it, test it, and teach you to use it.',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
          How We Work
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          Simple, fast, and designed around your actual life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-white to-fallon-lavender/10 rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-fallon-lavender hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white font-bold shadow-2xl z-20"
                    style={{
                      width: '80px',
                      height: '80px',
                      fontSize: '48px',
                      background: 'linear-gradient(135deg, #7DD3C0 0%, #C5B9E0 100%)',
                      borderRadius: '50%',
                    }}
                  >
                    {step.number}
                  </div>

                  <div className="mt-12 flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-fallon-coral/20 to-fallon-lavender/20 rounded-2xl flex items-center justify-center">
                      <Icon size={40} className="text-fallon-teal" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
