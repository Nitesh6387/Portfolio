"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Box,
  Workflow,
  Container,
  Smartphone,
  Shield,
  Zap,
  Palette,
  Layout,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
    skills: [
      { name: "Next.js", icon: Globe },
      { name: "React.js", icon: Code2 },
      { name: "JavaScript (ES6+)", icon: Terminal },
      { name: "TypeScript", icon: Code2 },
      { name: "HTML5 & CSS3", icon: Layout },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Bootstrap", icon: Box },
      { name: "Redux", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-400",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Workflow },
      { name: "RESTful APIs", icon: Globe },
      { name: "Authentication", icon: Shield },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-yellow-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Schema Design", icon: Workflow },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Postman", icon: Zap },
      { name: "VS Code", icon: Code2 },
      { name: "Docker", icon: Container },
      { name: "npm", icon: Box },
    ],
  },
];

const skillPairs = [
  { name: "Frontend", value: "Next.js, React, Tailwind" },
  { name: "Backend", value: "Node.js, Express, APIs" },
  { name: "Database", value: "MongoDB, MySQL" },
  { name: "Tools", value: "Git, Docker, Postman" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4 tracking-wider uppercase">
            <Zap size={12} />
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-[var(--primary)]">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        {/* Equal height grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div className="w-full p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl hover:border-[var(--primary)]/30 transition-all relative overflow-hidden flex flex-col">
                {/* Gradient header accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-4 pt-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                    <category.icon size={15} className="text-white" />
                  </div>
                  <h3 className="font-bold text-sm">{category.title}</h3>
                </div>

                {/* Skills as Badges */}
                <div className="flex flex-wrap gap-1.5 flex-1 content-start">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.03 * i + 0.15 }}
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium rounded-lg ${category.bgColor} ${category.borderColor} border ${category.textColor} hover:scale-105 transition-transform cursor-default`}
                    >
                      <skill.icon size={10} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom label */}
                <div className="mt-3 pt-3 border-t border-[var(--card-border)]">
                  <span className="text-[9px] uppercase tracking-wider text-[var(--secondary)] font-medium">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise summary row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {skillPairs.map((pair) => (
            <div key={pair.name} className="p-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-center">
              <div className="text-xs font-semibold text-[var(--primary)]">{pair.name}</div>
              <div className="text-[10px] text-[var(--secondary)] mt-0.5">{pair.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}