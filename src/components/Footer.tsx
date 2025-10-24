import { Globe, Heart, MessageCircle, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Language Coaching', href: '#services' },
      { name: 'Career Coaching', href: '#services' },
      { name: 'Integration Coaching', href: '#services' },
      { name: 'Job Placement', href: '#services' },
    ],
    company: [
      { name: 'About Me', href: '#about' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Success Stories', href: '#success' },
      { name: 'My Mission', href: '#mission' },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/message', label: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rameennoor', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:contact@rameennoor.com', label: 'Email', color: 'hover:text-teal-600' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold">Rameen Noor</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              International Career & Integration Coach helping people worldwide build their careers
              and integrate confidently into new environments.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for your success</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Rameen Noor. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              <a href="#hero" className="hover:text-teal-400 transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "No Plan. No Problem. Your journey begins right here."
          </p>
        </div>
      </div>
    </footer>
  );
}
