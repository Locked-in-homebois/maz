import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, PHOTOCONTENT, PHOTOSIMAGES } from "./constants";
import Image from "next/image";
{
}
const MasterPiece = () => {
    return (
        <MaxWidthWrapper>
            <div className="grid md:gap-10 gap-3 ">
                {PHOTOCONTENT.map((item, index) => (
                    <div key={index} className="flex gap-10 items-center">
                        <h1 className={item.tag.className}>{item.tag.text}</h1>
                        <item.location.icon size={30} className="" />{" "}
                        <h1 className="text-2xl md:max-w-full max-w-62.5">
                            {item.location.text}
                        </h1>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};
export default MasterPiece;
