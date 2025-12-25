import { Photos, Header } from "./types";
import { MapPin } from "lucide-react";

export const HEADERCONTENT: Header = {
    header: "MasterPiece.title",
    desc: "MasterPiece.description",
    linkFull: {
        href: "/projects",
        className: "text-blue-500 hover:text-gray-600 hover:underline",
        text: "MasterPiece.viewPortfolio",
    },
};

export const PHOTOSIMAGES: Photos[] = [
    {
        photo: { src: "/VillaFront.webp", alt: "1st" },
        tag: {
            text: "MasterPiece.tags.private",
            className:
                "text-center px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "MasterPiece.locations.riyadh", icon: MapPin },
        text: "MasterPiece.projects.p1",
        href: "/projects/renoV2",
    },
    {
        photo: { src: "/Vrock3.2.jpeg", alt: "2nd" },
        tag: {
            text: "MasterPiece.tags.private",
            className:
                "text-center px-3 py-2 bg-blue-700 rounded-xl text-white",
        },
        location: { text: "MasterPiece.locations.riyadh", icon: MapPin },
        text: "MasterPiece.projects.p2",
        href: "/projects/Vrock",
    },
    {
        photo: { src: "/IMG_0064.webp", alt: "3rd" },
        tag: {
            text: "MasterPiece.tags.design",
            className:
                "text-center px-3 py-2 bg-gray-700 rounded-xl text-white ",
        },
        location: { text: "MasterPiece.locations.riyadh", icon: MapPin },
        text: "MasterPiece.projects.p3",
        href: "/projects/TTP",
    },
    {
        photo: { src: "/23-1.webp", alt: "4th" },
        tag: {
            text: "MasterPiece.tags.design",
            className:
                "text-center px-3 py-2 bg-gray-700 rounded-xl text-white",
        },
        location: { text: "MasterPiece.locations.hufuf", icon: MapPin },
        text: "MasterPiece.projects.p4",
        href: "/projects/KFU",
    },
];
