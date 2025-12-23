"use client";

import { motion } from "motion/react";
import { SkillItem } from "./types";

interface SkillRowProps {
	skill: SkillItem;
	index: number;
}

export const SkillRow = ({ skill, index }: SkillRowProps) => {
	return (
		<div className="relative w-full group">
			{/* 1. The Box Container */}
			<div className="relative flex items-center justify-between p-6 rounded-xl bg-white border border-neutral-100/50 shadow-sm">
				{/* Content: Icon & Name */}
				<div className="flex items-center gap-4">
					<div className="p-2.5 bg-cyan-950 rounded-lg shadow-sm text-logocolor">
						<skill.icon size={24} />
					</div>
					<div className="flex flex-col">
						<span className="font-bold text-lg text-sky-950">
							{skill.label}
						</span>
						<span className="text-xs font-medium text-sky-950 uppercase tracking-wider">
							{skill.level}
						</span>
					</div>
				</div>

				{/* 2. The Animated Border Overlay */}
				<svg
					className="absolute inset-0 h-full w-full pointer-events-none rounded-xl"
					style={{ overflow: "visible" }}
				>
					<motion.rect
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }} // Changed to 1 (100%)
						viewport={{ once: true }}
						transition={{
							duration: 1.5,
							ease: "easeOut",
							delay: index * 0.2, // Stagger effect
						}}
						width="100%"
						height="100%"
						rx="12" // Matches container rounded-xl
						ry="12"
						fill="transparent"
						stroke="#052f4a" // Tailwind blue-600
						strokeWidth="3"
						strokeLinecap="round"
						className="drop-shadow-sm"
					/>
				</svg>
			</div>
		</div>
	);
};
