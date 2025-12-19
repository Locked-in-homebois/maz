import { Project, Category } from "./types";

// 1. Define the Categories (for the buttons)
export const FILTERS: Category[] = [
	"All",
	"Residential",
	"Commercial",
	"Industrial",
	"Landscape",
];

// 2. Define the Projects
export const PROJECTS: Project[] = [
	{
		id: "1",
		title: "Modern Villa",
		category: "Residential",
		image: { src: "/image2.jpeg", alt: "Modern Villa" },
		description: "Luxury private residence in Riyadh.",
	},
	{
		id: "2",
		title: "City Center Mall",
		category: "Commercial",
		image: { src: "/image2.jpeg", alt: "Shopping Mall" },
		description: "High-end retail complex facade.",
	},
	{
		id: "3",
		title: "Desert Resort",
		category: "Landscape",
		image: { src: "/image2.jpeg", alt: "Desert Resort" },
		description: "Integration of natural rock with modern pools.",
	},
	{
		id: "4",
		title: "Tech Park",
		category: "Industrial",
		image: { src: "/image2.jpeg", alt: "Tech Park" },
		description: "Sustainable warehouse and office complex.",
	},
	{
		id: "5",
		title: "Family Home",
		category: "Residential",
		image: { src: "/image2.jpeg", alt: "Family Home" },
		description: "Contemporary design for a growing family.",
	},
	{
		id: "6",
		title: "Hotel Garden",
		category: "Landscape",
		image: { src: "/image2.jpeg", alt: "Hotel Garden" },
		description: "Lush greenery layout for a 5-star hotel.",
	},
];
