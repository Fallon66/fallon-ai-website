import { Check, ArrowRight, Chrome, Mail, Clock, Briefcase } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    { text: 'You have 47 browser tabs open right now', icon: Chrome, highlight: '47 browser tabs' },
    { text: 'Your inbox is a graveyard of good intentions', icon: Mail, highlight: 'graveyard of good intentions' },
    { text: "You've said 'I'll do it later' 5 times today", icon: Clock, highlight: "'I'll do it later' 5 times" },
    { text: 'LinkedIn feels like homework', icon: Briefcase, highlight: 'feels like homework' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-fallon-coral/10 via-white to-fallon-lavender/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Is This You?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const parts = point.text.split(point.highlight);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-fallon-coral hover:shadow-xl transition-all duration-300"
                style={{ lineHeight: '1.8' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-fallon-coral/20 to-fallon-lavender/20 flex items-center justify-center">
                    <Icon className="text-fallon-coral" size={24} />
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed flex-1 pt-2">
                    {parts[0]}
                    <span className="font-semibold bg-fallon-teal/20 px-1 rounded">
                      {point.highlight}
                    </span>
                    {parts[1]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-gray-100 mt-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Check className="text-fallon-teal flex-shrink-0" size={28} />
              <p className="text-xl text-gray-700 leading-relaxed">
                Spending <span className="font-bold text-gray-900">3 hours a day</span> on emails that could be automated
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-fallon-teal flex-shrink-0" size={28} />
              <p className="text-xl text-gray-700 leading-relaxed">
                Drowning in <span className="font-bold text-gray-900">AI tools and courses</span> but not using any of them
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-fallon-teal flex-shrink-0" size={28} />
              <p className="text-xl text-gray-700 leading-relaxed">
                Your brain is <span className="font-bold text-gray-900">overloaded</span> with tasks, ideas, and reminders
              </p>
            </div>
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
