import React, { useEffect, useState } from "react";
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

/* Data (same as before) */
const SKILLS = [
  { name: "React.js", level: 90, icon: <RiReactjsFill /> },
  { name: "Redux / RTK", level: 82, icon: <SiRedux /> },
  { name: "TanStack Query", level: 78, icon: <span>Q</span> },
  { name: "Node.js / Express", level: 85, icon: <FaBriefcase /> },
  { name: "MongoDB", level: 80, icon: <DiMongodb /> },
  { name: "PostgreSQL / Prisma", level: 76, icon: <SiPostgresql /> },
  { name: "Tailwind CSS / DaisyUI / ShadCN", level: 88, icon: <SiTailwindcss /> },
  { name: "Linux / Git", level: 70, icon: <FaBriefcase /> },
];

const PROJECTS = [
  {
    id: 1,
    title: "Job Portal Platform",
    subtitle: "React + Node + PostgreSQL",
    desc:
      "Role-based job portal: Admin / Recruiter / Job Seeker. Resume upload, application management, shortlisting, and recruiter analytics.",
    tech: ["React", "Tailwind", "Node", "Postgres", "Prisma", "Redux"],
    link: "#",
  },
  {
    id: 2,
    title: "Education Management System",
    subtitle: "MERN Stack",
    desc:
      "Admin-driven school management: classes, attendance, student profiles, and reports with export features and RBAC.",
    tech: ["React", "MongoDB", "Express", "Node", "Tailwind"],
    link: "#",
  },
  {
    id: 3,
    title: "Jewelry E-commerce",
    subtitle: "React + Stripe",
    desc:
      "Mobile-first e-commerce with catalog filters, dynamic pricing, admin inventory panel, and optimized checkout flow.",
    tech: ["React", "Tailwind", "Stripe", "Node"],
    link: "#",
  },
];

const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineer",
    company: "AIZTS INFOTECH PVT LTD",
    period: "May 2024 — Present",
    location: "Remote / Office",
    bullets: [
      "Built responsive, user-focused web apps for job portal, education & e-commerce domains.",
      "Implemented clean UI using React.js, Prisma, PostgreSQL and Tailwind CSS.",
      "Optimized frontend-backend communication and state with Redux Toolkit & TanStack Query.",
      "Collaborated using Git, Docker, Postman; improved performance and cross-platform UX.",
    ],
  },
  {
    id: 2,
    role: "Associate Engineer / Intern",
    company: "AIZTS Infotech",
    period: "Aug 25, 2024 — Present",
    location: "Pathruth Chowk, Solapur, Maharashtra",
    bullets: [
      "Created modular components and improved code reuse across multiple projects.",
      "Helped optimize DB queries and integrated RESTful APIs.",
      "Performed tests, wrote docs, and supported onboarding of new team members.",
    ],
  },
];

/* Utility: small inline style for stagger delays */
const delayStyle = (i, base = 60) => ({ transitionDelay: `${i * base}ms` });

export default function About() {
  // mounted state controls entrance animation (avoid appearing before JS runs)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60); // small delay to trigger transition
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      name="About"
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16"
    >
      {/* Header */}
      <header className={`text-center mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          ABOUT ME
        </h1>
        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
          Full-stack developer building production-ready web apps with strong UX, clean architecture, and pragmatic engineering.
        </p>
      </header>

      {/* top grid: summary + contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 space-y-4">
          {/* Profile Card (daisyUI card) */}
          <div
            className={`card card-compact bg-base-100 shadow-lg p-6 transform transition-transform duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={delayStyle(1)}
          >
            <div className="card-body p-0">
              <h2 className="text-xl font-semibold mb-2">Profile</h2>
              <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
                I'm a full-stack developer working across MERN & PERN stacks. I build maintainable applications — from pixel-perfect frontends to robust backend services. I enjoy solving complex problems and shipping production-quality software.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary btn-sm">View Projects</Link>
                <Link to="/resume" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">View Resume</Link>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className={`card bg-base-100 shadow-lg p-6 transform transition duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={delayStyle(2)}>
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
                        className="h-2 rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${s.level}%` }}
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
                    "React", "Redux Toolkit", "TanStack Query", "Node.js", "Express",
                    "MongoDB", "Postgres", "Prisma", "Tailwind", "ShadCN UI", "Docker"
                  ].map((t, i) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full text-xs border border-base-200 hover:shadow-sm transition transform hover:-translate-y-1"
                      style={delayStyle(i, 25)}
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
        <aside className={`space-y-4 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700`} style={delayStyle(3)}>
          <div className="card bg-base-100 shadow-lg p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="text-sm text-success">Available</div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-base-content/70" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-base-content/60">saquibsayyed12345@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaLinkedin className="mt-1 text-base-content/70" />
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <Link
                    className="text-xs text-primary inline-flex items-center gap-1"
                   to="https://www.linkedin.com/in/saquib-sayyed-62b88b1a1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/saquib-arif <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGithub className="mt-1 text-base-content/70" />
                <div>
                  <div className="text-sm font-medium">GitHub</div>
                  <Link className="text-xs text-primary" to="https://github.com/saquibsayyedcoder" target="_blank" rel="noreferrer">
                    github.com/saquibsayyedcoder
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
            <ul className="text-sm text-base-content/70 space-y-2">
              <li><strong>Experience:</strong> 1+ years (Intern → Associate Engineer → Software Engineer)</li>
              <li><strong>Location:</strong> Solapur, Maharashtra (Open to remote)</li>
              <li><strong>Availability:</strong> Immediate / Notice-based</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Experience timeline */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={exp.id}
              className={`card card-side bg-base-100 shadow-md p-6 transform transition-all duration-600 hover:-translate-y-2`}
              style={delayStyle(idx + 1)}
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
      <div id="projects" className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="text-sm text-base-content/60">Open-source & production projects</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="card bg-base-100 shadow-md p-5 flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-lg"
              style={delayStyle(i + 1)}
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
              <div className="font-medium">B.Sc. / B.Tech (placeholder)</div>
              <div className="text-xs text-base-content/60">University · Year</div>
            </div>
            <div>
              <div className="font-medium">Full Stack Development — Certification</div>
              <div className="text-xs text-base-content/60">Platform · Year</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Certifications & Tools</h3>
          <ul className="text-sm text-base-content/80 list-disc list-inside space-y-2">
            <li>PostgreSQL Basics — Certificate</li>
            <li>Prisma & Database Modeling — Workshop</li>
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="card bg-base-100 shadow-md p-6 text-center">
        <h4 className="text-lg font-semibold">Want to work together?</h4>
        <p className="text-sm text-base-content/70 mt-2">I’m open to freelance & full-time opportunities. Reach out and let’s build something great.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="mailto:saquib@example.com" className="btn btn-primary btn-sm">Email Me</a>
          <a href="/resume" className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">View My Resume</a>
        </div>
      </footer>
    </section>
  );
}
