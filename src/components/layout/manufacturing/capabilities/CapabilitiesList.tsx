"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, Factory } from "lucide-react";
import { MANUFACTURING_CONTENT } from "./constants";

export default function CapabilitiesList() {
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-10">
			{/* Capabilities List */}
			<div>
				<h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
					<Factory className="text-neutral-400" size={20} />
					{t("Capabilities.colA.title")}
				</h3>
				<ul className="space-y-4">
					{MANUFACTURING_CONTENT.capabilities.map((item) => (
						<li key={item.id} className="flex items-start gap-3">
							<div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-neutral-300" />
							<span className="text-neutral-700 leading-relaxed">
								{t(item.translationKey)}
							</span>
						</li>
					))}
				</ul>
			</div>

			{/* Use Cases Grid */}
			<div>
				<h3 className="text-xl font-bold text-neutral-900 mb-6 border-t border-neutral-100 pt-8">
					{t(MANUFACTURING_CONTENT.useCasesTitle)}
				</h3>
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{MANUFACTURING_CONTENT.useCases.map((item) => (
						<li
							key={item.id}
							className="flex items-center gap-3 bg-neutral-50 px-4 py-3 rounded-lg border border-neutral-100"
						>
							<CheckCircle2
								className="text-logocolor shrink-0"
								size={16}
							/>
							<span className="text-sm font-medium text-neutral-800">
								{t(item.translationKey)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
