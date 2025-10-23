import { useState } from 'react';
import { QuizResult } from '../data/quizQuestions';

interface QuizResultsProps {
  score: number;
  result: QuizResult;
  tags: string[];
  openText: string;
  onRestart: () => void;
}

const QuizResults = ({ score, result, tags, openText, onRestart }: QuizResultsProps) => {
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email submission (replace with actual integration)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowResults(true);
    setIsSubmitting(false);
  };

  const handleShare = () => {
    const text = `I just took the AI Readiness Quiz and got: ${result.title}! Find out your AI readiness score:`;
    const url = window.location.origin + '/quiz';

    if (navigator.share) {
      navigator.share({ text, url });
    } else {
      // Fallback to Twitter
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  if (!showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 text-center">
            <div className="text-6xl mb-6">🐙</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Almost There!
            </h2>
            <p className="text-gray-600 mb-8">
              Enter your email to see your personalized AI readiness results and get tailored recommendations.
            </p>

            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-gray-900 mb-4"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Show My Results →'}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {result.title}
          </h1>
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-2xl font-bold mb-6">
            Your Score: {score}/100
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {result.description}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your AI Readiness Breakdown</h2>

          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Overall Readiness</span>
                <span className="text-purple-600 font-bold">{score}%</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          </div>

          {/* Personalized Insights */}
          {tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Priority Areas:</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Open Text Response */}
          {openText && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Want to Automate:</h3>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                <p className="text-gray-700 italic">"{openText}"</p>
              </div>
            </div>
          )}

          {/* Personalized Recommendations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Next Steps:</h3>
            <ul className="space-y-2 text-gray-700">
              {score < 30 && (
                <>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Start with simple AI tools like ChatGPT to get comfortable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Join our newsletter for beginner-friendly AI tips</span>
                  </li>
                </>
              )}
              {score >= 30 && score < 60 && (
                <>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Explore automation tools like Zapier or Make.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Consider a Quick Win session to identify your best automation opportunities</span>
                  </li>
                </>
              )}
              {score >= 60 && score < 80 && (
                <>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>You're ready for custom AI workflows - let's build something together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Priority access to our pilot program - limited spots available</span>
                  </li>
                </>
              )}
              {score >= 80 && (
                <>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Skip the waitlist - book a strategy call today</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>You need our 5-Day Transform - full AI automation overhaul</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl p-8 text-center text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <a
            href={result.ctaLink}
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            {result.cta}
          </a>
        </div>

        {/* Share & Restart */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleShare}
            className="px-8 py-4 bg-white border-2 border-purple-300 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200"
          >
            📱 Share Your Results
          </button>
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-200"
          >
            🔄 Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
