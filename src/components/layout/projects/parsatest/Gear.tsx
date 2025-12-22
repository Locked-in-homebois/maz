import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { GEAR } from "./constants";
import Link from "next/link";

const Gear = () => {
	return (
		<MaxWidthWrapper>
			<div className="grid grid-cols-3 gap-2 py-20">
				{GEAR.map((item) => (
					<Link
						href={`/gear/${item.id}`}
						className="border px-10 py-5 rounded-3xl text-center"
						key={item.id}
					>
						<h1 className="uppercase text-3xl font-bold">
							{item.name}
						</h1>
						<p className="text-cyan-900 text-lg font-extralight">
							{item.type}
						</p>
					</Link>
				))}
			</div>
		</MaxWidthWrapper>
	);
};

export default Gear;
