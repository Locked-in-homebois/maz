import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, PHOTOSIMAGES } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { div } from "motion/react-client";
{
}
const MasterPiece = () => {
    return (
        <MaxWidthWrapper>
            <div>
                <div className="py-7 grid gap-2">
                    <h1 className="text-5xl font-extrabold">
                        {HEADERCONTENT.header}
                    </h1>{" "}
                    <div className="flex justify-between">
                        <h1 className="text-xl text-gray-400">
                            {HEADERCONTENT.desc}
                        </h1>
                        <h1 className={HEADERCONTENT.linkFull.className}>
                            <Link href={HEADERCONTENT.linkFull.href}>
                                {HEADERCONTENT.linkFull.text}
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className="grid md:gap-10 gap-3 md:grid-cols-2 justify-self-center text-white">
                    {PHOTOSIMAGES.map((item, index) => (
                        <div key={index} className="flex gap-10  relative ">
                            <Image
                                src={item.photo.src}
                                width={1000}
                                height={1000}
                                alt={item.photo.alt}
                                className="rounded-2xl  max-h-100"
                            />
                            <div className="absolute grid grid-cols-2 self-end  gap-1 rounded-xl mx-3 my-3">
                                <h1 className={item.tag.className}>
                                    {item.tag.text}
                                </h1>
                                <div className="flex backdrop-blur-sm rounded-xl gap-1 items-center w-fit">
                                    <item.location.icon />{" "}
                                    <h1>{item.location.text}</h1>
                                </div>
                                <h1 className="col-span-2 text-2xl backdrop-blur-md w-fit rounded-2xl">
                                    {item.text}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};
export default MasterPiece;
