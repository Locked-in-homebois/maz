import Hero from "@/src/components/layout/aboutus/hero/hero";
import Phy from "@/src/components/layout/aboutus/phy/phy";
import ProfileSection from "@/src/components/layout/aboutus/Profile/Skills";

export default function page() {
	return (
		<main className="grid gap-10 mt-5">
			<Hero />
			<Phy />
			<ProfileSection />
		</main>
	);
}
