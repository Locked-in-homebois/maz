"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
	images: { src: string }[];
	productName: string;
}

export default function ProductImageGallery({
	images,
	productName,
}: ProductImageGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	// 1. Initialize Main and Thumb Carousels
	const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
	const [thumbRef, thumbApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
	});

	// 2. Sync Logic
	const onSelect = useCallback(() => {
		if (!mainApi || !thumbApi) return;
		setSelectedIndex(mainApi.selectedScrollSnap());
		thumbApi.scrollTo(mainApi.selectedScrollSnap());
	}, [mainApi, thumbApi]);

	useEffect(() => {
		if (!mainApi) return;
		onSelect();
		mainApi.on("select", onSelect);
		mainApi.on("reInit", onSelect);
	}, [mainApi, onSelect]);

	// 3. Navigation Functions (Prev / Next)
	const scrollPrev = useCallback(() => {
		if (mainApi) mainApi.scrollPrev();
	}, [mainApi]);

	const scrollNext = useCallback(() => {
		if (mainApi) mainApi.scrollNext();
	}, [mainApi]);

	// 4. Thumb Click Handler
	const onThumbClick = useCallback(
		(index: number) => {
			if (!mainApi) return;
			mainApi.scrollTo(index);
		},
		[mainApi]
	);

	return (
		<div className="flex flex-col gap-4 w-full select-none">
			{/* --- Main Image Area --- */}
			<div className="relative overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 aspect-square group">
				{/* Carousel Viewport */}
				<div className="h-full" ref={mainRef}>
					<div className="flex h-full touch-pan-y">
						{images.map((img, index) => (
							<div
								className="relative flex-[0_0_100%] min-w-0 h-full"
								key={index}
							>
								<Image
									src={img.src}
									alt={`${productName} view ${index + 1}`}
									fill
									className="object-cover"
									priority={index === 0}
								/>
							</div>
						))}
					</div>
				</div>

				{/* --- Overlay Navigation Buttons --- */}
				{/* Only show buttons if there is more than 1 image */}
				{images.length > 1 && (
					<>
						{/* Left Button */}
						<button
							onClick={scrollPrev}
							className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 translate-x-2 group-hover:translate-x-0"
							aria-label="Previous image"
						>
							<ChevronLeft className="w-6 h-6 text-neutral-800" />
						</button>

						{/* Right Button */}
						<button
							onClick={scrollNext}
							className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 -translate-x-2 group-hover:translate-x-0"
							aria-label="Next image"
						>
							<ChevronRight className="w-6 h-6 text-neutral-800" />
						</button>
					</>
				)}
			</div>

			{/* --- Thumbnail Strip --- */}
			<div className="overflow-hidden" ref={thumbRef}>
				<div className="flex gap-3 touch-pan-x py-1 px-1">
					{images.map((img, index) => (
						<button
							key={index}
							onClick={() => onThumbClick(index)}
							className={`relative flex-[0_0_18%] aspect-square min-w-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
								index === selectedIndex
									? "border-neutral-900 ring-2 ring-neutral-200 opacity-100"
									: "border-transparent opacity-60 hover:opacity-100"
							}`}
						>
							<Image
								src={img.src}
								alt={`Thumbnail ${index + 1}`}
								fill
								className="object-cover"
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
