"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { INDEX_HERO_CONTENT } from "./constants";
import { motion, type Variants } from "motion/react";

// 1. RESPONSIVE BUTTONS
// Mobile: w-full for easier tapping, smaller text.
// Desktop: auto width, larger text.
const buttonVars =
	"relative flex items-center justify-center rounded-full transition-all duration-300 " +
	"bg-white text-neutral-900 font-bold shadow-md " +
	"text-sm py-3.5 px-6 w-full sm:w-auto " + // Mobile: tall touch target, full width
	"md:text-lg md:py-3.5 md:px-8 " + // Desktop: larger text
	"hover:bg-neutral-100 active:scale-95";

// 2. GLASS CARD STYLES
// We use different classes for the mobile (flow) and desktop (absolute) versions
const glassCardStyles =
	"z-10 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg " +
	"text-neutral-100 font-light leading-relaxed tracking-wide text-center " +
	"text-xs px-4 py-3 mx-auto max-w-[95%] " + // Mobile sizing
	"md:text-xl md:text-left md:max-w-2xl md:px-6 md:py-4"; // Desktop sizing

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
	},
};

const Hero = () => {
	return (
		// Reduced outer padding on mobile for a more immersive look
		<main className="flex justify-center py-2 md:py-6">
			<MaxWidthWrapper>
				<div className="relative flex flex-col justify-center rounded-2xl md:rounded-[2.5rem] min-h-[85dvh] md:h-200 overflow-hidden shadow-2xl">
					{/* 1. BACKGROUND IMAGE & ADAPTIVE GRADIENTS */}
					<div className="absolute inset-0 select-none">
						<Image
							src={INDEX_HERO_CONTENT.image.src}
							alt={INDEX_HERO_CONTENT.image.alt}
							fill
							className="object-cover"
							priority
							sizes="100vw"
						/>
						{/* Mobile Gradient: Darker at bottom for text readability */}
						<div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/80 md:hidden" />
						{/* Desktop Gradient: Darker on left for text readability */}
						<div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/70 via-black/40 to-transparent" />
					</div>

					{/* 2. MAIN CONTENT */}
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="relative z-10 flex flex-col items-center md:items-start justify-center grow px-4 md:px-12 py-12 md:py-0"
					>
						<div className="max-w-4xl space-y-6 md:space-y-10 w-full">
							{/* Title: 3xl on mobile prevents overflow, scales up to 8xl */}
							<h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-white text-center md:text-left drop-shadow-sm">
								{INDEX_HERO_CONTENT.title}
							</h1>

							{/* Buttons: Stack vertically on tiny screens, row on larger */}
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
								{INDEX_HERO_CONTENT.button.map(
									(item, index) => (
										<Link
											key={index}
											href={item.href}
											className={buttonVars}
										>
											{item.label}
										</Link>
									)
								)}
							</div>
						</div>

						{/* MOBILE FOOTER (In Flow): 
                Renders here on mobile so it pushes content up/down naturally 
                instead of overlapping vertically. */}
						<div className="md:hidden w-full mt-8">
							<div className={glassCardStyles}>
								{INDEX_HERO_CONTENT.footer}
							</div>
						</div>
					</motion.div>

					{/* DESKTOP FOOTER (Absolute): 
              Pins to bottom-left on large screens. */}
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className={`${glassCardStyles} hidden md:block absolute bottom-12 left-12 m-0`}
					>
						{INDEX_HERO_CONTENT.footer}
					</motion.div>
				</div>
			</MaxWidthWrapper>
		</main>
	);
};

export default Hero;
