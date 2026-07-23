"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, Building2, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Developer (MERN Stack)",
    company: "Nextupgrad Web Solutions",
    period: "May 2025 – Present",
    type: "Full-time",
    logo: "💼",
    description: [
      "Develop and maintain full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Build responsive user interfaces with React.js and modern CSS frameworks like Tailwind CSS",
      "Design and integrate RESTful APIs for seamless frontend-backend communication",
      "Collaborate with cross-functional teams to implement new features and resolve production issues",
      "Optimize application performance achieving improved page load times and user experience",
    ],
    achievements: [
      "Led frontend architecture for Airports Authority of India (AAI) portal – a high-impact government project",
      "Built full-scale School ERP system with 25+ modules used by multiple educational institutions",
    ],
    highlightProjects: [
      {
        name: "Airports Authority of India (AAI) Portal",
        role: "Frontend Developer | Dec 2025 – Present",
        description:
          "A government project for managing airport slots and tracking resources in real-time.",
        points: [
          "Developed and managed complete frontend architecture using Next.js",
          "Integrated multiple APIs for real-time data handling",
          "Implemented role-based access control for admins, airport & airline staff",
        ],
      },
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company: "Techpile Technology Pvt Ltd",
    period: "Sep 2024 – Apr 2025",
    type: "Internship",
    logo: "🎓",
    description: [
      "Assisted in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Worked on RESTful API integration and handled frontend-backend data flow",
      "Gained hands-on experience with MongoDB for database operations and schema design",
      "Participated in code reviews and collaborated with senior developers on feature implementation",
    ],
    achievements: [
      "Successfully contributed to production-ready applications during internship period",
      "Received positive feedback for quick learning and code quality",
    ],
    highlightProjects: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-[var(--primary)]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />
          <p className="mt-4 text-[var(--secondary)] max-w-xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Main Experience Card */}
                <div className="relative">
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] to-transparent hidden sm:block" />
                  )}

                  <div className="p-6 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-[var(--primary)]/30 transition-all">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 text-2xl">
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Building2 size={14} className="text-[var(--primary)]" />
                              <span className="text-[var(--primary)] font-medium text-sm">
                                {exp.company}
                              </span>
                              <span className="px-2 py-0.5 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[var(--secondary)]">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-[var(--primary)]/5 to-transparent border border-[var(--primary)]/10 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={16} className="text-[var(--primary)]" />
                          <span className="text-sm font-semibold text-[var(--primary)]">
                            Key Achievements
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                              <span className="text-[var(--accent)] mt-0.5">✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Highlight Projects (within current role) */}
                    {exp.highlightProjects.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <ArrowUpRight size={16} className="text-[var(--accent)]" />
                          <span className="text-sm font-semibold">Notable Client Projects</span>
                        </div>
                        {exp.highlightProjects.map((project, i) => (
                          <div
                            key={i}
                            className="p-4 bg-[var(--background)] border border-[var(--card-border)] rounded-xl"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <h4 className="font-semibold text-sm">{project.name}</h4>
                              <span className="text-xs text-[var(--secondary)] flex items-center gap-1">
                                <Calendar size={12} />
                                {project.role}
                              </span>
                            </div>
                            <p className="text-xs text-[var(--secondary)] mb-3">
                              {project.description}
                            </p>
                            <ul className="space-y-1.5">
                              {project.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-xs text-[var(--secondary)]">
                                  <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}