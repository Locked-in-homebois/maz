import { Photos, Header } from "./types";
import { MapPin } from "lucide-react";

export const HEADERCONTENT: Header = {
    header: "Our Masterpieces",
    desc: "Explore our top pick projects in private villas and facedes ",
    linkFull: {
        href: "/projects",
        className: "text-blue-500 hover:text-gray-600 hover:underline",
        text: "View My Portifolio →",
    },
};

export const PHOTOSIMAGES: Photos[] = [
    {
        photo: { src: "/VillaFront.webp", alt: "1st" },
        tag: {
            text: "Private property",
            className:
                "text-center px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "Riyadh", icon: MapPin },
        text: "this photo will be changed",
    },
    {
        photo: { src: "/IMG_2290.webp", alt: "2nd" },
        tag: {
            text: "Private property",
            className:
                "text-center px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "Riyadh", icon: MapPin },
        text: "will ask my father",
    },
    {
        photo: { src: "/IMG_0064.webp", alt: "3rd" },
        tag: {
            text: "Design & Hardscape",
            className:
                "text-center px-3 py-2 bg-gray-700 rounded-xl text-white ",
        },
        location: { text: "Riyadh", icon: MapPin },
        text: "Saudi Television station",
    },
    {
        photo: { src: "/23--1.webp", alt: "4th" },
        tag: {
            text: "Design & Hardscape",
            className:
                "text-center px-3 py-2 bg-gray-700 rounded-xl text-white",
        },
        location: { text: "AL-HUFUF ", icon: MapPin },
        text: "King Faisal university",
    },
];
