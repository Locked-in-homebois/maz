import Image from "next/image";
import Hero from "../components/layout/index/hero/hero";
import Services from "../components/layout/index/services/Services";
import Expertise from "../components/layout/index/Expertise/Expertise";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Expertise />
        </main>
    );
}
