"use client";

import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, PHOTOSIMAGES } from "./constants";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
import { useTranslations } from "next-intl";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const MasterPiece = () => {
    const t = useTranslations();

    return (
        <section className="py-16 md:py-24 bg-neutral-50/50">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-10">
                    {/* HEADER: More compact vertical spacing */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 border-b border-neutral-200 pb-8">
                        <div className="space-y-3 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                                {t(HEADERCONTENT.header)}
                            </h2>
                            <p className="text-lg text-neutral-500 max-w-lg">
                                {t(HEADERCONTENT.desc)}
                            </p>
                        </div>

                        <Link
                            href={HEADERCONTENT.linkFull.href}
                            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 transition-colors hover:text-blue-700 pb-1"
                        >
                            {t(HEADERCONTENT.linkFull.text)}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* GRID: Reduced gap and card heights */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 gap-4 md:gap-6"
                    >
                        {PHOTOSIMAGES.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                // FIX: Reduced height to h-[300px] (mobile) and h-[400px] (desktop)
                                className="group relative h-75 md:h-100 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm cursor-pointer"
                            >
                                {/* 1. IMAGE */}
                                <Link href={item.href}>
                                    <div className="absolute inset-0 h-full w-full">
                                        <Image
                                            src={item.photo.src}
                                            alt={item.photo.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Darker gradient at bottom for text readability */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                    </div>
                                    {/* 2. CONTENT */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                                        <div className="translate-y-2 transform transition-transform duration-300 ease-out group-hover:translate-y-0">
                                            {/* TAGS */}
                                            <div className="mb-3 flex flex-wrap gap-2 items-center">
                                                {/* We use your class from constants, but force a smaller text size if needed */}
                                                <span
                                                    className={`${item.tag.className} text-[10px]! px-2.5! py-1! rounded-lg! uppercase tracking-wider font-bold shadow-sm`}
                                                >
                                                    {t(item.tag.text)}
                                                </span>
                                                {/* Location Chip */}
                                                <div className="flex items-center gap-1 rounded-lg bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10">
                                                    <item.location.icon
                                                        size={12}
                                                    />
                                                    <span className="uppercase tracking-wider">
                                                        {t(
                                                            item.location.text
                                                        )}{" "}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* TITLE: Reduced from 3xl to 2xl */}
                                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                                                {t(item.text)}
                                            </h3>
                                            {/* HOVER LINK */}
                                            <div className="h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-6 group-hover:opacity-100 group-hover:mt-2">
                                                <span className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-widest">
                                                    View Details{" "}
                                                    <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default MasterPiece;
