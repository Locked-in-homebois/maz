import Expertise from "@/src/components/layout/index/Expertise/Expertise";
import Hero from "@/src/components/layout/index/hero/hero";
import MasterPiece from "@/src/components/layout/index/masterpiece/MasterPiece";
import Services from "@/src/components/layout/index/services/Services";


export default function Home() {
	return (
		<main>
			{/* test */}
			<Hero />
			<Services />
			<Expertise />
			<MasterPiece />

		</main>
	);
}
