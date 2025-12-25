// src/lib/constants.ts
import { LightbulbIcon, Target, BrickWallShieldIcon } from "lucide-react";
import { PhilosophyItem, PhyItem } from "./types";

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
	{
		icon: LightbulbIcon,
		header: "AboutUs.Philosophy.items.involvement.header",
		description:
			"AboutUs.Philosophy.items.involvement.description",
	},
	{
		icon: Target,
		header: "AboutUs.Philosophy.items.accuracy.header",
		description:
			"AboutUs.Philosophy.items.accuracy.description",
	},
	{
		icon: BrickWallShieldIcon,
		header: "AboutUs.Philosophy.items.sustainability.header",
		description:
			"AboutUs.Philosophy.items.sustainability.description",
	},
];
export const PHY_DATA: PhyItem = {
	header: "AboutUs.Philosophy.header",
	desc: "AboutUs.Philosophy.desc",
};
