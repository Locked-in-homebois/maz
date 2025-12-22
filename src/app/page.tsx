import Expertise from "../components/layout/index/Expertise/Expertise";
import Hero from "../components/layout/index/hero/hero";
import MasterPiece from "../components/layout/index/masterpiece/MasterPiece";
import Services from "../components/layout/index/services/Services";
import Navbar from "../components/layout/navbar";


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
