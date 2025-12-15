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

      <div className="hidden gap-8 md:flex">
        {LINKS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors hover:text-black"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-black underline underline-offset-4"
        >
          Get A Quote
        </Link>
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
