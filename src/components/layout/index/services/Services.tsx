import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { BOXCONTENT, HEADERCONTENT } from "./constants";
import Image from "next/image";

const Services = () => {
    return (
        <MaxWidthWrapper>
            <div className="w-full grid gap-9 grid-cols-4 relative -z-30 justify-items-center ">
                <div className="col-span-4 text-center shadow-black  w-full shadow- rounded-2xl">
                    <h1 className="uppercase text-4xl font-black">
                        {HEADERCONTENT.title}
                    </h1>
                    <p>{HEADERCONTENT.description}</p>
                </div>

                {BOXCONTENT.map((item, index) => (
                    <div
                        key={index}
                        className="grid gap-3 rounded-3xl  bg-black/10"
                    >
                        <div className=" w-full relative rounded-2xl -z-10">
                            <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                width={1200}
                                height={1000}
                                className="rounded-[20px]"
                            />
                            <item.icon
                                size={45}
                                className="bg-neutral-50 absolute rounded-xl top-5 right-5 p-2 justify-self-end "
                            />
                        </div>
                        <div className="text-center px-3 rounded-2xl flex flex-col justify-center">
                            <h1 className="uppercase text-2xl font-black">
                                {item.title}
                            </h1>
                            <p className="">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};
export default Services;
