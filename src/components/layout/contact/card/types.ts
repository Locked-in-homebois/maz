import { LucideIcon } from "lucide-react";

export interface Header {
	title: string;
	desc: string;
}

export interface Carousel {
	image: {
		src: string;
		alt: string;
	};
}

export interface InfoGrid {
	title: string;
	desc: string;
}

export interface ContactForm {
	title: string;
	buttonText: string;
	fields: {
		label: string;
		name: string;
		placeholder: string;
		type: "text" | "email" | "textarea";
	}[];
}
