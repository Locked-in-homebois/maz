export type Category =
	| "All"
	| "Residential"
	| "Commercial"
	| "Industrial"
	| "Landscape";

export interface Project {
	id: string;
	title: string;
	category: Category;
	image: {
		src: string;
		alt: string;
	};
	description?: string; // Optional short description
}

export interface FilterTabsProps {
	activeFilter: Category;
	onFilterChange: (category: Category) => void;
}

export interface ProjectCardProps {
	project: Project;
}
