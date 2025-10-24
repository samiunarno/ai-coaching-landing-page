import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Globe className={`w-8 h-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Rameen Noor
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'services', 'how-it-works', 'success', 'mission'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 hover:text-teal-600 font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.replace('-', ' ')}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {['about', 'services', 'how-it-works', 'success', 'mission'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-teal-50 rounded-lg capitalize font-medium transition-colors"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
