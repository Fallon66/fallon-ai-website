import { X, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function WaitlistModal({ isOpen, onClose, serviceName = 'Waitlist' }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  useEffect(() => {
    // Reset form when modal closes
    if (!isOpen) {
      setFormData({ name: '', email: '', interest: '' });
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: `WAITLIST SIGNUP: ${serviceName}\n\nWhat they're interested in:\n${formData.interest || 'No additional details provided'}`,
          subject: `${serviceName} - Waitlist Signup from ${formData.name}`,
          from_name: 'Fallon AI Website',
          to_email: 'charlotte@fallonholdings.com',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Close modal after 3 seconds on success
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-fallon-lavender via-fallon-coral to-fallon-teal p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <X size={20} className="text-white sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="text-4xl sm:text-5xl">🎯</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Join the Waitlist
              </h2>
              <p className="text-white/90 text-sm sm:text-base">
                {serviceName}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 space-y-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 mb-2">
                Thanks for your interest in <strong>{serviceName}</strong>!
              </p>
              <p className="text-gray-600">
                I'll email you at <strong>{formData.email}</strong> when it's ready.
              </p>
            </div>
          ) : (
            <>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-fallon-lavender focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-fallon-lavender focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Interest Field (Optional) */}
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-2">
                  What are you most interested in? <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell me what you're hoping to get from this..."
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-fallon-lavender focus:outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-800">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or email me directly at charlotte@fallonholdings.com</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-fallon-lavender to-fallon-coral text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Join Waitlist</span>
                  </>
                )}
              </button>
            </>
          )}
        </form>

        {/* Footer */}
        <div className="bg-gradient-to-r from-fallon-lavender/10 via-fallon-coral/10 to-fallon-teal/10 p-4 sm:p-5 text-center border-t border-gray-100">
          <p className="text-sm sm:text-base text-gray-600">
            🔒 No spam. I'll only email you when this is ready to launch.
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

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
