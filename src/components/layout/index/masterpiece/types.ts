import { LucideIcon } from "lucide-react";
export interface Header {
    header: string;
    desc: string;
    linkFull: { href: string; className: string; text: string };
}
export interface Photos {
    photo: { src: string; alt: string };
    tag: { text: string; className: string };
    location: { text: string; icon: LucideIcon };
    text: string;
}
