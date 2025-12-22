import { Product, Category } from "./types";

export const FILTERS: Category[] = ["All", "Stone", "Industrial", "Furniture"];

export const PRODUCTS: Product[] = [
	{
		id: "01",
		name: "Luxury Marble Slab",
		category: "Stone",
		image: { src: "/image2.jpeg" },
		description: "Premium Italian marble for high-end interiors.",
		details:
			"This exquisite marble slab is sourced directly from the quarries of Tuscany. Known for its durability and timeless elegance, it is perfect for kitchen countertops, flooring, and wall cladding. Each piece features unique veining that adds character to any space.",
	},
	{
		id: "02",
		name: "Industrial Steel Beam",
		category: "Industrial",
		image: { src: "/image2.jpeg" },
		description: "High-strength steel for structural support.",
		details:
			"Engineered for maximum load-bearing capacity, these steel beams are essential for modern construction. Coated with a rust-resistant finish, they ensure longevity and safety in both residential and commercial projects.",
	},
	{
		id: "03",
		name: "Modern Lounge Chair",
		category: "Furniture",
		image: { src: "/image2.jpeg" },
		description: "Ergonomic design with premium leather.",
		details:
			"Experience ultimate comfort with our Modern Lounge Chair. Crafted with a solid wood frame and upholstered in top-grain leather, this piece combines mid-century aesthetics with modern durability.",
	},
];
