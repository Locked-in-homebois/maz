import { LucideIcon } from "lucide-react";

export interface Kemal {
	header: string;
	icon: LucideIcon;
}

export interface Cards {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	desc: string;
}
