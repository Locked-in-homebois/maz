import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { LEFT_DATA, RIGHT_DATA, SERVICE_LINKS } from "./constants";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import FooterMap from "./footerMap";

export default async function Footer() {
    const t = await getTranslations();
    return (
        <main className="bg-sky-950 px-4 mt-10 py-10 self-z-10">
            <MaxWidthWrapper className="text-logocolor">
                <div className="grid md:grid-cols-4 justify-center md:gap-0 gap-6 border-b md:text-start text-center border-[#ffe56f81]  pb-10  ">
                    <div className="flex flex-col gap-6 md:max-w-55 max-w-full text-center items-center">
                        {/* <div className="flex md:gap-6 gap-2 md:self-auto self-center "> */}
                        <Image
                            src="/logo.webp"
                            alt="das da logo"
                            width={120}
                            height={100}
                        />
                        <p> {t(LEFT_DATA.text)}</p>
                    </div>

                    <div className="flex gap-4 flex-col">
                        <h1 className="text-2xl font-bold ">Services</h1>
                        {SERVICE_LINKS.map((item, index) => (
                            <Link href={item.href} key={index}>
                                {t(item.label)}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">Contact</h1>
                        {RIGHT_DATA.map((item, index) => {
                            const RightIcon = item.icon;
                            return (
                                <div
                                    className="flex gap-4 md:self-auto self-center hover:text-blue-500"
                                    key={index}
                                >
                                    <RightIcon />
                                    <Link className="" href={item.href}>
                                        {t(item.text)}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col">
                        <FooterMap />
                    </div>
                </div>
                <p className="text-xl grid tracking-tighter grid-span-2">
                    {new Date().getFullYear()} C all rights are reserved made by
                    MA and PM.
                </p>
            </MaxWidthWrapper>
        </main>
    );
}
