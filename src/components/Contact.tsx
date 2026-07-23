"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, X } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.trim().length > 100) return "Name is too long";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email address";
        return undefined;
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3) return "Subject must be at least 3 characters";
        if (value.trim().length > 200) return "Subject is too long";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        if (value.trim().length > 2000) return "Message is too long (max 2000 characters)";
        return undefined;
      default:
        return undefined;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "niteshverma8105@gmail.com", href: "mailto:niteshverma8105@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8303246138", href: "tel:+918303246138" },
    { icon: MapPin, label: "Location", value: "Raebareli, Uttar Pradesh, India", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-[var(--primary)]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
          <p className="mt-4 text-[var(--secondary)] max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl hover:border-[var(--primary)]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                  <info.icon className="text-[var(--primary)]" size={20} />
                </div>
                <div>
                  <p className="text-xs text-[var(--secondary)]">{info.label}</p>
                  <p className="text-sm font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl"
            >
              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-600 dark:text-green-400"
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span className="text-sm font-medium flex-1">Message sent successfully! I'll get back to you soon.</span>
                  <button type="button" onClick={() => setStatus("idle")} className="hover:opacity-70">
                    <X size={16} />
                  </button>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400"
                >
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <span className="text-sm font-medium flex-1">{errorMessage}</span>
                  <button type="button" onClick={() => setStatus("idle")} className="hover:opacity-70">
                    <X size={16} />
                  </button>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-[var(--background)] border rounded-xl focus:outline-none focus:border-[var(--primary)] transition-colors text-sm ${
                      errors.name && touched.name ? "border-red-500" : "border-[var(--card-border)]"
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-[var(--background)] border rounded-xl focus:outline-none focus:border-[var(--primary)] transition-colors text-sm ${
                      errors.email && touched.email ? "border-red-500" : "border-[var(--card-border)]"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Project Collaboration"
                  className={`w-full px-4 py-3 bg-[var(--background)] border rounded-xl focus:outline-none focus:border-[var(--primary)] transition-colors text-sm ${
                    errors.subject && touched.subject ? "border-red-500" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.subject && touched.subject && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-[var(--background)] border rounded-xl focus:outline-none focus:border-[var(--primary)] transition-colors text-sm resize-none ${
                    errors.message && touched.message ? "border-red-500" : "border-[var(--card-border)]"
                  }`}
                />
                <div className="flex justify-between items-center mt-1.5">
                  {errors.message && touched.message ? (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ${formData.message.length > 2000 ? "text-red-500" : "text-[var(--secondary)]"}`}>
                    {formData.message.length}/2000
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}