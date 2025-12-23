import { ServiceBox, Header } from "./types";
import { Hammer, BrickWall, House, HotelIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: "Services",
    description:
        "Comprehensive design and construction services tailored to your needs.",
};

export const BOXCONTENT: ServiceBox[] = [
    {
        title: "Residential",
        description: "Luxury property construction and renovation services. ",
        image: { src: "/3.webp", alt: "Hardscape design" },
        icon: House,
        // FIX: Use 'md:' so it takes full width on mobile, and 2 columns on desktop
        colspan: "md:col-span-2",
    },
    {
        title: "Hardscape",
        description:
            "Professional hardscaping solutions for durable and aesthetic outdoor spaces.",
        image: { src: "/IMG_0064.webp", alt: "Villa project" },
        icon: HotelIcon,
        colspan: "md:col-span-1",
    },
    {
        title: "Facades",
        description:
            "Modern and classic facade designs to elevate building aesthetics.",
        image: { src: "/11mn.webp", alt: "Facade detail" },
        icon: BrickWall,
        colspan: "md:col-span-1",
    },
    {
        title: "Rock Works",
        description: "Natural rock installations and artistic stone features.",
        image: { src: "/IMG_2889.webp", alt: "Rock work" },
        icon: Hammer,
        colspan: "md:col-span-2",
    },
];
