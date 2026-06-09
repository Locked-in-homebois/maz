"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { PointerEvent, WheelEvent } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
	ChevronLeft,
	ChevronRight,
	Maximize2,
	Minus,
	Plus,
	RotateCcw,
	X,
} from "lucide-react";
import { useLocale } from "next-intl";

interface ProductImageGalleryProps {
	images: { src: string }[];
	productName: string;
}

type TouchPoint = {
	x: number;
	y: number;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 6;
const OPEN_ZOOM_LEVEL = 2;

function getPointerDistance(points: TouchPoint[]) {
	if (points.length < 2) return 0;

	return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

function getPointerMidpoint(points: TouchPoint[]) {
	if (points.length < 2) return { x: 0, y: 0 };

	return {
		x: (points[0].x + points[1].x) / 2,
		y: (points[0].y + points[1].y) / 2,
	};
}

export default function ProductImageGallery({
	images,
	productName,
}: ProductImageGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isZoomOpen, setIsZoomOpen] = useState(false);
	const [zoom, setZoom] = useState(1);
	const [pan, setPan] = useState({ x: 0, y: 0 });
	const [isPanning, setIsPanning] = useState(false);
	const [isPinching, setIsPinching] = useState(false);
	const zoomSurfaceRef = useRef<HTMLDivElement>(null);
	const zoomRef = useRef(MIN_ZOOM);
	const panRef = useRef({ x: 0, y: 0 });
	const panStartRef = useRef({ pointerX: 0, pointerY: 0, panX: 0, panY: 0 });
	const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
	const previewPointersRef = useRef(new Map<number, TouchPoint>());
	const previewPinchStartDistanceRef = useRef<number | null>(null);
	const zoomPointersRef = useRef(new Map<number, TouchPoint>());
	const zoomPinchStartRef = useRef({
		distance: 0,
		zoom: MIN_ZOOM,
		pan: { x: 0, y: 0 },
		midpoint: { x: 0, y: 0 },
	});
	const locale = useLocale();
	const direction = locale === "ar" ? "rtl" : "ltr";
	const selectedImage = images[selectedIndex];

	// 1. Initialize Main and Thumb Carousels
	const [mainRef, mainApi] = useEmblaCarousel({ loop: true, direction });
	const [thumbRef, thumbApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
		direction,
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

	const getZoomCenter = useCallback(() => {
		const rect = zoomSurfaceRef.current?.getBoundingClientRect();

		if (rect) {
			return {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2,
			};
		}

		return {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		};
	}, []);

	const getAnchoredPan = useCallback(
		(nextZoom: number, focalPoint: TouchPoint) => {
			const currentZoom = zoomRef.current;
			const currentPan = panRef.current;
			const center = getZoomCenter();
			const zoomRatio = nextZoom / currentZoom;

			return {
				x:
					focalPoint.x -
					center.x -
					(focalPoint.x - center.x - currentPan.x) * zoomRatio,
				y:
					focalPoint.y -
					center.y -
					(focalPoint.y - center.y - currentPan.y) * zoomRatio,
			};
		},
		[getZoomCenter]
	);

	const applyZoom = useCallback((nextZoom: number, nextPan = panRef.current) => {
		const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
		const clampedPan = clampedZoom === MIN_ZOOM ? { x: 0, y: 0 } : nextPan;

		zoomRef.current = clampedZoom;
		panRef.current = clampedPan;
		setZoom(clampedZoom);
		setPan(clampedPan);
	}, []);

	const openZoom = useCallback((initialZoom = MIN_ZOOM, focalPoint?: TouchPoint) => {
		const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, initialZoom));
		const center = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		};
		const nextPan = focalPoint
			? {
					x:
						focalPoint.x -
						center.x -
						(focalPoint.x - center.x) * clampedZoom,
					y:
						focalPoint.y -
						center.y -
						(focalPoint.y - center.y) * clampedZoom,
				}
			: { x: 0, y: 0 };

		zoomRef.current = clampedZoom;
		panRef.current = clampedZoom === MIN_ZOOM ? { x: 0, y: 0 } : nextPan;
		setZoom(clampedZoom);
		setPan(panRef.current);
		setIsZoomOpen(true);
	}, []);

	const closeZoom = useCallback(() => {
		setIsZoomOpen(false);
		setZoom(MIN_ZOOM);
		setPan({ x: 0, y: 0 });
		setIsPanning(false);
		setIsPinching(false);
		zoomRef.current = MIN_ZOOM;
		panRef.current = { x: 0, y: 0 };
		swipeStartRef.current = null;
		previewPointersRef.current.clear();
		zoomPointersRef.current.clear();
		previewPinchStartDistanceRef.current = null;
		zoomPinchStartRef.current = {
			distance: 0,
			zoom: MIN_ZOOM,
			pan: { x: 0, y: 0 },
			midpoint: { x: 0, y: 0 },
		};
	}, []);

	const setZoomLevel = useCallback((nextZoom: number, focalPoint?: TouchPoint) => {
		const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
		applyZoom(
			clampedZoom,
			focalPoint ? getAnchoredPan(clampedZoom, focalPoint) : panRef.current
		);
	}, [applyZoom, getAnchoredPan]);

	// 4. Thumb Click Handler
	const onThumbClick = useCallback(
		(index: number) => {
			if (!mainApi) return;
			mainApi.scrollTo(index);
		},
		[mainApi]
	);

	useEffect(() => {
		if (!isZoomOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeZoom();
				return;
			}

			if (event.key === "ArrowLeft" && images.length > 1) {
				scrollPrev();
				return;
			}

			if (event.key === "ArrowRight" && images.length > 1) {
				scrollNext();
				return;
			}

			if (event.key === "+" || event.key === "=") {
				setZoomLevel(zoom + 0.5);
				return;
			}

			if (event.key === "-") {
				setZoomLevel(zoom - 0.5);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [
		closeZoom,
		images.length,
		isZoomOpen,
		scrollNext,
		scrollPrev,
		setZoomLevel,
		zoom,
	]);

	useEffect(() => {
		setZoom(MIN_ZOOM);
		setPan({ x: 0, y: 0 });
		zoomRef.current = MIN_ZOOM;
		panRef.current = { x: 0, y: 0 };
		setIsPanning(false);
		setIsPinching(false);
	}, [selectedIndex]);

	const handleZoomWheel = (event: WheelEvent<HTMLDivElement>) => {
		event.preventDefault();
		const step = event.deltaY > 0 ? -0.25 : 0.25;
		setZoomLevel(zoomRef.current + step, {
			x: event.clientX,
			y: event.clientY,
		});
	};

	const handlePreviewPointerDown = (event: PointerEvent<HTMLDivElement>) => {
		previewPointersRef.current.set(event.pointerId, {
			x: event.clientX,
			y: event.clientY,
		});

		if (previewPointersRef.current.size === 2) {
			event.currentTarget.setPointerCapture(event.pointerId);
			previewPinchStartDistanceRef.current = getPointerDistance(
				Array.from(previewPointersRef.current.values())
			);
		}
	};

	const handlePreviewPointerMove = (event: PointerEvent<HTMLDivElement>) => {
		if (!previewPointersRef.current.has(event.pointerId)) return;

		previewPointersRef.current.set(event.pointerId, {
			x: event.clientX,
			y: event.clientY,
		});

		if (previewPointersRef.current.size < 2 || isZoomOpen) return;

		const startDistance = previewPinchStartDistanceRef.current;
		const currentDistance = getPointerDistance(
			Array.from(previewPointersRef.current.values())
		);

		if (!startDistance || Math.abs(currentDistance - startDistance) < 18) {
			return;
		}

		const pinchScale = currentDistance / startDistance;
		openZoom(
			Math.max(OPEN_ZOOM_LEVEL, Math.min(MAX_ZOOM, pinchScale * 1.5)),
			getPointerMidpoint(Array.from(previewPointersRef.current.values()))
		);
		previewPointersRef.current.clear();
		previewPinchStartDistanceRef.current = null;
	};

	const handlePreviewPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
		if (event.currentTarget.hasPointerCapture(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}

		previewPointersRef.current.delete(event.pointerId);
		if (previewPointersRef.current.size < 2) {
			previewPinchStartDistanceRef.current = null;
		}
	};

	const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
		zoomPointersRef.current.set(event.pointerId, {
			x: event.clientX,
			y: event.clientY,
		});
		event.currentTarget.setPointerCapture(event.pointerId);

		if (zoomPointersRef.current.size === 2) {
			const points = Array.from(zoomPointersRef.current.values());
			zoomPinchStartRef.current = {
				distance: getPointerDistance(points),
				zoom: zoomRef.current,
				pan: panRef.current,
				midpoint: getPointerMidpoint(points),
			};
			setIsPanning(false);
			setIsPinching(true);
			return;
		}

		if (zoomRef.current === MIN_ZOOM) {
			// Not zoomed: track the gesture so a horizontal drag can swipe
			// between images in the direction of the drag.
			swipeStartRef.current = { x: event.clientX, y: event.clientY };
			return;
		}

		panStartRef.current = {
			pointerX: event.clientX,
			pointerY: event.clientY,
			panX: panRef.current.x,
			panY: panRef.current.y,
		};
		setIsPanning(true);
	};

	const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
		if (!zoomPointersRef.current.has(event.pointerId)) return;

		zoomPointersRef.current.set(event.pointerId, {
			x: event.clientX,
			y: event.clientY,
		});

		if (zoomPointersRef.current.size >= 2) {
			const points = Array.from(zoomPointersRef.current.values());
			const {
				distance,
				zoom: startZoom,
				pan: startPan,
				midpoint: startMidpoint,
			} = zoomPinchStartRef.current;
			const currentDistance = getPointerDistance(points);
			const currentMidpoint = getPointerMidpoint(points);

			if (distance > 0 && currentDistance > 0) {
				const nextZoom = Math.min(
					MAX_ZOOM,
					Math.max(MIN_ZOOM, startZoom * (currentDistance / distance))
				);
				const center = getZoomCenter();
				const contentOffset = {
					x: (startMidpoint.x - center.x - startPan.x) / startZoom,
					y: (startMidpoint.y - center.y - startPan.y) / startZoom,
				};
				const nextPan =
					nextZoom === MIN_ZOOM
						? { x: 0, y: 0 }
						: {
								x: currentMidpoint.x - center.x - contentOffset.x * nextZoom,
								y: currentMidpoint.y - center.y - contentOffset.y * nextZoom,
							};

				applyZoom(nextZoom, nextPan);
			}
			return;
		}

		if (!isPanning || zoomRef.current === MIN_ZOOM) return;

		const nextPan = {
			x: panStartRef.current.panX + event.clientX - panStartRef.current.pointerX,
			y: panStartRef.current.panY + event.clientY - panStartRef.current.pointerY,
		};
		panRef.current = nextPan;
		setPan(nextPan);
	};

	const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
		if (event.currentTarget.hasPointerCapture(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}

		// Resolve a horizontal swipe to navigate while not zoomed.
		if (
			swipeStartRef.current &&
			zoomRef.current === MIN_ZOOM &&
			zoomPointersRef.current.size <= 1 &&
			images.length > 1
		) {
			const deltaX = event.clientX - swipeStartRef.current.x;
			const deltaY = event.clientY - swipeStartRef.current.y;
			const SWIPE_THRESHOLD = 40;

			if (
				Math.abs(deltaX) > SWIPE_THRESHOLD &&
				Math.abs(deltaX) > Math.abs(deltaY)
			) {
				// In RTL the visual direction is mirrored.
				const swipedLeft = direction === "rtl" ? deltaX > 0 : deltaX < 0;
				if (swipedLeft) {
					scrollNext();
				} else {
					scrollPrev();
				}
			}
		}
		swipeStartRef.current = null;

		zoomPointersRef.current.delete(event.pointerId);
		if (zoomPointersRef.current.size < 2) {
			zoomPinchStartRef.current = {
				distance: 0,
				zoom: zoomRef.current,
				pan: panRef.current,
				midpoint: { x: 0, y: 0 },
			};
			setIsPinching(false);
		}

		if (zoomPointersRef.current.size === 1 && zoomRef.current > MIN_ZOOM) {
			const remainingPointer = Array.from(zoomPointersRef.current.values())[0];
			panStartRef.current = {
				pointerX: remainingPointer.x,
				pointerY: remainingPointer.y,
				panX: panRef.current.x,
				panY: panRef.current.y,
			};
			setIsPanning(true);
			return;
		}

		setIsPanning(false);
	};

	return (
		<div className="flex flex-col gap-4 w-full select-none">
			{/* --- Main Image Area --- */}
			<div
				className="relative overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 aspect-square group touch-none"
				onPointerDown={handlePreviewPointerDown}
				onPointerMove={handlePreviewPointerMove}
				onPointerUp={handlePreviewPointerEnd}
				onPointerCancel={handlePreviewPointerEnd}
			>
				<button
					type="button"
					onClick={() => openZoom()}
					className="absolute inset-0 z-10 cursor-zoom-in"
					aria-label="Open image fullscreen"
				/>

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

				<button
					type="button"
					onClick={() => openZoom()}
					className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-neutral-900 shadow-md transition hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
					aria-label="Zoom image"
				>
					<Maximize2 className="h-5 w-5" />
				</button>

				{/* --- Overlay Navigation Buttons --- */}
				{/* Only show buttons if there is more than 1 image */}
				{images.length > 1 && (
					<>
						{/* Left Button */}
						<button
							onClick={scrollPrev}
							className="absolute left-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 translate-x-2 group-hover:translate-x-0"
							aria-label="Previous image"
						>
							<ChevronLeft className="w-6 h-6 text-neutral-800" />
						</button>

						{/* Right Button */}
						<button
							onClick={scrollNext}
							className="absolute right-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 -translate-x-2 group-hover:translate-x-0"
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

			{isZoomOpen && selectedImage && (
				<div
					className="fixed inset-0 z-[1100] bg-neutral-950/95 text-white"
					role="dialog"
					aria-modal="true"
					aria-label={`${productName} image viewer`}
				>
					<div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between gap-3 sm:left-4 sm:right-4 sm:top-4">
						<div className="min-w-0 text-sm font-semibold text-white/90">
							<span className="block truncate">{productName}</span>
							<span className="text-xs font-medium text-white/60">
								{selectedIndex + 1} / {images.length}
							</span>
						</div>

						<button
							type="button"
							onClick={closeZoom}
							className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition hover:bg-neutral-200"
							aria-label="Close image viewer"
						>
							<X className="h-5 w-5" />
						</button>
					</div>

					<div
						ref={zoomSurfaceRef}
						className={`flex h-full w-full touch-none items-center justify-center overflow-hidden px-3 py-20 sm:px-4 sm:py-20 ${
							zoom > 1
								? isPanning
									? "cursor-grabbing"
									: "cursor-grab"
								: "cursor-zoom-in"
						}`}
						onWheel={handleZoomWheel}
						onPointerDown={handlePointerDown}
						onPointerMove={handlePointerMove}
						onPointerUp={handlePointerEnd}
						onPointerCancel={handlePointerEnd}
						onDoubleClick={(event) =>
							setZoomLevel(zoomRef.current === MIN_ZOOM ? 2 : MIN_ZOOM, {
								x: event.clientX,
								y: event.clientY,
							})
						}
					>
						<div
							className={`relative h-full w-full max-w-7xl ${
								isPinching || isPanning
									? ""
									: "transition-transform duration-150 ease-out"
							}`}
							style={{
								transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
								transformOrigin: "center",
							}}
						>
							<Image
								src={selectedImage.src}
								alt={`${productName} enlarged view ${selectedIndex + 1}`}
								fill
								className="object-contain"
								sizes="100vw"
								priority
							/>
						</div>
					</div>

					{images.length > 1 && (
						<>
							<button
								type="button"
								onClick={scrollPrev}
								className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
								aria-label="Previous image"
							>
								<ChevronLeft className="h-6 w-6" />
							</button>
							<button
								type="button"
								onClick={scrollNext}
								className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
								aria-label="Next image"
							>
								<ChevronRight className="h-6 w-6" />
							</button>
						</>
					)}

					<div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-neutral-900/80 p-2 shadow-lg ring-1 ring-white/10 backdrop-blur">
						<button
							type="button"
							onClick={() => setZoomLevel(zoom - 0.5)}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
							aria-label="Zoom out"
							disabled={zoom <= MIN_ZOOM}
						>
							<Minus className="h-5 w-5" />
						</button>
						<button
							type="button"
							onClick={() => setZoomLevel(zoom + 0.5)}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
							aria-label="Zoom in"
							disabled={zoom >= MAX_ZOOM}
						>
							<Plus className="h-5 w-5" />
						</button>
						<button
							type="button"
							onClick={() => setZoomLevel(1)}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
							aria-label="Reset zoom"
						>
							<RotateCcw className="h-5 w-5" />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
