import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { LeftLowCard, TextPart, RightCards, } from "./types";
import { LeftLowCards_DATA, TextPart_DATA } from "./constants";
import { Diamond, icons } from "lucide-react";
import { title } from "process";


export default function OriginalFunction() {
    return (

        <MaxWidthWrapper className="">
            <main className="grid grid-cols-2">

                <div className="flex flex-col">
                    <Diamond />
                    {TextPart_DATA.iconTitle}

                    <div className="flex flex-col text-3xl font-bold gap-3">
                        {TextPart_DATA.header}
                    </div>

                    <div className="flex flex-col text-xl font-bold gap-3">
                        {TextPart_DATA.desc}
                    </div>

                    <div className="grid grid-cols-2 gap-4 ">
                        {LeftLowCards_DATA.map((cards, index) =>
                            <div
                                key={index}
                                icon={Diamond}
                                title={cards.title}
                                desc={cards.desc}

                                div />


                        )}

                    </div>

                </div>

                <div>


                </div>


            </main>
        </MaxWidthWrapper>

    )


}