import { Monitor, Ruler, Compass, User } from "lucide-react";
import { SkillItem, ProfileContent } from "./types";

export const PROFILE_TEXT: ProfileContent = {
	name: "AboutUs.Profile.name",
	title: "AboutUs.Profile.title",
	bio: "AboutUs.Profile.bio",
	skillsHeader: "AboutUs.Profile.skillsHeader",
	certification: {
		title: "AboutUs.Profile.certification.title",
		details: "AboutUs.Profile.certification.details",
	},
};

export const SKILLS_DATA: SkillItem[] = [
	{
		label: "AboutUs.Profile.skills.autocad",
		level: "AboutUs.Profile.levels.advanced",
		icon: Monitor,
	},

	{
		label: "AboutUs.Profile.skills.renovation",
		level: "AboutUs.Profile.levels.advanced",
		icon: Compass,
	},
	{
		label: "AboutUs.Profile.skills.management",
		level: "AboutUs.Profile.levels.expert",
		icon: User,
	},
];
