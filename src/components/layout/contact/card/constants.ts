import { InfoGrid, Header, Carousel, ContactForm } from "./types";

export const HEADERCONTENT: Header = {
    title: "Contact.Header.title",
    desc: "Contact.Header.desc",
};

export const CAROUSELCONTENT: Carousel = {
    image: { src: "/IMG_2220.webp", alt: "Contact Background" },
};

export const GRIDCONTENT: InfoGrid[] = [
    { title: "Contact.Grid.Location.title", desc: "Contact.Grid.Location.desc" },
    { title: "Contact.Grid.Social.title", desc: "Contact.Grid.Social.desc" },
    { title: "Contact.Grid.Email.title", desc: "Contact.Grid.Email.desc" },
    { title: "Contact.Grid.Contact.title", desc: "Contact.Grid.Contact.desc" },
];

// NEW: The Form Configuration
export const FORMCONTENT: ContactForm = {
    title: "Contact.Form.title",
    buttonText: "Contact.Form.buttonText",
    fields: [
        {
            label: "Contact.Form.fields.fullName.label",
            name: "fullName",
            placeholder: "Contact.Form.fields.fullName.placeholder",
            type: "text",
        },
        {
            label: "Contact.Form.fields.email.label",
            name: "email",
            placeholder: "Contact.Form.fields.email.placeholder",
            type: "email",
        },
        {
            label: "Contact.Form.fields.message.label",
            name: "message",
            placeholder: "Contact.Form.fields.message.placeholder",
            type: "textarea",
        },
    ],
};
