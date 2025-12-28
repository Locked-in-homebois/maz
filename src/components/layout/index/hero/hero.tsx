"use client";

import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { INDEX_HERO_CONTENT } from "./constants";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";

const buttonVars =
    "relative flex items-center justify-center rounded-full transition-all duration-300 " +
    "bg-white text-neutral-900 font-bold shadow-md " +
    "text-sm py-3 px-6 w-full sm:w-auto " +
    "md:text-lg md:py-3 md:px-8 " +
    "hover:bg-neutral-100 active:scale-95";

const glassCardStyles =
    "z-10 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg " +
    "text-neutral-100 font-light leading-relaxed tracking-wide text-center " +
    "text-xs px-4 py-3 mx-auto max-w-[95%] " +
    "md:text-lg md:text-left md:px-5 md:py-3";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const Hero = () => {
    const t = useTranslations();

    return (
        <main className="flex justify-center py-4 md:py-5">
            <MaxWidthWrapper>
                <div className="relative flex flex-col justify-center rounded-3xl md:rounded-4xl min-h-[80dvh] md:min-h-0 md:h-160 overflow-hidden px-5 md:px-10">
                    {/* Background Image */}
                    <Image
                        src={INDEX_HERO_CONTENT.image.src}
                        alt={INDEX_HERO_CONTENT.image.alt}
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        quality={75}
                    />
                    {/* Overlay: Slightly darker on mobile for better text contrast */}
                    <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-10 flex flex-col justify-center gap-8 md:gap-10 max-w-5xl rounded-3xl py-6 md:py-10"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center md:text-start font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
                            {t(INDEX_HERO_CONTENT.title)}
                        </h1>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {INDEX_HERO_CONTENT.button.map((btn, index) => (
                                <Link
                                    key={index}
                                    href={btn.href}
                                    className={buttonVars}
                                >
                                    {t(btn.label)}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`${glassCardStyles} hidden md:block absolute bottom-6 right-6`}
                    >
                        <h1 className="text-gray-300 ">
                            {t(INDEX_HERO_CONTENT.footer)}
                        </h1>
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </main>
    );
};

export default Hero;
