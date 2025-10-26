import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import BookingModal from './BookingModal';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "What does an AI strategist do?",
      answer: "An AI strategist analyzes your workflow, identifies automation opportunities, and creates custom solutions tailored to your business. Depending on your budget, I can give you the roadmap, tools, and guidance to build it yourself - or I can build it for you hands-on. It's a sliding scale based on what you need and can invest."
    },
    {
      question: "Why should I trust you over other AI consultants?",
      answer: "I co-founded an 8-figure e-commerce business (exited 2020), worked as Fractional CMO/COO, and have used AI since 2015. I think differently - outside the box, solving problems in ways other fractionals don't. My whole business exists because I wanted to help as many people as possible without the typical consultant price tag. Real business experience, not theory."
    },
    {
      question: "Do you work with corporate clients or just SMEs?",
      answer: "Both! I'm anti-corporate in values (no BS, honest pricing, scrappy thinking) but I work with C-suite executives and corporate teams who want a different approach. If you value transparency and results over buzzwords, we'll get along fine."
    },
    {
      question: "I'm neurodivergent (ADHD, autistic, dyslexic, etc.). Will this work for me?",
      answer: "YES. I'm neurodivergent too (ADHD, autistic, dyslexic). Every system I build is designed for neurodivergent brains first - but that means they work for EVERYONE. Short steps, visual cues, zero overwhelm. If it doesn't work for my brain, I don't build it."
    },
    {
      question: "Do I need to be technical?",
      answer: "Not even a little. If you can use email and LinkedIn, you can use what I build. I handle the complexity. You just use the system."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. I use paid Claude Pro (not free ChatGPT). Your data isn't used for training. For highly sensitive work, I can work with specialists to set up isolated private AI systems if needed. But honestly? Most automation doesn't need your sensitive data at all."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-fallon-teal/5 to-fallon-lavender/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You're Probably Wondering
          </h2>
          <p className="text-xl text-gray-600">
            Honest answers about working with me.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-fallon-teal shadow-lg bg-gradient-to-br from-white to-fallon-teal/5'
                  : 'border-gray-100 hover:border-fallon-teal/50 shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-fallon-teal/5 transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1 pr-4">
                  <HelpCircle
                    className={`flex-shrink-0 ${
                      openIndex === index ? 'text-fallon-teal' : 'text-gray-400'
                    }`}
                    size={24}
                  />
                  <span className="text-xl font-bold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-fallon-teal" size={28} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={28} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 pt-2 pl-16 animate-slideDown">
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <style>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}</style>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Still have questions? Let's talk.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-fallon-teal text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-2xl hover:scale-105 transform"
          >
            Book Discovery Call
          </button>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
