import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What's this free pilot program?",
      answer: "I'm testing AI automation systems with 10 real people before I charge for anything. You get a 1-hour call, custom recommendations, and an AI roadmap built for YOUR brain. I get feedback on what actually works. It's genuinely free - no catch, no upsell."
    },
    {
      question: "Why would you do this for free?",
      answer: "Because I'm not selling theory. I built these systems for myself (cleared 20k emails in 5 days, automated my entire workflow). Now I want to prove they work for others before I ask anyone to pay. Call it quality control."
    },
    {
      question: "I have ADHD. Will this actually work for my brain?",
      answer: "YES. I'm ADHD, autistic, and dyslexic. Every system I build is designed for neurodivergent brains first. Short steps, visual cues, zero overwhelm. If it doesn't work for me, I don't build it for you."
    },
    {
      question: "What happens after the pilot?",
      answer: "You keep everything we build. Forever. If I start charging for this service later, you'll get first dibs and pilot pricing. But there's zero obligation."
    },
    {
      question: "Do I need to be technical?",
      answer: "Not even a little. If you can use email and LinkedIn, you can use what I build. I handle the complexity. You just use it."
    },
    {
      question: "How do I know if I'm a fit?",
      answer: "If you're drowning in admin, know AI could help but don't know where to start, and you're willing to give honest feedback - you're a fit. Bonus points if you're neurodivergent (my specialty)."
    },
    {
      question: "What if I don't know what I need?",
      answer: "That's normal! Most people can't articulate 'I need automated email triage with 3-tier urgency flags.' They just know they're drowning. The discovery call helps me extract what's actually eating your time."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. I use paid Claude Pro (not free ChatGPT). Your data isn't used for training. For highly sensitive work, I can set up isolated private AI systems. But honestly? Most automation doesn't need your sensitive data at all."
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
            Honest answers about the free pilot program.
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
          <button className="bg-fallon-teal text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-2xl hover:scale-105 transform">
            Book Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
