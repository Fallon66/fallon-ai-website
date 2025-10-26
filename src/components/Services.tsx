import { Mail, Briefcase, Zap, Brain, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    // ROW 1: AVAILABLE NOW
    {
      icon: Mail,
      emoji: '💬',
      title: 'Free Discovery Call',
      subtitle: '30 minutes to pick my brain about your chaos',
      description: 'No roadmap. No pitch. Just an honest conversation about what AI could do for your specific workflow.',
      color: 'from-fallon-teal to-fallon-lavender',
      badge: null,
      cta: 'Book Free Call',
      ctaType: 'booking',
    },
    {
      icon: Brain,
      emoji: '🎯',
      title: 'Strategy Deep Dive',
      subtitle: 'Bespoke AI strategy for your business and budget',
      description: 'Deep analysis of your workflows, challenges, and opportunities. Custom AI roadmap tailored to your team size, budget, and goals. Skip the waitlist—start today.',
      color: 'from-fallon-lavender to-fallon-coral',
      badge: 'AVAILABLE NOW',
      badgeColor: 'bg-fallon-teal',
      cta: 'Enquire',
      ctaType: 'booking',
    },
    {
      icon: Zap,
      emoji: '🔥',
      title: 'Full Custom Build',
      subtitle: 'Hands-on AI systems built WITH you',
      description: '1-6 week projects. Advanced automation. I build it with you, not for you. For businesses ready to invest in transformation.',
      color: 'from-fallon-coral to-fallon-teal',
      badge: 'PREMIUM',
      badgeColor: 'bg-fallon-coral',
      cta: 'Enquire',
      ctaType: 'booking',
    },
    // ROW 2: COMING SOON / WAITLIST
    {
      icon: Briefcase,
      emoji: '🗺️',
      title: 'Quick Wins Pilot',
      subtitle: 'SOLD OUT in 24 hours! Next batch TBA',
      description: '1-hour discovery call + custom AI roadmap. Free while I test and refine. All 10 spots filled—join waitlist for next batch.',
      color: 'from-fallon-teal to-fallon-lavender',
      badge: 'SOLD OUT',
      badgeColor: 'bg-gray-800',
      cta: 'Join Waitlist',
      ctaType: 'waitlist',
    },
    {
      icon: Briefcase,
      emoji: '📦',
      title: 'AI Automation Templates',
      subtitle: 'Pre-built systems you can install yourself',
      description: 'Lead gen workflows • Email automation • Content systems • Video walkthroughs • Buy once, own forever',
      color: 'from-fallon-lavender to-fallon-coral',
      badge: 'COMING SOON',
      badgeColor: 'bg-fallon-lavender',
      cta: 'Join Waitlist',
      ctaType: 'waitlist',
    },
    {
      icon: Brain,
      emoji: '🎓',
      title: 'Group Academy',
      subtitle: 'Learn with others in a 6-week cohort',
      description: 'Live calls • Community support • Step-by-step system builds • Lifetime access to templates',
      color: 'from-fallon-coral to-fallon-teal',
      badge: 'COMING SOON',
      badgeColor: 'bg-fallon-lavender',
      cta: 'Join Waitlist',
      ctaType: 'waitlist',
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
            How We Can <span className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From free discovery calls to full custom builds. <span className="font-semibold text-gray-900">Start where it makes sense for your budget and needs.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden"
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
                  {/* Badge */}
                  {service.badge && (
                    <div className={`inline-block ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      {service.badge}
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className={`inline-block bg-gradient-to-br ${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-fallon-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  {service.ctaType === 'booking' ? (
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <span>{service.cta}</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <a
                      href="https://forms.gle/bzZKhWNCaG8xsL768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-105 transform transition-all duration-300 text-center`}
                    >
                      {service.cta}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-fallon-teal/10 via-fallon-lavender/10 to-fallon-coral/10 rounded-3xl p-12 text-center border-2 border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fallon-teal/5 to-fallon-coral/5 animate-gradient"></div>

          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not sure where to start? <span className="bg-gradient-to-r from-fallon-teal to-fallon-lavender bg-clip-text text-transparent">Book a free call.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              30 minutes to pick my brain. No pitch. Just honest conversation about what AI could actually do for your workflow.
            </p>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-fallon-teal to-fallon-lavender text-white px-12 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 animate-pulse-subtle inline-flex items-center space-x-3"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight size={24} />
            </button>

            <p className="mt-6 text-gray-600">
              🔒 No charge. No catch. Just 30 minutes of honest conversation.
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
