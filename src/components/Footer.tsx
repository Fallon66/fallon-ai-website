export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          * This site was built as a proof-of-concept to explore AI-assisted development.
          Built in public with <a href="https://github.com/Fallon66/fallon-ai-website" target="_blank" rel="noopener noreferrer" className="text-fallon-teal hover:underline">Claude Code</a>.
        </p>
        <p className="text-center text-xs text-gray-400 mt-2">
          © 2025 Fallon AI • Built by Charlotte Fallon Smith
        </p>
      </div>
    </footer>
  );
}
