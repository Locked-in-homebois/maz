"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import ProductCard from "./ProductCard";
import FilterTabs from "./Filters"; // Make sure this matches your file name (FilterTabs vs Filters)
import { PRODUCTS } from "./constants";
import { Category, SortOption } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";

const ProductGallery = () => {
	const [activeFilter, setActiveFilter] = useState<Category>("All");
	const [sortOption, setSortOption] = useState<SortOption>("name-asc");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

	const handleSortSelect = (option: SortOption) => {
		setSortOption(option);
		setIsDropdownOpen(false);
	};

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
				<div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 z-20 relative">
					<div className="flex-1 flex justify-center md:justify-start">
						<FilterTabs
							activeFilter={activeFilter}
							onFilterChange={setActiveFilter}
						/>
					</div>

					{/* CUSTOM SORT DROPDOWN */}
					<div className="flex items-center gap-3 relative">
						<span className="text-sm font-medium text-neutral-500">
							Sort by:
						</span>

						<div className="relative">
							{/* The Trigger Button */}
							<button
								onClick={() =>
									setIsDropdownOpen(!isDropdownOpen)
								}
								className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full px-5 py-2.5 hover:border-lime-900 hover:text-lime-900 transition-all shadow-sm active:scale-95"
							>
								{sortOption === "name-asc"
									? "Name (A-Z)"
									: "Name (Z-A)"}
								<motion.div
									animate={{
										rotate: isDropdownOpen ? 180 : 0,
									}}
									transition={{ duration: 0.2 }}
								>
									<ChevronDown size={16} />
								</motion.div>
							</button>

							{/* The Dropdown Menu */}
							<AnimatePresence>
								{isDropdownOpen && (
									<>
										{/* Invisible backdrop to close when clicking outside */}
										<div
											className="fixed inset-0 z-10"
											onClick={() =>
												setIsDropdownOpen(false)
											}
										/>

										{/* The Menu */}
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											animate={{
												opacity: 1,
												y: 0,
												scale: 1,
											}}
											exit={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											transition={{ duration: 0.2 }}
											className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden z-20"
										>
											<div className="p-1 flex flex-col gap-1">
												<button
													onClick={() =>
														handleSortSelect(
															"name-asc"
														)
													}
													className={`w-full text-left px-4 py-2.5 text-sm rounded-xl flex items-center justify-between transition-colors ${
														sortOption ===
														"name-asc"
															? "bg-lime-50 text-lime-900 font-bold"
															: "text-neutral-600 hover:bg-neutral-50"
													}`}
												>
													Name (A-Z)
													{sortOption ===
														"name-asc" && (
														<Check size={14} />
													)}
												</button>
												<button
													onClick={() =>
														handleSortSelect(
															"name-desc"
														)
													}
													className={`w-full text-left px-4 py-2.5 text-sm rounded-xl flex items-center justify-between transition-colors ${
														sortOption ===
														"name-desc"
															? "bg-lime-50 text-lime-900 font-bold"
															: "text-neutral-600 hover:bg-neutral-50"
													}`}
												>
													Name (Z-A)
													{sortOption ===
														"name-desc" && (
														<Check size={14} />
													)}
												</button>
											</div>
										</motion.div>
									</>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>

				{/* Grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-3 gap-8 z-0 relative"
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
