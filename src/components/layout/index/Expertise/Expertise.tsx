import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, LISTCONTENT, BUTTONS, IMAGECONTENT } from "./constants";
import Image from "next/image";

const Expertise = () => {
    return (
        <div className="w-screen bg-white md:py-25 py-15 mb-20">
            <MaxWidthWrapper>
                <div className="md:grid md:grid-cols-2  grid-rows-2 gap-0 md:gap-30">
                    <div className="grid gap-5">
                        <div className="flex gap-2 text-2xl font-extrabold text-blue-700">
                            <HEADERCONTENT.title.icon size={30} />
                            <p>{HEADERCONTENT.title.text}</p>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight">
                            {HEADERCONTENT.header}
                        </h1>
                        <p className="text-xl text-gray-500">
                            {HEADERCONTENT.desc}
                        </p>
                    </div>
                    <div className="row-span-2 py-7 ">
                        <Image
                            src={IMAGECONTENT.photo.src}
                            alt={IMAGECONTENT.photo.alt}
                            width={1200}
                            height={1000}
                            className="h-full w-fit rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div className="grid md:gap-10 gap-3 ">
                        {LISTCONTENT.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-10 items-center"
                            >
                                <item.icon
                                    size={30}
                                    className="text-blue-700"
                                />{" "}
                                <h1 className="text-2xl md:max-w-full max-w-62.5">
                                    {item.text}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
export default Expertise;
