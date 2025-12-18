import { LucideIcon } from "lucide-react";

export interface SkillItem {
	label: string;
	level: string;
	percentage: number;
	icon: LucideIcon;
}

export interface ProfileContent {
	name: string;
	title: string;
	bio: string;
	skillsHeader: string;
	certification: {
		title: string;
		details: string;
	};
}
