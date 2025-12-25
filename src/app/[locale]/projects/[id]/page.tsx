import { notFound } from "next/navigation";
import { Metadata } from "next";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { PRODUCTS } from "@/src/components/layout/projects/projects/constants";
import ProductImageGallery from "@/src/components/layout/projects/projects/ProductImageGallery";
import BackButton from "@/src/components/ui/BackButton";
import { getTranslations } from "next-intl/server";

interface PageProps {
	params: Promise<{ id: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { id } = await params;
	const product = PRODUCTS.find((p) => p.id === id);
    const t = await getTranslations();
	return {
		title: product ? `${t(product.name as any)} | MAZ` : "Product Not Found",
		description: product ? t(product.description as any) : "",
	};
}

export default async function ProductDetailPage({ params }: PageProps) {
	const { id } = await params;
    const t = await getTranslations();

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
				<BackButton />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div className="w-full">
						<ProductImageGallery
							images={galleryImages}
							productName={t(product.name as any)}
						/>
					</div>

					{/* RIGHT COLUMN: Product Details (Unchanged) */}
					<div className="flex flex-col">
						<span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
							{t(`Projects.filters.${product.category.replace(" ", "")}` as any)}
						</span>
						<h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
							{t(product.name as any)}
						</h1>

						<div className="prose prose-neutral max-w-none mb-10">
							<h3 className="text-lg font-bold text-neutral-900 mb-2">
								{t("ProductDetails.descriptionTitle")}
							</h3>
							<p className="text-neutral-600 leading-relaxed">
								{t(product.details as any)}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="flex-1 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors">
								{t("ProductDetails.addToQuote")}
							</button>
							<button className="flex-1 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full font-bold hover:bg-neutral-50 transition-colors">
								{t("ProductDetails.contactSales")}
							</button>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</main>
	);
}
