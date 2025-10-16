import { X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fallon-teal/20 via-fallon-lavender/20 to-fallon-coral/20 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 hover:scale-110"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-5xl">🐙</div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                Book Your Discovery Call
              </h2>
              <p className="text-white/90 text-lg">
                Let's talk about getting your time back in 5 days
              </p>
            </div>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-white overflow-auto" style={{ height: '600px' }}>
          <iframe
            src="https://cal.com/charlotte-fallon-smith-m1mwul/30min?embed=true"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a meeting"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-fallon-teal/10 via-fallon-lavender/10 to-fallon-coral/10 p-4 text-center border-t border-gray-100">
          <p className="text-gray-600">
            🔒 No commitment. No pressure. Just 30 minutes to see if we're a fit.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .fixed {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
