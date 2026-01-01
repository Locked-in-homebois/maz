import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import {
    LeftLowCards_DATA,
    RightImages_LeftCol,
    RightImages_RightCol,
    TextPart_DATA,
} from "./constants";
import { Diamond } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function OriginalFunction() {
    const t = await getTranslations();
    return (
        <MaxWidthWrapper className="">
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
                {/* --- Left Side: Text Content --- */}
                <div className="flex flex-col justify-center">
                    <div className="flex gap-4 items-center text-blue-500 text-xl font-bold">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Diamond className="w-6 h-6" />
                        </div>
                        {t(TextPart_DATA.iconTitle)}
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        {t(TextPart_DATA.header)}
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        {t(TextPart_DATA.desc)}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
                        {LeftLowCards_DATA.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200 bg-white shadow-sm flex flex-col gap-4 p-6 rounded-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900">
                                            {t(card.title)}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {t(card.desc)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-24">
                        {RightImages_LeftCol.map((item, index) => (
                            <div
                                key={`l-${index}`}
                                className="relative group overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={item.Image.src}
                                    alt={item.Image.alt}
                                    width={item.Image.width}
                                    height={item.Image.height}
                                    className="w-full h-auto object-cover rounded-2xl"
                                    style={{ height: `${item.Image.height}px` }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6">
                        {RightImages_RightCol.map((item, index) => (
                            <div
                                key={`r-${index}`}
                                className="relative group overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={item.Image.src}
                                    alt={item.Image.alt}
                                    width={item.Image.width}
                                    height={item.Image.height}
                                    className="w-full h-auto object-cover rounded-2xl "
                                    style={{ height: `${item.Image.height}px` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </MaxWidthWrapper>
    );
}
