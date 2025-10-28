import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', icon: '/html.png', type: 'Frontend' },
  { name: 'CSS', icon: '/css.jpg', type: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.png', type: 'Frontend' },
  { name: 'JavaScript', icon: '/javascript.jpg', type: 'Frontend' },
  { name: 'React.js', icon: '/reactjs.png', type: 'Frontend' },
  { name: 'Redux', icon: '/redux.png', type: 'Tool' },
  { name: 'TanStack Query', icon: '/tanstack.jpeg', type: 'Tool' },
  { name: 'shadcn UI', icon: '/shadcn.png', type: 'Tool' },
  { name: 'Material UI', icon: '/material.png', type: 'Tool' },
  { name: 'DaisyUI', icon: '/daisyUI1.png', type: 'Tool' },
  { name: 'GitHub', icon: '/github.png', type: 'Tool' },
  { name: 'Node.js', icon: '/node.png', type: 'Backend' },
  { name: 'Express.js', icon: '/express.png', type: 'Backend' },
  { name: 'MongoDB', icon: '/mongodb.jpg', type: 'Database' },
  { name: 'PostgreSQL/Prisma ORM', icon: '/hathi.png', type: 'Database' },
  { name: 'Java', icon: '/java.png', type: 'Backend' },
];

// Color mapping that works in light & dark via DaisyUI semantic classes
const typeClasses = {
  Frontend: 'badge-primary',
  Backend: 'badge-success',
  Database: 'badge-warning',
  Tool: 'badge-accent',
  default: 'badge-neutral',
};

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

export default function SkillCard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-screen-xl mx-auto px-4 md:px-10 py-16"
      aria-label="Skills section"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            MY SKILL SET
          </span>
        </h2>
        <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
          Technologies and tools I use to build performant web applications and admin dashboards.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <article
            key={i}
            className={`relative flex flex-col items-center text-center rounded-2xl p-5 backdrop-blur-sm border border-base-300 shadow-lg transition-all duration-500 transform-gpu
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50`}
            style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
            tabIndex={0}
            aria-labelledby={`skill-name-${i}`}
            role="article"
          >
            {/* Icon container with fallback */}
            <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-base-200 border border-base-300 shadow-sm">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt=""
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className="hidden text-xl font-bold text-base-content">
                {skill.name.charAt(0)}
              </span>
            </div>

            {/* Skill name */}
            <h3 id={`skill-name-${i}`} className="mt-4 text-sm md:text-base font-semibold text-base-content">
              {skill.name}
            </h3>

            {/* Type badge using DaisyUI semantic colors */}
            <span
              className={`mt-2 badge ${typeClasses[skill.type] ?? typeClasses.default} text-xs font-medium`}
              aria-hidden="true"
            >
              {skill.type || 'General'}
            </span>

            {/* Description */}
            <p className="mt-3 text-xs text-base-content/70 min-h-[36px] px-1">
              {getSkillDesc(skill.name)}
            </p>

            {/* Decorative accent (subtle glow in dark mode) */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />
          </article>
        ))}
      </div>
    </section>
  );
}