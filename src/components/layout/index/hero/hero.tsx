"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { INDEX_HERO_CONTENT } from "./constants";
import { motion, type Variants } from "motion/react";

const buttonVars =
	"relative flex items-center justify-center rounded-full transition-all duration-300 " +
	"bg-white text-neutral-900 font-bold shadow-md " +
	"text-sm py-3 px-6 w-full sm:w-auto " +
	"md:text-lg md:py-3 md:px-8 " +
	"hover:bg-neutral-100 active:scale-95";

const glassCardStyles =
	"z-10 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg " +
	"text-neutral-100 font-light leading-relaxed tracking-wide text-center " +
	"text-xs px-4 py-3 mx-auto max-w-[95%] " +
	"md:text-lg md:text-left md:max-w-xl md:px-5 md:py-3";

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
		<main className="flex justify-center py-2 md:py-4">
			<MaxWidthWrapper>
				{/* FIX: Reduced heights here 
            Mobile: min-h-[60dvh] (was 85) 
            Desktop: md:h-[600px] (was 800) 
        */}
				<div className="relative flex flex-col justify-center rounded-2xl md:rounded-4xl min-h-[60dvh] md:h-150rflow-hidden shadow-xl">
					<div className="absolute inset-0 select-none ">
						<Image
							src={INDEX_HERO_CONTENT.image.src}
							alt={INDEX_HERO_CONTENT.image.alt}
							fill
							className="object-cover md:rounded-4xl rounded-3xl"
							priority
							sizes="100vw"
						/>
						<div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/80 md:hidden rounded-3xl" />
						<div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/60 via-black/30 to-transparent rounded-4xl" />
					</div>

					<motion.div
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="relative z-10 flex flex-col items-center md:items-start justify-center grow px-4 md:px-10 py-10 md:py-0"
					>
						<div className="max-w-3xl space-y-6 md:space-y-8 w-full">
							{/* Scaled down text slightly for the shorter container */}
							<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white text-center md:text-left drop-shadow-sm">
								{INDEX_HERO_CONTENT.title}
							</h1>

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

						{/* Mobile Footer Text */}
						<div className="md:hidden w-full mt-6">
							<div className={glassCardStyles}>
								{INDEX_HERO_CONTENT.footer}
							</div>
						</div>
					</motion.div>

					{/* Desktop Footer Text */}
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className={`${glassCardStyles} hidden md:block absolute bottom-8 left-8 m-0`}
					>
						{INDEX_HERO_CONTENT.footer}
					</motion.div>
				</div>
			</MaxWidthWrapper>
		</main>
	);
};

export default Hero;
