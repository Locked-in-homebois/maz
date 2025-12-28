"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
	slides: { src: string; alt: string }[];
};

const RedirectCarousel = ({ slides }: Props) => {
	const validSlides = slides.filter(
		(slide) => slide.src && slide.src.trim() !== ""
	);

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({
			delay: 3000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
			// Keeps the hover detection on the wrapper (including buttons)
			rootNode: (emblaRoot) => emblaRoot.parentElement as HTMLElement,
		}),
	]);

	// --- NEW: Visibility Observer ---
	// This watches the carousel and only plays the 'Autoplay' plugin
	// when the component is actually visible on the screen.
	useEffect(() => {
		if (!emblaApi) return;

		const autoplay = emblaApi.plugins()?.autoplay;
		if (!autoplay) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				// If visible (isIntersecting), play. Otherwise, stop.
				if (entry.isIntersecting) {
					autoplay.play();
				} else {
					autoplay.stop();
				}
			},
			{ threshold: 0.1 }
		);

		// Observe the carousel viewport
		observer.observe(emblaApi.rootNode());

		return () => observer.disconnect();
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	if (validSlides.length === 0) return null;

	return (
		<div className="group relative overflow-hidden rounded-2xl max-h-120">
			{/* Viewport */}
			<div
				className="overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
				ref={emblaRef}
			>
				<div className="flex">
					{validSlides.map((slide, index) => (
						<div
							className="flex-[0_0_100%] min-w-0 relative"
							key={index}
						>
							<Image
								src={slide.src}
								alt={slide.alt || "project image"}
								width={1024}
								height={1200}
								className="object-cover w-full h-full select-none"
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>

			{/* --- ARROWS --- */}
			{validSlides.length > 1 && (
				<>
					<button
						type="button"
						onClick={scrollPrev}
						className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 
                       bg-white/70 text-sky-950 
                       p-3 rounded-full shadow-lg backdrop-blur-sm 
                       transition-all duration-300
                       opacity-0 group-hover:opacity-100
                       hover:bg-white hover:scale-110 active:scale-95"
						aria-label="Previous slide"
					>
						<ChevronLeft size={24} strokeWidth={3} />
					</button>

					<button
						type="button"
						onClick={scrollNext}
						className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 
                       bg-white/70 text-sky-950 
                       p-3 rounded-full shadow-lg backdrop-blur-sm 
                       transition-all duration-300
                       opacity-0 group-hover:opacity-100
                       hover:bg-white hover:scale-110 active:scale-95"
						aria-label="Next slide"
					>
						<ChevronRight size={24} strokeWidth={3} />
					</button>
				</>
			)}
		</div>
	);
};

export default RedirectCarousel;
