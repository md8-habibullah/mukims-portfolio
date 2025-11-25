"use client"

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaDatabase,
  FaCode,
  FaMicrochip,
  FaWrench,
  FaArrowUpRightFromSquare,
  FaBars,
  FaX,
} from "react-icons/fa6"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const projects = [
  {
    name: "Hepatitis-C-Prediction",
    description: "ML project for hepatitis C prediction using data analysis",
    language: "Jupyter Notebook",
    link: "https://github.com/mukimsoft/Project-1_Hepatitis-C-Prediction",
  },
  {
    name: "Jenkins",
    description: "Automation and CI/CD pipeline project",
    language: "Shell",
    link: "https://github.com/mukimsoft/jenkins",
  },
  {
    name: "word_raider",
    description: "Python-based word game project",
    language: "Python",
    link: "https://github.com/mukimsoft/word_raider",
  },
  {
    name: "Business-Automation-Ltd",
    description: "Business automation and management system",
    language: "JavaScript",
    link: "https://github.com/mukimsoft/Business-Automation-Ltd",
  },
  {
    name: "AngryBird-demo",
    description: "Game project inspired by AngryBirds",
    language: "HTML",
    link: "https://github.com/mukimsoft/AngryBird-demo",
  },
  {
    name: "Quiz-Game-mrm-in-C",
    description: "Interactive quiz game built in C",
    language: "C",
    link: "https://github.com/mukimsoft/Quiz-Game-mrm-in-C",
  },
]

const achievements = [
  "Bronze Medalist - World Innovation Competition 2025",
  "2nd Runner-Up - NUB CSE Day Project Showcase 2023",
  "National Robotics Competition Participant",
  "NASA Apps Challenge Hackathon Participant",
  "Vice President - NUB Computer Club",
  "Campus Representative - World Innovation Competition",
]

export default function Home() {
  const [localTime, setLocalTime] = useState("")
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Achievements", "Projects", "Education"]

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      const bdTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }))
      setLocalTime(bdTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-base sm:text-lg font-semibold text-white whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
            >
              Mukim
            </motion.div>
            <div className="hidden md:flex gap-6 lg:gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs lg:text-sm text-gray-300 hover:text-blue-400 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <button className="md:hidden text-white text-xl p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaX /> : <FaBars />}
            </button>
          </div>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-gray-300 hover:text-blue-400 transition py-2 px-4 rounded hover:bg-slate-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src="https://avatars.githubusercontent.com/u/144510085?v=4"
                alt="Mukim"
                className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-2xl border-2 border-blue-500/30 object-cover shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Mukim</h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-400 font-medium mb-3 sm:mb-4">
                Data Science | Robotics | Programming
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                CSE student passionate about data-driven solutions and robotics. Focused on building intelligent systems
                and contributing to innovative projects with technical excellence and teamwork.
              </p>
              <motion.a
                href="#contact"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base rounded-lg font-medium transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-8 sm:mt-12 p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-xs sm:text-sm">Local Time (BDT +6:00)</p>
            <p className="text-lg sm:text-2xl font-mono font-semibold text-blue-400">{localTime || "Loading..."}</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
              <p>
                I'm a Computer Science student at Northern University Bangladesh with a strong passion for data science
                and robotics. I believe in continuous learning and applying technical knowledge to solve real-world
                problems.
              </p>
              <p>
                My journey includes participation in robotics competitions, innovation summits, and hackathons. I value
                teamwork, leadership, and creative problem-solving.
              </p>
              <p className="text-blue-400 font-medium">
                Currently exploring: Advanced Data Analysis, Embedded Systems, and AI Applications
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <FaMapPin className="text-blue-400 flex-shrink-0 mt-1 text-base sm:text-lg md:text-xl" />
                <div>
                  <p className="font-medium text-white text-xs sm:text-sm md:text-base">Location</p>
                  <p className="text-xs sm:text-sm text-gray-400">Gazipur, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <FaPhone className="text-blue-400 flex-shrink-0 mt-1 text-base sm:text-lg md:text-xl" />
                <div>
                  <p className="font-medium text-white text-xs sm:text-sm md:text-base">Phone</p>
                  <p className="text-xs sm:text-sm text-gray-400">+8801832544953</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <FaEnvelope className="text-blue-400 flex-shrink-0 mt-1 text-base sm:text-lg md:text-xl" />
                <div>
                  <p className="font-medium text-white text-xs sm:text-sm md:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-gray-400">mahdinmukim575@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: FaDatabase, title: "Data Science", skills: ["Python", "SQL", "Pandas", "NumPy"] },
              { icon: FaCode, title: "Programming", skills: ["C", "C++", "Python", "React"] },
              { icon: FaMicrochip, title: "Robotics", skills: ["Arduino", "Raspberry Pi", "IoT", "Sensors"] },
              { icon: FaWrench, title: "Tools", skills: ["Figma", "Excel", "Git", "Power BI"] },
            ].map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={idx}
                  className="p-4 sm:p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-3" />
                  <h3 className="font-semibold text-white mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                    {skill.title}
                  </h3>
                  <ul className="space-y-1">
                    {skill.skills.map((s, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-400">
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition text-xs sm:text-sm md:text-base text-gray-300"
                whileHover={{ scale: 1.02 }}
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition flex flex-col h-full group"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base group-hover:text-blue-400 transition">
                    {project.name}
                  </h3>
                  <FaArrowUpRightFromSquare className="text-blue-400 text-xs sm:text-sm flex-shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 flex-grow">{project.description}</p>
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-xs text-blue-400 font-medium">{project.language}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://github.com/mukimsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-base rounded-lg font-medium transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-base sm:text-lg" />
            See More on GitHub
          </motion.a>
        </div>
      </section>

      <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Education</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { degree: "B.Sc. Computer Science", school: "Northern University Bangladesh" },
              { degree: "H.S.C.", school: "Bhawal Badre Alam Government College" },
              { degree: "S.S.C.", school: "B.A.R.I High School" },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                className="p-4 sm:p-5 rounded-lg bg-slate-800/50 border border-slate-700"
                whileHover={{ x: 5 }}
              >
                <p className="font-semibold text-white text-xs sm:text-sm md:text-base">{edu.degree}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl text-xs sm:text-sm md:text-base">
            I'm always open to new opportunities and conversations. Feel free to reach out through any of these
            channels.
          </p>
          <motion.div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { icon: FaEnvelope, label: "Email", href: "mailto:mahdinmukim575@gmail.com" },
              { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mahdin-islam-mukim" },
              { icon: FaGithub, label: "GitHub", href: "https://github.com/mukimsoft" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 text-white transition text-xs sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Icon className="text-blue-400 text-sm sm:text-base" />
                  {contact.label}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-700 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-xs sm:text-sm text-gray-500">
          <p>2025 Mukim. Open to opportunities and collaboration.</p>
        </div>
      </footer>
    </div>
  )
}
