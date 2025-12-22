import { Diamond, Check, Scissors } from "lucide-react";
import { LeftLowCard, TextPart, RightCards } from "./types";

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
        desc: " Utilizing 5-axis CNC saws for complex geometries and ultra-precise finishing down to the millimeter.",
    },
    {
        icon: Check,
        title: "Quality Control",
        desc: "Every piece is hand-inspected by me for micro-fractures, color consistency, and structural integrity.",
    },
];

export const RightCards_DATA: RightCards[] = [
    {
        Image: {
            alt: "1",
            src: "/2s.jpeg",
            height: "400",
            width: "200",
        },
    },
    {
        Image: {
            alt: "2",
            src: "/9s.jpeg",
            height: "100",
            width: "200",
        },
    },
    {
        Image: {
            alt: "3",
            src: "/27s.jpeg",
            height: "150",
            width: "200",
        },
    },
    {
        Image: {
            alt: "4",
            src: "/29s.jpeg",
            height: "200",
            width: "200",
        },
    },
];
