import React from 'react';

const Expertise: React.FC = () => {
  const skills = [
    { name: 'React', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    // { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Supabase', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'GraphQL', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    // { name: 'Docker', level: 'Intermediate' },
    // { name: 'AWS (S3, Lambda)', level: 'Intermediate' }
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mx-auto"></div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-gray-700 hover:bg-purple-600/20 rounded-lg px-4 py-3 text-center transition-all duration-300 hover:transform hover:scale-105 border border-gray-600 hover:border-purple-400">
                  <span className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;