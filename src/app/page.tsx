import Image from "next/image";
import Hero from "../components/layout/index/hero/hero";
import Services from "../components/layout/index/services/Services";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
		</main>
	);
}
