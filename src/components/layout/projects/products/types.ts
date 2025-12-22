export type Category = "All" | "Stone" | "Industrial" | "Furniture";

export interface Product {
	id: string;
	name: string;
	category: Category;
	image: {
		src: string;
	};
	description: string;
	details: string;
}

export interface ProductCardProps {
	product: Product;
}
