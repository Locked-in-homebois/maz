import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import KemalCard from "./Card";
import { KEMAL_DATA, CARDS_DATA } from "./constants";

const Kemal = () => {
	const Icon = KEMAL_DATA.icon;
	return (
		<main className="bg-white py-10">
			<MaxWidthWrapper className="grid gap-5">
				<div className="flex gap-5 items-center">
					<Icon size={32} className="text-blue-500" />
					<h1 className="text-3xl font-bold tracking-wide">
						{KEMAL_DATA.header}
					</h1>
				</div>
				<div className="flex gap-5">
					{CARDS_DATA.map((item, index) => (
						<KemalCard
							key={index}
							image={item.image}
							title={item.title}
							desc={item.desc}
						/>
					))}
				</div>
			</MaxWidthWrapper>
		</main>
	);
};

export default Kemal;
