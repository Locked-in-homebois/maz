import { LucideIcon } from "lucide-react"
import { LucideDraftingCompass, Mail, Phone, LocationEdit } from "lucide-react";
import { LeftEnd, RightEnd, Links, } from "./types";

export const LEFT_DATA: LeftEnd = {
    icon: LucideDraftingCompass,
    header: "MAZ",
    text: " Cutting your stones and making lime with it with exelance "
}

export const SERVICE_LINKS: Links[] = [{

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
]

export const COMPANY_LINKS: Links[] = [{

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
]

export const RIGHT_DATA: RightEnd[] = [{
    icon: Mail,
    href: "/",
    text: " Mail "
},
{
    icon: Phone,
    href: "/",
    text: " Phone "
},
{
    icon: LocationEdit,
    href: "/",
    text: "Location "
}
]