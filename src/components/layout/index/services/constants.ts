import { ServiceBox, Header } from "./types";
import { Hammer, BrickWall, House, HotelIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: "Services.title",
    description: "Services.description",
};

export const BOXCONTENT: ServiceBox[] = [
    {
        title: "Services.residential.title",
        description: "Services.residential.desc",
        image: { src: "/3.jpeg", alt: "Hardscape design" },
        icon: House,
        // FIX: Use 'md:' so it takes full width on mobile, and 2 columns on desktop
        colspan: "md:col-span-2",
    },
    {
        title: "Services.hardscape.title",
        description: "Services.hardscape.desc",
        image: { src: "/IMG_0064.webp", alt: "Villa project" },
        icon: HotelIcon,
        colspan: "md:col-span-1",
    },
    {
        title: "Services.facades.title",
        description: "Services.facades.desc",
        image: { src: "/SQ1.jpeg", alt: "Facade detail" },
        icon: BrickWall,
        colspan: "md:col-span-1",
    },
    {
        title: "Services.rockworks.title",
        description: "Services.rockworks.desc",
        image: { src: "/IMG_2889.JPG", alt: "Rock work" },
        icon: Hammer,
        colspan: "md:col-span-2",
    },
];
