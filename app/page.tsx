"use client"
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const ScrollReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          <motion.a href="#" className="text-lg md:text-xl font-bold text-white" whileHover={{ scale: 1.05 }}>
            Mahdin Islam
          </motion.a>
          <div className="flex gap-4 sm:gap-8 text-sm md:text-base">
            {["About", "Skills", "Achievements", "Education", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight mb-4"
            variants={itemVariants}
          >
            Mahdin Islam Mukim
          </motion.h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-semibold mb-6" variants={itemVariants}>
            Data Science | Robotics | Programming | Leadership
          </motion.p>
          <motion.p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed" variants={itemVariants}>
            Building intelligent systems through data-driven solutions. Specialized in AI, embedded systems, and
            full-stack development. Driven by innovation and real-world problem solving.
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">About Me</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I'm a motivated technologist with expertise in data science, robotics, and full-stack programming. I
                  combine analytical thinking with hands-on technical implementation to solve complex real-world
                  problems.
                </p>
                <p>
                  My background includes national robotics competitions, innovation summits, and hackathon
                  participation. I hold a B.Sc. from Northern University Bangladesh and have demonstrated leadership in
                  tech communities.
                </p>
                <p className="text-cyan-400 font-semibold">
                  Always eager to contribute to innovative projects within forward-thinking teams.
                </p>
              </div>
            </ScrollReveal>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Data Science", icon: "📊" },
                { label: "Full-Stack Dev", icon: "💻" },
                { label: "Robotics", icon: "🤖" },
                { label: "Embedded Systems", icon: "⚙️" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-900/70 transition duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <p className="text-sm font-semibold text-white">{skill.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Key Achievements</h2>
          </ScrollReveal>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Bronze Medalist", subtitle: "World Innovation Competition 2025" },
              { title: "2nd Runner-Up", subtitle: "Project Showcase NUB CSE Day 2023" },
              { title: "Vice President", subtitle: "NUB Computer Club" },
              { title: "10+ Competitions", subtitle: "NASA, WRO, Robotics Events" },
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-900/70 transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="text-2xl font-bold text-cyan-400 mb-2">{achievement.title}</p>
                <p className="text-sm text-gray-300">{achievement.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Skills & Expertise</h2>
          </ScrollReveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                category: "Data Science",
                skills: ["Python, Pandas, NumPy", "SQL & Databases", "ML & Statistics", "Power BI"],
              },
              {
                category: "Programming",
                skills: ["C, C++, Python", "React & Next.js", "Full-Stack Dev", "Embedded Systems"],
              },
              {
                category: "Robotics",
                skills: ["Arduino & Raspberry Pi", "Sensors & Actuators", "Microcontroller Prog", "IoT Systems"],
              },
              {
                category: "Tools & Design",
                skills: ["Adobe Suite", "Figma & Canva", "Git & DevOps", "Microsoft Office"],
              },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-900/70 transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold text-cyan-400 mb-4 text-lg">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.skills.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Education</h2>
          </ScrollReveal>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { degree: "B.Sc. in Computer Science", school: "Northern University Bangladesh" },
              { degree: "Higher Secondary Certificate", school: "Bhawal Badre Alam Government College" },
              { degree: "Secondary School Certificate", school: "B.A.R.I High School" },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-900/70 transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <p className="font-semibold text-white text-lg">{edu.degree}</p>
                <p className="text-sm text-gray-400 mt-2">{edu.school}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-blue-500/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Get in Touch</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              I'm always interested in hearing about new projects and opportunities. Let's connect!
            </p>
          </ScrollReveal>
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, label: "Email", href: "mailto:mahdinmukim575@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mahdin-islam-mukim" },
              { icon: Github, label: "GitHub", href: "https://github.com/mukimsoft" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-cyan-500/50 hover:bg-slate-900/70 transition duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={20} className="text-cyan-400" />
                  <span className="text-white">{contact.label}</span>
                </motion.a>
              )
            })}
          </motion.div>
          <motion.div
            className="pt-8 mt-8 border-t border-blue-500/20 space-y-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>📍 Gazipur, Bangladesh</p>
            <p>📱 +8801832544953</p>
          </motion.div>
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
