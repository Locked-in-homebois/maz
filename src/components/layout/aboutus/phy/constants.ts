// src/lib/constants.ts
import { Ruler, ShieldCheck, LightbulbIcon } from "lucide-react";
import { PhilosophyItem } from "./types";

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
	{
		icon: LightbulbIcon,
		header: "Direct Involvement",
		description:
			"I don't outsource critical thinking. I perform the measuring, I draw the plans, and I manage the site personally.",
	},
	{
		icon: Ruler,
		header: "Precision Planning",
		description:
			"I ensure every measurement is exact and every plan is drawn to perfection before breaking ground.",
	},
	{
		icon: ShieldCheck,
		header: "Safety & Quality",
		description:
			"Safety is not a checklist, it's a culture. I ensure the site is secure and the materials are top tier.",
	},
];
