"use client";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { PHOTOSCAROUSEL, HEADERCONTENT } from "./constants";

export default function Carousel() {
    const track = [...PHOTOSCAROUSEL, ...PHOTOSCAROUSEL]; // duplicate for seamless loop otherwise this nigga does jumps

    return (
        <div className="bg-white pt-10 mt-10">
            <MaxWidthWrapper>
                <div className="grid gap-5 max-w-6xl">
                    <h1 className="text-5xl font-black bg-sky-00 text-logocolor w-fit rounded-xl px-2 py-1">
                        {HEADERCONTENT.header}
                    </h1>
                    <p className="text-sky-900 text-xl">{HEADERCONTENT.desc}</p>
                </div>
            </MaxWidthWrapper>
            <div className=" w-full relative overflow-hidden  my-10  max-w-550 place-self-center">
                <motion.div
                    className="flex w-max gap-5  py-10"
                    animate={{ x: ["0%", "-50%"] }} // move exactly one not the whole double array otherwise this nigga jumps too
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {track.map((img, index) => (
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ y: -10, scale: 1.08 }}
                            transition={{ duration: 0.1 }}
                        >
                            <Image
                                key={index}
                                alt={img.image.alt}
                                src={img.image.src}
                                height={300}
                                width={400}
                                className="rounded-lg overflow-hidden object-cover md:h-90 md:w-100 h-50 w-40 shadow-gray-400 shadow-lg"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
