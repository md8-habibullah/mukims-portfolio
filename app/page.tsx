"use client"

import { Mail, Github, Linkedin, Code2, Zap, Database, Cpu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen dark-gradient-bg text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/95 to-transparent backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Mahdin Islam
          </a>
          <div className="flex gap-4 sm:gap-8 text-sm md:text-base">
            <a href="#about" className="hover:text-blue-400 transition duration-300">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition duration-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mahdin Islam Mukim
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Data Science | Robotics | Programming | Team Leadership
            </p>
            <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl leading-relaxed">
              Motivated technologist building intelligent systems through data-driven solutions and innovative robotics
              projects. Specialized in AI, embedded systems, and full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-gray-300/90 leading-relaxed">
              <p>
                I'm a passionate technologist with expertise in data science, robotics, and full-stack programming. I
                combine analytical thinking with hands-on technical implementation to solve complex real-world problems.
              </p>
              <p>
                My background includes national robotics competitions, innovation summits, and hackathon participation.
                I hold a B.Sc. from Northern University Bangladesh and have demonstrated leadership in technical
                communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
                <Code2 className="text-blue-400 mb-3 group-hover:text-cyan-400 transition" size={28} />
                <p className="text-sm text-gray-300">Full-Stack Development</p>
              </div>
              <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
                <Database className="text-blue-400 mb-3 group-hover:text-cyan-400 transition" size={28} />
                <p className="text-sm text-gray-300">Data Science & ML</p>
              </div>
              <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
                <Cpu className="text-blue-400 mb-3 group-hover:text-cyan-400 transition" size={28} />
                <p className="text-sm text-gray-300">Embedded Systems</p>
              </div>
              <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
                <Zap className="text-blue-400 mb-3 group-hover:text-cyan-400 transition" size={28} />
                <p className="text-sm text-gray-300">Robotics & IoT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Key Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
              <div className="text-cyan-400 font-bold text-2xl mb-2">Bronze</div>
              <p className="font-semibold text-sm">World Innovation Competition</p>
              <p className="text-xs text-gray-400 mt-2">National 2025</p>
            </div>
            <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
              <div className="text-cyan-400 font-bold text-2xl mb-2">2nd</div>
              <p className="font-semibold text-sm">Project Showcase</p>
              <p className="text-xs text-gray-400 mt-2">NUB CSE Day 2023</p>
            </div>
            <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
              <div className="text-cyan-400 font-bold text-2xl mb-2">Lead</div>
              <p className="font-semibold text-sm">NUB Computer Club</p>
              <p className="text-xs text-gray-400 mt-2">Vice President</p>
            </div>
            <div className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300">
              <div className="text-cyan-400 font-bold text-2xl mb-2">10+</div>
              <p className="font-semibold text-sm">Competition & Events</p>
              <p className="text-xs text-gray-400 mt-2">NASA, WRO, Robotics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-cyan-400 flex items-center gap-2">
                <Code2 size={20} /> Data Science
              </h3>
              <ul className="space-y-2 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Python, Pandas, NumPy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>SQL & Databases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>ML & Statistics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Power BI, Matplotlib
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-cyan-400 flex items-center gap-2">
                <Code2 size={20} /> Programming
              </h3>
              <ul className="space-y-2 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>C, C++, Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Full-Stack Dev
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Embedded Systems
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-cyan-400 flex items-center gap-2">
                <Cpu size={20} /> Robotics & Hardware
              </h3>
              <ul className="space-y-2 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Arduino & Raspberry Pi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Sensors & Actuators
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Microcontroller Prog
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>IoT Systems
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-cyan-400 flex items-center gap-2">
                <Zap size={20} /> Tools & Design
              </h3>
              <ul className="space-y-2 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Adobe Suite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Figma & Canva
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Git & DevOps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Microsoft Office
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Experience & Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Vice President", org: "NUB Computer Club", icon: "👥" },
              { role: "Campus Representative", org: "World Innovation Competition (WICE)", icon: "🌍" },
              { role: "Executive Member", org: "BASIS Student Forum - NUB", icon: "🚀" },
              { role: "Volunteer", org: "NUB Convocation & NASA Hackathon", icon: "🤝" },
              { role: "Participant", org: "National Robotics & WRO", icon: "🤖" },
              { role: "Competition", org: "NASA Apps Challenge, bdapps Summit", icon: "🏆" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-semibold text-cyan-400 text-sm">{item.role}</p>
                <p className="text-xs text-gray-400 mt-2">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Education</h2>
          <div className="space-y-4">
            {[
              { degree: "Bachelor of Science (B.Sc.)", school: "Northern University Bangladesh" },
              { degree: "Higher Secondary Certificate (H.S.C)", school: "Bhawal Badre Alam Government College" },
              { degree: "Secondary School Certificate (S.S.C)", school: "B.A.R.I High School" },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="tech-border rounded-lg p-6 group hover:border-cyan-500/50 transition duration-300"
              >
                <p className="font-semibold text-cyan-400">{edu.degree}</p>
                <p className="text-sm text-gray-300 mt-2">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Get in Touch</h2>
          <div className="space-y-6 sm:space-y-8">
            <p className="text-gray-300/90 text-lg">
              I'm always interested in hearing about new projects and opportunities. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <a
                href="mailto:mahdinmukim575@gmail.com"
                className="flex items-center gap-3 px-4 sm:px-6 py-3 rounded-lg tech-border group hover:border-cyan-500/50 hover:bg-blue-500/10 transition duration-300 w-full sm:w-auto"
              >
                <Mail size={20} className="text-blue-400 group-hover:text-cyan-400" />
                <span className="text-sm sm:text-base group-hover:text-cyan-400 transition">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/mahdin-islam-mukim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 sm:px-6 py-3 rounded-lg tech-border group hover:border-cyan-500/50 hover:bg-blue-500/10 transition duration-300 w-full sm:w-auto"
              >
                <Linkedin size={20} className="text-blue-400 group-hover:text-cyan-400" />
                <span className="text-sm sm:text-base group-hover:text-cyan-400 transition">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mukimsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 sm:px-6 py-3 rounded-lg tech-border group hover:border-cyan-500/50 hover:bg-blue-500/10 transition duration-300 w-full sm:w-auto"
              >
                <Github size={20} className="text-blue-400 group-hover:text-cyan-400" />
                <span className="text-sm sm:text-base group-hover:text-cyan-400 transition">GitHub</span>
              </a>
            </div>
            <div className="pt-4 space-y-2 text-gray-400 text-sm">
              <p>📍 Gazipur, Bangladesh</p>
              <p>📱 +8801832544953</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm text-gray-400">
          <p>© 2025 Mahdin Islam Mukim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
