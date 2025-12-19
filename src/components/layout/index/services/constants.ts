import { ServiceBox, Header } from "./types";
import { Hammer, SwatchBook } from "lucide-react";
export const HEADERCONTENT: Header = {
    title: "helloooooooo",
    description: "aubdkaubksjdfbnwkuerufbcskjdbcfiuskdjbc",
};
//this is the list
export const BOXCONTENT: ServiceBox[] = [
    {
        title: "Hardscape",
        description: "sdcaca sasdakj sbcuiab dcadc",
        image: { src: "/image2.jpeg", alt: "image" },
        icon: Hammer,
        colspan: "col-span-2",
    },
    //each "{}" is an item of the list like a basket the list contains many baskets
    // each basket contains many stuff nothing is a must whatever you want
    //in this one we have hakuna matata? limonata
    {
        title: "Villas",
        description: "skjcf baskjds bfakjs bdfckaj lbsd",
        image: { src: "/image2.jpeg", alt: "image" },
        icon: SwatchBook,
        colspan: "col-span-1",
    },
    {
        title: "facedes",
        description: "asljdf nalscasdasd fasfd skhfbskd",
        image: { src: "/image2.jpeg", alt: "image" },
        icon: Hammer,
        colspan: "col-span-1",
    },
    {
        title: "Rock",
        description: "asljdf nalscasdasd fasfd skhfbskd",
        image: { src: "/image2.jpeg", alt: "image" },
        icon: Hammer,
        colspan: "col-span-2",
    },
];
