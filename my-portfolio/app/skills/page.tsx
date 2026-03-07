"use client";

const skillCategories = [
  {
    category: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 85 },
      { name: "Svelte", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    description: "Creating scalable server-side solutions",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 95 }
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Deployment, automation, and development tools",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 80 }
    ]
  },
  {
    category: "Testing & Quality",
    description: "Ensuring code quality and reliability",
    skills: [
      { name: "Jest", level: 90 },
      { name: "React Testing Library", level: 85 },
      { name: "Cypress", level: 80 },
      { name: "Unit Testing", level: 90 },
      { name: "Integration Testing", level: 85 },
      { name: "ESLint", level: 90 }
    ]
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
      {skillCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">{category.category}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{category.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {category.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Skills */}
      <div className="mt-8 bg-zinc-50 dark:bg-zinc-900 py-16 -mx-6 px-6">
        <h3 className="text-3xl font-bold mb-8">Other Competencies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🎨", title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces" },
            { icon: "♿", title: "Accessibility", description: "Building inclusive web applications for all users" },
            { icon: "⚡", title: "Performance", description: "Optimizing applications for speed and efficiency" },
            { icon: "🔒", title: "Security", description: "Implementing best practices for secure applications" },
            { icon: "📱", title: "Responsive Design", description: "Mobile-first development and cross-device testing" },
            { icon: "🧠", title: "Problem Solving", description: "Analytical thinking and creative solutions" }
          ].map((skill, i) => (
            <div key={i} className="bg-white dark:bg-zinc-800 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h4 className="font-bold mb-2">{skill.title}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold">Skills</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">Technologies and tools I use to build amazing products</p>
        </div>
      </section>

      <SkillsSection />

      {/* CTA Section */}
      <section className="black dark:bg-zinc-950 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for these skills?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Let's talk about how I can help with your project</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
