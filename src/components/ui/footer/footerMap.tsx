"use client";

import { useEffect, useRef, useState } from "react";

const MAP_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242483313!2d46.492886205368556!3d24.725455373700168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2str!4v1766437131415!5m2!1sen!2str";

export default function FooterMap() {
    const ref = useRef<HTMLDivElement>(null);
    const [src, setSrc] = useState<string | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSrc(MAP_SRC);
                    io.disconnect();
                }
            },
            { rootMargin: "300px 0px" } // loads shortly before footer is visible
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className="w-full">
            {src ? (
                <iframe
                    src={src}
                    width="600"
                    height="450"
                    loading="lazy"
                    title="footer google maps"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-63 rounded-xl invert-95 hue-rotate-10 contrast-120 saturate-160"
                />
            ) : (
                // lightweight placeholder (keeps layout stable)
                <div className="w-full h-63 rounded-xl bg-white/10" />
            )}
        </div>
    );
}
