export interface HeroButton {
    label: string;
    href: string;
}

export interface HeroContents {
    title: string;
    footer: string;
    button: HeroButton[];
    image: { desktopSrc: string; mobileSrc: string; alt: string };
}
