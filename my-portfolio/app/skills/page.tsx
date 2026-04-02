"use client";

import { Palette, Accessibility, Zap, Lock, Smartphone, Brain } from "lucide-react";
import { MobileNav } from "../components/MobileNav";
import { ThemeToggle } from "../components/ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const skillCategories = [
  {
    category: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    description: "Creating scalable server-side solutions",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Deployment, automation, and development tools",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Vercel", level: 90 }
    ]
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Skills & Expertise</h2>
      {skillCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2 text-light-text dark:text-dark-text">{category.category}</h3>
            <p className="text-light-text-muted dark:text-dark-text-muted">{category.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {category.skills.map((skill, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-light-text dark:text-dark-text">{skill.name}</span>
                    <Badge variant="blue" className="text-xs">{skill.level}%</Badge>
                  </div>
                  <div className="w-full rounded-full h-2 bg-light-border dark:bg-dark-border">
                    <div 
                      className="h-2 rounded-full transition-all bg-accent-blue"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Skills */}
      <div className="mt-8 py-16">
        <h3 className="text-3xl font-bold mb-8 text-light-text dark:text-dark-text">Other Competencies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { Icon: Palette, title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces" },
            { Icon: Accessibility, title: "Accessibility", description: "Building inclusive web applications for all users" },
            { Icon: Zap, title: "Performance", description: "Optimizing applications for speed and efficiency" },
            { Icon: Lock, title: "Security", description: "Implementing best practices for secure applications" },
            { Icon: Smartphone, title: "Responsive Design", description: "Mobile-first development and cross-device testing" },
            { Icon: Brain, title: "Problem Solving", description: "Analytical thinking and creative solutions" }
          ].map((skill, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6 flex flex-col items-center">
                <skill.Icon className="w-10 h-10 mb-3 text-accent-blue" />
                <CardTitle className="mb-2 text-light-text dark:text-dark-text">{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Navigation */}
      <nav 
        className="sticky top-0 z-50 backdrop-blur border-b bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-80 transition">JS</a>
          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">About</a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Projects</a>
            <a href="/skills" className="text-black dark:text-white font-semibold">Skills</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">Contact</a>
            <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">Skills & Expertise</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Technologies and tools I use to build amazing products</p>
        </div>
      </section>

      <SkillsSection />

      {/* CTA Section */}
      <section className="py-16 px-6 bg-black dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for these skills?</h2>
          <p className="mb-8 text-gray-300">Let's talk about how I can help with your project</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
