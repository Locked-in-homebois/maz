import ProductGallery from "@/src/components/layout/projects/products/ProductGallery";
import ProjectsGallery from "@/src/components/layout/projects/projects/Projects";

export default function ProductsPage() {
	return (
		<main>
			<ProjectsGallery />
			<ProductGallery />
		</main>
	);
}
