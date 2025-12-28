export type Category =
    | "All"
    | "Hardscape"
    | "Facades"
    | "Renovation"
    | "Finishing Decor"
    | "Raised Floor";
export type SortOption = "name-asc" | "name-desc";

export interface Product {
    id: string;
    name: string;
    category: Category;
    images: {
        src: string;
    }[];
    description: string;
    details: string;
}

export interface ProductCardProps {
    product: Product;
}

export interface FilterTabsProps {
    activeFilter: Category;
    onFilterChange: (filter: Category) => void;
}
