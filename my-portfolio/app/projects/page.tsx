"use client";

import { MobileNav } from "../components/MobileNav";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "bg-gradient-to-br from-blue-400 to-blue-600",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for data visualization and real-time analytics with custom charts and comprehensive reports.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "bg-gradient-to-br from-purple-400 to-purple-600",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and file sharing capabilities.",
    tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    image: "bg-gradient-to-br from-green-400 to-green-600",
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "Smart content generation tool powered by AI with customizable templates and batch processing capabilities.",
    tech: ["Next.js", "OpenAI API", "Vercel", "PostgreSQL"],
    image: "bg-gradient-to-br from-orange-400 to-orange-600",
    link: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Unified platform for tracking social media metrics across multiple channels with actionable insights.",
    tech: ["React", "Python", "MongoDB", "Chart.js"],
    image: "bg-gradient-to-br from-pink-400 to-pink-600",
    link: "#"
  },
  {
    title: "Mobile App Backend",
    description: "Scalable REST API backend for a mobile fitness app with authentication, push notifications, and real-time data.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    image: "bg-gradient-to-br from-teal-400 to-teal-600",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`${project.image} rounded-lg h-48 mb-4 transition-transform group-hover:scale-105`}></div>
              <div className="rounded-lg p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-block font-semibold hover:underline text-blue-600 dark:text-blue-400">
                  View Project →
                </a>
              </div>
            </div>
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
