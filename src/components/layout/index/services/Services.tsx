import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { BOXCONTENT, HEADERCONTENT } from "./constants";
const Services = () => {
    return (
        <MaxWidthWrapper>
            <div className="w-full grid gap-9 grid-cols-3 justify-items-center h-60">
                <div className="bg-neutral-200  ">
                    <h1>{HEADERCONTENT.title}</h1>
                </div>

                <div className="bg-neutral-200 rounded-2xl ">hi</div>

                <div className="bg-neutral-200 rounded-2xl ">hi</div>
            </div>
        </MaxWidthWrapper>
    );
};
export default Services;
