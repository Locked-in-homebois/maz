import { GEAR } from "@/src/components/layout/projects/parsatest/constants";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function GearsDetail({ params }: PageProps) {
	// 1. Move the await INSIDE the function
	const { id } = await params;

	// 2. Find the specific item using that ID
	const item = GEAR.find((g) => g.id === id);

	// 3. Handle the "What if it's not there?" case
	if (!item) {
		return <div className="p-20">Gear not found!</div>;
	}

	// 4. Show the data!
	return (
		<div className="p-20 bg-neutral-900 min-h-screen text-white">
			<h1 className="text-5xl font-black uppercase">{item.name}</h1>
			<p className="text-blue-400 mt-4">{item.type}</p>
		</div>
	);
}
