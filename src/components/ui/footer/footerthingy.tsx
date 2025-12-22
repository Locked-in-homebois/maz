import { LucideDraftingCompass, Mail, Phone, LocationEdit, Key } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { COMPANY_LINKS, LEFT_DATA, RIGHT_DATA, SERVICE_LINKS } from "./constants";
import Link from "next/link";

export default function Footer() {

    const Icon = LEFT_DATA.icon

    return (


        <main className="bg-[#0f131a] px-4 mt-10 py-10">
            <MaxWidthWrapper>
                <div className="grid grid-cols-4 border-b border-gray-600 pb-30  text-white">


                    <div className="flex flex-col gap-6 max-w-55 " >
                        <div className="flex gap-6 ">
                            <Icon />
                            <h1 className="text-2xl font-bold"> {LEFT_DATA.header} </h1>
                        </div>
                        <p> {LEFT_DATA.text}</p>

                    </div>


                    <div className="flex gap-4 flex-col">
                        <h1 className="text-2xl font-bold ">Services</h1>
                        {SERVICE_LINKS.map((item, index) => (
                            <Link href={item.href} key={index} >
                                {item.label}
                            </Link>

                        )
                        )
                        }

                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">Company</h1>
                        {COMPANY_LINKS.map((item, index) => (
                            <Link href={item.href} key={index}>
                                {item.label}
                            </Link>


                        )
                        )

                        }

                    </div>




                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">Contact</h1>
                        {RIGHT_DATA.map((item, index) => {
                            const Anamegiven = item.icon;
                            return (
                                <div className="flex gap-4 hover:text-blue-500" key={index}>
                                    <Anamegiven />
                                    <Link className="" href={item.href}>

                                        {item.text}

                                    </Link>

                                </div>
                            );

                        }
                        )
                        }


                    </div>









                </div>
                <p className="text-gray-600 text-xl grid tracking-tighter grid-span-2">2025 C all rights are reserved by Tarsier Corp.</p>
            </MaxWidthWrapper>
        </main >

    )

}