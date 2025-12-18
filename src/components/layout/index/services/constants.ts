import { ServiceBox, Header } from "./types";
import { Hammer, SwatchBook } from "lucide-react";
export const HEADERCONTENT: Header = {
	title: "helloooooooo",
	description: "aubdkaubksjdfbnwkuerufbcskjdbcfiuskdjbc",
};
export const BOXCONTENT: ServiceBox[] = [
	{
		title: "Hardscape",
		description: "sdcaca sasdakj sbcuiab dcadc",
		image: { src: "/image2.jpeg", alt: "image" },
		icon: Hammer,
		colspan: "col-span-2",
	},
	{
		title: "Villas",
		description: "skjcf baskjds bfakjs bdfckaj lbsd",
		image: { src: "/image2.jpeg", alt: "image" },
		icon: SwatchBook,
		colspan: "col-span-1",
	},
	{
		title: "facedes",
		description: "asljdf nalscasdasd fasfd skhfbskd",
		image: { src: "/image2.jpeg", alt: "image" },
		icon: Hammer,
		colspan: "col-span-1",
	},
	{
		title: "Rock",
		description: "asljdf nalscasdasd fasfd skhfbskd",
		image: { src: "/image2.jpeg", alt: "image" },
		icon: Hammer,
		colspan: "col-span-2",
	},
];
