import Hero from "@/src/components/layout/aboutus/hero/hero";
import Phy from "@/src/components/layout/aboutus/phy/phy";
import React from "react";

export default function page() {
	return (
		<main className="grid gap-10">
			<Hero />
			<Phy />
		</main>
	);
}
