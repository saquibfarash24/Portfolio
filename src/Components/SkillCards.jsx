import React from 'react';

/**
 * SkillCard (updated)
 * - Adds new skills: shadcn UI, Material UI, DaisyUI, Redux, TanStack Query
 * - Modern responsive grid, badges, hover effects, fallback icon rendering
 *
 * Put skill icon images in public/ (e.g. /shadcn.png, /materialui.png, /daisyui.png, /redux.png, /tanstack.png)
 */

const skills = [
  { name: 'HTML', icon: '/html.png', type: 'Frontend' },
  { name: 'CSS', icon: '/css.jpg', type: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.png', type: 'Frontend' },
  { name: 'JavaScript', icon: '/javascript.jpg', type: 'Frontend' },
  { name: 'React.js', icon: '/reactjs.png', type: 'Frontend' },
  { name: 'Redux', icon: '/redux.png', type: 'Tool' }, // new
  { name: 'TanStack Query', icon: '/tanstack.jpeg', type: 'Tool' }, // new
  { name: 'shadcn UI', icon: '/shadcn.png', type: 'Tool' }, // new
  { name: 'Material UI', icon: '/material.png', type: 'Tool' }, // new
  { name: 'DaisyUI', icon: '/daisyUI1.png', type: 'Tool' }, // new
  { name: 'GitHub', icon: '/github.png', type: 'Tool' },
  { name: 'Node.js', icon: '/node.png', type: 'Backend' },
  { name: 'Express.js', icon: '/express.png', type: 'Backend' },
  { name: 'MongoDB', icon: '/mongodb.jpg', type: 'Database' },
  { name: 'PostgreSQL', icon: '/hathi.png', type: 'Database' },
  { name: 'Java', icon: '/java.png', type: 'Backend' },
];

const typeColors = {
  Frontend: 'bg-gradient-to-r from-indigo-400 to-violet-300 text-white',
  Backend: 'bg-gradient-to-r from-green-400 to-teal-300 text-white',
  Database: 'bg-gradient-to-r from-yellow-300 to-orange-300 text-gray-900',
  Tool: 'bg-gradient-to-r from-pink-400 to-rose-300 text-white',
  default: 'bg-gray-200 text-gray-800',
};

const SkillCard = () => {
  return (
    <section
      id="skills"
      className="max-w-screen-xl mx-auto px-4 md:px-10 py-16"
      aria-label="Skills section"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            MY SKILL SET
          </span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build performant web applications and admin dashboards.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <article
            key={i}
            className="relative flex flex-col items-center text-center rounded-2xl p-5 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:-translate-y-1 transform transition-all duration-300 focus-within:scale-105 focus:outline-none"
            tabIndex={0}
            aria-labelledby={`skill-${i}`}
            role="article"
          >
            {/* Icon / fallback */}
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-inner border border-white/30 overflow-hidden">
              {skill.icon ? (
                // image exists (ensure file in public/)
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // fallback to letter if image not found
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.querySelector('span')?.classList.remove('hidden');
                  }}
                />
              ) : null}

              {/* fallback single-letter avatar */}
              <span className="hidden text-xl font-bold text-gray-700">{skill.name.charAt(0)}</span>
            </div>

            {/* Name */}
            <h3 id={`skill-${i}`} className="mt-4 text-sm md:text-base font-semibold text-gray-800">
              {skill.name}
            </h3>

            {/* Type badge */}
            <span
              className={`mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors[skill.type] ?? typeColors.default}`}
              aria-hidden="true"
            >
              {skill.type ?? 'General'}
            </span>

            {/* subtle description area (optional) */}
            <p className="mt-3 text-[13px] text-gray-500 min-h-[38px]">
              {getSkillDesc(skill.name)}
            </p>

            {/* decorative bottom accent */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 opacity-80" />
          </article>
        ))}
      </div>
    </section>
  );
};

/**
 * Small helper to return a one-line description per skill.
 * You can customize these lines or remove the function if not needed.
 */
function getSkillDesc(name) {
  const map = {
    HTML: 'Semantic markup and accessible HTML5 structure.',
    CSS: 'Modern CSS, responsive layouts and animations.',
    'Tailwind CSS': 'Utility-first styling, responsive design.',
    JavaScript: 'ES6+, DOM, async/await, and modern patterns.',
    'React.js': 'Component design, hooks, state management.',
    Redux: 'App-level state management and middleware patterns.',
    'TanStack Query': 'Server state management and caching.',
    'shadcn UI': 'Composable UI primitives and design consistency.',
    'Material UI': 'Component library for quick, accessible UIs.',
    'DaisyUI': 'Tailwind plugin for component-ready classes.',
    'Node.js': 'Server-side JS, event-driven architecture.',
    'Express.js': 'REST APIs, middleware, route handling.',
    MongoDB: 'NoSQL modeling, aggregation pipelines.',
    PostgreSQL: 'Relational modeling and SQL optimization.',
    GitHub: 'Version control, PRs, branching workflows.',
    Java: 'OOP, backend fundamentals and JVM ecosystem.',
  };
  return map[name] ?? 'Experienced with this technology.';
}

export default SkillCard;
