"use client"; // <--- Essential for Framer Motion

import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { BOXCONTENT, HEADERCONTENT } from "./constants";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const Services = () => {
	return (
		<MaxWidthWrapper>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="w-full grid gap-8 grid-cols-1 md:grid-cols-3 my-20"
			>
				<motion.div
					variants={itemVariants}
					className="col-span-full text-center mb-4"
				>
					<h1 className="uppercase text-3xl md:text-4xl font-black mb-3">
						{HEADERCONTENT.title}
					</h1>
					<p className="text-neutral-600 max-w-2xl mx-auto">
						{HEADERCONTENT.description}
					</p>
				</motion.div>
				{BOXCONTENT.map((item, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						className={`flex flex-col gap-4 ${item.colspan}`}
					>
						{/* Image Container */}
						<div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden group">
							<Image
								src={item.image.src}
								alt={item.image.alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							{/* Icon */}
							<div className="absolute top-4 right-4 bg-white/90 p-2 rounded-xl backdrop-blur-sm">
								<item.icon size={24} className="text-black" />
							</div>
						</div>
						{/* Text Content */}
						<div className="px-2">
							<h3 className="text-xl font-bold mb-1">
								{item.title}
							</h3>
							<p className="text-sm text-neutral-600 leading-relaxed">
								{item.description}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</MaxWidthWrapper>
	);
};

export default Services;
