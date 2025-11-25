"use client"

import { Mail, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-lg font-semibold">
            Mahdin Islam
          </a>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-muted-foreground transition">
              About
            </a>
            <a href="#skills" className="hover:text-muted-foreground transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-muted-foreground transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-muted-foreground transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance">Mahdin Islam Mukim</h1>
          <p className="text-xl text-muted-foreground mb-2">Data Science | Robotics | Programming | Team Leadership</p>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Motivated and detail-oriented technologist with expertise in data science, robotics, and intelligent
            systems. I solve real-world problems through data-driven solutions and contribute to innovative teams.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">About</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate technologist with a strong foundation in data science, robotics, and programming. With
              experience across multiple technical domains, I specialize in applying analytical thinking to solve
              complex, real-world problems.
            </p>
            <p>
              My background includes participation in national robotics competitions, innovation summits, and
              hackathons. I hold a Bachelor of Science degree from Northern University Bangladesh and have demonstrated
              leadership as Vice President of the NUB Computer Club.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="font-semibold">Bronze Medalist</p>
              <p className="text-sm text-muted-foreground">
                World Innovation Competition and Exhibition (National) 2025
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Second Runner-Up</p>
              <p className="text-sm text-muted-foreground">Project Showcase NUB CSE Day-2023</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Leadership</p>
              <p className="text-sm text-muted-foreground">Vice President at NUB Computer Club</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Competitions</p>
              <p className="text-sm text-muted-foreground">National Robotics Competition, World Robot Olympiad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Data Science & Analytics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Python (Pandas, NumPy, Matplotlib)</li>
                <li>• SQL & Database Management</li>
                <li>• Statistics & Machine Learning</li>
                <li>• Power BI & Data Visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Programming</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• C, C++, Python, React</li>
                <li>• Full-stack Development</li>
                <li>• Embedded Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Robotics & Hardware</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Arduino & Raspberry Pi</li>
                <li>• Sensors & Actuators</li>
                <li>• Microcontroller Programming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Design & Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Adobe Illustrator, Photoshop</li>
                <li>• Figma & Canva</li>
                <li>• Microsoft Office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="projects" className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Experience & Activities</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-semibold">Vice President</p>
              <p className="text-sm text-muted-foreground">NUB Computer Club</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Campus Representative</p>
              <p className="text-sm text-muted-foreground">World Innovation Competition and Exhibition (WICE)</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Executive Member</p>
              <p className="text-sm text-muted-foreground">BASIS Student Forum - NUB Chapter</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Volunteer</p>
              <p className="text-sm text-muted-foreground">NUB 6th Convocation & NASA Apps Challenge Hackathon</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Participant</p>
              <p className="text-sm text-muted-foreground">
                National Robotics Competition, World Robot Olympiad, NASA Apps Challenge, bdapps Innovation Summit 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Education</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-semibold">Bachelor of Science (B.Sc.)</p>
              <p className="text-sm text-muted-foreground">Northern University Bangladesh</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Higher Secondary Certificate (H.S.C)</p>
              <p className="text-sm text-muted-foreground">Bhawal Badre Alam Government College</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Secondary School Certificate (S.S.C)</p>
              <p className="text-sm text-muted-foreground">B.A.R.I High School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Get in Touch</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:mahdinmukim575@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Mail size={20} />
                <span>mahdinmukim575@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/mahdin-islam-mukim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mukimsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">📍 Gazipur, Bangladesh | +8801832544953</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Mahdin Islam Mukim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
