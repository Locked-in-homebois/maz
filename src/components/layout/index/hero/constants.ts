import { HeroContents } from "./types";

export const INDEX_HERO_CONTENT: HeroContents = {
    title: "Hero.title",
    footer: "Hero.footer",
    button: [
        {
            label: "Hero.viewPortfolio",
            href: "/",
        },
        {
            label: "Hero.contactMe",
            href: "/contact",
        },
    ],
    image: {
        src: "/herobg.webp",
        alt: "Hero BG",
    },
    imagephone: {
        src: "/herobgphone.webp",
        alt: "Hero BG",
    },
};
