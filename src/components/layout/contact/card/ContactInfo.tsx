import { HEADERCONTENT, GRIDCONTENT } from "./constants";

const ContactInfo = () => {
	return (
		<div className="flex flex-col justify-between h-full text-white">
			{/* Main Header */}
			<div className="space-y-4">
				<h1 className="font-black text-5xl md:text-6xl">
					{HEADERCONTENT.title}
				</h1>
				<p className="text-neutral-300 max-w-lg text-lg">
					{HEADERCONTENT.desc}
				</p>
			</div>

			{/* Info Grid */}
			<div className="grid grid-cols-2 gap-8 mt-10">
				{GRIDCONTENT.map((item, index) => (
					<div key={index} className="flex flex-col gap-2">
						<h3 className="text-xl font-bold">{item.title}</h3>
						<p className="text-neutral-400 text-sm">{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContactInfo;
