import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`border-t ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's build something amazing together. I'm always excited to discuss new projects and opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@example.com"
                className={`p-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com"
                className={`p-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com"
                className={`p-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com"
                className={`p-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <div className="space-y-2">
              <a href="#home" className={`block hover:text-purple-400 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Home
              </a>
              <a href="#projects" className={`block hover:text-purple-400 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Projects
              </a>
              <a href="#about" className={`block hover:text-purple-400 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                About
              </a>
              <a href="#contact" className={`block hover:text-purple-400 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t mt-12 pt-8 text-center ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Portfolio. Made with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;