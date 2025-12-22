"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import Image from "next/image";

const LINKS = [
	{ label: "Projects", href: "/projects" },
	{ label: "Material Manufacturing", href: "/material-manufacturing" },
	{ label: "Contact", href: "/contact" },
	{ label: "About me", href: "/aboutus" },
];

const menuVariants: Variants = {
	initial: { x: "100%" },
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
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 },
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 },
	},
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		// 1. Outer Shell: Handles Position, Background, Blur, and Border only.
		// Removed 'px-6' and flex utilities from here.
		<nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 py-4 shadow-sm backdrop-blur-md">
			{/* 2. MaxWidthWrapper: Handles the width constraints and alignment */}
			<MaxWidthWrapper className="flex items-center justify-between">
				{/* LOGO */}
				<Link href="/">
					<Image
						src="/logo.png"
						width={80}
						height={44}
						alt="logo gang"
					/>
				</Link>

				{/* DESKTOP MENU */}
				<div
					className="hidden gap-8 md:flex"
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{LINKS.map((item, index) => (
						<Link
							key={item.label}
							href={item.href}
							onMouseEnter={() => setHoveredIndex(index)}
							className={`relative z-0 px-2 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${hoveredIndex === index
								? "text-white"
								: "text-neutral-500"
								}`}
						>
							{item.label}
							{hoveredIndex === index && (
								<motion.span
									layoutId="navbar-underline"
									className="absolute -bottom-3 -left-4 -right-4 -top-3 -z-10 rounded-full bg-black"
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

				{/* MOBILE TOGGLE */}
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
			</MaxWidthWrapper>
			{/* MOBILE MENU OVERLAY */}
			{/* Kept outside the wrapper so it fills the screen properly */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed inset-0 z-40 flex h-dvh w-full flex-col justify-between overflow-y-auto overscroll-contain bg-white px-6 pb-8 pt-24"
					>
						<div className="flex flex-col gap-4">
							{LINKS.map((item) => (
								<motion.div
									key={item.label}
									variants={itemVariants}
								>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="flex items-center justify-between border-b border-neutral-100 py-4 text-3xl font-black uppercase tracking-tighter text-neutral-900 active:text-neutral-500"
									>
										{item.label}
										<ArrowRight
											className="text-neutral-300"
											size={24}
										/>
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
