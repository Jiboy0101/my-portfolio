"use client";

import { MobileNav } from "../components/MobileNav";
import { ThemeToggle } from "../components/ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "bg-accent-blue",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for data visualization and real-time analytics with custom charts and comprehensive reports.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "bg-accent-purple",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and file sharing capabilities.",
    tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    image: "bg-accent-green",
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "Smart content generation tool powered by AI with customizable templates and batch processing capabilities.",
    tech: ["Next.js", "OpenAI API", "Vercel", "PostgreSQL"],
    image: "bg-accent-orange",
    link: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Unified platform for tracking social media metrics across multiple channels with actionable insights.",
    tech: ["React", "Python", "MongoDB", "Chart.js"],
    image: "bg-accent-pink",
    link: "#"
  },
  {
    title: "Mobile App Backend",
    description: "Scalable REST API backend for a mobile fitness app with authentication, push notifications, and real-time data.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    image: "bg-accent-teal",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-light-text dark:text-dark-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <Card key={i} className="group cursor-pointer hover:shadow-xl transition-shadow">
              <div className={`${project.image} rounded-t-lg h-48 transition-transform group-hover:scale-105`}></div>
              <CardHeader>
                <CardTitle className="text-light-text dark:text-dark-text">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <Badge key={j} variant="blue" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" variant="default">
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg backdrop-blur border-b border-light-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-80 transition">JS</a>
          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition">About</a>
            <a href="/projects" className="text-black dark:text-white font-semibold">Projects</a>
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
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">A showcase of recent work and side projects I've built</p>
        </div>
      </section>

      <ProjectsSection />

      {/* CTA Section */}
      <section className="bg-black dark:bg-gray-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a project?</h2>
          <p className="text-gray-300 mb-8">Let's discuss how I can help bring your ideas to life</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
