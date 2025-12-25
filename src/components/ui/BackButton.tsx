"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
		>
			<ArrowLeft className="mr-2 h-4 w-4" />
			Back to Products
		</button>
	);
}
