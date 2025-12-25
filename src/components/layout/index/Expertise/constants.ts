import { Photo, Header, Checklist, Button } from "./types";
import { CheckCircle2, BadgeCheckIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: { text: "Expertise.headerBadge", icon: BadgeCheckIcon },
    header: "Expertise.title",
    desc: "Expertise.description",
};

export const LISTCONTENT: Checklist[] = [
    {
        icon: CheckCircle2,
        text: "Expertise.list.item1",
    },
    { icon: CheckCircle2, text: "Expertise.list.item2" },
    { icon: CheckCircle2, text: "Expertise.list.item3" },
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
    photo: { src: "/29s.webp", alt: "image" },
};
