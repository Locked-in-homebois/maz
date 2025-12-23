import { Diamond, Check, Scissors } from "lucide-react";
import { LeftLowCard, TextPart, RightCard } from "./types";

export const TextPart_DATA: TextPart = {
    icon: Diamond,
    iconTitle: "Direct Manufacturer",
    header: "Our Stone Factory: Where Raw Earth Becomes Art",
    desc: "Located just outside the city, my personal stone processing facility bridges the gap between raw extraction and architectural mastery. We don't just source materials; we craft them. By controlling the entire production line, I ensure every slab, block, and tile meets the rigorous standards of both structural engineering and aesthetic design.",
};

export const LeftLowCards_DATA: LeftLowCard[] = [
    {
        icon: Scissors,
        title: "Advanced Cutting",
        desc: "Utilizing 5-axis CNC saws for complex geometries and ultra-precise finishing down to the millimeter.",
    },
    {
        icon: Check,
        title: "Quality Control",
        desc: "Every piece is hand-inspected by me for micro-fractures, color consistency, and structural integrity.",
    },
];

export const RightImages_LeftCol: RightCard[] = [
    {
        Image: {
            alt: "Stone Texture",
            src: "/2s.webp",
            height: 400,
            width: 400,
        },
    },
    {
        Image: {
            alt: "Stone Detail",
            src: "/27s.webp",
            height: 300,
            width: 400,
        },
    },
];

export const RightImages_RightCol: RightCard[] = [
    {
        Image: {
            alt: "Building Facade",
            src: "/9s.webp",
            height: 300,
            width: 400,
        },
    },
    {
        Image: {
            alt: "Construction View",
            src: "/6m.webp",
            height: 400,
            width: 400,
        },
    },
];
