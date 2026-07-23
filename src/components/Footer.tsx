"use client";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-[var(--card-border)] bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[var(--secondary)]">
            &copy; {new Date().getFullYear()} Nitesh Verma
          </div>
          <p className="text-xs text-[var(--secondary)] flex items-center gap-1">
            Built with <Heart size={11} className="text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}