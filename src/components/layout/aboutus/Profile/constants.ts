import {
    Ruler,
    HardHat,
    ClipboardList,
    Landmark,
    Route,
    Paintbrush,
} from "lucide-react";
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
        level: "AboutUs.Profile.levels.expert",
        icon: Ruler,
    },

    {
        label: "AboutUs.Profile.skills.renovation",
        level: "AboutUs.Profile.levels.expert",
        icon: HardHat,
    },
    {
        label: "AboutUs.Profile.skills.management",
        level: "AboutUs.Profile.levels.expert",
        icon: ClipboardList,
    },
    {
        label: "AboutUs.Profile.skills.facades",
        level: "AboutUs.Profile.levels.expert",
        icon: Landmark,
    },

    {
        label: "AboutUs.Profile.skills.hardscape",
        level: "AboutUs.Profile.levels.expert",
        icon: Route,
    },
    {
        label: "AboutUs.Profile.skills.decor",
        level: "AboutUs.Profile.levels.expert",
        icon: Paintbrush,
    },
];
