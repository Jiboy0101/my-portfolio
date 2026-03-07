"use client";

import { useState } from "react";

const contactMethods = [
  {
    icon: "✉️",
    title: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    link: "https://linkedin.com"
  },
  {
    icon: "👨‍💻",
    title: "GitHub",
    value: "github.com/yourprofile",
    link: "https://github.com"
  },
  {
    icon: "𝕏",
    title: "Twitter",
    value: "@yourhandle",
    link: "https://twitter.com"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Send me a Message</h3>
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-12">
            Feel free to reach out through any of these channels. I typically respond within 24 hours.
          </p>
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg hover:shadow-lg transition border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{method.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{method.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">I'm always interested in hearing about new projects and opportunities</p>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <section className="bg-black dark:bg-zinc-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
