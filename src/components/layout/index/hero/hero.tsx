"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { INDEX_HERO_CONTENT } from "./constants";
import { motion, type Variants } from "motion/react";

// 1. Cleaned up Button Vars:
// - Unified padding logic for better mobile touch targets
const buttonVars =
    "group relative flex items-center justify-center rounded-full bg-neutral-100 shadow-sm transition-all duration-300 " +
    "text-[15px] font-[550] py-3 px-5 " + // Mobile: larger touch target, standard text
    "md:text-[21px] md:font-medium md:py-2 md:px-6 " + // Desktop: larger text, refined padding
    "hover:bg-lime-900 hover:text-white hover:shadow-lg active:scale-95";

// 2. Optimized Paragraph Vars:
const pVars =
    "z-10 rounded-lg backdrop-blur-sm bg-black/1 text-gray-100 font-light leading-relaxed " +
    "text-base text-center px-4 py-2 mt-8  mx-auto " + // Mobile: Centered, constrained width, reasonable margin
    "md:text-2xl md:text-left md:absolute md:bottom-10 md:left-10 md:m-0 md:max-w-none md:px-4"; // Desktop: Pinned, larger

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Hero = () => {
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
                            {INDEX_HERO_CONTENT.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {INDEX_HERO_CONTENT.button.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={buttonVars}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={pVars}
                    >
                        <h1 className="text-gray-300">
                            {INDEX_HERO_CONTENT.footer}
                        </h1>
                    </motion.p>
                </div>
            </MaxWidthWrapper>
        </main>
    );
};

export default Hero;
