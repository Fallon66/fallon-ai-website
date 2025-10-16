import { Mail, Briefcase, Zap, Brain } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Mail,
      title: 'Email Automation',
      description: "That inbox giving you anxiety? We'll tame it.",
    },
    {
      icon: Briefcase,
      title: 'LinkedIn Magic',
      description: 'Build your brand while you sleep. Really.',
    },
    {
      icon: Zap,
      title: 'AI Superpowers',
      description: 'Stop watching AI videos. Start using AI.',
    },
    {
      icon: Brain,
      title: 'Brain Organization',
      description: 'Your second brain, but it actually remembers everything.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          We'll Handle The Stuff You Hate
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Stop wasting time on tasks that drain your energy. Let AI handle the boring stuff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-fallon-teal/5 border-2 border-gray-100 rounded-2xl p-8 hover:border-fallon-teal hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-fallon-teal to-fallon-lavender text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
