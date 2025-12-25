import { FILTERS } from "./constants";
import { FilterTabsProps } from "./types";
import { useTranslations } from "next-intl";

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
    const t = useTranslations();
	return (
		<div className="flex flex-wrap justify-center gap-3 mb-8">
			{FILTERS.map((filter) => (
				<button
					key={filter}
					onClick={() => onFilterChange(filter)}
					className={`
                        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${
							activeFilter === filter
								? "bg-sky-950 text-logocolor shadow-md scale-105"
								: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
						}
                    `}
				>
					{t(`Projects.filters.${filter.replace(" ", "")}` as any)}
				</button>
			))}
		</div>
	);
};

export default FilterTabs;
