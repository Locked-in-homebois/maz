import { Category, Product } from "../projects/types";

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
        id: "ARCADE",
        name: "Decorative Arched Colonnade",
        category: "Finishing Decor", // "Facedes",
        images: [
            { src: "/COCA_024.webp" },
            { src: "/COCA_019.webp" },
            { src: "/COCO_020.webp" },
            { src: "/IMG_2220.JPG" },
            { src: "/IMG_2227.JPG" },
            { src: "/IMG_2290.JPG" },
            { src: "/IMG_2295.JPG" },
        ],
        description: "Designing suppling and crafting",
        details:
            "Finely detailed with a harminonius blend of classical geometry and ornamental artistry that gave the structure a timless,dignified presence.",
    },
    {
        id: "KFU",
        name: "King Faisal University",
        category: "Hardscape", //finishing and decor
        images: [
            { src: "/23--1.jpg" },
            { src: "/herobg.webp" },
            { src: "/image67.webp" },
            { src: "/IMG_1140.JPG" },
            { src: "/(59) - 1.jpg" },
            { src: "/PAIN_059.webp" },
            { src: "/PAAL_056.webp" },
            { src: "/PAPL_045.webp" },
            { src: "/PAPL_038.webp" },
            { src: "/IMG_1139.webp" },
            { src: "/PLWI_046.webp" },
            { src: "/PLST_040.webp" },
            { src: "/IMG_0649.webp" },
            { src: "/DOBU_042.webp" },
            { src: "/ROCL_047.webp" },
            { src: "/ROLA_044.webp" },
            { src: "/ROOV_050.webp" },
        ],
        description: "Designing supplying crafting and constructing.",
        details:
            "Engineered for maximum sustainability while maintaining an artistic design.",
    },
    {
        id: "STT",
        name: "Saudi Telivision Tower",
        category: "Hardscape",
        images: [
            { src: "/IMG_0064.webp" },
            { src: "/ROPL_061.webp" },
            { src: "/ROPL_062.webp" },
            { src: "/ROPL_063.webp" },
            { src: "/ROPL_072.webp" },
            { src: "/ROPL_073.webp" },
            { src: "/ROPL_064.webp" },
            { src: "/ROPL_066.webp" },
            { src: "/BLMO_068.webp" },
            { src: "/ROPL_060.webp" },
        ],
        description: "Ergonomic design with premium leather.",
        details: "Experience ultimate comfort with our Modern Lounge Chair...",
    },
];
