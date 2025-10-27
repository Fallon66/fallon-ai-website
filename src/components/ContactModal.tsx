import { X, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function ContactModal({ isOpen, onClose, serviceName = 'General Enquiry' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      setFormData({ name: '', email: '', message: '' });
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
          message: `SERVICE ENQUIRY: ${serviceName}\n\n${formData.message}`,
          subject: `${serviceName} Enquiry from ${formData.name} - Fallon AI`,
          from_name: 'Fallon AI Website',
          to_email: 'charlotte@fallonholdings.com',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
        }, 2000);
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
        <div className="bg-gradient-to-r from-fallon-teal via-fallon-lavender to-fallon-coral p-4 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 hover:scale-110"
          >
            <X size={20} className="text-white sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="text-4xl sm:text-5xl">💬</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {serviceName}
              </h2>
              <p className="text-white/90 text-sm sm:text-base">
                Can't find a time? Send me a message instead
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600">
                Thanks for reaching out! I'll get back to you at {formData.email} soon.
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-fallon-teal focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-fallon-teal focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your business and what you're looking to achieve with AI automation..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-fallon-teal focus:outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
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
                className="w-full bg-gradient-to-r from-fallon-teal to-fallon-coral text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </>
          )}
        </form>

        {/* Footer */}
        <div className="bg-gradient-to-r from-fallon-teal/10 via-fallon-lavender/10 to-fallon-coral/10 p-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            🔒 Your information is safe. I'll respond within 24-48 hours.
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
