import { Mail, Briefcase, Zap, Brain } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'From 3,500+ unread emails to inbox zero in 5 days. No more drowning.',
    },
    {
      icon: Briefcase,
      title: 'LinkedIn Magic',
      description: 'Post consistently, engage strategically, build your personal brand without the overwhelm.',
    },
    {
      icon: Zap,
      title: 'AI Superpowers',
      description: 'From AI-curious to AI-powered. Custom tools that actually save you hours every week.',
    },
    {
      icon: Brain,
      title: 'Brain Organization',
      description: 'Capture everything, find anything, never lose another brilliant idea again.',
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
                className="group bg-gradient-to-br from-white to-fallon-teal/5 border-2 border-gray-100 rounded-2xl p-8 hover:border-fallon-teal transition-all duration-300 relative"
                style={{
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(125, 211, 192, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="bg-gradient-to-br from-fallon-teal to-fallon-lavender text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
                  <Icon size={32} />
                  <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity animate-pulse-glow"></div>
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

        <div className="mt-16 text-center">
          <button className="bg-fallon-teal text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-2xl hover:scale-105 transform">
            Let's Talk About Your Biggest Time-Drain
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
