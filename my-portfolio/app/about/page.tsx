"use client";

export function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
            With several years of experience in modern web technologies, I help businesses and startups 
            build their digital presence and achieve their goals through thoughtful design and robust code.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            My journey in web development started with a curiosity about how things work on the internet. 
            What began as a hobby quickly turned into a career where I've had the opportunity to work on 
            projects ranging from small startups to enterprise-level applications.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open source 
            projects, writing about web development, or perfecting my espresso skills. I believe that 
            continuous learning and collaboration are key to staying at the forefront of technology.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            I'm committed to writing clean, maintainable code and delivering products that users love. 
            I thrive in collaborative environments and enjoy mentoring junior developers and sharing 
            knowledge with the community.
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg h-64"></div>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
              <li>🎓 <strong>Education:</strong> Computer Science degree</li>
              <li>💼 <strong>Experience:</strong> 5+ years in web development</li>
              <li>🌍 <strong>Location:</strong> Remote-friendly</li>
              <li>⚡ <strong>Specialization:</strong> Full-stack development</li>
              <li>🎯 <strong>Goal:</strong> Build impactful digital solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">My Approach</h2>
          <ul className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h4 className="font-semibold text-black dark:text-white">User-Centered Design</h4>
                <p className="text-sm">I prioritize user experience and accessibility in every project</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🔧</span>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Clean Code</h4>
                <p className="text-sm">Writing maintainable, scalable code is non-negotiable</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Performance First</h4>
                <p className="text-sm">I optimize for speed and efficiency across all platforms</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">What I Enjoy</h2>
          <ul className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <li className="flex gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Collaboration</h4>
                <p className="text-sm">Working with talented teams and getting diverse perspectives</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Learning</h4>
                <p className="text-sm">Staying updated with the latest technologies and best practices</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🌟</span>
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
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold">About</a>
            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <AboutSection />
    </div>
  );
}
