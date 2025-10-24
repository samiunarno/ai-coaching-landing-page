import { MessageCircle, Calendar, Mail, Phone, Globe, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold inline-block mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready To Begin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Your Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step today. Connect with me on WhatsApp or book your free introductory
            call. Your future starts now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Start on WhatsApp</h3>
              <p className="text-gray-600 leading-relaxed">
                Send me a message right now and begin your journey instantly. Quick, simple, and
                personal.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-2 text-teal-600 font-semibold group-hover:text-teal-700">
                  <span>Open WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border-2 border-transparent hover:border-cyan-500"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Book Free Call</h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule your free 30-minute introductory call. Let's talk about your goals and how I
                can help.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-2 text-cyan-600 font-semibold group-hover:text-cyan-700">
                  <span>Choose Your Time</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Connect With Me
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50 transition-colors">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Email</p>
                <a
                  href="mailto:contact@rameennoor.com"
                  className="text-gray-900 hover:text-teal-600 transition-colors"
                >
                  contact@rameennoor.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Phone</p>
                <a
                  href="tel:+491234567890"
                  className="text-gray-900 hover:text-cyan-600 transition-colors"
                >
                  +49 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/rameennoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/rameennoor
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Location</p>
                <p className="text-gray-900">Germany</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-gray-900">Remember:</span> Your first introductory call
            is completely free. No commitment, just conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
