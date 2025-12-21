import Hero from "../components/layout/index/hero/hero";
import Services from "../components/layout/index/services/Services";
import Expertise from "../components/layout/index/Expertise/Expertise";
import MasterPiece from "../components/layout/index/masterpiece/MasterPiece";
import OriginalFunction from "../components/layout/projects/kemaloriginal/Original";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Expertise />
			<MasterPiece />
			<OriginalFunction />
		</main>
	);
}
