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
import { SiPostgresql, SiTailwindcss, SiRedux } from "react-icons/si";

/* Data (same as your original arrays) */
const skills = [
  "JavaScript", "ReactJS", "NodeJS", "MongoDB", "ExpressJS", "TailwindCSS",
  "Git", "GitHub", "RESTful APIs", "HTML5", "CSS3", "Java"
];

const softSkills = [
  "Team Collaboration", "Problem Solving", "Adaptability", "Time Management",
  "Communication", "Critical Thinking", "Self-Motivation"
];

const experience = [
  {
    company: "Aizts Info Tech",
    role: "Junior Software Engineer",
    duration: "Aug 2024 - Present",
    bullets: [
      "Built and maintained responsive web applications using React and Tailwind CSS.",
      "Managed MongoDB and PostgreSQL databases for scalable data storage.",
      "Integrated RESTful APIs to streamline frontend-backend communication.",
      "Improved application performance and deployed user-friendly interfaces.",
      "Collaborated with cross-functional teams to meet project goals.",
      "Utilized Git for version control and workflow management.",
      "Contributed to core features that enhanced user experience.",
    ]
  },
];

const education = [
  {
    institution: "Bharti Vidyapeeth University",
    degree: "BCA & MCA in Computer Science",
    duration: "2018 - 2024",
    location: "Solapur, Maharashtra",
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
    title: "School Super Admin Dashboard",
    bullets: [
      "Designed and developed a multi-role school management system.",
      "Super Admin can create and manage multiple schools with independent logins.",
      "Integrated modules for teachers, students, fees, attendance, and exams.",
      "Ensured a professional, mobile-responsive dashboard using React & DaisyUI.",
    ]
  },
  {
    title: "Chat Application (MERN + Socket.IO)",
    bullets: [
      "Real-time chat app with one-to-one and group conversations using Socket.IO.",
      "Features: online presence, typing indicators, read receipts, and message history.",
      "Media sharing (images/files), message search, and notification system.",
      "Built secure auth (JWT), scalable message storage in MongoDB, and Redis for pub/sub in production.",
    ],
    tech: ["React", "Node", "Express", "MongoDB", "Socket.IO", "Redis"]
  }
];

/* Small helper for animated mount delays */
const delayStyle = (i, base = 80) => ({ transitionDelay: `${i * base}ms` });

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animations after mount (polish)
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 text-base-content py-12 px-4 cursor-pointer">
      <div className="max-w-5xl mx-auto">

        {/* Header card */}
        <header
          className={`card card-side bg-base-100 shadow-xl overflow-hidden mb-8 transform transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
          style={delayStyle(0)}
        >
          <div className="card-body md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img src="/img4.jpg" alt="Saquib" />
                </div>
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold">Saquib Arif Sayyed</h1>
                <p className="text-sm md:text-base text-base-content/70">Full Stack Developer — MERN & PERN</p>

                <div className="mt-3 flex items-center gap-4 text-sm">
                  <a href="mailto:saquibsayyed12345@gmail.com" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <FaEnvelope /> <span>saquibsayyed12345@gmail.com</span>
                  </a>
                  <span className="inline-flex items-center gap-2 text-base-content/70">
                    <FaPhone /> <span>+91 73784 11134</span>
                  </span>
                </div>
              </div>
            </div>

           
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Summary, Skills */}
          <div className={`col-span-2 space-y-6 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transform transition-all duration-700`} style={delayStyle(1)}>
            {/* Summary card */}
            <section className="card bg-base-100 shadow-md p-6">
              <h2 className="text-lg font-semibold mb-3">Profile</h2>
              <p className="text-base text-base-content/80 leading-relaxed">
                Passionate full-stack developer experienced with React, Node, Express, MongoDB and Postgres.
                I build scalable, user-friendly applications and have hands-on experience with state management (Redux/TanStack Query), Prisma, and containerization with Docker.
              </p>
            </section>

            {/* Skills card */}
            <section className="card bg-base-100 shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Technical Skills</h3>
                <div className="text-sm text-base-content/60">Level</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* show top skills with progress */}
                {[
                  { name: "React.js", level: 90, icon: <RiReactjsFill /> },
                  { name: "Node.js", level: 85, icon: null },
                  { name: "MongoDB", level: 80, icon: <DiMongodb /> },
                  { name: "Postgres", level: 76, icon: <SiPostgresql /> },
                  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss /> },
                  { name: "Redux / TanStack", level: 82, icon: <SiRedux /> },
                ].map((s, i) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {s.icon && <span className="text-lg">{s.icon}</span>}
                        <span>{s.name}</span>
                      </div>
                      <div className="text-xs text-base-content/60">{s.level}%</div>
                    </div>

                    {/* daisyUI progress bar */}
                    <progress className="progress progress-primary w-full" value={s.level} max="100" />
                  </div>
                ))}
              </div>

              {/* other skills as badges */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-base-content/70 mb-2">Other tools & skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((sk) => (
                    <span key={sk} className="badge badge-outline">{sk}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="card bg-base-100 shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Projects</h3>
                <div className="text-sm text-base-content/60">Selected</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <article key={p.title} className="p-4 rounded-lg border border-base-200 hover:shadow-lg transition transform hover:-translate-y-1 bg-base-100">
                    <h4 className="font-semibold">{p.title}</h4>
                    <ul className="list-disc list-inside text-sm mt-2 text-base-content/75 space-y-1">
                      {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="btn btn-xs btn-outline">Live</a>
                      <a href="#" className="btn btn-xs btn-ghost">Code</a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right column: Contact, Experience, Education, Soft Skills */}
          <aside className={`space-y-6 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transform transition-all duration-700`} style={delayStyle(2)}>
            <section className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-base-content/70" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-xs text-base-content/70">saquibsayyed12345@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-base-content/70" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-xs text-base-content/70">+91 73784 11134</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-base-content/70" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-xs text-base-content/70">Solapur, Maharashtra, India</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <a href="https://github.com/saquibsayyedcoder" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm ">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Experience</h3>
              <div className="space-y-4">
                {experience.map((e, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{e.role}</div>
                        <div className="text-sm text-base-content/70">{e.company}</div>
                      </div>
                      <div className="text-xs text-base-content/60">{e.duration}</div>
                    </div>

                    <ul className="list-disc list-inside mt-2 text-sm text-base-content/75 space-y-1">
                      {e.bullets.slice(0, 4).map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <div>
                {education.map((ed, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{ed.institution}</div>
                        <div className="text-sm text-base-content/70">{ed.degree}</div>
                      </div>
                      <div className="text-xs text-base-content/60">{ed.duration}</div>
                    </div>
                    <div className="text-xs text-base-content/70 mt-1">{ed.location}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft skills */}
            <section className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="badge badge-outline">{s}</span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
