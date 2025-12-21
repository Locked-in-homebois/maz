// src/lib/constants.ts
import {
    Ruler,
    ShieldCheck,
    LightbulbIcon,
    Target,
    Building2,
    BrickWallShieldIcon,
} from "lucide-react";
import { PhilosophyItem, PhyItem } from "./types";

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
    {
        icon: LightbulbIcon,
        header: "Direct Involvement",
        description:
            "I don't outsource critical thinking. I perform the measuring, I draw the plans, and I manage the site personally.",
    },
    {
        icon: Target,
        header: "Acuracy",
        description:
            "I ensure every output aligns with the client's requests by confirming scope, requirements, and success criteria.",
    },
    {
        icon: BrickWallShieldIcon,
        header: "Sustainability",
        description:
            "I integrate sustainability considerations to reduce material waste and long-term maintenance needs.",
    },
];
export const PHY_DATA: PhyItem = {
    header: "My Philosophy",
    desc: "I am driven by a personal commitment to safety, quality, and accountability. When you hire me, you get my full attention on every beam designed and every stone laid.",
};
