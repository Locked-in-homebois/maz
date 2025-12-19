import { Photos, Header, PhotoInternalP } from "./types";
import { MapPin } from "lucide-react";

export const HEADERCONTENT: Header = {
    header: "Our Masterpieces",
    desc: "Explore our top pick projects in private villas and facedes ",
    linkFull: {
        href: "/",
        className: "text-blue-500 hover:text-gray-600 hover:underline",
        text: "View My Portifolio gang",
    },
};

export const PHOTOSIMAGES: Photos[] = [
    { photo: { src: "/image2.jpeg", alt: "1st" } },
    { photo: { src: "/image3.jpeg", alt: "2nd" } },
    { photo: { src: "/test.png", alt: "3rd" } },
    { photo: { src: "/image2.jpeg", alt: "4th" } },
];
// did it like this so that we could add buttons later easily
export const PHOTOCONTENT: PhotoInternalP[] = [
    {
        tag: {
            text: "Villa",
            className: "px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "NIGGAZ IN PARIS", icon: MapPin },
        text: "the milla voila",
    },
    {
        tag: {
            text: "Hardscape",
            className: "px-3 py-2 bg-lime-800 rounded-xl text-white",
        },
        location: { text: "ALABAMA", icon: MapPin },
        text: "SWEEEEETTTT HOME ALABAMA",
    },
    {
        tag: {
            text: "Facede ex here",
            className: "px-3 py-2 bg-blue-800 rounded-xl text-white ",
        },
        location: { text: "KENTUCHY FRIED CHICKEN", icon: MapPin },
        text: "CHICKEN BEEERRRGGGAAAHHH",
    },
    {
        tag: {
            text: "Trade Center",
            className: "px-3 py-2 bg-orange-500 rounded-xl text-white",
        },
        location: { text: "KÖLN ", icon: MapPin },
        text: "Apperantly its a place my friend launches missiles from",
    },
];
