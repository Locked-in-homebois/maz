import { LucideIcon } from "lucide-react";
//  LucideDraftingCompass, and 3 more icons 
export interface LeftEnd {

    icon: LucideIcon,
    text: string
    header: string
}

export interface Links {

    href: string,
    label: string,
}

export interface RightEnd {

    icon: LucideIcon,
    text: string
    href: string
}
