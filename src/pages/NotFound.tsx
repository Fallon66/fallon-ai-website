import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fallon-lavender/10 via-white to-fallon-teal/10 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral bg-clip-text text-transparent animate-gradient-text">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-9xl animate-spin-slow">🐙</div>
          </div>
        </div>

        {/* Main Message */}
        <div className="glass-card-strong rounded-3xl p-8 md:p-12 shadow-xl mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lost? Even my AI couldn't find this page.
          </h2>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              Look, I've automated a lot of things. Email triage. Lead gen. My entire workflow.
            </p>
            <p>
              <strong className="text-fallon-teal">But finding a page that doesn't exist?</strong> Even Claude has limits.
            </p>
            <p className="text-2xl">
              🐕 (The dogs are disappointed too.)
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fallon-teal to-fallon-lavender rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-fallon-teal/90 hover:to-fallon-lavender/90 active:scale-95"
            >
              Take Me Home
            </Link>
            <Link
              to="/blog"
              className="inline-block px-8 py-4 text-lg font-semibold text-fallon-teal border-2 border-fallon-teal rounded-xl hover:bg-fallon-teal hover:text-white hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Fun Footer */}
        <p className="text-gray-600 text-lg">
          Error code: <span className="font-mono text-fallon-coral">OCTOPUS_CONFUSED</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          (All 9 brains agree: this page doesn't exist.)
        </p>
      </div>

      <style>{`
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
