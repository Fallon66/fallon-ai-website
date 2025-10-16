import { Phone, Map, Rocket } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Phone,
      number: '1',
      title: 'Discovery Call',
      description: 'Free 30-min chat about your biggest bottlenecks and what AI can solve.',
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
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Simple, fast, and designed around your actual life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-1 bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-fallon-lavender/10 rounded-2xl p-8 border-2 border-gray-100 hover:border-fallon-lavender hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-fallon-teal to-fallon-lavender rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>

                <div className="mt-8 flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-fallon-coral/20 to-fallon-lavender/20 rounded-2xl flex items-center justify-center">
                    <Icon size={40} className="text-fallon-teal" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
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
