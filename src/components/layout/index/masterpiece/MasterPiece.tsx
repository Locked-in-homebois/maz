"use client";

import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, PHOTOSIMAGES } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const MasterPiece = () => {
    const t = useTranslations();
    return (
        <MaxWidthWrapper>
            <div>
                <div className="py-7 grid gap-2">
                    <h1 className="text-5xl font-extrabold">
                        {t(HEADERCONTENT.header)}
                    </h1>

                    <div className="flex justify-between">
                        <h1 className="text-xl text-gray-400">
                            {t(HEADERCONTENT.desc)}
                        </h1>

                        <h1 className={HEADERCONTENT.linkFull.className}>
                            <Link href={HEADERCONTENT.linkFull.href}>
                                {t(HEADERCONTENT.linkFull.text)}
                            </Link>
                        </h1>
                    </div>
                </div>

                <div className="grid md:gap-10 gap-3 md:grid-cols-2 justify-self-center text-white">
                    {PHOTOSIMAGES.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex gap-10 relative"
                        >
                            {/* Card wrapper clips the zoomed image */}
                            <div className="relative overflow-hidden rounded-2xl">
                                {/* Zoom ONLY the image on hover */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Image
                                        src={item.photo.src}
                                        width={1000}
                                        height={1000}
                                        alt={item.photo.alt}
                                        className="rounded-2xl md:h-100 object-cover h-56"
                                    />
                                </motion.div>

                                <div className="absolute bottom-0 left-0 grid grid-cols-2 gap-1 rounded-xl mx-3 my-3">
                                    <h1 className={item.tag.className}>
                                        {t(item.tag.text)}
                                    </h1>

                                    <div className="flex backdrop-blur-sm rounded-xl gap-1 items-center w-fit">
                                        <item.location.icon />
                                        <h1>{t(item.location.text)}</h1>
                                    </div>

                                    <h1 className="col-span-2 text-2xl backdrop-blur-2xl w-fit text-gray-50 rounded-2xl">
                                        {t(item.text)}
                                    </h1>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default MasterPiece;
