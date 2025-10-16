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
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Simple, fast, and designed around your actual life.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 z-0">
            <div className="max-w-4xl mx-auto px-32 relative">
              <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#7DD3C0', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#C5B9E0', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFB4A2', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M 0,10 Q 25,5 50,10 T 100,10" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                <polygon points="98,8 100,10 98,12" fill="#FFB4A2" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-white to-fallon-lavender/10 rounded-2xl p-8 border-2 border-gray-100 hover:border-fallon-lavender hover:shadow-xl transition-all duration-300"
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
      </div>
    </section>
  );
}
