import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql, SiTailwindcss, SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaNodeJs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

const SKILLS = [
  { name: "React.js", icon: <RiReactjsFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "HTML / CSS / JavaScript", icon: <SiTailwindcss /> },
  { name: "Git / GitHub", icon: <FaGithub /> },
  { name: "Express.js", icon: <SiExpress /> },    
  { name: "Prisma ORM", icon: <SiPrisma/> },
  

];


export default function About() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 space-y-12"
    >
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-600">
          ABOUT ME
        </h1>
        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
          I’m a backend developer passionate about scalable architecture, RESTful APIs,
          PostgreSQL databases, and authentication systems with Prisma ORM and JWT.
        </p>
      </header>

      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left section */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile */}
          <div className="card bg-base-100 shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="text-sm text-base-content/80 leading-relaxed">
              As a backend developer, I specialize in transforming business logic into reliable,
              maintainable APIs using Node.js, Express, PostgreSQL, and Prisma. My goal is to
              deliver secure, scalable, and performance-driven backend systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary btn-sm">
                View Projects
              </Link>
              <Link
                to="/resume"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                View Resume
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="card bg-base-100 shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <div className="text-sm text-base-content/60 flex gap-3">
                <FaGithub />
                <FaLinkedin />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              {SKILLS.map((s, idx) => (
                <div
                  key={s.name}
                  className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                    skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: skillsVisible ? `${idx * 100}ms` : "0ms" }}
                >
                  <span className="text-4xl text-primary">{s.icon}</span>
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Facts */}
        <aside className="space-y-6">
          <div className="card bg-base-100 shadow-md p-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Contact</h3>
              <span className="text-sm text-success">Available</span>
            </div>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-rose-400 mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-xs text-base-content/60">
                    saquibfarash0346@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaLinkedin className="text-blue-500 mt-1" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <Link
                    to="https://www.linkedin.com/in/saquib-farash-0b9a8a284/"
                    target="_blank"
                    className="text-xs text-primary inline-flex items-center gap-1"
                  >
                    linkedin.com/in/saquib-farash <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGithub className="text-gray-500 mt-1" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <Link
                    to="https://github.com/saquibfarash24"
                    target="_blank"
                    className="text-xs text-primary"
                  >
                    github.com/saquibfarash24
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
            <ul className="text-sm text-base-content/70 space-y-2">
              <li><strong>Experience:</strong> 1.5 years (Software Engineer)</li>
              <li><strong>Location:</strong> Solapur, Maharashtra</li>
              <li><strong>Availability:</strong> Immediate / Notice-based</li>
            </ul>
          </div>
        </aside>
      </div>

    
      {/* Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">
            <FaGraduationCap className="inline mr-2" />
            Education
          </h3>
          <div className="space-y-3 text-sm text-base-content/80">
            <div>
              <p className="font-medium">MCA</p>
              <p className="text-xs text-base-content/60">
                Shivaji University, Kolhapur — 2024
              </p>
            </div>
            <div>
              <p className="font-medium">BCA</p>
              <p className="text-xs text-base-content/60">
                Solapur University — 2022
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Certifications & Tools</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
            <li>PostgreSQL — Certificate</li>
            <li>Prisma & Database Modeling — Workshop</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="card bg-base-100 shadow-md p-6 text-center">
        <h4 className="text-lg font-semibold">Want to work together?</h4>
        <p className="text-sm text-base-content/70 mt-2">
          I’m open to freelance & full-time opportunities. Reach out and let’s build something great.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="mailto:saquibfarash0346@gmail.com" className="btn btn-primary btn-sm">
            Email Me
          </a>
          <a href="/resume" className="btn btn-outline btn-sm" target="_blank">
            View My Resume
          </a>
        </div>
      </footer>
    </section>
  );
}
