// Contact.jsx (theme-safe — light & dark readable)
import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ACCESS_KEY = "276eb250-123f-43a6-9db9-22aca0b556c1";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => {
        setStatus(null);
        setStatusMessage("");
      }, 6000);
      return () => clearTimeout(t);
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      const first = Object.keys(v)[0];
      const el = formRef.current?.querySelector(`[name="${first}"]`);
      el?.focus();
      return;
    }

    setSending(true);
    try {
      const payload = {
        access_key: ACCESS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Contact form — ${form.name}`,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data?.success) {
        setStatus("success");
        setStatusMessage("Thanks — your message has been sent. I will reply soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("web3forms error", data);
        setStatus("error");
        setStatusMessage("Something went wrong — please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Network error — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
     id="contact"
      name="contact"
      className="relative w-full min-h-screen flex items-center py-24"
      style={{ backgroundImage: "url('/contact.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      {/* lighter overlay so cards remain readable in light theme */}
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: Contact card (solid bg for theme consistency) */}
          <div
            className="card bg-base-100 text-base-content shadow-2xl rounded-2xl p-6 sm:p-8 transform transition duration-500 hover:scale-[1.01]"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className="text-3xl font-extrabold mb-2 text-base-content">
              CONTACT ME
            </h2>

            <p className="text-sm text-base-content/70 mb-6">
              Have a project, a question or want to collaborate? Send me a message — I usually reply within 24–48 hours.
            </p>

            {/* Status */}
            {status === "success" && (
              <div className="alert alert-success shadow-lg mb-4">
                <div>
                  <FaCheckCircle className="text-green-600 w-5 h-5" />
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-error shadow-lg mb-4">
                <div>
                  <FaTimesCircle className="text-red-600 w-5 h-5" />
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">Full name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className={`input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/60 ${errors.name ? "input-error" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">Email address</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  className={`input input-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/60 ${errors.email ? "input-error" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">Message</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or question..."
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className={`textarea textarea-bordered w-full bg-base-100 text-base-content placeholder:text-base-content/60 ${errors.message ? "textarea-error" : ""}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Actions */}
              <div className="flex flex-col md:flex-row items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className={`btn btn-primary flex items-center gap-2 w-full md:w-auto ${sending ? "btn-disabled" : ""} transition-transform hover:-translate-y-0.5`}
                >
                  {sending ? <FaSpinner className="animate-spin" /> : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setErrors({}); }}
                  className="btn btn-ghost w-full md:w-auto"
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-outline ml-auto"
                >
                  Print
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Info / socials */}
          <aside className="space-y-6">
            <div className="card bg-base-100 text-base-content shadow-lg rounded-2xl p-6 transform transition duration-500 hover:scale-[1.01]">
              <h3 className="text-lg font-semibold mb-3 text-base-content">Contact Info</h3>

              <ul className="space-y-3 text-sm text-base-content/80">
                <li className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-primary" />
                  <div>
                    <div className="font-medium text-base-content">Email</div>
                    <div className="text-xs text-base-content/70">saquibfarash0346@gmail.com</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-primary" />
                  <div>
                    <div className="font-medium text-base-content">Phone</div>
                    <div className="text-xs text-base-content/70">+91 9767862018 </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-primary" />
                  <div>
                    <div className="font-medium text-base-content">Location</div>
                    <div className="text-xs text-base-content/70">Solapur, Maharashtra, India</div>
                  </div>
                </li>
              </ul>

              <div className="divider my-4" />

              <div>
                <h4 className="text-sm font-medium mb-2 text-base-content">Find me on</h4>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/saquibfarash24" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/saquib-farash-0b9a8a284/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 text-base-content shadow-lg rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-base-content">Office Hours</h3>
              <p className="text-sm text-base-content/80 mb-2">Mon — Fri: 10:00 AM — 7:00 PM</p>
              <p className="text-sm text-base-content/70">Open to remote work & freelancing. Please email to schedule a call.</p>

              <div className="mt-4">
                <a
                  href="mailto:saquibfarash0346@gmail.com"
                  className="btn btn-primary btn-sm w-full"
                >
                  <FaEnvelope /> Email Me
                </a>
              </div>
            </div>

            {/* Map card — responsive Google Maps iframe */}

          </aside>
        </div>
      </div>
    </section>
  );
}
