import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiSun,
  FiMoon,
  FiX,
} from "react-icons/fi";
import { FaReact, FaGraduationCap, FaTools, FaBuilding } from "react-icons/fa";

const navItems = [
  { id: 1, text: "Home", path: "#home", icon: <FiHome /> },
  { id: 2, text: "About", path: "#about", icon: <FiUser /> },
  { id: 3, text: "My Skills", path: "#skills", icon: <FiCode /> },
  { id: 4, text: "My Projects", path: "#projects", icon: <FiBriefcase /> },
  { id: 5, text: "Work Experience", path: "#exp", icon: <FiBriefcase /> },
  { id: 6, text: "Contact", path: "#contact", icon: <FiMail /> },
];

const THEME_KEY = "site-theme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      applyTheme(saved, false);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light", false);
  }, []);

  function applyTheme(t, persist = true) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    if (persist) localStorage.setItem(THEME_KEY, t);
  }

  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark", true);
  }

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const id = path.replace("#", "");
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (theme === null) return <div className="h-16" />;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-base-100/90 backdrop-blur-sm">
        <div className="navbar max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 h-16">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {/* ✅ Clicking this opens modal */}
              <img
                src="/s2.png"
                alt="Profile"
                onClick={() => setShowProfileModal(true)}
                className="h-10 w-10 rounded-full object-cover border-2 border-primary cursor-pointer hover:scale-105 transition-transform"
              />
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex items-center gap-1 group"
              >
                <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-800">
                  SAQUIB<span className="text-primary">.</span>
                </span>
                <p className="hidden md:inline-block text-sm text-base-content/70 ml-2 group-hover:text-cyan-500 transition-colors">
                  Backend Developer | PERN Stack | Software Engineer
                </p>
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="menu menu-horizontal p-0 gap-1">
              {navItems.map((it) => (
                <li key={it.id}>
                  <a
                    href={it.path}
                    onClick={(e) => scrollToSection(e, it.path)}
                    className="px-3 py-2 text-sm md:text-base font-medium rounded-lg transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    {it.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="btn btn-ghost btn-circle md:hidden">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Profile Modal (Works 100%) */}
      {showProfileModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-base-100 rounded-2xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <button
              className="btn btn-sm btn-circle absolute right-4 top-4"
              onClick={() => setShowProfileModal(false)}
            >
              <FiX />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Info */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                <img
                  src="/s2.png"
                  alt="Saquib"
                  className="w-28 h-28 rounded-full border-4 border-primary object-cover"
                />
                <h3 className="mt-3 text-xl font-bold">Saquib Sayyed</h3>
                <p className="text-sm text-base-content/70">
                  Backend Developer • PERN Stack
                </p>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-4 text-sm">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold">
                    <FaGraduationCap className="text-primary" /> Education
                  </h4>
                  <ul className="mt-1 space-y-1">
                    <li>
                      <strong>MCA</strong> — Shivaji University, Kolhapur (2024)
                    </li>
                    <li>
                      <strong>BCA</strong> — Solapur University (2022)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold">
                    <FaTools className="text-primary" /> Skills
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "React.js",
                      "PostgreSQL",
                      "Prisma",
                      "MongoDB",
                      "JWT",
                      "Docker",
                      "Git & GitHub",
                    ].map((skill, i) => (
                      <span key={i} className="badge badge-outline">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold">
                    <FaBuilding className="text-primary" /> Work Experience
                  </h4>
                  <ul className="mt-1 space-y-1">
                    <li>
                      <strong>Software Engineer</strong> — AIZTS Infotech Pvt. Ltd
                      (Jul 2024 – Present)
                    </li>
                    <li>
                      <strong>Process Executive</strong> — NVIDIA (Feb 2023 – Sep 2023)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 text-right">
              <button className="btn btn-primary" onClick={() => setShowProfileModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="h-16" />
    </>
  );
}

export default Navbar;
