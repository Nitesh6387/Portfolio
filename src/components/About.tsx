"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Users, Award, Calendar, MapPin, Download, Mail, Phone, Globe, ExternalLink } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React.js, Next.js, JavaScript, Tailwind CSS, Bootstrap",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express.js, RESTful APIs",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, MySQL",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, GitHub, Postman, VS Code",
    gradient: "from-purple-500 to-pink-400",
  },
];

const stats = [
  { value: "1+", label: "Years Experience", icon: Calendar },
  { value: "5+", label: "Projects Delivered", icon: Award },
  { value: "3+", label: "Technologies", icon: Code2 },
  { value: "2", label: "Companies Worked", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[var(--section-alt)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4 tracking-wider uppercase">
            <Users size={12} />
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-[var(--primary)]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="p-6 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  NV
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nitesh Verma</h3>
                  <p className="text-sm text-[var(--primary)]">Full-Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4 text-[var(--secondary)] leading-relaxed">
                <p>
                  I am a passionate <strong className="text-[var(--foreground)]">Full-Stack Developer</strong> with a Diploma in Computer Science & Engineering from Feroze Gandhi Polytechnic, Raebareli.
                </p>
                <p>
                  Currently working as an <strong className="text-[var(--foreground)]">Associate Software Developer (MERN Stack)</strong> at Nextupgrad Web Solutions since May 2025.
                </p>
                <p>
                  Led frontend architecture for the <strong className="text-[var(--primary)]">Airports Authority of India (AAI)</strong> portal and built full-scale School ERP systems with 25+ modules.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: MapPin, label: "Location", value: "Raebareli, UP" },
                  { icon: Calendar, label: "Experience", value: "1+ Year" },
                  { icon: Mail, label: "Email", value: "niteshverma8105@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 8303246138" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 p-3 bg-[var(--background)] rounded-xl border border-[var(--card-border)]">
                    <item.icon size={14} className="text-[var(--primary)] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-[var(--secondary)] uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-xl font-medium text-sm transition-all group"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right - Highlights + Stats + Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* What I Do */}
            <div className="p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
              <h3 className="font-bold text-base mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                  <Code2 size={16} className="text-[var(--primary)]" />
                </span>
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="group p-4 bg-[var(--background)] border border-[var(--card-border)] rounded-xl hover:border-[var(--primary)]/30 transition-all relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl`} />
                    <div className="flex items-start gap-3 pl-0 group-hover:pl-2 transition-all">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-[var(--secondary)] mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                  <Award size={16} className="text-[var(--primary)]" />
                </span>
                Current Focus
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Globe, text: "Building scalable web applications with Next.js & MERN stack" },
                  { icon: Database, text: "Designing efficient database architectures with MongoDB" },
                  { icon: Users, text: "Leading frontend architecture for government projects (AAI)" },
                  { icon: ExternalLink, text: "Exploring cloud deployment with Docker & CI/CD pipelines" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-[var(--primary)]" />
                    </div>
                    <p className="text-sm text-[var(--secondary)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-center hover:border-[var(--primary)]/30 transition-all"
                >
                  <stat.icon size={18} className="mx-auto mb-2 text-[var(--primary)]" />
                  <div className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[var(--secondary)] mt-0.5 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}