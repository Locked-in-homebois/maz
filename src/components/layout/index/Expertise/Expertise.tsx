import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, LISTCONTENT, BUTTONS, IMAGECONTENT } from "./constants";
import Image from "next/image";

const Expertise = () => {
    return (
        <div className="w-screen bg-white py-25 mb-20">
            <MaxWidthWrapper>
                <div className="grid grid-cols-2 grid-rows-2 gap-30">
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
                    <div className="row-span-2 pt-20">
                        <Image
                            src={IMAGECONTENT.photo.src}
                            alt={IMAGECONTENT.photo.alt}
                            width={1200}
                            height={1000}
                            className="h-full w-full rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div className="grid gap-10">
                        {LISTCONTENT.map((item, index) => (
                            <div key={index} className="flex gap-10">
                                <item.icon
                                    size={30}
                                    className="text-blue-700"
                                />{" "}
                                <h1 className="text-2xl">{item.text}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
export default Expertise;
