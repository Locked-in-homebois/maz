import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { LeftLowCard, TextPart, RightCards } from "./types";
import { LeftLowCards_DATA, RightCards_DATA, TextPart_DATA } from "./constants";
import { Diamond, icons, Key } from "lucide-react";
import Image from "next/image";
export default function OriginalFunction() {
    return (
        <MaxWidthWrapper className="">
            <main className="grid grid-cols-2 gap-10 mt-10">
                <div className="">
                    <div className="flex gap-6 text-blue-500 text-xl font-bold ">
                        <Diamond className="bg-blue-100" />
                        {TextPart_DATA.iconTitle}
                    </div>
                    <div className="flex flex-col mt-8 text-5xl  w-full font-bold gap-3">
                        {TextPart_DATA.header}
                    </div>

                    <div className="flex flex-col mt-8 text-2xl  text-gray-500 gap-3">
                        {TextPart_DATA.desc}
                    </div>

                    <div className="grid grid-cols-2 mt-8 gap-4 ">
                        {LeftLowCards_DATA.map((cards, index) => {
                            const IconComponent = cards.icon;

                            return (
                                <div className="border border-gray-400 flex flex-col gap-2 px-6 py-4 rounded-2xl"
                                    key={index}>
                                    <div className="flex gap-6">
                                        <IconComponent className="bg-blue-300" />
                                        <h1 className="font-bold text-lg">{cards.title}</h1>
                                    </div>
                                    <p className="text-gray-500">{cards.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className=" grid grid-cols-2  gap-6 " >
                    {RightCards_DATA.map((item, index) => {
                        return (
                            <div key={index} className="relative" >
                                <Image
                                    src={item.Image.src}
                                    alt={item.Image.alt}
                                    width={item.Image.width}
                                    height={item.Image.height}
                                    // 2. This ensures the image respects the height from your constants file
                                    style={{ height: `${item.Image.height}px`, width: 'auto' }}
                                    className="rounded-2xl object-cover"
                                />



                            </div>
                        );
                    })}
                </div>



            </main>
        </MaxWidthWrapper>
    );
}
