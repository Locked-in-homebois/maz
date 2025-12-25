"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import FilterTabs from "./Filters";
import { PRODUCTS } from "./constants";
import { Category, SortOption } from "./types";
import SortDropdown from "./SortDropdown";
import ProductGrid from "./ProductGrid";
import { useTranslations } from "next-intl";

const ProductGallery = () => {
    const t = useTranslations();
    // --- State ---
    const [activeFilter, setActiveFilter] = useState<Category>("All");
    const [sortOption, setSortOption] = useState<SortOption>("name-asc");

    // --- Logic ---
    const filteredProducts = PRODUCTS.filter((product) => {
        if (activeFilter === "All") return true;
        return product.category === activeFilter;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "name-asc") {
            // Translate names for sorting logic?
            // Ideally yes, but fetching translations here is tricky. 
            // We can sort by KEY if that's acceptable or translate inside sort.
            // Since useTranslations is synchronous hook, we CAN translate inside.
            const nameA = t(a.name as any);
            const nameB = t(b.name as any);
            return nameA.localeCompare(nameB);
        } else {
            const nameA = t(a.name as any);
            const nameB = t(b.name as any);
            return nameB.localeCompare(nameA);
        }
    });

    // --- Render ---
    return (
        <section className="py-20 bg-neutral-50 min-h-screen">
            <MaxWidthWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">
                        {t("Projects.Gallery.title")}
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        {t("Projects.Gallery.desc")}
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 relative">
                    <div className="flex-1 flex justify-center md:justify-start">
                        <FilterTabs
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />
                    </div>

                    <SortDropdown
                        currentSort={sortOption}
                        onSortChange={setSortOption}
                    />
                </div>

                {/* Grid */}
                <ProductGrid products={sortedProducts} />
            </MaxWidthWrapper>
        </section>
    );
};

export default ProductGallery;
