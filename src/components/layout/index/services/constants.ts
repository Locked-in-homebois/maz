import { ServiceBox, Header } from "./types";
import { Hammer, SwatchBook } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: "Our Expertise",
    description:
        "Comprehensive design and construction services tailored to your needs.",
};

export const BOXCONTENT: ServiceBox[] = [
    {
        title: "Hardscape",
        description:
            "Professional hardscaping solutions for durable and aesthetic outdoor spaces.",
        image: { src: "/image2.jpeg", alt: "Hardscape design" },
        icon: Hammer,
        // FIX: Use 'md:' so it takes full width on mobile, and 2 columns on desktop
        colspan: "md:col-span-2",
    },
    {
        title: "Villas",
        description: "Luxury villa construction and renovation services.",
        image: { src: "/image2.jpeg", alt: "Villa project" },
        icon: SwatchBook,
        colspan: "md:col-span-1",
    },
    {
        title: "Facades",
        description:
            "Modern and classic facade designs to elevate building aesthetics.",
        image: { src: "/image2.jpeg", alt: "Facade detail" },
        icon: Hammer,
        colspan: "md:col-span-1",
    },
    {
        title: "Rock Works",
        description: "Natural rock installations and artistic stone features.",
        image: { src: "/image2.jpeg", alt: "Rock work" },
        icon: Hammer,
        colspan: "md:col-span-2",
    },
];
