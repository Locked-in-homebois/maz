"use client";

import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "./constants";
import { motion } from "motion/react";

const ProductGallery = () => {
	return (
		<section className="py-20 bg-neutral-50 min-h-screen">
			<MaxWidthWrapper>
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 tracking-tight">
						Our Products
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto">
						Browse our catalog of premium materials and furniture.
					</p>
				</div>

				{/* Grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{PRODUCTS.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</motion.div>
			</MaxWidthWrapper>
		</section>
	);
};

export default ProductGallery;
