"use client";

import { motion } from "motion/react";
import { SkillItem } from "./types";

interface SkillRowProps {
	skill: SkillItem;
	index: number;
}

export const SkillRow = ({ skill, index }: SkillRowProps) => {
	return (
		<div className="w-full">
			{/* Header: Icon + Name + Level */}
			<div className="mb-3 flex items-end justify-between">
				<div className="flex items-center gap-3">
					<skill.icon className="text-blue-600" size={24} />
					<span className="font-bold text-neutral-800">
						{skill.label}
					</span>
				</div>
				<span className="text-sm font-semibold text-blue-600">
					{skill.level}
				</span>
			</div>

			{/* The Bar Container */}
			<div className="h-4 w-full overflow-hidden rounded-full bg-neutral-100">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${skill.percentage}%` }}
					viewport={{ once: true }}
					transition={{
						duration: 1.5,
						ease: "easeOut",
						delay: index * 0.2,
					}}
					className="h-full rounded-full bg-blue-600"
				/>
			</div>
		</div>
	);
};
