"use client";

import { Palette, Wrench, Rocket, Handshake, BookOpen, Star, GraduationCap, Briefcase, Globe, Zap, Target } from "lucide-react";
import { MobileNav } from "../components/MobileNav";
import { ThemeToggle } from "../components/ThemeToggle";

export function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <h1 className="text-5xl font-bold mb-12 text-black dark:text-white">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I'm a System Engineer in my current job, but my true passion lies in web development. I specialize in front-end development, creating responsive and user-friendly websites and applications.
          </p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            My journey in web development started with a curiosity about how things work on the internet. 
            Also, I'm a techy at heart, always eager to learn and experiment with new tools and techniques.
          </p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open source 
            projects, writing about web development, or perfecting my espresso skills. I believe that 
            continuous learning and collaboration are key to staying at the forefront of technology.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm committed to writing clean, maintainable code and delivering products that users love. 
            I seek to even learn more about back-end development and DevOps to become a well-rounded full-stack developer in the future.
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-accent-blue rounded-lg h-64"></div>
          <div className="rounded-lg p-6 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Quick Facts</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Education:</strong>  BS in Information Technology</span>
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Experience:</strong> 1+ years in Systems Engineer</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Location:</strong> Remote-friendly</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Specialization:</strong> Front-End Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Goal:</strong> Build impactful digital solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">My Approach</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <Palette className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">User-Centered Design</h4>
                <p className="text-sm">I prioritize user experience and accessibility in every project</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Wrench className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">Clean Code</h4>
                <p className="text-sm">Writing maintainable, scalable code is non-negotiable</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Rocket className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">Performance First</h4>
                <p className="text-sm">I optimize for speed and efficiency across all platforms</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">What I Enjoy</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <Handshake className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">Collaboration</h4>
                <p className="text-sm">Working with talented teams and getting diverse perspectives</p>
              </div>
            </li>
            <li className="flex gap-3">
              <BookOpen className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">Learning</h4>
                <p className="text-sm">Staying updated with the latest technologies and best practices</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Star className="text-2xl shrink-0" />
              <div>
                <h4 className="font-semibold text-black dark:text-white">Problem Solving</h4>
                <p className="text-sm">Tackling challenging problems and finding elegant solutions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg backdrop-blur border-b border-light-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-80 transition">JS</a>
          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="/about" className="text-black dark:text-white font-semibold">About</a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Projects</a>
            <a href="/skills" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Skills</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Contact</a>
            <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Self-taught developer passionate about building elegant web experiences</p>
        </div>
      </section>

      <AboutSection />

      {/* CTA Section */}
      <section className="bg-black dark:bg-gray-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">JS</h2>
          <p className="text-gray-300 mb-8">I'm open to freelance projects and job opportunities</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
