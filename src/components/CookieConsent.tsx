import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else if (consent === 'accepted') {
      // Load Google Analytics if previously accepted
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Load gtag.js script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-D85J2FZV2S';
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-D85J2FZV2S', {
      anonymize_ip: true, // Anonymize IP for better privacy
    });
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm md:text-base text-gray-200">
          <p>
            🍪 We use cookies to analyze website traffic and improve your experience.
            Your data is anonymized and never shared with third parties.{' '}
            <a
              href="/privacy-policy"
              className="underline hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-lg border-2 border-gray-600 text-gray-200 hover:bg-gray-800 transition-all duration-200 font-medium"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-all duration-200 font-medium shadow-lg hover:shadow-teal-500/50"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}
