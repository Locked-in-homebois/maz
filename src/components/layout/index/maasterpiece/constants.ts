import { Photos, Header } from "./types";
import { MapPin } from "lucide-react";

export const HEADERCONTENT: Header = {
    header: "Our Masterpieces",
    desc: "Explore our top pick projects in private villas and facedes ",
    linkFull: {
        href: "/",
        className: "text-blue-500 hover:text-gray-600 hover:underline",
        text: "View My Portifolio →",
    },
};

export const PHOTOSIMAGES: Photos[] = [
    {
        photo: { src: "/image2.jpeg", alt: "1st" },
        tag: {
            text: "Villa",
            className:
                "text-center px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "NIGGAZ IN PARIS", icon: MapPin },
        text: "the milla voila",
    },
    {
        photo: { src: "/image3.jpeg", alt: "2nd" },
        tag: {
            text: "Hardscape",
            className:
                "text-center px-3 py-2 bg-lime-800 rounded-xl text-white",
        },
        location: { text: "ALABAMA", icon: MapPin },
        text: "SWEEEEETTTT HOME ALABAMA",
    },
    {
        photo: { src: "/test.jpeg", alt: "3rd" },
        tag: {
            text: "Facede ex here",
            className:
                "text-center px-3 py-2 bg-blue-800 rounded-xl text-white ",
        },
        location: { text: "KENTUCHY FRIED CHICKEN", icon: MapPin },
        text: "CHICKEN BEEERRRGGGAAAHHH",
    },
    {
        photo: { src: "/image2.jpeg", alt: "4th" },
        tag: {
            text: "Trade Center",
            className:
                "text-center px-3 py-2 bg-orange-500 rounded-xl text-white",
        },
        location: { text: "KÖLN ", icon: MapPin },
        text: "Apperantly its a place my friend launches missiles from",
    },
];
