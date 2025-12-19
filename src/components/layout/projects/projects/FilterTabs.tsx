import { FILTERS } from "./constants";
import { FilterTabsProps } from "./types";

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
	return (
		<div className="flex flex-wrap justify-center gap-3 mb-10">
			{FILTERS.map((filter) => (
				<button
					key={filter}
					onClick={() => onFilterChange(filter)}
					className={`
                        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${
							activeFilter === filter
								? "bg-lime-900 text-white shadow-md scale-105"
								: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
						}
                    `}
				>
					{filter}
				</button>
			))}
		</div>
	);
};

export default FilterTabs;
