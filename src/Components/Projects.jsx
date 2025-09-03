// Projects.jsx (theme-safe — daisyUI tokens + Tailwind animations)
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

/* Projects data (update image paths/URLs as needed) */
const projects = [
  {
    id: "honor",
    title: "HONOR FREELANCE",
    description:
      "A job search platform built using the MERN stack, with role-based access for recruiters and job seekers, job applications, and admin dashboards.",
    image: "/honor.png",
    url: "https://honorfreelance.com/",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
  },
  {
    id: "aizts",
    title: "AIZTS OFFICIAL WEBSITE",
    description:
      "Tech Stack: PostgreSQL, Node, Express, React, HTML, CSS, JavaScript, Tailwind CSS. Corporate site with CMS integration and responsive UI.",
    image: "/aizts.png",
    url: "https://aiztsinfotech.com/",
    tech: ["React", "Postgres", "Node", "Tailwind"],
  },
  {
    id: "chat",
    title: "CHAT APPLICATION (MERN + Socket.IO)",
    description:
      "Real-time chat with one-to-one & group conversations, presence, typing indicators and message history persisted in MongoDB. Scales to multi-instance with Redis pub/sub.",
    image: "/chatapp.jpg",
    url: null,
    tech: ["React", "Socket.IO", "Node", "MongoDB"],
  },
  {
    id: "jewel",
    title: "JEWELRY SHOP MANAGEMENT SYSTEM",
    description:
      "PERN stack application (Prisma + Postgres) that manages inventory, purchases, sales invoices, and customer profiles with a secure admin panel.",
    image: "/jewel2.jpg",
    url: null,
    tech: ["React", "Postgres", "Prisma", "Tailwind"],
  },
  {
    id: "school",
    title: "SCHOOL SUPER ADMIN MANAGEMENT",
    description:
      "Centralized super-admin system for multi-school management: student/teacher management, fee tracking, schedules and role-based authentication.",
    image: "/school.jpg",
    url: null,
    tech: ["React", "Node", "Postgres", "Prisma", "DaisyUI"],
  },
];

/* ProjectCard: theme-safe card — solid bg + image with overlay for readability */
function ProjectCard({ project, index = 0, onOpen = () => {} }) {
  if (!project) return null;

  return (
    <article
      className={`relative rounded-xl overflow-hidden border border-base-200
        transform transition duration-400 hover:-translate-y-2 hover:shadow-2xl
        flex flex-col bg-base-100 text-base-content`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Image area with dark overlay to guarantee readable text in all themes */}
      <div className="relative overflow-hidden h-52 md:h-44 lg:h-52">
        <img
          src={project.image ?? "/placeholder.png"}
          alt={project.title ?? "Project image"}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* consistent overlay for readability; use mix-blend or transparency */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          id={`project-${project.id}-title`}
          className="text-lg md:text-xl font-semibold text-base-content mb-2"
        >
          {project.title}
        </h3>

        <p className="text-sm text-base-content/70 flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {(project.tech ?? []).map((t) => (
              <span key={t} className="badge badge-outline badge-sm text-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary flex items-center gap-2"
                aria-label={`Open ${project.title} in new tab`}
              >
                Visit <FaExternalLinkAlt className="text-xs" />
              </a>
            ) : null}

            <button
              onClick={() => onOpen(project)}
              className="btn btn-ghost btn-sm"
              aria-label={`View details of ${project.title}`}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Modal component (theme-aware) */
function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-base-100 rounded-xl shadow-2xl overflow-hidden ring-1 ring-base-200">
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto md:min-h-[300px] overflow-hidden">
            <img
              src={project.image ?? "/placeholder.png"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 text-base-content">
            <h2 id="modal-title" className="text-2xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-base-content/70 mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Tech stack</h4>
              <div className="flex flex-wrap gap-2">
                {(project.tech ?? []).map((t) => (
                  <span key={t} className="badge badge-outline">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Open Project <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              ) : (
                <span className="text-sm text-base-content/60">No public link</span>
              )}

              <button onClick={onClose} className="btn btn-ghost">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Main Projects page */
export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          My Projects
        </h1>
        <p className="mt-2 text-base text-base-content/70 max-w-2xl mx-auto">
          Selected production and prototype apps — MERN & PERN, realtime systems, and enterprise dashboards.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`opacity-0 translate-y-6 ${mounted ? "opacity-100 translate-y-0" : ""} transition-all duration-500`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <ProjectCard project={p} index={i} onOpen={(proj) => setActive(proj)} />
          </div>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
