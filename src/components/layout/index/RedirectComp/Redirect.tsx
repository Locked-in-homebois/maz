import { getTranslations } from "next-intl/server";
import { REDIRECTCONTENT } from "./constants";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";

const Redirect = async () => {
    const t = await getTranslations();
    return (
        <MaxWidthWrapper>
            <div className="grid md:grid-cols-2 pt-10 pb-5 md:gap-0 my-10 gap-20 md:px-5 border-2 border-logocolor rounded-2xl ">
                {REDIRECTCONTENT.map((item, index) => (
                    <div className="relative grid gap-6 px-10" key={index}>
                        <div className="grid gap-2">
                            <h1 className="md:text-6xl text-5xl text-sky-950 font-extrabold">
                                {t(item.title)}
                            </h1>
                            <p className="text-gray-600 text-[22px] min-h-25 max-w-150">
                                {t(item.description)}
                            </p>
                        </div>
                        <div className="">
                            <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                width={1024}
                                height={1200}
                                className="object-cover max-h-120 rounded-2xl "
                            />
                        </div>
                        <Link href={item.href}>
                            <h1 className="text-2xl font-extrabold px-4 py-3 tracking-wider text-logocolor bg-sky-950 justify-self-center w-full text-center rounded-xl">
                                {t(item.buttontext)}
                            </h1>
                        </Link>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};
export default Redirect;
