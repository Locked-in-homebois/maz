"use client";

import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { Link } from "@/src/i18n/routing";
import { MANUFACTURING_CONTENT } from "./constants";
import CapabilitiesList from "./CapabilitiesList";
import SpecsCard from "./SpecsCard";

export default function CapabilitiesSpecs() {
	const t = useTranslations();

	return (
		<section className="bg-white py-24 border-t border-neutral-100">
			<MaxWidthWrapper>
				{/* 1. Header Section */}
				<div className="mb-16 max-w-3xl">
					<span className="text-sm font-bold uppercase tracking-widest text-logocolor mb-3 block">
						{t(MANUFACTURING_CONTENT.eyebrow)}
					</span>
					<h2 className="text-3xl md:text-5xl font-bold text-sky-950 mb-6 leading-tight">
						{t(MANUFACTURING_CONTENT.title)}
					</h2>
					<p className="text-lg text-neutral-600 leading-relaxed">
						{t(MANUFACTURING_CONTENT.subtitle)}
					</p>
				</div>

				{/* 2. Main Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
					<div className="lg:col-span-7">
						<CapabilitiesList />
					</div>
					<div className="lg:col-span-5">
						<SpecsCard />
					</div>
				</div>

				{/* 3. Bottom Trust & CTA Section */}
				<div className="mt-20 pt-12 border-t border-neutral-100">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						{MANUFACTURING_CONTENT.trust.map((item) => (
							<div key={item.id} className="flex flex-col gap-2">
								<h4 className="font-bold text-sky-950 text-lg">
									{t(item.titleKey)}
								</h4>
								<p className="text-neutral-600 text-sm leading-relaxed">
									{t(item.descKey)}
								</p>
							</div>
						))}
					</div>

					{/* CTA Block: Changed bg-neutral-900 to bg-sky-950 */}
					<div className="bg-sky-950 text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-sky-900/10">
						<div className="max-w-xl">
							<h3 className="text-2xl font-bold mb-2">
								{t(MANUFACTURING_CONTENT.cta.title)}
							</h3>
							<p className="text-sky-100">
								{t(MANUFACTURING_CONTENT.cta.text)}
							</p>
							<p className="text-xs text-sky-300 mt-4 pt-4 border-t border-sky-800">
								{t(MANUFACTURING_CONTENT.cta.whatsapp)}
							</p>
						</div>
						<Link
							href="/contact"
							className="whitespace-nowrap bg-white text-sky-950 font-bold px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors shadow-lg"
						>
							{t(MANUFACTURING_CONTENT.cta.primaryBtn)}
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
