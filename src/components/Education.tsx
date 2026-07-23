"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, School, Award } from "lucide-react";

const education = [
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Feroze Gandhi Polytechnic, Raebareli",
    period: "2021 – 2024",
    type: "Diploma",
    description:
      "Completed diploma with first division. Started learning coding during this phase.",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "S.G.I.C Ghorwara, Raebareli",
    period: "2019 – 2021",
    type: "School",
    description: "Completed 12th with first division.",
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4 tracking-wider uppercase">
            <GraduationCap size={12} />
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-[var(--primary)]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 sm:p-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-[var(--primary)]/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors">
                    <item.icon className="text-[var(--primary)]" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base">{item.degree}</h3>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--secondary)] whitespace-nowrap">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--primary)] font-medium mb-2">{item.institution}</p>
                    <p className="text-sm text-[var(--secondary)]">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}