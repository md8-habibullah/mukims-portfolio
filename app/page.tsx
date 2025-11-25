"use client"

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaMapPin,
  FaPhone,
  FaFolder,
  FaDatabase,
  FaCode,
  FaMicrochip,
  FaWrench,
  FaArrowUpRightFromSquare,
  FaBars,
  FaTrophy,
  FaHeart,
  FaBuilding,
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
    language: "HTML, Python",
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

      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">

        {/* Background Glow Effects */}
        <div className="absolute top-20 right-0 -z-10 opacity-20 blur-[100px] pointer-events-none">
          <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 blur-[100px] pointer-events-none">
          <div className="w-[200px] h-[200px] bg-purple-600 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

            {/* Left Side: Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left space-y-6"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2"
                >
                  Available for Projects
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                  Mahdin Islam <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mukim</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium h-12 sm:h-auto">
                  Data Science | Robotics | Programming
                </p>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A CSE student passionate about data-driven solutions and intelligent systems.
                I build innovative projects that bridge the gap between software and hardware.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <motion.a
                  href="#contact"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.a>

                <motion.a
                  href="#projects"
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.a>
              </div>

              {/* Time Badge - Responsive & Single Line */}
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mt-4 sm:mt-0 whitespace-nowrap overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2 text-xs sm:text-sm">
                  <span className="text-slate-400">Dhaka, BD (GMT+6):</span>
                  <span className="font-mono font-semibold text-blue-400 tabular-nums">
                    {localTime || "Loading..."}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Glowing Backdrop */}
              <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-20 animate-pulse" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 border-2 border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                {/* Using standard img tag to prevent Next.js Config errors with external links */}
                <img
                  src="https://avatars.githubusercontent.com/u/144510085?v=4"
                  alt="Mahdin Islam Mukim"
                  className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                />
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  About <span className="text-blue-500">Me</span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm a <span className="text-white font-semibold">Computer Science student</span> at <span className="text-blue-400">Northern University Bangladesh</span> with a strong passion for data science and robotics.
                </p>
                <p>
                  I believe in continuous learning and applying technical knowledge to solve real-world problems. My journey includes participation in <span className="text-white">robotics competitions</span>, innovation summits, and hackathons. I value teamwork, leadership, and creative problem-solving.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="inline-block p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <p className="text-sm sm:text-base font-medium text-blue-300">
                  Currently exploring: <span className="text-white">Advanced Data Analysis, Embedded Systems, and AI Applications</span>
                </p>
              </div>
            </div>

            {/* Right Column: Contact Details */}
            <div className="flex flex-col gap-4 sm:gap-5">

              {/* Location Card */}
              <div className="group p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium text-lg">Gazipur, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Phone Card - Clickable */}
              <a href="tel:+8801832544953" className="group p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Phone</p>
                    <p className="text-white font-medium text-lg">+880 1832-544953</p>
                  </div>
                </div>
              </a>

              {/* Email Card - Clickable */}
              <a href="mailto:mahdinmukim575@gmail.com" className="group p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium text-lg truncate">mahdinmukim575@gmail.com</p>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Optional background glow for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Technical <span className="text-blue-500">Skills</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              A comprehensive toolkit for building intelligent systems and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaDatabase,
                title: "Data Science",
                desc: "Extracting insights",
                skills: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn"]
              },
              {
                icon: FaCode,
                title: "Programming",
                desc: "Building foundations",
                skills: ["C", "C++", "Python", "JavaScript", "React"]
              },
              {
                icon: FaMicrochip,
                title: "Robotics",
                desc: "Hardware interface",
                skills: ["Arduino", "Raspberry Pi", "IoT", "Sensors", "ROS"]
              },
              {
                icon: FaWrench,
                title: "Tools & DevOps",
                desc: "Workflow efficiency",
                skills: ["Git", "Docker", "Linux", "Figma", "VS Code"]
              },
            ].map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <Icon className="text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">
                          {skill.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {skill.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium text-blue-200 bg-blue-900/30 rounded-full border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Honors & <span className="text-yellow-400">Achievements</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="group relative p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="relative flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 flex-shrink-0 mt-1">
                    {/* Assuming you have FaTrophy imported, if not use FaMedal or generic icon */}
                    <FaTrophy className="text-lg" />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Featured <span className="text-blue-500">Projects</span>
              </h2>
              <p className="text-slate-400">A selection of my recent technical work.</p>
            </div>

            <motion.a
              href="https://github.com/mukimsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-lg" />
              <span>View Github</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Top Row: Folder Icon & Arrow */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaFolder className="text-xl" />
                  </div>
                  <FaArrowUpRightFromSquare className="text-slate-500 group-hover:text-blue-400 transition-colors text-sm" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack Badge */}
                <div className="pt-4 border-t border-slate-700/50 flex items-center gap-2 mt-auto">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-blue-300 border border-slate-700">
                    {project.language}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Only Github Button */}
          <div className="text-center sm:hidden">
            <motion.a
              href="https://github.com/mukimsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition shadow-lg shadow-blue-900/20"
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              <span>See More on GitHub</span>
            </motion.a>
          </div>
        </div>
      </section>
      {/* Education Section - Timeline Style */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-500">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education <span className="text-slate-500">History</span>
            </h2>
          </div>

          <div className="space-y-6 relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800" />

            {[
              { degree: "B.Sc. in Computer Science", school: "Northern University Bangladesh", year: "Current" },
              { degree: "Higher Secondary (H.S.C.)", school: "Bhawal Badre Alam Government College", year: "Completed" },
              { degree: "Secondary School (S.S.C.)", school: "B.A.R.I High School", year: "Completed" },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative pl-12 sm:pl-16 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 top-3 w-4 h-4 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors duration-300 -translate-x-1/2 z-10" />

                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400 border border-slate-700 self-start sm:self-auto">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FaBuilding className="text-slate-600" />
                    {edu.school}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's <span className="text-blue-500">Work Together</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { icon: FaEnvelope, label: "Email Me", href: "mailto:mahdinmukim575@gmail.com", color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400" },
              { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mahdin-islam-mukim", color: "hover:bg-blue-600/10 hover:border-blue-500/50 hover:text-blue-400" },
              { icon: FaGithub, label: "GitHub", href: "https://github.com/mukimsoft", color: "hover:bg-slate-700/50 hover:border-slate-500 hover:text-white" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800/40 border border-slate-700 text-slate-300 font-semibold transition-all duration-300 ${contact.color}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-xl" />
                  <span>{contact.label}</span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 relative z-10 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">Mukim<span className="text-blue-500">.</span></span>
            <p className="text-slate-500 text-sm mt-1">Building intelligent systems for the future.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Mahdin Islam Mukim. All rights reserved.
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}
