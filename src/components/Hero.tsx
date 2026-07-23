"use client";

import { motion } from "framer-motion";
import { Download, Mail, Globe, ExternalLink, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--primary)]/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--accent)]/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[var(--primary)]/3 to-[var(--accent)]/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-500">Available for work</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--primary)] font-medium text-lg mb-2 tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            >
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Nitesh Verma
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-xl sm:text-2xl md:text-3xl text-[var(--secondary)] mb-4 font-semibold"
            >
              Full-Stack Developer (MERN)
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-[var(--secondary)] mb-6"
            >
              <MapPin size={16} className="text-[var(--primary)]" />
              <span className="text-sm">Raebareli, Uttar Pradesh, India</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-[var(--secondary)] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Professional Full-Stack Developer with <strong className="text-[var(--foreground)]">1 year</strong> of experience specializing in{" "}
              <strong className="text-[var(--foreground)]">Next.js</strong> and the{" "}
              <strong className="text-[var(--foreground)]">MERN stack</strong>. Built enterprise-level applications for{" "}
              <strong className="text-[var(--primary)]">Airports Authority of India (AAI)</strong> and School ERP systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/30 hover:shadow-xl inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Mail size={18} />
                <span className="relative">Hire Me</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="group px-8 py-3.5 border-2 border-[var(--primary)]/30 hover:border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/5 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3 mt-8"
            >
              <span className="text-xs text-[var(--secondary)] tracking-wider uppercase mr-2">Find me on</span>
              <div className="h-px w-8 bg-[var(--card-border)]" />
              {[
                { icon: Globe, href: "https://github.com/niteshverma", label: "GitHub" },
                { icon: ExternalLink, href: "https://linkedin.com/in/niteshverma", label: "LinkedIn" },
                { icon: Mail, href: "mailto:niteshverma8105@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] rounded-full opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
              
              {/* Main circle */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full animate-pulse-glow" />
                <div className="absolute inset-3 bg-[var(--card-bg)] rounded-full flex items-center justify-center border-2 border-[var(--card-border)] group-hover:border-[var(--primary)]/30 transition-all duration-500">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl mb-2 animate-float">👨‍💻</div>
                    <p className="text-xs sm:text-sm text-[var(--secondary)] font-medium">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-[var(--secondary)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-[var(--secondary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}