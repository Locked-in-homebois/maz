// src/components/sections/Hero/types.ts

export interface HeroButton {
	label: string;
	href: string;
}

export interface HeroData {
	header: string;
	subheader: string;
	imageSrc: string;
	imageAlt: string;
	buttons: HeroButton[];
}
