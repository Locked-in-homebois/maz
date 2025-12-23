import { Product, Category } from "./types";

export const FILTERS: Category[] = [
    "All",
    "Hardscape",
    "Facedes",
    "Renovation",
    "Finishing Decor",
    "Raised Floor",
];

export const PRODUCTS: Product[] = [
    {
        id: "01",
        name: "Luxury Marble Slab",
        category: "Hardscape",
        images: [
            { src: "/image2.webp" },
            { src: "/image3.webp" },
            { src: "/12.webp" },
        ],
        description: "Premium Italian marble for high-end interiors.",
        details:
            "This exquisite marble slab is sourced directly from the quarries of Tuscany...",
    },
    {
        id: "02",
        name: "Industrial Steel Beam",
        category: "Hardscape",
        images: [{ src: "/image2.webp" }],
        description: "High-strength steel for structural support.",
        details: "Engineered for maximum load-bearing capacity...",
    },
    {
        id: "03",
        name: "Modern Lounge Chair",
        category: "Hardscape",
        images: [{ src: "/image2.webp" }],
        description: "Ergonomic design with premium leather.",
        details: "Experience ultimate comfort with our Modern Lounge Chair...",
    },
];
