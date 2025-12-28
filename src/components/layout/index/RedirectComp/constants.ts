import { RedirectComp } from "./types";

export const REDIRECTCONTENT: RedirectComp[] = [
	{
		title: "RedirectComp.title.L",
		description: "RedirectComp.description.L",

		buttontext: "RedirectComp.buttonText.L",

		image: { src: "/BabaImgHero.jpeg", alt: "baba index page" },
		href: "/aboutme",
	},
	{
		title: "RedirectComp.title.R",
		description: "RedirectComp.description.R",

		buttontext: "RedirectComp.buttonText.R",

		image: { src: "/reno2v5.jpeg", alt: "villa interior image" },
		slides: [
			{ src: "", alt: "" },
			{ src: "", alt: "" },
			{ src: "", alt: "" },
		],
		href: "/projects",
	},
];
