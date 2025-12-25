"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackButton() {
	const router = useRouter();
    const t = useTranslations();

	return (
		<button
			onClick={() => router.back()}
			className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
		>
			<ArrowLeft className="mr-2 h-4 w-4" />
			{t("Common.backToProducts")}
		</button>
	);
}
