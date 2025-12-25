// src/components/sections/Hero/index.tsx
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { HERO_CONTENT } from "./constants";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
    const t = await getTranslations();
    const { header, subheader, image, buttons } = HERO_CONTENT;

    return (
        <MaxWidthWrapper>
            <div className="w-full ">
                <div className="relative md:w-full rounded-4xl overflow-hidden flex flex-col items-center text-center py-24 px-6">
                    {/* Background Image */}
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                        className="md:object-fill object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
                        <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-white">
                            {t(header)}
                        </h1>

                        <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                            {t(subheader)}
                        </p>
                        {/* Dynamic Button Rendering */}
                        <div className="flex items-center gap-5">
                            {buttons.map((btn, index) => (
                                <Link
                                    key={index}
                                    href={btn.href}
                                    className="bg-white hover:bg-neutral-300 rounded-xl px-4 py-2 font-bold transition-colors duration-300 shadow-md text-black"
                                >
                                    {t(btn.label)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Hero;
