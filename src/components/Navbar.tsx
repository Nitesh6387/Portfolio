"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="text-xl md:text-2xl font-bold relative group"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Nitesh
            </span>
            <span className="text-[var(--primary)]">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--primary)] rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <div className="w-px h-6 bg-[var(--card-border)] mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="hover:rotate-90 transition-transform" />
              ) : (
                <Moon size={18} className="hover:-rotate-12 transition-transform" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleClick(link.href)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? "text-[var(--primary)] bg-[var(--primary)]/5"
                        : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}