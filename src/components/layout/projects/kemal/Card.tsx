import Image from "next/image";
import { Cards } from "./types";

const KemalCard = ({ title, desc, image: { src, alt } }: Cards) => {
	return (
		<div className="grid gap-2">
			<Image
				src={src}
				alt={alt}
				width={400}
				height={200}
				className="rounded-3xl w-full max-h-62.5 object-cover"
			/>
			<h1 className="uppercase font-bold text-2xl">{title}</h1>
			<p className="text-gray-500 text-xl font-medium">{desc}</p>
		</div>
	);
};

export default KemalCard;
