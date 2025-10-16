import { Mail, Briefcase, Zap, Brain, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      icon: Mail,
      emoji: '📧',
      title: 'Email Automation',
      description: 'From 3,500+ unread emails to inbox zero in 5 days. No more drowning.',
      color: 'from-fallon-teal to-fallon-lavender',
      bgPattern: 'teal',
    },
    {
      icon: Briefcase,
      emoji: '💼',
      title: 'LinkedIn Magic',
      description: 'Post consistently, engage strategically, build your personal brand without the overwhelm.',
      color: 'from-fallon-lavender to-fallon-coral',
      bgPattern: 'lavender',
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'AI Superpowers',
      description: 'From AI-curious to AI-powered. Custom tools that actually save you hours every week.',
      color: 'from-fallon-coral to-fallon-teal',
      bgPattern: 'coral',
    },
    {
      icon: Brain,
      emoji: '🧠',
      title: 'Brain Organisation',
      description: 'Capture everything, find anything, never lose another brilliant idea again.',
      color: 'from-fallon-teal via-fallon-lavender to-fallon-coral',
      bgPattern: 'mixed',
    },
  ];

  return (
    <>
    <section id="services" className="py-24 bg-gradient-to-br from-white via-fallon-teal/5 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-fallon-coral/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-fallon-lavender/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            We'll Handle The Stuff <span className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral bg-clip-text text-transparent">You Hate</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Stop wasting time on tasks that drain your energy. <span className="font-semibold text-gray-900">Let AI handle the boring stuff.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(125, 211, 192, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8`}></div>

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className={`inline-block bg-gradient-to-br ${service.color} text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={40} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-fallon-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read more indicator */}
                  <div className="flex items-center text-fallon-teal font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-fallon-teal/10 via-fallon-lavender/10 to-fallon-coral/10 rounded-3xl p-12 text-center border-2 border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fallon-teal/5 to-fallon-coral/5 animate-gradient"></div>

          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Ready to reclaim <span className="bg-gradient-to-r from-fallon-teal to-fallon-lavender bg-clip-text text-transparent">3+ hours every day?</span>
            </p>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-fallon-teal to-fallon-lavender text-white px-12 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 animate-pulse-subtle inline-flex items-center space-x-3"
            >
              <span>Let's Talk About Your Biggest Time-Drain</span>
              <ArrowRight size={24} />
            </button>

            <p className="mt-6 text-gray-600">
              🔒 Free 30-minute discovery call • No commitment required
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-15px, 15px) scale(1.05); }
        }

        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(125, 211, 192, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(125, 211, 192, 0); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 5s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>

    <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
