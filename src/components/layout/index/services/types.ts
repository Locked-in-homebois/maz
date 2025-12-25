import { LucideIcon } from "lucide-react";
export interface Header {
    title: string;
    description: string;
}
export interface ServiceBox {
    title: string;
    description: string;
    image: { src: string; alt: string };
    colspan: string;
    icon: LucideIcon;
}
