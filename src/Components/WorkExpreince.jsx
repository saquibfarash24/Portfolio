// WorkExperience.jsx
import React from "react";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* === DATA ===
   normalized: startDate and endDate fields (endDate === "Present" when ongoing)
*/
const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    companyName: "AIZTS INFOTECH PVT LTD",
    startDate: "Aug 2024",
    endDate: "Present",
    location: "Remote / Office",
    tech: ["React.js", "MERN", "PostgreSQL", "Prisma", "Tailwind", "ShadCN UI", "Redux", "TanStack Query"],
    description: [
      "Delivered responsive, user-focused web applications for job portal, education, and jewelry e-commerce domains.",
      "Built clean, scalable UI using React.js, MERN stack, PostgreSQL, Prisma, Tailwind CSS, and ShadCN UI.",
      "Integrated APIs, optimized data flow, and ensured smooth frontend–backend communication.",
      "Managed application state with Redux Toolkit and TanStack React Query for improved performance.",
      "Enhanced UI/UX and cross-platform compatibility, ensuring mobile-first responsiveness.",
      "Collaborated with cross-functional teams using Git, GitHub, Docker, Linux, and Postman.",
    ],
    accent: "bg-gradient-to-br from-cyan-400 to-indigo-500",
  },
  {
    id: 2,
    role: "Intern",
    companyName: "AIZTS Infotech PVT LTD",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Pathruth Chowk, Solapur, Maharashtra",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    description: [
      "Developed and maintained responsive web interfaces using modern frontend technologies.",
      "Managed and optimized PostgreSQL and MongoDB databases.",
      "Integrated APIs to enhance frontend-backend communication.",
      "Used Git for version control and collaborated in teams to improve user experience and performance.",
    ],
    accent: "bg-gradient-to-br from-orange-300 to-purple-400",
  },
];

/* Tiny pill used for tech, date & location — theme-aware */
const Pill = ({ children, icon, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs md:text-sm px-2 py-1 rounded-full bg-base-200/60 text-base-content/90 ${className}`}
  >
    {icon && <span className="text-base-content/70">{icon}</span>}
    <span className="truncate">{children}</span>
  </span>
);

/* Tech pills */
const TechPills = ({ tech = [] }) => (
  <div className="flex flex-wrap gap-2  mt-3">
    {tech.map((t) => (
      <span
        key={t}
        className="text-[11px] hover:bg-gray-300 cursor-pointer md:text-xs px-2 py-1 rounded-full bg-base-200/40 text-base-content/85"
      >
        {t}
      </span>
    ))}
  </div>
);

/* Card */
const Card = ({ job, i }) => {
  const period = job.endDate ? `${job.startDate} — ${job.endDate}` : job.startDate;
  const isOngoing = String(job.endDate).toLowerCase() === "present";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.06, duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full overflow-hidden rounded-2xl shadow-lg"
      aria-labelledby={`job-${job.id}-title`}
    >
      {/* decorative accent stripe */}
      <div className={`h-2 ${job.accent} rounded-t-2xl`} />

      {/* content panel */}
      <div className="p-4 md:p-6 bg-base-100 text-base-content">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* left block: icon + main info */}
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center bg-primary/10 text-primary ring-1 ring-primary/20">
                <FaBuilding className="text-xl md:text-2xl" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 id={`job-${job.id}-title`} className="text-lg md:text-xl font-semibold leading-tight truncate">
                {job.companyName}
              </h3>

              {/* Role shown prominently on small screens under company */}
              <div className="mt-1 md:mt-2 text-sm md:text-base text-base-content/85 font-medium">
                {job.role}
              </div>

              {/* meta: dates + location
                  - stack vertically on mobile (gap-y), inline on md+
              */}
              <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap sm:items-center  gap-2 text-sm">
                <Pill icon={<FaCalendarAlt />} className="hover:bg-gray-300 cursor-pointer">{period}</Pill>
                <Pill icon={<FaMapMarkerAlt />} className="hover:bg-gray-300 cursor-pointer">{job.location}</Pill>
              </div>

              <TechPills tech={job.tech} />
            </div>
          </div>

          {/* right block: short period label + CTA (stack on small screens) */}
          <div className="flex md:flex-col items-center md:items-end gap-3">
            <div className="text-sm text-base-content/70 text-center md:text-right">
              <div className="font-medium">Status</div>
              <div className="text-lg md:text-xl font-extrabold text-base-content mt-1">
                {isOngoing ? "Ongoing" : job.endDate}
              </div>
              <div className="text-xs text-base-content/60 mt-1 hidden md:block">{job.startDate}</div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold bg-primary text-white shadow-md hover:brightness-95 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* description */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3 text-base-content">
              <FaTasks />
              <span className="font-semibold">What I shipped</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-base-content/85">
              {job.description.map((d, idx) => (
                <li key={idx} className="leading-relaxed">{d}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="text-base-content/85 font-medium mb-2">Key skills</div>
              <div className="w-full bg-base-200 rounded-full h-2 overflow-hidden">
                <div className="h-2 rounded-full bg-primary" style={{ width: "72%" }} />
              </div>
              <div className="mt-3 text-xs text-base-content/70">Worked with Git, Docker & Postman</div>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/projects"
                className="btn btn-ghost w-full md:w-auto"
                aria-label="View projects"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* Main component */
export default function WorkExperience() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12" name="work">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Work Experience
        </h1>
        <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
          Carefully crafted roles that focus on polish, performance and production-ready code.
        </p>
      </header>

      <div className="space-y-6">
        {workExperience.map((job, idx) => (
          <div key={job.id} className="relative">
            <Card job={job} i={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
