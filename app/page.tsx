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
} from "react-icons/fa6"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Home() {
  const [localTime, setLocalTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const bdTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }))
      setLocalTime(bdTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const ScrollReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Animated background */}
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

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div className="text-lg font-semibold text-white" whileHover={{ scale: 1.05 }}>
            Mahdin Islam
          </motion.div>
          <div className="flex gap-6 text-sm md:text-base">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src="https://avatars.githubusercontent.com/u/144510085?v=4"
                alt="Mahdin Islam Mukim"
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl border-2 border-blue-500/30 object-cover shadow-2xl"
              />
            </motion.div>

            {/* Hero Content */}
            <motion.div
              className="flex-1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Mahdin Islam Mukim</h1>
              <p className="text-xl text-blue-400 font-medium mb-4">Data Science | Robotics | Programming</p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                CSE student passionate about data-driven solutions and robotics. Focused on building intelligent systems
                and contributing to innovative projects with technical excellence and teamwork.
              </p>
              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Time Display */}
          <motion.div
            className="mt-12 p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center max-w-sm mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm">Local Time (BDT +6:00)</p>
            <p className="text-2xl font-mono font-semibold text-blue-400">{localTime}</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a Computer Science student at Northern University Bangladesh with a strong passion for data
                  science and robotics. I believe in continuous learning and applying technical knowledge to solve
                  real-world problems.
                </p>
                <p>
                  My journey includes participation in robotics competitions, innovation summits, and hackathons. I
                  value teamwork, leadership, and creative problem-solving.
                </p>
                <p className="text-blue-400 font-medium">
                  Currently exploring: Advanced Data Analysis, Embedded Systems, and AI Applications
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <FaMapPin className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm text-gray-400">Gazipur, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <FaPhone className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-400">+8801832544953</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <FaEnvelope className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">mahdinmukim575@gmail.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FaDatabase, title: "Data Science", skills: ["Python", "SQL", "Pandas", "NumPy"] },
              { icon: FaCode, title: "Programming", skills: ["C", "C++", "Python", "React"] },
              { icon: FaMicrochip, title: "Robotics", skills: ["Arduino", "Raspberry Pi", "IoT", "Sensors"] },
              { icon: FaWrench, title: "Tools", skills: ["Figma", "Excel", "Git", "Canva"] },
            ].map((skill, idx) => {
              const Icon = skill.icon
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition"
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="text-blue-400 text-3xl mb-3" />
                    <h3 className="font-semibold text-white mb-3">{skill.title}</h3>
                    <ul className="space-y-1">
                      {skill.skills.map((s, i) => (
                        <li key={i} className="text-sm text-gray-400">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects & Achievements */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Achievements & Activities</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Bronze Medalist", desc: "World Innovation Competition 2025" },
              { title: "2nd Runner-Up", desc: "NUB CSE Day Project Showcase 2023" },
              { title: "Vice President", desc: "NUB Computer Club" },
              { title: "Competition Experience", desc: "National Robotics, WRO, NASA Apps Challenge" },
              { title: "Campus Leadership", desc: "Joint Secretary - NUBCC & Central Social Welfare" },
              { title: "Tech Community", desc: "BASIS Student Forum Member, Campus Representative" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <motion.div
                  className="p-5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold text-blue-400 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { degree: "B.Sc. Computer Science", school: "Northern University Bangladesh" },
              { degree: "H.S.C.", school: "Bhawal Badre Alam Government College" },
              { degree: "S.S.C.", school: "B.A.R.I High School" },
            ].map((edu, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700" whileHover={{ x: 5 }}>
                  <p className="font-semibold text-white">{edu.degree}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.school}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 mb-8 max-w-2xl">
              I'm always open to new opportunities and conversations. Feel free to reach out through any of these
              channels.
            </p>
          </ScrollReveal>
          <motion.div className="flex flex-wrap gap-4">
            {[
              { icon: FaEnvelope, label: "Email", href: "mailto:mahdinmukim575@gmail.com" },
              { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mahdin-islam-mukim" },
              { icon: FaGithub, label: "GitHub", href: "https://github.com/mukimsoft" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              const label = contact.label
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 text-white transition"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Icon className="text-blue-400" />
                  {label}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          <p>2025 Mahdin Islam Mukim. Open to opportunities and collaboration.</p>
        </div>
      </footer>
    </div>
  )
}
