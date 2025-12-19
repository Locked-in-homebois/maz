import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { GRIDCONTENT, HEADERCONTENT, CAROUSELCONTENT } from "./contsants";
import Image from "next/image";

const Card = () => {
    return (
        <MaxWidthWrapper>
            <div className="max-h-200 relative rounded-3xl -z-30">
                <Image
                    src={CAROUSELCONTENT.image.src}
                    alt={CAROUSELCONTENT.image.alt}
                    width={1200}
                    height={1000}
                    className="w-full h-200 rounded-4xl"
                ></Image>
                <div className="grid grid-cols-2 absolute top-0 z-10 w-full h-full px-5 py-5 rounded-2xl bg-black/50 text-neutral-200 backdrop-blur-xs">
                    <div className=" w-fit h-fit rounded-xl">
                        <h1 className="font-black  text-6xl">
                            {HEADERCONTENT.title}
                        </h1>
                        <p className="text-neutral-400 max-w-lg">
                            {HEADERCONTENT.desc}
                        </p>
                    </div>
                    <div className=" row-span-2">hi</div>
                    <div className="grid grid-cols-2 gap-x-30 w-fit">
                        {GRIDCONTENT.map((item, index) => (
                            <div key={index} className="flex flex-col gap-6">
                                <h1 className="text-2xl">{item.title}</h1>
                                <p className="text-neutral-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};
export default Card;
