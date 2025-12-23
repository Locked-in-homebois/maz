"use client";

import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { PHOTOSCAROUSEL } from "./constants";

export default function Carousel() {
    const track = [...PHOTOSCAROUSEL, ...PHOTOSCAROUSEL]; // duplicate for seamless loop otherwise this nigga does jumps

    return (
        <div className=" w-full relative overflow-hidden bg-white my-10 max-w-[2200px] place-self-center">
            <motion.div
                className="flex w-max gap-5  py-10"
                animate={{ x: ["0%", "-50%"] }} // move exactly one not the whole double array otherwise this nigga jumps too
                transition={{
                    ease: "linear",
                    duration: 60,
                    repeat: Infinity,
                }}
            >
                {track.map((img, index) => (
                    <Image
                        key={index}
                        alt={img.image.alt}
                        src={img.image.src}
                        height={300}
                        width={400}
                        className="rounded-lg overflow-hidden object-cover md:h-70 md:w-60 h-50 w-40 shadow-gray-400 shadow-lg"
                    />
                ))}
            </motion.div>
        </div>
    );
}
