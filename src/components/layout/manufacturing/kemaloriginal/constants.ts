import { Diamond, Check, Scissors } from "lucide-react";
import { LeftLowCard, TextPart, RightCard } from "./types";

export const TextPart_DATA: TextPart = {
    icon: Diamond,
    iconTitle: "KemalOriginal.TextPart.iconTitle",
    header: "KemalOriginal.TextPart.header",
    desc: "KemalOriginal.TextPart.desc",
};

export const LeftLowCards_DATA: LeftLowCard[] = [
    {
        icon: Scissors,
        title: "KemalOriginal.LeftLowCards.advanced.title",
        desc: "KemalOriginal.LeftLowCards.advanced.desc",
    },
    {
        icon: Check,
        title: "KemalOriginal.LeftLowCards.quality.title",
        desc: "KemalOriginal.LeftLowCards.quality.desc",
    },
];

export const RightImages_LeftCol: RightCard[] = [
    {
        Image: {
            alt: "Stone Texture",
            src: "/2s.webp",
            height: 400,
            width: 400,
        },
    },
    {
        Image: {
            alt: "Stone Detail",
            src: "/27s.webp",
            height: 300,
            width: 400,
        },
    },
];

export const RightImages_RightCol: RightCard[] = [
    {
        Image: {
            alt: "Building Facade",
            src: "/9s.webp",
            height: 300,
            width: 400,
        },
    },
    {
        Image: {
            alt: "Construction View",
            src: "/6m.webp",
            height: 400,
            width: 400,
        },
    },
];
