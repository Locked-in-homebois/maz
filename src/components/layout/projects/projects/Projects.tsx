"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./constants";
import { Category } from "./types";

const ProjectsGallery = () => {
	const [activeFilter, setActiveFilter] = useState<Category>("All");
	const filteredProjects =
		activeFilter === "All"
			? PROJECTS
			: PROJECTS.filter((project) => project.category === activeFilter);
	return (
		<section className="py-20 bg-neutral-50">
			<MaxWidthWrapper>
				<div className="text-center mb-4">
					<h2 className="text-4xl font-bold mb-4 tracking-tight">
						Selected Projects
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto">
						Explore our protfolio across various sectors.
					</p>
				</div>

				{/* filter buttons */}
				<FilterTabs
					activeFilter={activeFilter}
					onFilterChange={setActiveFilter}
				/>

				{/* animated grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</AnimatePresence>
				</motion.div>
			</MaxWidthWrapper>
		</section>
	);
};
export default ProjectsGallery;
