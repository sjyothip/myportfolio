import React from "react";
import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(`Backend is not running. Please email me at ${portfolioData.email}.`);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's build something useful.</h2>
          <p className="contact-intro">
            Have a project, opportunity, or idea? Send a message and I'll get back to you.
          </p>
          <div className="contact-details">
            <a href={`mailto:${portfolioData.email}`}><FiMail /> {portfolioData.email}</a>
            <span><FiMapPin /> {portfolioData.location}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Message<textarea required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
          <button className="primary-btn" type="submit">Send Message <FiSend /></button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
