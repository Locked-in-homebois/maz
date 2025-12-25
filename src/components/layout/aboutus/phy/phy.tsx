// src/components/sections/Philosophy.tsx
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { PhilosophyCard } from "./phycard";
import { PHILOSOPHY_DATA, PHY_DATA } from "./constants";
import { getTranslations } from "next-intl/server";

const Philosophy = async () => {
    const t = await getTranslations();
	return (
		<MaxWidthWrapper>
			<main>
				<div className="rounded-4xl bg-white flex flex-col gap-10 md:p-20 p-8 items-center">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h1 className="font-black text-5xl">
							{t(PHY_DATA.header)}
						</h1>
						<p className="text-gray-600 text-xl max-w-2xl mx-auto">
							{t(PHY_DATA.desc)}
						</p>
					</div>

					{/* Grid Layout */}
					<div className="grid md:grid-cols-3 gap-5 w-full max-w-6xl md:px-10 py-16">
						{PHILOSOPHY_DATA.map((item, index) => (
							<PhilosophyCard
								key={index}
								icon={item.icon}
								header={t(item.header)}
								description={t(item.description)}
							/>
						))}
					</div>
				</div>
			</main>
		</MaxWidthWrapper>
	);
};

export default Philosophy;
