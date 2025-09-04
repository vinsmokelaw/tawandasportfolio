import React from 'react';
import img2 from "../images/img2.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-900/30 to-violet-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold mb-6">About My Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on challenges, approaching every problem with a 
              resourceful mindset and an insatiable curiosity. My creativity 
              fuels innovative solutions, while my unwavering focus ensures 
              projects are executed with precision and a keen eye for detail.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, scalable code that makes a tangible 
              impact. Continuously learning and adapting, I am always 
              seeking new opportunities to grow and contribute.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-2xl w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] mx-auto">
              <img 
                src={img2}
                alt="Professional headshot"
                className="w-full h-auto object-contain" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
