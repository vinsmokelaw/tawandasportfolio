import React from 'react';
import img2 from "../images/img2.jpg"; 
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hello my name is{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Tawanda Muchenu
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I'm a 21-old aspiring Full Stack Developer, 
              Currently studying at Uncommon.org. My journey 
              is fueled by a relentless passion for crafting elegant and 
              efficient web applications. I thrive on solving complex 
              problems and transforming innovative ideas into tangible, 
              high-quality code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-2xl w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] mx-auto">
              <img
                src={img2}   
                alt="Hero"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
