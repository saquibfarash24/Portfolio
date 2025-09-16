// Home.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  FaLinkedin, FaInstagram, FaGithub, FaYoutube
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import saqibimg from "/img4.jpg"; // public folder
import { Link } from "react-router-dom";

/* --- data with hover classes --- */
const SOCIALS = [
  {
    id: "li",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1",
    // LinkedIn blue on hover
    hoverClass:
      "hover:bg-[rgba(10,102,194,0.12)] hover:text-[#0A66C2] focus:ring-[#0A66C2]/30",
  },
  {
    id: "ig",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ss.saqib_muhammed/",
    // Instagram gradient on hover (subtle)
    hoverClass:
      "hover:bg-gradient-to-br hover:from-[#f58529]/20 hover:via-[#dd2a7b]/20 hover:to-[#8134af]/20 hover:text-[#DD2A7B] focus:ring-[#DD2A7B]/30",
  },
  {
    id: "gh",
    icon: <FaGithub />,
    href: "https://github.com/saquibsayyedcoder",
    // GitHub dark hover
    hoverClass: "hover:bg-[rgba(0,0,0,0.12)] hover:text-[#111827] focus:ring-[#111827]/30",
  },

];

const TECH = [
  { id: "mdb", icon: <DiMongodb />, hoverClass: "hover:bg-[rgba(16,185,129,0.12)] hover:text-[#10B981] focus:ring-[#10B981]/30" },
  { id: "ex", icon: <SiExpress />, hoverClass: "hover:bg-[rgba(250,204,21,0.12)] hover:text-[#F59E0B] focus:ring-[#F59E0B]/30" },
  { id: "node", icon: <FaNodeJs />, hoverClass: "hover:bg-[rgba(34,197,94,0.12)] hover:text-[#22C55E] focus:ring-[#22C55E]/30" },
  { id: "next", icon: <RiNextjsFill />, hoverClass: "hover:bg-[rgba(17,24,39,0.12)] hover:text-[#0F172A] focus:ring-[#0F172A]/30" },
  { id: "ts", icon: <SiTypescript />, hoverClass: "hover:bg-[rgba(14,165,233,0.12)] hover:text-[#0EA5E9] focus:ring-[#0EA5E9]/30" },
];

const TYPED_WORDS = ["Developer", "Programmer", "Coder"];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Typing effect states
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];

    // pause at end of word before deleting
    if (!isDeleting && subIndex === currentWord.length + 1) {
      const pause = setTimeout(() => setIsDeleting(true), 700);
      return () => clearTimeout(pause);
    }

    // when fully deleted move to next word
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % TYPED_WORDS.length);
      return;
    }

    const delta = isDeleting ? 60 : 120;
    const id = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1));
    }, delta);

    return () => clearTimeout(id);
  }, [subIndex, isDeleting, wordIndex]);

  const currentShown = TYPED_WORDS[wordIndex].slice(0, subIndex);

  return (
    <section
    id="home"
      name="home"
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url(/code2.jpeg)" }}
    >
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0) }
          50% { transform: translateY(-8px) }
          100% { transform: translateY(0) }
        }
        .floaty { animation: floaty 3.6s ease-in-out infinite; }
        .typed-caret {
          width: 2px;
          height: 1.1em;
          background: rgba(16,185,129,0.95);
          display: inline-block;
          margin-left: 6px;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink { 50% { opacity: 0 } }
      `}</style>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-20 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <div
            className={`md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 flex justify-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="relative group">
              <img
                src={saqibimg}
                alt="Saqib"
                className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover border-4 border-green-400 shadow-2xl floaty transform transition-all duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-8 group-hover:ring-green-300/20 transition-all duration-500" />
            </div>
          </div>

          {/* Text */}
          <div className={`md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-lg font-medium text-green-300 tracking-wide">Welcome To My Space</span>

            <div className="text-3xl md:text-4xl font-extrabold leading-tight flex flex-wrap items-baseline justify-center md:justify-start gap-3">
              <h1 className="text-white/95">Hello, I'm a</h1>
              <div className="text-green-400">
                <span className="inline-block">{currentShown}</span>
                <span className="typed-caret" aria-hidden />
              </div>
            </div>

            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
              I am a frontend web developer focusing on pixel-perfect designs and performant code.
              I build modern, responsive interfaces and add subtle interactions to improve UX.
            </p>

            {/* Socials & Tech */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
              {/* Social Icons */}
              <div className="w-full md:w-auto">
                <h2 className="text-lg font-semibold mb-3 text-white/95">Available On</h2>
                <div className="flex space-x-4 justify-center md:justify-start">
                  {SOCIALS.map((s, idx) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-offset-2 ${s.hoverClass} bg-white/5 text-white/95`}
                      style={{ transitionDelay: `${90 * idx}ms` }}
                      aria-label={s.id}
                    >
                      <span className="text-2xl">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="w-full md:w-auto">
                <h2 className="text-lg font-semibold mb-3 text-white/95">Currently Working On</h2>
                <div className="flex space-x-4 justify-center md:justify-start">
                  {TECH.map((t, idx) => (
                    <div
                      key={t.id}
                      className={`inline-flex items-center justify-center p-2 cursor-pointer rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-offset-2 ${t.hoverClass} bg-white/5 text-white/95`}
                      style={{ transitionDelay: `${90 * idx}ms` }}
                      aria-hidden
                    >
                      <span className="text-3xl">{t.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <Link to="/resume" className="inline-block">
              <button className="mt-6 px-6 py-3 bg-green-400 rounded-lg hover:bg-green-600 transition transform hover:-translate-y-1 shadow-md">
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
