import Card from "@/src/components/layout/contact/card/Card";
import Maplocation from "@/src/components/layout/contact/card/location/location";

export default function page() {
    return (
        <main className="grid gap-10 mt-5">
            <Card />
            <Maplocation />
        </main>
    );
}
