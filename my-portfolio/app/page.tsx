"use client";

import { AboutSection } from "./about/page";
import { ProjectsSection } from "./projects/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";
import { MobileNav } from "./components/MobileNav";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"
    >
      {/* Navigation */}
      <nav 
        className="sticky top-4 z-50 backdrop-blur bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border transition-colors duration-300 mx-auto mt-4 max-w-4xl rounded-2xl"
      >
        <div className="px-6 py-4 flex justify-between items-center w-full">
          <h2 className="text-lg sm:text-xl font-bold text-light-text dark:text-dark-text">JS</h2>
          <div className="hidden md:flex gap-6 text-sm items-center">
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
            <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 bg-light-bg-alt dark:bg-dark-bg-alt transition-colors duration-300"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-light-bg-alt dark:bg-dark-bg-alt shadow-2xl hover:shadow-none transition-shadow duration-300 group">
              <img 
                src="/assets/images/me.jpg" 
                alt="Jaybee" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-light-text dark:text-dark-text"
              >
                Hi, I'm Jaybee
              </h1>
              <p 
                className="text-lg sm:text-xl md:text-2xl mb-6 text-light-text-muted dark:text-dark-text-muted"
              >
                A System Engineer and a passionate Front-end Developer
              </p>
              <p 
                className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted"
              >
                I create modern web applications with cutting-edge technologies. Let's build something amazing together.
              </p>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-lg font-semibold bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg hover:opacity-80 transition text-center"
              >
                Get in Touch
              </a>
              <a 
                href="/projects" 
                className="px-8 py-3 rounded-lg font-semibold border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg transition text-center"
              >
                View My Work
              </a>
            </div>
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