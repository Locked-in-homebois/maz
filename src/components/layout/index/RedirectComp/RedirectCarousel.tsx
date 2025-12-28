// src/components/layout/index/RedirectComp/RedirectCarousel.tsx
"use client"; // Important! This makes it run in the browser

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type Props = {
	slides: { src: string; alt: string }[];
};

const RedirectCarousel = ({ slides }: Props) => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		AutoScroll({ stopOnInteraction: false, speed: 1 }),
	]);

	return (
		<div className="overflow-hidden rounded-2xl max-h-120" ref={emblaRef}>
			<div className="flex">
				{slides.map((slide, index) => (
					<div
						className="flex-[0_0_100%] min-w-0 relative"
						key={index}
					>
						<Image
							src={slide.src}
							alt={slide.alt}
							width={1024}
							height={1200}
							className="object-cover w-full h-full"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default RedirectCarousel;
