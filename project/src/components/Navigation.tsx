import React, { useState, useEffect } from 'react';
import { Star, Menu, X, Download, Mail } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openCV = () => {
    window.open("/cvs/tawandaCV.pdf", "_blank"); // PDF path
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-purple-400" />
            <span className="font-bold text-lg">Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors duration-200">Home</button>
            <button onClick={openCV} className="hover:text-purple-400 transition-colors duration-200">CV</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors duration-200">About Me</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors duration-200">Contact</button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={openCV} className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-600 rounded-lg hover:border-purple-400 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>CV</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-200">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-purple-400 transition-colors duration-200">Home</button>
              <button onClick={openCV} className="block w-full text-left hover:text-purple-400 transition-colors duration-200">CV</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-purple-400 transition-colors duration-200">About Me</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-purple-400 transition-colors duration-200">Contact</button>
              <div className="pt-4 space-y-2">
                <button onClick={openCV} className="flex items-center space-x-2 w-full px-4 py-2 text-sm border border-gray-600 rounded-lg hover:border-purple-400 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>CV</span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 w-full px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-200">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
