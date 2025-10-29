// ResumePage.jsx
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaPrint,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

/* Data */
const skills = [
  "JavaScript", "ReactJS", "NodeJS", "MongoDB", "ExpressJS",
  "Git", "GitHub", "RESTful APIs", "HTML5", "CSS3", "Java"
];

const softSkills = [
  "Team Collaboration", "Problem Solving", "Adaptability", "Time Management",
  "Communication", "Critical Thinking", "Self-Motivation"
];

const experience = [
  {
  company: "AIZTS Infotech Pvt. Ltd",
  role: "Backend Developer",
  duration: "Jul 2024 - Present",
  bullets: [
    "Designed and developed scalable backend architectures using Node.js, Express, and Prisma ORM.",
    "Managed PostgreSQL and MongoDB databases with optimized schemas and efficient query handling.",
    "Built and integrated RESTful APIs to enable seamless data flow across frontend and backend systems.",
    "Implemented authentication, authorization (JWT & RBAC), and validation layers for enhanced security.",
    "Optimized server performance, improved response times, and ensured application reliability.",
    "Collaborated with frontend developers to deliver end-to-end product functionality and stability.",
    "Used Git and GitHub for version control, code reviews, and agile development workflows."
  ]
}

];

const education = [
{
  institution: "Solapur University",
  degree: "Bachelor of Computer Applications (BCA)",
  duration: "2018 - 2022",
  location: "Solapur, Maharashtra",
},
{
  institution: "Shivaji University, Kolhapur",
  degree: "Master of Computer Applications (MCA)",
  duration: "2022 - 2024",
  location: "Kolhapur, Maharashtra",
},

];

const projects = [
  {
    title: "Job Portal",
    bullets: [
      "Developed and maintained the frontend for a job portal using React.",
      "Integrated PostgreSQL and MongoDB to manage listings, profiles, and applications.",
      "Worked with backend developers to ensure smooth API communication.",
      "Focused on mobile-responsive design and user experience."
    ]
  },
  {
    title: "Aizts Official Website",
    bullets: [
      "Led frontend development with React and Tailwind CSS.",
      "Ensured consistency with brand guidelines through custom UI components.",
      "Used PostgreSQL for dynamic content management.",
      "Implemented responsive design for cross-device compatibility."
    ]
  },
  {
    title: "Jewelry Shop Management",
    bullets: [
      "Developed a full-featured jewelry inventory and billing management system.",
      "Implemented purchase, sales, stock tracking, and reporting modules.",
      "Built with React.js, Node.js, MongoDB, and Tailwind CSS for modern UI.",
      "Streamlined daily operations for shop owners with real-time updates.",
    ]
  },
  {
    title: "School Management System",
    bullets: [
      "Designed and developed a multi-role school management system.",
      "Super Admin can create and manage multiple schools with independent logins.",
      "Integrated modules for teachers, students, fees, attendance, and exams.",
      "Ensured a professional, mobile-responsive dashboard using React & DaisyUI.",
    ]
  },
 
];

const delayStyle = (i, base = 80) => ({ transitionDelay: `${i * base}ms` });

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Replace with actual PDF path
    const link = document.createElement("a");
    link.href = "/resume-saquib-sayyed.pdf";
    link.download = "SaquibSayyed_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header with Actions */}
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`} style={delayStyle(0)}>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-24 md:w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/s2.png" alt="Saquib Sajid Farash" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Saquib Sajid Farash
              </h1>
              <p className="text-sm md:text-base text-base-content/80 mt-1">Full Stack Developer - Backend Developer - Software Engineer</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-2 text-sm text-base-content/70">
                <div className="flex items-center gap-1.5">
                  <FaEnvelope className="text-xs" /> saquibfarash0346@gmail.com
                </div>
                <div className="flex items-center gap-1.5">
                  <FaPhone className="text-xs" /> +91 9767862018
                </div>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-xs" /> Solapur, India
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="btn btn-primary btn-sm md:btn-md gap-2"
            >
              <FaDownload /> Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="btn btn-outline btn-sm md:btn-md gap-2"
            >
              <FaPrint /> Print
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Summary */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(1)}
            >
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-primary rounded"></span>
                Profile Summary
              </h2>
              <p className="leading-relaxed text-base-content/90">
Passionate backend developer with hands-on experience in building scalable and secure server-side applications using Node.js, Express, Prisma ORM, PostgreSQL, and MongoDB. Skilled in designing RESTful APIs, implementing authentication and authorization, and optimizing database performance for high efficiency. Committed to writing clean, maintainable code, improving system scalability, and delivering robust backend solutions that power exceptional user experiences.              </p>
            </section>

            {/* Technical Skills */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(2)}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-secondary rounded"></span>
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { name: "React.js", level: 90, icon: <RiReactjsFill className="text-blue-500" /> },
                  { name: "Node.js", level: 85, icon: <span className="text-green-500">⬢</span> },
                  { name: "Express.js", level: 85, icon: <span className="text-red-500">⬢</span> },
                  { name: "MongoDB", level: 80, icon: <DiMongodb className="text-green-600" /> },
                  { name: "PostgreSQL", level: 76, icon: <SiPostgresql className="text-blue-700" /> },
                  { name: "Prisma-ORM", level: 76, icon: <SiPrisma className="text-purple-700" /> },
                ].map((s, i) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {s.icon && <span className="text-lg">{s.icon}</span>}
                        <span>{s.name}</span>
                      </div>
                      <div className="text-xs font-medium text-base-content/70">{s.level}%</div>
                    </div>
                    <progress className="progress progress-primary w-full h-2 rounded" value={s.level} max="100"></progress>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium text-base-content/80 mb-3">Additional Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((sk) => (
                    <span key={sk} className="badge badge-neutral badge-lg">{sk}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(3)}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-accent rounded"></span>
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p, idx) => (
                  <article
                    key={idx}
                    className="p-5 rounded-xl border border-base-200 bg-base-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h4>
                    <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1.5 mb-4">
                      {p.bullets.slice(0, 3).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                      {p.bullets.length > 3 && (
                        <li className="text-xs text-primary font-medium">+{p.bullets.length - 3} more features...</li>
                      )}
                    </ul>
                    {p.tech && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.tech.map((t, i) => (
                          <span key={i} className="badge badge-outline badge-sm">{t}</span>
                        ))}
                      </div>
                    )}
                   
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(4)}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-primary rounded"></span>
                Contact Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:saquibfarash0346@gmail.com" className="text-base-content/80 hover:text-primary transition-colors">
                      saquibfarash0346@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-base-content/80">+91 9767862018</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-base-content/80">Solapur, Maharashtra, India</div>
                  </div>
                </div>
                <div className="pt-2 mt-3 border-t border-base-200">
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/saquibfarash24"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-circle btn-outline hover:btn-primary transition-all"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/saquib-farash-0b9a8a284/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-circle btn-outline hover:btn-primary transition-all"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(5)}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-secondary rounded"></span>
                Experience
              </h3>
              <div className="space-y-5">
                {experience.map((e, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-primary">
                    <div className="absolute -left-1 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-2">
                      <div className="font-semibold text-base-content">{e.role}</div>
                      <div className="text-sm text-base-content/70">{e.company}</div>
                      <div className="text-xs text-base-content/60 mt-1">{e.duration}</div>
                    </div>
                    <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1">
                      {e.bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
                      {e.bullets.length > 3 && (
                        <li className="text-xs text-primary">+{e.bullets.length - 3} more responsibilities</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(6)}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-accent rounded"></span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((ed, i) => (
                  <div key={i} className="pl-5 border-l-2 border-accent">
                    <div className="absolute -left-1 top-2 w-3 h-3 bg-accent rounded-full"></div>
                    <div className="font-medium">{ed.institution}</div>
                    <div className="text-sm text-base-content/70">{ed.degree}</div>
                    <div className="text-xs text-base-content/60">{ed.duration}</div>
                    <div className="text-xs text-base-content/70 mt-1">{ed.location}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section
              className={`card bg-base-100 shadow-lg rounded-2xl p-6 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={delayStyle(7)}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-info rounded"></span>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="badge badge-outline badge-sm px-3 py-2">{s}</span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}