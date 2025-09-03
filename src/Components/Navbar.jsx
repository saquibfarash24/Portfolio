import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const navItems = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "About", path: "/about" },
  { id: 3, text: "My Skills", path: "/skills" },
  { id: 4, text: "My Projects", path: "/projects" },
  { id: 5, text: "Contact", path: "/contact" },
];

const THEME_KEY = "site-theme"; // localStorage key

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(null); // null until initialized

  // initialize theme once on mount
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      applyTheme(saved, false);
      return;
    }
    // fallback to OS preference
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // apply theme and optionally persist (persist is true by default)
  function applyTheme(t, persist = true) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
    if (persist) localStorage.setItem(THEME_KEY, t);
  }

  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark", true);
  }

  // safe render: if theme not initialized yet, avoid showing incorrect UI state
  if (theme === null) {
    return <div className="h-16" />; // placeholder spacer until theme applied
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="navbar max-w-screen-2xl mx-auto px-4 md:px-20 h-16">
          {/* left: logo */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img src="/img4.jpg" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
              <Link to="/" className="flex items-center gap-1">
                <span className="text-lg md:text-2xl font-bold">
                  SAQUIB<span className="text-primary">.</span>
                </span>
                <span className="hidden md:inline-block text-sm text-muted ml-2">Frontend Developer</span>
              </Link>
            </div>
          </div>

          {/* center / desktop nav */}
          <div className="hidden md:flex md:flex-none items-center space-x-6">
            <ul className="menu menu-horizontal p-0 gap-4 text-base">
              {navItems.map((it) => (
                <li key={it.id}>
                  <Link to={it.path} className="font-medium hover:text-primary transition-colors">
                    {it.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right: theme toggle + mobile button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
              className="btn btn-ghost btn-circle"
            >
              {theme === "dark" ? (
                <FaRegSun className="text-xl" />
              ) : (
                <FaRegMoon className="text-xl" />
              )}
            </button>

            {/* mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="btn btn-ghost btn-circle"
                aria-label="Toggle menu"
              >
                {menuOpen ? <ImCross size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed left-0 right-0 top-16 z-40 transition-transform duration-200 ${
          menuOpen ? "translate-y-0" : "-translate-y-3 pointer-events-none opacity-0"
        }`}
      >
        <div className="bg-base-100/90 backdrop-blur-sm shadow-lg border-b border-base-200">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems.map(({ id, text, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-medium hover:text-primary transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* spacer so page content doesn't hide under navbar */}
      <div className="h-16 md:h-16" />
    </>
  );
}

export default Navbar;
