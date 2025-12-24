"use client";

import { motion, AnimatePresence } from "motion/react";
import ProductCard from "./ProductCard";
import { Product } from "./types";

interface ProductGridProps {
	products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
	return (
		<motion.div
			layout
			className="grid grid-cols-1 md:grid-cols-3 gap-8 z-0 relative"
		>
			<AnimatePresence mode="popLayout">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</AnimatePresence>
		</motion.div>
	);
};

export default ProductGrid;
