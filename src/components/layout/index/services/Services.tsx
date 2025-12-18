import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { BOXCONTENT, HEADERCONTENT } from "./constants";
import Image from "next/image";

const Services = () => {
	return (
		<MaxWidthWrapper>
			<div className="w-full grid gap-x-5 gap-y-2  grid-cols-3 relative -z-30 justify-items-center rounded-2xl my-20 ">
				<div className="col-span-full text-center shadow-black  w-full shadow- rounded-2xl">
					<h1 className="uppercase text-4xl font-black">
						{HEADERCONTENT.title}
					</h1>
					<p>{HEADERCONTENT.description}</p>
				</div>

				{BOXCONTENT.map((item, index) => (
					<div
						key={index}
						className={`grid gap-3 rounded-3xl  ${item.colspan}`}
					>
						<div className=" w-full relative rounded-2xl max-h-[250px] overflow-hidden z-10">
							<Image
								src={item.image.src}
								alt={item.image.alt}
								width={1200}
								height={1000}
								className="rounded-[20px] "
							/>
							<item.icon
								size={45}
								className="bg-neutral-50 absolute rounded-xl top-5 right-5 p-2 justify-self-end "
							/>
						</div>
						<div className="px-3 rounded-2xl flex flex-col justify-center">
							<h1 className="uppercase text-2xl font-black">
								{item.title}
							</h1>
							<p className="text-gray-500 font-light">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</MaxWidthWrapper>
	);
};
export default Services;
