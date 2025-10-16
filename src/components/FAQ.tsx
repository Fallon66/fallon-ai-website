import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What exactly happens in the 5 days?',
      answer: "Day 1: We audit your workflow and identify what's draining your time. Day 2-4: We build and test your custom AI systems. Day 5: We train you to use them. By the end, you're automated, not overwhelmed.",
    },
    {
      question: 'Do I need to be technical to use this?',
      answer: "Not at all. If you can use email and LinkedIn, you can use our AI systems. We build everything for you, then show you exactly how to use it. No coding, no complexity, just results.",
    },
    {
      question: 'How much does it cost?',
      answer: "Every project is different because every business is different. During your discovery call, we'll discuss your specific needs and provide a custom quote. Most clients see ROI within the first month from time saved alone.",
    },
    {
      question: 'What if I don\'t know what I need?',
      answer: "That's what the discovery call is for! Most clients start with \"I'm drowning in emails\" or \"I know AI could help but I don't know where to start.\" We'll help you identify the biggest time-drains and prioritize what to automate first.",
    },
    {
      question: 'Is my data safe?',
      answer: "Absolutely. We use enterprise-grade tools with bank-level encryption. Your data stays yours, and we never access anything without your explicit permission. We can walk you through our security practices on the discovery call.",
    },
    {
      question: 'What if I get stuck after the 5 days?',
      answer: "You won't be left hanging! Every project includes documentation tailored to your system, plus follow-up support. We also offer ongoing support packages if you want someone in your corner as you scale.",
    },
    {
      question: 'Can\'t I just use ChatGPT myself?',
      answer: "You absolutely could - if you had 40+ hours to research tools, test integrations, debug workflows, and figure out what actually works. Our clients come to us because they'd rather spend those 40 hours running their business.",
    },
    {
      question: 'Who is this NOT for?',
      answer: "If you're happy spending hours on admin tasks, or if you prefer doing everything manually, we're probably not a fit. This is for business owners and professionals who value their time and are ready to work smarter, not harder.",
    },
    {
      question: 'What makes you different from other AI consultants?',
      answer: "Two things: Speed and practicality. We don't do 3-month discovery phases or theoretical frameworks. We build real systems that work in 5 days, and we only automate tasks that genuinely make your life easier. No fluff, no jargon, just results.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-fallon-teal/5 to-fallon-lavender/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-100 hover:border-fallon-teal transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-fallon-teal/5 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-fallon-teal" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

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
