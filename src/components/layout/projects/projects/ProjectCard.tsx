"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectCardProps } from "./types";

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div
			layout // <--- The Magic Prop: Makes it glide to new positions
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
			className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-sm"
		>
			<Image
				src={project.image.src}
				alt={project.image.alt}
				fill
				className="object-cover transition-transform duration-700 group-hover:scale-110"
			/>

			{/* Hover Overlay */}
			<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
				<span className="text-lime-400 text-sm font-medium uppercase tracking-wider mb-1">
					{project.category}
				</span>
				<h3 className="text-white text-xl font-bold">
					{project.title}
				</h3>
				{project.description && (
					<p className="text-gray-300 text-sm mt-2 line-clamp-2">
						{project.description}
					</p>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
