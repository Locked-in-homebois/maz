"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import ProductCard from "./ProductCard";
import FilterTabs from "./Filters";
import { PRODUCTS } from "./constants";
import { Category, SortOption } from "./types";
import { motion, AnimatePresence } from "motion/react";

const ProductGallery = () => {
	const [activeFilter, setActiveFilter] = useState<Category>("All");
	const [sortOption, setSortOption] = useState<SortOption>("name-asc");

	// 1. Filter the products
	const filteredProducts = PRODUCTS.filter((product) => {
		if (activeFilter === "All") return true;
		return product.category === activeFilter;
	});

	// 2. Sort the filtered results
	const sortedProducts = [...filteredProducts].sort((a, b) => {
		if (sortOption === "name-asc") {
			return a.name.localeCompare(b.name);
		} else {
			return b.name.localeCompare(a.name);
		}
	});

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

				{/* Controls Container */}
				<div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
					{/* Filter Tabs */}
					<div className="flex-1 flex justify-center md:justify-start">
						<FilterTabs
							activeFilter={activeFilter}
							onFilterChange={setActiveFilter}
						/>
					</div>

					{/* Sort Dropdown */}
					<div className="flex items-center gap-2">
						<span className="text-sm font-medium text-neutral-500">
							Sort by:
						</span>
						<select
							value={sortOption}
							onChange={(e) =>
								setSortOption(e.target.value as SortOption)
							}
							className="bg-white border border-neutral-200 text-neutral-700 text-sm rounded-lg focus:ring-lime-900 focus:border-lime-900 block p-2.5 outline-none cursor-pointer hover:border-lime-900 transition-colors"
						>
							<option value="name-asc">Name (A-Z)</option>
							<option value="name-desc">Name (Z-A)</option>
						</select>
					</div>
				</div>

				{/* Grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<AnimatePresence mode="popLayout">
						{sortedProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</AnimatePresence>
				</motion.div>
			</MaxWidthWrapper>
		</section>
	);
};

export default ProductGallery;
