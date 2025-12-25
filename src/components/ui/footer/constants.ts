// import { LucideIcon } from "lucide-react";
import { LucideDraftingCompass, Mail, Phone, LocationEdit } from "lucide-react";
import { LeftEnd, RightEnd, Links } from "./types";

export const LEFT_DATA: LeftEnd = {
	icon: LucideDraftingCompass,
	header: "MAZ",
	text: "Footer.description",
};

export const SERVICE_LINKS: Links[] = [
	{
		href: "/material-manufacturing",
		label: "Footer.links.hardscape",
	},
	{
		href: "/projects",
		label: "Footer.links.renovation",
	},
	{
		href: "/projects",
		label: "Footer.links.facades",
	},
	{
		href: "/projects",
		label: "Footer.links.finishing",
	},
];

export const COMPANY_LINKS: Links[] = [
	{
		href: "/",
		label: "Footer.links.company_renovations",
	},
	{
		href: "/",
		label: "Footer.links.company_owner",
	},
	{
		href: "/",
		label: "Footer.links.company_cutting",
	},
];

export const RIGHT_DATA: RightEnd[] = [
	{
		icon: Mail,
		href: "/contact",
		text: "Footer.contact.email",
	},
	{
		icon: Phone,
		href: "#",
		text: "Footer.contact.phone",
	},
	{
		icon: LocationEdit,
		href: "https://maps.app.goo.gl/2uM7ejbC2Vis1xb97",
		text: "Footer.contact.location",
	},
];
