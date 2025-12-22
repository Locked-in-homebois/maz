import { LucideIcon } from "lucide-react";

export interface TextPart {
	icon: LucideIcon;
	iconTitle: string;
	header: string;
	desc: string;
}

export interface LeftLowCard {
	icon: LucideIcon;
	title: string;
	desc: string;
}

export interface RightCard {
	Image: {
		alt: string;
		src: string;
		width: number;
		height: number;
	};
}
