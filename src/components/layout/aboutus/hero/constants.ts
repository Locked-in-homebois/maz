// src/components/sections/Hero/constants.ts
import { HeroData } from "./types";

export const HERO_CONTENT: HeroData = {
    header: "Building Vision into Reality", // I filled this in as a placeholder
    subheader:
        "A specialized one-person portfolio focusing on renovations, facade works, and stone finishing. I personally oversee every detail, from the initial survey to the final design.",
    imageSrc: "/IMG_2903.webp",
    imageAlt: "Renovation site background",
    buttons: [
        {
            label: "View My Work",
            href: "/projects",
        },
        {
            label: "Contact Me",
            href: "/contact",
        },
    ],
};
