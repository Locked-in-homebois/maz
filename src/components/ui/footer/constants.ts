import { LucideIcon } from "lucide-react";
import { LucideDraftingCompass, Mail, Phone, LocationEdit } from "lucide-react";
import { LeftEnd, RightEnd, Links } from "./types";

export const LEFT_DATA: LeftEnd = {
    icon: LucideDraftingCompass,
    header: "MAZ",
    text: " Cutting your stones and making lime with it with exelance ",
};

export const SERVICE_LINKS: Links[] = [
    {
        href: "/material-manufacturing",
        label: "Hardscape",
    },
    {
        href: "/projects",
        label: "Renovation & Decor",
    },
    {
        href: "/projects",
        label: "Facedes",
    },
    {
        href: "/projects",
        label: "Landscape",
    },
];

export const COMPANY_LINKS: Links[] = [
    {
        href: "/",
        label: "Renovations",
    },
    {
        href: "/",
        label: "Company Owner",
    },
    {
        href: "/",
        label: "Cutting stone ",
    },
];

export const RIGHT_DATA: RightEnd[] = [
    {
        icon: Mail,
        href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVNXrlCqCRSVLHWxgvsdPQlJpjNXKNRXGmMHTpNkhWNhrpLNzXkDksjnGdtQrRmzZVBdB",
        text: " mohazzama@gmail.com ",
    },
    {
        icon: Phone,
        href: "#",
        text: " +966 504413053 ",
    },
    {
        icon: LocationEdit,
        href: "https://maps.app.goo.gl/2uM7ejbC2Vis1xb97",
        text: "riyadh ",
    },
];
