"use client";

import { AboutSection } from "./about/page";
import { ProjectsSection } from "./projects/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Navigation */}
      <nav 
        className="sticky top-0 z-50 backdrop-blur border-b bg-white dark:bg-black border-gray-200 dark:border-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-black dark:text-white">Portfolio</h2>
          <div className="flex gap-6 text-sm items-center">
            <a 
              href="/about" 
              className="text-gray-600 dark:text-gray-300 hover:opacity-70 transition"
            >
              About
            </a>
            <a 
              href="/projects" 
              className="text-gray-600 dark:text-gray-300 hover:opacity-70 transition"
            >
              Projects
            </a>
            <a 
              href="/skills" 
              className="text-gray-600 dark:text-gray-300 hover:opacity-70 transition"
            >
              Skills
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 dark:text-gray-300 hover:opacity-70 transition"
            >
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-3xl text-center">
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-7xl font-bold mb-4 text-black dark:text-white"
            >
              Hi, I'm a Developer
            </h1>
            <p 
              className="text-2xl mb-6 text-gray-600 dark:text-gray-300"
            >
              Building beautiful and functional web experiences
            </p>
            <p 
              className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            >
              I create modern web applications with cutting-edge technologies. Let's build something amazing together.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <a 
              href="/contact" 
              className="px-8 py-3 rounded-lg font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition"
            >
              Get in Touch
            </a>
            <a 
              href="/projects" 
              className="px-8 py-3 rounded-lg font-semibold border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* All Page Sections */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer CTA */}
      <section 
        className="py-20 px-6 bg-black dark:bg-gray-950 text-white transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Something Amazing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Browse my portfolio, learn more about my work, or reach out to discuss your next project.</p>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <a 
              href="/projects" 
              className="px-8 py-3 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
            >
              Explore Projects
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}