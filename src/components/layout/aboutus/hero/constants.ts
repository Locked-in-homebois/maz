// src/components/sections/Hero/constants.ts
import { HeroData } from "./types";

export const HERO_CONTENT: HeroData = {
    header: "AboutUs.Hero.header", // I filled this in as a placeholder
    subheader: "AboutUs.Hero.subheader",
    image: { src: "/IMG_2903.JPG", alt: "Renovation site background" },

    buttons: [
        {
            label: "AboutUs.Hero.buttons.viewWork",
            href: "/projects",
        },
        {
            label: "AboutUs.Hero.buttons.contactMe",
            href: "/contact",
        },
    ],
};
