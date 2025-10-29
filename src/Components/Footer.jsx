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
                <h3 className="text-lg font-bold">Saquib Farash</h3>
                <div className="text-sm text-base-content/70">Software Engineer </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/saquibfarash24"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn btn-ghost btn-circle"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saquib-farash-0b9a8a284/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn btn-ghost btn-circle"
              >
                <FaLinkedin />
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
                  <a href="mailto:saquibfarash0346@gmail.com" className="text-sm link link-hover">saquibfarash0346@gmail.com</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-primary" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+91 9767862018" className="text-sm link link-hover">+91 9767862018</a>
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
  
        </div>

        {/* Divider + bottom row */}
        <div className="divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/70">
          <div>© {new Date().getFullYear()} Saquib Sajid Farash. All rights reserved.</div>
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
