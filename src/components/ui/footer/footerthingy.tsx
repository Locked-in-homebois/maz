import {
    LucideDraftingCompass,
    Mail,
    Phone,
    LocationEdit,
    Key,
} from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
    COMPANY_LINKS,
    LEFT_DATA,
    RIGHT_DATA,
    SERVICE_LINKS,
} from "./constants";
import Link from "next/link";

export default function Footer() {
    const Icon = LEFT_DATA.icon;

    return (
        <main className="bg-sky-950 px-4 mt-10 py-10 ">
            <MaxWidthWrapper className="text-logocolor">
                <div className="grid md:grid-cols-4 justify-center md:gap-0 gap-6 border-b md:text-left text-center border-[#ffe56f81]  pb-10  ">
                    <div className="flex flex-col gap-6 max-w-55 ">
                        <div className="flex md:gap-6 gap-2 md:self-auto self-center ">
                            <Icon />
                            <h1 className="text-2xl self-center font-bold">
                                {" "}
                                {LEFT_DATA.header}{" "}
                            </h1>
                        </div>
                        <p> {LEFT_DATA.text}</p>
                    </div>

                    <div className="flex gap-4 flex-col">
                        <h1 className="text-2xl font-bold ">Services</h1>
                        {SERVICE_LINKS.map((item, index) => (
                            <Link href={item.href} key={index}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">Contact</h1>
                        {RIGHT_DATA.map((item, index) => {
                            const Anamegiven = item.icon;
                            return (
                                <div
                                    className="flex gap-4 md:self-auto self-center hover:text-blue-500"
                                    key={index}
                                >
                                    <Anamegiven />
                                    <Link className="" href={item.href}>
                                        {item.text}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col ga4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242483313!2d46.492886205368556!3d24.725455373700168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2str!4v1766437131415!5m2!1sen!2str"
                            width="600"
                            height="450"
                            loading="lazy"
                            className="w-full h-63 rounded-xl"
                        ></iframe>
                    </div>
                </div>
                <p className="text-xl grid tracking-tighter grid-span-2">
                    2025 C all rights are reserved by Tarsier Corp.
                </p>
            </MaxWidthWrapper>
        </main>
    );
}
