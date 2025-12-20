import { Photo, Header, Checklist, Button } from "./types";
import { CheckCircle2, BadgeCheckIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: { text: "Dual Expertise", icon: BadgeCheckIcon },
    header: "Straight to construction",
    desc: "I produce the materials. This ensure strict quality control from raw stones to the final polish in your property while also ensuring the most competitive prices on the market",
};

export const LISTCONTENT: Checklist[] = [
    {
        icon: CheckCircle2,
        text: "Direct sourcing of Granite, Basalt, Marble and Limestone",
    },
    { icon: CheckCircle2, text: "Custom cutting and finishing facility " },
    { icon: CheckCircle2, text: "In-house structural engineering team" },
];
// did it like this so that we could add buttons later easily
export const BUTTONS: Button = {
    linkButton: {
        href: "/",
        clasname:
            "md:text-[21px] text-[15px] bg-blue-400 md:font-medium font-[550] rounded-full shadow-sm py-2 md:px-4.25 px-3.75 hover:bg-gray-300 hover:text-white hover:shadow-lg transition-color duration-300 ",
    },
};
export const IMAGECONTENT: Photo = {
    photo: { src: "/29s.jpeg", alt: "image" },
};
