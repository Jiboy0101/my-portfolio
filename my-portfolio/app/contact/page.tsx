"use client";

import { useState } from "react";
import { Mail, Briefcase, Code } from "lucide-react";
import { MobileNav } from "../components/MobileNav";
import { ThemeToggle } from "../components/ThemeToggle";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const contactMethods = [
  {
    Icon: Mail,
    title: "Email",
    value: "jaybeesantua1130@gmail.com",
    link: "mailto:jaybeesantua1130@gmail.com"
  },
  {
    Icon: Briefcase,
    title: "LinkedIn",
    value: "linkedin.com/in/jaybee-santua",
    link: "https://www.linkedin.com/in/jaybee-santua/"
  },
  {
    Icon: Code,
    title: "GitHub",
    value: "github.com/Jiboy0101/",
    link: "https://github.com/Jiboy0101/"
  },
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
    <section className="py-20 px-6 max-w-4xl mx-auto bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black dark:text-white">Let's Work Together</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-light-text dark:text-dark-text">Send me a Message</h3>
          {submitted && (
            <div className="mb-6 p-4 rounded-lg bg-accent-green/20 text-accent-green border border-accent-green/50">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="flex w-full rounded-md border border-light-border bg-light-bg px-3 py-2 text-sm text-light-text placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-text focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text dark:placeholder:text-gray-400 dark:focus-visible:ring-dark-text dark:focus-visible:ring-offset-dark-bg resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-light-text dark:text-dark-text">Get in Touch</h3>
          <p className="mb-12 text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted">
            Feel free to reach out through any of these channels. I typically respond within 24 hours.
          </p>
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <Card key={i} className="cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6">
                  <a
                    href={method.link}
                    target={method.link.startsWith("http") ? "_blank" : undefined}
                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4"
                  >
                    <method.Icon className="w-8 h-8 shrink-0 text-accent-blue mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-light-text dark:text-dark-text">{method.title}</h4>
                      <p className="text-light-text-muted dark:text-dark-text-muted text-sm">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg backdrop-blur border-b border-light-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-80 transition">JS</a>
          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">About</a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Projects</a>
            <a href="/skills" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Skills</a>
            <a href="/contact" className="text-black dark:text-white font-semibold">Contact</a>
            <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">Let's Work Together</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">I'm always interested in hearing about new projects and opportunities</p>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <section className="bg-black dark:bg-gray-950 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
