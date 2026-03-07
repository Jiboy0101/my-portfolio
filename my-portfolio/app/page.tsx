"use client";

import { AboutSection } from "./about/page";
import { ProjectsSection } from "./projects/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Portfolio</h2>
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-3xl text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Hi, I'm a Developer</h1>
            <p className="text-2xl text-zinc-600 dark:text-zinc-300 mb-6">Building beautiful and functional web experiences</p>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">I create modern web applications with cutting-edge technologies. Let's build something amazing together.</p>
          </div>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <a href="/contact" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition">Get in Touch</a>
            <a href="/projects" className="px-8 py-3 border border-black dark:border-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">View My Work</a>
          </div>
        </div>
      </section>

      {/* All Page Sections */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-black dark:bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Something Amazing?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Browse my portfolio, learn more about my work, or reach out to discuss your next project.</p>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <a href="/projects" className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">Explore Projects</a>
            <a href="/contact" className="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
