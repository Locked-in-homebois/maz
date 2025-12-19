import Image from "next/image";
import Hero from "../components/layout/index/hero/hero";
import Services from "../components/layout/index/services/Services";
import Expertise from "../components/layout/index/expertise/Expertise";
import MasterPiece from "../components/layout/index/maasterpiece/MasterPiece";
import ProjectsGallery from "../components/layout/projects/projects/Projects";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Expertise />
            <MasterPiece />
        </main>
    );
}
