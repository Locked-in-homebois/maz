"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Ruler } from "lucide-react";
import { MANUFACTURING_CONTENT } from "./constants";

export default function SpecsCard() {
	const t = useTranslations();

	return (
		<div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200 sticky top-24">
			<h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
				<Ruler className="text-neutral-400" size={20} />
				{t(MANUFACTURING_CONTENT.specsTitle)}
			</h3>

			<div className="grid gap-y-4 text-sm mb-6">
				{MANUFACTURING_CONTENT.specs.map((spec, index) => (
					<SpecRow
						key={index}
						label={t(spec.labelKey)}
						value={t(spec.valueKey)}
					/>
				))}
			</div>

			<p className="text-xs text-neutral-500 italic mb-8 border-t border-neutral-200 pt-4">
				{t(MANUFACTURING_CONTENT.specNote)}
			</p>

			{/* Integrated Card CTA */}
			<div className="flex flex-col gap-3">
				<Link
					href="/contact"
					className="w-full bg-neutral-900 text-white font-bold text-center py-3 rounded-lg hover:bg-neutral-800 transition-colors"
				>
					{t(MANUFACTURING_CONTENT.cta.primaryBtn)}
				</Link>
				<Link
					href="/contact"
					className="w-full bg-white text-neutral-900 font-bold text-center py-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors"
				>
					{t(MANUFACTURING_CONTENT.cta.secondaryBtn)}
				</Link>
			</div>
		</div>
	);
}

function SpecRow({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-0">
			<span className="text-neutral-500 font-medium">{label}</span>
			<span className="text-neutral-900 font-bold text-right max-w-[50%]">
				{value}
			</span>
		</div>
	);
}
