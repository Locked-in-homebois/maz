import { Product, Category } from "./types";

export const FILTERS: Category[] = ["All", "Stone", "Industrial", "Furniture"];

export const PRODUCTS: Product[] = [
	{
		id: "01",
		name: "Luxury Marble Slab",
		category: "Stone",
		images: [
			{ src: "/image2.jpeg" },
			{ src: "/image3.jpeg" },
			{ src: "/public/12.jpeg" },
		],
		description: "Premium Italian marble for high-end interiors.",
		details:
			"This exquisite marble slab is sourced directly from the quarries of Tuscany...",
	},
	{
		id: "02",
		name: "Industrial Steel Beam",
		category: "Industrial",
		images: [{ src: "/image2.jpeg" }],
		description: "High-strength steel for structural support.",
		details: "Engineered for maximum load-bearing capacity...",
	},
	{
		id: "03",
		name: "Modern Lounge Chair",
		category: "Furniture",
		images: [{ src: "/image2.jpeg" }],
		description: "Ergonomic design with premium leather.",
		details: "Experience ultimate comfort with our Modern Lounge Chair...",
	},
];
