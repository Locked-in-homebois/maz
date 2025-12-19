import { LucideIcon } from "lucide-react";
export interface Header {
    title: { icon: LucideIcon; text: string };
    header: string;
    desc: string;
}
export interface Checklist {
    text: string;
    icon: LucideIcon;
}
export interface Button {
    linkButton: { href: string; clasname: string };
}
export interface Photo {
    photo: {
        src: string;
        alt: string;
    };
}
