"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";

const LINKS = [
  { label: "Renovation", href: "/" },
  { label: "Facades", href: "/" },
  { label: "Flooring", href: "/" },
  { label: "Portfolio", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Get A Quote", href: "/" },
];

const menuVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Keeps track of which link you are hovering over
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  //   this is so that when you scroll on the mobile menu, you scroll the menu not the page behind it
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between border-b border-neutral-100 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-md">
      <div className="z-50 text-xl font-black uppercase tracking-wider text-black">
        <h1>mohammed azzam ahdab</h1>
      </div>

      {/* DESKTOP MENU */}
      <div
        className="hidden gap-8 md:flex"
        onMouseLeave={() => setHoveredIndex(null)} // Reset when mouse leaves the whole list
      >
        {LINKS.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            // 1. FIXED COLOR FLICKER: Used conditional logic instead of 'hover:' class.
            // If hoveredIndex matches, force White. Otherwise, Gray.
            className={`relative z-0 px-2 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
              hoveredIndex === index ? "text-white" : "text-neutral-500"
            }`}
          >
            {item.label}

            {/* THE PILL GHOST */}
            {hoveredIndex === index && (
              <motion.span
                layoutId="navbar-underline"
                // 2. FIXED SIZE: Changed 'inset-0' to negative values (-top-2 etc).
                // This makes the background bleed OUTWARDS effectively making it bigger
                // without changing the layout spacing.
                className="absolute -bottom-2 -left-4 -right-4 -top-2 -z-10 rounded-full bg-black"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
            )}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 focus:outline-none"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 flex h-dvh w-full flex-col justify-between overflow-y-auto bg-white px-6 pb-8 pt-24"
          >
            <div className="flex flex-col gap-4">
              {LINKS.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-neutral-100 py-4 text-3xl font-black uppercase tracking-tighter text-neutral-900 active:text-neutral-500"
                  >
                    {item.label}
                    <ArrowRight className="text-neutral-300" size={24} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
