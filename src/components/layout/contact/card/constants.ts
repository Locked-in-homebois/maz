import { InfoGrid, Header, Carousel, ContactForm } from "./types";

export const HEADERCONTENT: Header = {
	title: "Get in Touch",
	desc: "We respond within 24 hours to all inquiries.",
};

export const CAROUSELCONTENT: Carousel = {
	image: { src: "/image2.jpeg", alt: "Contact Background" },
};

export const GRIDCONTENT: InfoGrid[] = [
	{ title: "Location", desc: "Riyadh/alnafl" },
	{ title: "Social Media", desc: "@azzamahdab" },
	{ title: "Email", desc: "mohazzama@gmail.com" },
	{ title: "Contact", desc: "+966 504 413 053" },
];

// NEW: The Form Configuration
export const FORMCONTENT: ContactForm = {
	title: "Send a Message",
	buttonText: "Submit Request",
	fields: [
		{
			label: "Full Name",
			name: "fullName",
			placeholder: "Enter your name",
			type: "text",
		},
		{
			label: "Email Address",
			name: "email",
			placeholder: "name@example.com",
			type: "email",
		},
		{
			label: "Message",
			name: "message",
			placeholder: "How can we help you?",
			type: "textarea",
		},
	],
};
