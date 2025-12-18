import { Monitor, Ruler, Compass, User } from "lucide-react";
import { SkillItem, ProfileContent } from "./types";

export const PROFILE_TEXT: ProfileContent = {
	name: "Robert Stone",
	title: "Civil Engineer & Renovation Specialist",
	bio: "With over 25 years of hands-on experience, I bridge the gap between technical civil engineering and on-site craftsmanship. My approach is unique because I am involved in every step. I don't just hand off blueprints; I measure the site myself, create the CAD drawings, source the stone and materials, and oversee the project management until completion.",
	skillsHeader: "Technical Proficiency",
	certification: {
		title: "Certified Professional Engineer (PE)",
		details: "Lic. #4492011 • Specialized in Facades & Finishes",
	},
};

export const SKILLS_DATA: SkillItem[] = [
	{
		label: "AutoCAD & Design",
		level: "Advanced",
		percentage: 90,
		icon: Monitor,
	},
	{
		label: "Measuring & Surveying",
		level: "Expert",
		percentage: 98,
		icon: Ruler,
	},
	{
		label: "Renovation Planning",
		level: "Advanced",
		percentage: 85,
		icon: Compass,
	},
	{
		label: "Solo Project Management",
		level: "Expert",
		percentage: 95,
		icon: User,
	},
];
