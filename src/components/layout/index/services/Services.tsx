import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { BOXCONTENT, HEADERCONTENT } from "./constants";
import Image from "next/image";

const Services = () => {
    return (
        <MaxWidthWrapper>
            <div className="w-full grid gap-9 grid-cols-3 justify-items-center h-60">
                <div className="col-span-3 text-center">
                    <h1>{HEADERCONTENT.title}</h1>
                    <p>{HEADERCONTENT.description}</p>
                </div>

                {BOXCONTENT.map((item, index) => (
                    <div key={index}>
                        <div className="relative -z-10">
                            <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                width={1200}
                                height={1000}
                                className="rounded-2xl absolute"
                            />
                            <item.icon className="bg-neutral-50 rounded-md relative justify-self-end size-9 " />
                        </div>
                        <div className="">
                            <h1 className="backdrop-blur-2xl max-w-fit">
                                {item.title}
                            </h1>
                            <p className="backdrop-blur-2xl max-w-fit">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};
export default Services;
