"use client";

import { motion } from "motion/react";
import { SkillItem } from "./types";

interface SkillRowProps {
	skill: SkillItem;
	index: number;
}

export const SkillRow = ({ skill, index }: SkillRowProps) => {
	// Convert standard 0-100 percentage to a decimal (0 to 1) for the pathLength
	const decimalValue = skill.percentage / 100;

	return (
		<div className="relative w-full group">
			{/* 1. The Box Container */}
			<div className="relative flex items-center justify-between p-6 rounded-xl bg-neutral-50 border border-neutral-100/50 shadow-sm">
				{/* Content: Icon & Name */}
				<div className="flex items-center gap-4">
					<div className="p-2.5 bg-white rounded-lg shadow-sm text-blue-600">
						<skill.icon size={24} />
					</div>
					<div className="flex flex-col">
						<span className="font-bold text-lg text-neutral-800">
							{skill.label}
						</span>
						<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
							{skill.level}
						</span>
					</div>
				</div>

				{/* Percentage Text (Optional: Keeping it visible is good UX) */}
				<span className="font-bold text-2xl text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500">
					{skill.percentage}%
				</span>

				{/* 2. The Animated Border Overlay */}
				{/* We place an SVG absolutely over the entire div */}
				<svg
					className="absolute inset-0 h-full w-full pointer-events-none rounded-xl"
					style={{ overflow: "visible" }}
				>
					<motion.rect
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: decimalValue, opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 1.5,
							ease: "easeOut",
							delay: index * 0.2, // Stagger effect
						}}
						width="100%"
						height="100%"
						rx="12" // Must match the container's rounded-xl (12px)
						ry="12"
						fill="transparent"
						stroke="#2563eb" // Tailwind blue-600
						strokeWidth="3"
						strokeLinecap="round"
						// This ensures the line starts from top-left and goes clockwise
						className="drop-shadow-sm"
					/>
				</svg>
			</div>
		</div>
	);
};
