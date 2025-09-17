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
import { FaReact } from "react-icons/fa";

const navItems = [
  { id: 1, text: "Home", path: "#home", icon: <FiHome /> },
  { id: 2, text: "About", path: "#about", icon: <FiUser /> },
  { id: 3, text: "My Skills", path: "#skills", icon: <FiCode /> },
  { id: 4, text: "My Projects", path: "#projects", icon: <FiBriefcase /> },
  { id: 5, text: "Contact", path: "#contact", icon: <FiMail /> },
];

const THEME_KEY = "site-theme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      applyTheme(saved, false);
      return;
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyTheme(t, persist = true) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
    if (persist) localStorage.setItem(THEME_KEY, t);
  }

  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark", true);
  }

  // ✅ ENHANCED SCROLL — WORKS EVERY TIME
  const scrollToSection = (e, path) => {
    e.preventDefault();
    const id = path.replace("#", "");
    setMenuOpen(false); // Close mobile menu

    let element = document.getElementById(id);

    // Retry if element not found immediately (hydration delay)
    if (!element) {
      setTimeout(() => {
        element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const scrollTop = elementTop - offset;
          window.scrollTo({ top: scrollTop, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Scroll immediately if found
    const offset = 80;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollTop = elementTop - offset;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // ✅ Auto-scroll on initial load or hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          const offset = 80;
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const scrollTop = elementTop - offset;
          // Small delay to ensure render
          setTimeout(() => {
            window.scrollTo({ top: scrollTop, behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Run on mount
    handleHashChange();

    // Listen for manual hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (theme === null) {
    return <div className="h-16" />;
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-base-100/90 backdrop-blur-sm">
        <div className="navbar max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 h-16">
          {/* Logo */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img
                src="/img4.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-primary"
              />
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex items-center gap-1 group"
              >
                <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  SAQUIB<span className="text-primary">.</span>
                </span>
                <p className="hidden md:inline-block text-sm text-base-content/70 ml-2 group-hover:text-primary transition-colors">
                  Frontend Developer | MERN PERN Stack | Software Engineer
                </p>
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:flex-none items-center space-x-1">
            <ul className="menu menu-horizontal p-0 gap-1">
              {navItems.map((it) => (
                <li key={it.id}>
                  <a
                    href={it.path}
                    onClick={(e) => scrollToSection(e, it.path)}
                    className="px-3 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    {it.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="btn btn-ghost btn-circle tooltip tooltip-bottom"
              data-tip={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            >
              {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="btn btn-ghost btn-circle"
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 flex
          transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Sidebar */}
        <div className="relative ml-auto w-80 bg-base-100 shadow-2xl h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-base-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaReact className="text-3xl text-blue-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                SAQUIB.
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="btn btn-ghost btn-circle hover:bg-error/10 hover:text-error"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className="flex items-center gap-4 p-4 rounded-xl font-medium text-base-content hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-base-200">
            <button
              onClick={toggleTheme}
              className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
              Switch to {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

export default Navbar;