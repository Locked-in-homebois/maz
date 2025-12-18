// src/components/PhilosophyCard.tsx
import { PhilosophyItem } from "./types";

// We extract the styles here to keep the JSX clean
const CARD_STYLES =
	"border border-gray-400 bg-neutral-100 rounded-2xl shadow-sm grid gap-5 p-5";
const ICON_STYLES =
	"text-blue-500 bg-white rounded-xl flex justify-start p-2 w-14 h-auto";

// The component accepts props based on the interface we defined
export const PhilosophyCard = ({
	icon: Icon,
	header,
	description,
}: PhilosophyItem) => {
	return (
		<div className={CARD_STYLES}>
			<Icon className={ICON_STYLES} />
			<h3 className="text-xl capitalize font-semibold">{header}</h3>
			<p className="text-gray-600 font-light leading-relaxed">
				{description}
			</p>
		</div>
	);
};
