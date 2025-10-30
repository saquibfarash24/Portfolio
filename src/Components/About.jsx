import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql, SiTailwindcss, SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";

/* Data */
const SKILLS = [
  { name: "React.js", level: 90, icon: <RiReactjsFill /> },
  { name: "Node.js / Express", level: 85, icon: <FaBriefcase /> },
  { name: "MongoDB", level: 80, icon: <DiMongodb /> },
  { name: "PostgreSQL / Prisma", level: 76, icon: <SiPostgresql /> },
  { name: "HTML / CSS / Javascript", level: 88, icon: <SiTailwindcss /> },
  { name: "Git / GitHub", level: 70, icon: <FaBriefcase /> },
];

const PROJECTS = [
  {
  id: 2,
  title: "Education Management System",
  subtitle: "PERN Stack",
  desc:
    "Developed secure backend APIs for admin-driven school operations, including class management, attendance tracking, and student records. Implemented RBAC, optimized PostgreSQL queries, and integrated Excel/PDF export functionality.",
  tech: ["PostgreSQL", "Express", "Node", "React", "Prisma"],
  link: "#",
},
{
  id: 3,
  title: "Jewelry E-commerce",
  subtitle: "Node.js + Stripe",
  desc:
    "Engineered backend services for a jewelry store platform with authentication, product management, and payment integration. Designed RESTful APIs, managed database schemas, and optimized checkout flow using Stripe.",
  tech: ["Node", "Express", "PostgreSQL", "Stripe", "JWT"],
  link: "#",
},

];

const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineer",
    company: "AIZTS INFOTECH PVT LTD",
    period: "Jul 2024 — Present",
    location: "Remote / Office",
    bullets: [
      "At AIZTS Infotech Pvt. Ltd, I work as a Backend Developer responsible for designing and implementing scalable backend architectures for SaaS-based platforms.",
       "My focus lies in building reliable APIs, optimizing database performance, and ensuring seamless communication between services.",
      "I actively contribute to improving system performance and reliability through comprehensive testing, code optimization, and continuous integration practices.",
      "Collaborating closely with cross-functional teams, I help deliver secure, high-performance backend solutions that support dynamic business needs and enhance overall product scalability."
    ],
  },
   {
  id: 1,
  role: "Process Executive",
  company: "NVIDIA",
  period: "Feb 2023 — Sep 2023",
  location: "Remote / Office",
  bullets: [
    "AI Frameworks: Worked extensively with AI-based frameworks, contributing to the development, testing, and deployment of innovative solutions leveraging machine learning and artificial intelligence technologies.",
    "Autonomous Automobiles: Gained hands-on experience in the field of autonomous vehicles, focusing on software integration, system testing, and ensuring performance reliability of advanced autonomous systems.",
    "Quality Assurance: Played a pivotal role in quality assurance, conducting thorough testing to identify and resolve software bugs, ensuring optimal system performance, and maintaining high product quality standards."
  ],
}


];

export default function About() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Trigger animation when skills section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // Unique bar colors (Tailwind classes)
  const barColors = [
    "bg-blue-500",     // React.js
    "bg-purple-500",   // Redux
    "bg-teal-500",     // TanStack Query
    "bg-green-500",    // Node.js
    "bg-emerald-500",  // MongoDB
    "bg-amber-500",    // PostgreSQL
    "bg-cyan-500",     // Tailwind
    "bg-gray-500",     // Linux / Git
  ];

  return (
    <section
      id="about"
      name="about"
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16"
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-600">
          ABOUT ME
        </h1>
        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
I’m a backend developer driven by curiosity and a passion for scalable architecture. I love crafting RESTful APIs, managing PostgreSQL databases, and implementing authentication systems with technologies like JWT and Prisma ORM. My goal is to write clean, maintainable code that not only works efficiently but also evolves gracefully with the product.        </p>
      </header>

      {/* top grid: summary + contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 space-y-4">
          {/* Profile Card */}
          <div className="card card-compact bg-base-100 shadow-lg p-6">
            <div className="card-body p-0">
              <h2 className="text-xl font-semibold mb-2">Profile</h2>
              <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
As a backend developer, I specialize in turning business logic into reliable APIs and data-driven services. I work primarily with Node.js, Express, PostgreSQL, and Prisma, creating well-structured, secure, and high-performing backend systems that integrate seamlessly with frontend applications. I’m motivated by collaboration, clean code, and building products that make a real impact.              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/projects" className="btn bg-cyan-500 btn-sm">
                  View Projects
                </Link>
                <Link to="/resume" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  View Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Card with unique colored bars */}
          <div ref={skillsRef} className="card bg-base-100 shadow-lg p-6">
            <div className="card-body p-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Core Skills</h3>
                <div className="text-sm text-base-content/60 flex items-center gap-3">
                  <FaGithub />
                  <FaLinkedin />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILLS.map((s, idx) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-primary">{s.icon}</span>
                        <span>{s.name}</span>
                      </div>
                      <div className="text-xs text-base-content/60">{s.level}%</div>
                    </div>

                    <div className="w-full h-2 bg-neutral rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${barColors[idx % barColors.length]} transition-all duration-1000 ease-out ${
                          skillsVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: skillsVisible ? `${s.level}%` : "0%",
                          transitionDelay: skillsVisible ? `${idx * 100}ms` : "0ms",
                        }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-sm text-base-content/70">Technologies</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "React", "Node.js", "Express",
                    "MongoDB", "Postgres", "Prisma", "HTML / CSS / JAVASCRIPT"
                  ].map((t, i) => (
                    <span
                      key={t}
                      className={`px-2 py-1 rounded-full text-xs border border-base-200 hover:shadow-sm transition transform ${
                        skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      } hover:-translate-y-1`}
                      style={{
                        transitionDelay: skillsVisible ? `${i * 50}ms` : "0ms",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: contact & quick facts */}
        <aside className="space-y-4">
          <div className="card bg-base-100 shadow-lg p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="text-sm text-success">Available</div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-base-content/70 text-rose-400" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-base-content/60">saquibfarash0346@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaLinkedin className="mt-1 text-base-content/70 text-blue-500" />
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <Link
                    className="text-xs text-primary inline-flex items-center gap-1"
                    to="https://www.linkedin.com/in/saquib-farash-0b9a8a284/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/saquib-farash <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGithub className="mt-1 text-base-content/70 text-gray-500" />
                <div>
                  <div className="text-sm font-medium">GitHub</div>
                  <Link
                    className="text-xs text-primary"
                    to="https://github.com/saquibfarash24"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/saquibfarash24
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
            <ul className="text-sm text-base-content/70 space-y-2">
              <li><strong>Experience:</strong> 1.5 years (Software Engineer)</li>
              <li><strong>Location:</strong> Solapur, Maharashtra (Open to remote / on-site)</li>
              <li><strong>Availability:</strong> Immediate / Notice-based</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Experience timeline */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="card card-side bg-base-100 shadow-md p-6 transform transition-all duration-600 hover:-translate-y-2"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-base-content/70" />
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                </div>
                <div className="text-sm text-base-content/60 mt-1">{exp.company} • {exp.location}</div>

                <ul className="mt-4 list-disc list-inside text-sm text-base-content/80 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-base-content/60 ml-4">{exp.period}</div>
            </article>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="text-sm text-base-content/60">Open-source & production projects</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="card bg-base-100 shadow-md p-5 flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="text-xs text-base-content/60">{p.subtitle}</div>
                </div>
                <a href={p.link} className="text-primary text-sm" target="_blank" rel="noreferrer">
                  Live <FaExternalLinkAlt className="inline ml-1 text-xs" />
                </a>
              </div>

              <p className="text-sm text-base-content/80 mt-3 flex-1">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge badge-outline">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3"><FaGraduationCap className="inline mr-2" />Education</h3>
          <div className="text-sm text-base-content/80 space-y-3">
            <div>
              <div className="font-medium"> MCA</div>
              <div className="text-xs text-base-content/60">Shivaji University, Kolhapur - 2024</div>
            </div>
              <div>
              <div className="font-medium">BCA</div>
              <div className="text-xs text-base-content/60">Solapur University - 2022</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Certifications & Tools</h3>
          <ul className="text-sm text-base-content/80 list-disc list-inside space-y-2">
            <li>PostgreSQL — Certificate</li>
            <li>Prisma & Database Modeling — Workshop</li>
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="card bg-base-100 shadow-md p-6 text-center">
        <h4 className="text-lg font-semibold">Want to work together?</h4>
        <p className="text-sm text-base-content/70 mt-2">
          I’m open to freelance & full-time opportunities. Reach out and let’s build something great.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="mailto:saquibfarash0346@gmail.com" className="btn btn-primary btn-sm">
            Email Me
          </a>
          <a href="/resume" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
            View My Resume
          </a>
        </div>
      </footer>
    </section>
  );
}