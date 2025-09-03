// Footer.jsx
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState(null); // null | "ok" | "error"
  const [subMsg, setSubMsg] = useState("");

  function validateEmail(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setSubStatus("error");
      setSubMsg("Please enter a valid email address.");
      return;
    }
    // fake success (no backend)
    setSubStatus("ok");
    setSubMsg("Thanks — you'll receive updates to your inbox.");
    setEmail("");
    setTimeout(() => {
      setSubStatus(null);
      setSubMsg("");
    }, 4500);
  }

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About / Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                <span className="font-bold text-primary">S</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Saquib Sayyed</h3>
                <div className="text-sm text-base-content/70">Full Stack Developer — MERN & PERN</div>
              </div>
            </div>

            <p className="text-sm text-base-content/70">
              I build scalable, user-first web applications using React, Node, Postgres/MongoDB and modern toolchains. Open to freelance & full-time roles.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/saquibsayyedcoder"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn btn-ghost btn-circle"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn btn-ghost btn-circle"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/ss.saqib_muhammed/?next=%2F"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="btn btn-ghost btn-circle"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="btn btn-ghost btn-circle"
              >
                <FaYoutube />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="btn btn-ghost btn-circle"
              >
                <BsTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li>
                <a href="/" className="link link-hover">Home</a>
              </li>
              <li>
                <a href="/about" className="link link-hover">About</a>
              </li>
              <li>
                <a href="/projects" className="link link-hover">Projects</a>
              </li>
              <li>
                <a href="/skills" className="link link-hover">Skills</a>
              </li>
              <li>
                <a href="/contact" className="link link-hover">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-base-content/80">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-primary" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:saquibsayyed12345@gmail.com" className="text-sm link link-hover">saquibsayyed12345@gmail.com</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-primary" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+917378411134" className="text-sm link link-hover">+91 73784 11134</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-base-content/70">Solapur, Maharashtra, India</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3">Subscribe</h4>

            <p className="text-sm text-base-content/70 mb-4">
              Get occasional updates about projects, tips, and availability. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                aria-label="Email address"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>

            {subStatus === "ok" && (
              <div className="alert alert-success mt-3 p-2 rounded-md text-sm">
                {subMsg}
              </div>
            )}
            {subStatus === "error" && (
              <div className="alert alert-error mt-3 p-2 rounded-md text-sm">
                {subMsg}
              </div>
            )}
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/70">
          <div>© {new Date().getFullYear()} Saquib Arif Sayyed. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="link link-hover">Privacy</a>
            <a href="/terms" className="link link-hover">Terms</a>
            <span className="text-xs text-base-content/50">Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
