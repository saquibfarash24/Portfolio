import React from 'react';

// Update image paths: remove `/public` from URLs
const skills = [
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.jpg' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.png' },
  { name: 'JavaScript', icon: '/javascript.jpg' },
  { name: 'React.js', icon: '/reactjs.png' },
  { name: 'Node.js', icon: '/node.png' },
  { name: 'Express.js', icon: '/express.png' },
  { name: 'MongoDB', icon: '/mongodb.jpg' },
  { name: 'PostgreSQL', icon: '/hathi.png' },
  { name: 'GitHub', icon: '/github.png' },
  { name: 'Java', icon: '/java.png' },
];

const bgColors = [
  'bg-violet-100', 'bg-teal-100', 'bg-blue-100', 'bg-green-100',
  'bg-yellow-100', 'bg-red-100', 'bg-indigo-100', 'bg-purple-100',
  'bg-pink-100', 'bg-orange-100', 'bg-gray-100'
];

const SkillCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-16">
     <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  MY SKILL SET
</h1>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-xl shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl ${bgColors[index % bgColors.length]}`}
          >
            <div className="h-20 w-20 mb-4 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 object-contain"
              />
            </div>
            <h3 className="text-md md:text-lg font-semibold text-gray-800 text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
