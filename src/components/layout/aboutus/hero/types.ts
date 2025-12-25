// src/components/sections/Hero/types.ts

export interface HeroButton {
    label: string;
    href: string;
}

export interface HeroData {
    header: string;
    subheader: string;
    image: { src: string; alt: string };

    buttons: HeroButton[];
}
