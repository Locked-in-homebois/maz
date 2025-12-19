import Image from "next/image";
import Hero from "../components/layout/index/hero/hero";
import Services from "../components/layout/index/services/Services";
import Expertise from "../components/layout/index/Expertise/Expertise";
import ProjectsGallery from "../components/layout/projects/projects/Projects";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Expertise />
			<ProjectsGallery />
		</main>
	);
}
