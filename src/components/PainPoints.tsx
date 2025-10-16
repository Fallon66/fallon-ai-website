import { Check, ArrowRight } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    'You have 47 browser tabs open right now',
    'Your inbox is a graveyard of good intentions',
    "You've said 'I'll do it later' 5 times today",
    'LinkedIn feels like homework',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-fallon-coral/10 via-white to-fallon-lavender/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Is This You?
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-fallon-coral/20 flex items-center justify-center group-hover:bg-fallon-coral transition-colors">
                  <Check className="text-fallon-coral group-hover:text-white transition-colors" size={18} />
                </div>
                <p className="text-xl text-gray-700 leading-relaxed flex-1">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-gray-100 flex items-center justify-center space-x-3 group cursor-pointer">
            <p className="text-2xl font-semibold text-fallon-teal">
              Let's fix all of this in 5 days
            </p>
            <ArrowRight className="text-fallon-teal group-hover:translate-x-2 transition-transform" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
