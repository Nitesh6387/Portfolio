"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Shield, Database, Wifi, BookOpen, Truck, Layers, Stethoscope, Clock, Lock, ShoppingCart, BarChart, MessageSquare, CreditCard, Bell, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "School ERP System",
    tagline: "Enterprise-level school management solution",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    description:
      "A full-featured enterprise-level web application to manage and automate school operations with 25+ modules.",
    tech: ["Next.js", "Redux", "React-Bootstrap", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      { icon: Layers, text: "25+ modules including student management, transport, library, exams, attendance, inventory, SMS, and user management" },
      { icon: Shield, text: "Role-based access control for admins, staff, teachers, and students" },
      { icon: Database, text: "Designed MongoDB database architecture for efficient data storage and retrieval" },
      { icon: BookOpen, text: "Built scalable frontend with Next.js, Redux, and React-Bootstrap for responsive UI" },
      { icon: Truck, text: "Implemented transport management and inventory (stock) tracking modules" },
      { icon: Wifi, text: "Integrated SMS notifications for real-time communication with parents" },
    ],
  },
  {
    title: "E-Commerce Dashboard",
    tagline: "Real-time analytics & inventory management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    description:
      "A comprehensive e-commerce analytics dashboard with real-time sales tracking, inventory management, and customer insights for online retailers.",
    tech: ["Next.js", "Chart.js", "Node.js", "Express.js", "MongoDB", "Redis"],
    highlights: [
      { icon: ShoppingCart, text: "Real-time sales tracking with interactive charts and revenue analytics" },
      { icon: BarChart, text: "Advanced reporting system with customizable date ranges and export options" },
      { icon: Bell, text: "Automated low-stock alerts and inventory threshold notifications" },
      { icon: TrendingUp, text: "Customer behavior analytics with purchase pattern recognition" },
      { icon: CreditCard, text: "Multi-payment gateway integration with transaction monitoring" },
      { icon: Users, text: "Role-based dashboards for admin, manager, and staff views" },
    ],
  },
  {
    title: "Slot Management & Resource Tracking System",
    tagline: "Government project for Airports Authority of India (AAI)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    description:
      "A comprehensive system for managing airport slots and tracking resources in real-time for the Airports Authority of India.",
    tech: ["Next.js", "REST APIs", "Role-based Access", "Real-time Data"],
    highlights: [
      { icon: Layers, text: "Developed and managed the complete frontend architecture from scratch" },
      { icon: Wifi, text: "Integrated multiple APIs for real-time data handling and seamless backend communication" },
      { icon: Shield, text: "Implemented role-based access control for admins, airport staff, and airline personnel" },
      { icon: Calendar, text: "Built slot booking and scheduling system with conflict detection" },
      { icon: Users, text: "Collaborated with backend developers to ensure smooth data flow and feature integration" },
      { icon: Clock, text: "Real-time resource tracking and status updates across multiple airport stakeholders" },
    ],
  },
  {
    title: "Hospital Management System",
    tagline: "Web-based healthcare operations management",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    description:
      "A web-based system for managing hospital operations with role-based access for Admin, Doctor, and Patient functionalities.",
    tech: ["Next.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      { icon: Shield, text: "Role-based system for Admin, Doctor, and Patient with secure authentication" },
      { icon: Stethoscope, text: "Patient appointment booking, scheduling, and doctor availability management" },
      { icon: Clock, text: "Appointment history and prescription management for patients" },
      { icon: Lock, text: "Secure authentication and authorization for different user roles" },
      { icon: Database, text: "Integrated APIs for managing patient records, appointments, and doctor availability" },
      { icon: Users, text: "Doctor dashboard with patient management and appointment approvals" },
    ],
  },
  {
    title: "Real-Time Chat Application",
    tagline: "Scalable messaging platform",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80",
    description:
      "A real-time messaging platform with group chats, file sharing, and end-to-end encryption for team collaboration.",
    tech: ["React.js", "Socket.io", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    highlights: [
      { icon: MessageSquare, text: "Real-time messaging with Socket.io for instant communication" },
      { icon: Users, text: "Group chat creation with admin controls and member management" },
      { icon: Shield, text: "End-to-end encryption for secure private conversations" },
      { icon: Bell, text: "Push notifications for new messages and mentions" },
      { icon: Database, text: "Message history with search functionality and media attachments" },
      { icon: Lock, text: "JWT-based authentication with session management" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-[var(--primary)]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
          <p className="mt-4 text-[var(--secondary)] max-w-xl mx-auto">
            Projects I've built, contributed to, and led from concept to deployment
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--primary)]/30 transition-all"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden min-h-[250px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--card-bg)] lg:via-transparent lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 sm:p-8">
                  {/* Tag */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-3">
                    {project.tagline}
                  </span>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--secondary)] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--secondary)]">
                        <div className="w-6 h-6 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon size={12} className="text-[var(--primary)]" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
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