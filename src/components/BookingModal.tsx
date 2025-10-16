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
        className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral p-3 sm:p-4 md:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:scale-110"
          >
            <X size={20} className="text-white sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <div className="text-3xl sm:text-4xl md:text-5xl">🐙</div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                Book Your Discovery Call
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg hidden sm:block">
                Let's talk about getting your time back
              </p>
            </div>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-white overflow-auto" style={{ height: 'calc(85vh - 100px)', maxHeight: '550px' }}>
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
