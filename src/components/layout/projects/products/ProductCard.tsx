"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ProductCardProps } from "./types";

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Link href={`/products/${product.id}`} className="block h-full">
			<motion.div
				layout
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ y: -5 }}
				transition={{ duration: 0.3 }}
				className="group relative w-full h-full min-h-100 rounded-2xl overflow-hidden shadow-sm border border-neutral-100 bg-white flex flex-col"
			>
				{/* Image Container */}
				<div className="relative h-64 w-full overflow-hidden">
					<Image
						src={product.images[0].src}
						alt={product.id}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-110"
					/>
				</div>

				{/* Content Container */}
				<div className="p-6 flex flex-col grow">
					<span className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
						{product.category}
					</span>
					<h3 className="text-neutral-900 text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
						{product.name}
					</h3>
					<p className="text-neutral-500 text-sm line-clamp-2 mb-4 grow">
						{product.description}
					</p>
				</div>
			</motion.div>
		</Link>
	);
};

export default ProductCard;
