import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { PRODUCTS } from "@/src/components/layout/projects/products/constants";
import ProductImageGallery from "@/src/components/layout/projects/products/ProductImageGallery";

interface PageProps {
	params: Promise<{ id: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { id } = await params;
	const product = PRODUCTS.find((p) => p.id === id);
	return {
		title: product ? `${product.name} | MAZ` : "Product Not Found",
		description: product?.description,
	};
}

export default async function ProductDetailPage({ params }: PageProps) {
	const { id } = await params;

	// Find the product based on your constants.ts data
	const product = PRODUCTS.find((p) => p.id === id);

	if (!product) {
		return notFound();
	}

	const galleryImages = product.images;

	return (
		<main className="py-20 min-h-screen bg-white">
			<MaxWidthWrapper>
				{/* Back Button */}
				<Link
					href="/projects"
					className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Products
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div className="w-full">
						<ProductImageGallery
							images={galleryImages}
							productName={product.name}
						/>
					</div>

					{/* RIGHT COLUMN: Product Details (Unchanged) */}
					<div className="flex flex-col">
						<span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
							{product.category}
						</span>
						<h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
							{product.name}
						</h1>

						<div className="prose prose-neutral max-w-none mb-10">
							<h3 className="text-lg font-bold text-neutral-900 mb-2">
								Description
							</h3>
							<p className="text-neutral-600 leading-relaxed">
								{product.details}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="flex-1 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors">
								Add to Quote
							</button>
							<button className="flex-1 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full font-bold hover:bg-neutral-50 transition-colors">
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</main>
	);
}
