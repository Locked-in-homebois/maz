// src/components/sections/Philosophy.tsx
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { PhilosophyCard } from "./phycard";
import { PHILOSOPHY_DATA } from "./constants";

const Philosophy = () => {
	return (
		<main>
			<MaxWidthWrapper>
				<div className="rounded-4xl bg-white flex flex-col gap-10 p-20 items-center">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h1 className="font-black text-5xl">My Philosophy</h1>
						<p className="text-gray-600 text-xl max-w-2xl mx-auto">
							I am driven by a personal commitment to safety,
							quality, and accountability. When you hire me, you
							get my full attention on every beam designed and
							every stone laid.
						</p>
					</div>

					{/* Grid Layout */}
					<div className="grid md:grid-cols-3 gap-5 w-full max-w-6xl px-10 py-16">
						{PHILOSOPHY_DATA.map((item, index) => (
							<PhilosophyCard
								key={index}
								icon={item.icon}
								header={item.header}
								description={item.description}
							/>
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</main>
	);
};

export default Philosophy;
