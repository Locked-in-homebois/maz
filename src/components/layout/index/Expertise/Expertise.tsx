import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { HEADERCONTENT, LISTCONTENT, IMAGECONTENT } from "./constants";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const Expertise = async () => {
	const t = await getTranslations();
	return (
		<div className="bg-white md:py-25 py-15 mb-20">
			<MaxWidthWrapper>
				<div className="md:grid md:grid-cols-2 grid-rows-2 gap-0 md:gap-30">
					<div className="grid gap-5">
						<div className="flex gap-2 text-2xl font-extrabold text-blue-700">
							<HEADERCONTENT.title.icon size={30} />
							<p>{t(HEADERCONTENT.title.text)}</p>
						</div>
						<h1 className="text-5xl font-black tracking-tight">
							{t(HEADERCONTENT.header)}
						</h1>
						<p className="text-xl text-gray-500">
							{t(HEADERCONTENT.desc)}
						</p>
					</div>
					<div className="row-span-2 py-7 ">
						<Image
							src={IMAGECONTENT.photo.src}
							alt={IMAGECONTENT.photo.alt}
							width={1000}
							height={800}
							className="justify-self-center rounded-2xl shadow-2xl"
						/>
					</div>

					{/*'auto-rows-[1fr]'
                       forces every grid row to match the height of the tallest one (the 2-line item).
                    */}
					<div className="grid md:gap-10 gap-3 auto-rows-[45px]">
						{LISTCONTENT.map((item, index) => (
							<div
								key={index}
								className="flex gap-10 items-start"
							>
								<div className="min-w-7.5 flex justify-center flex-none mt-1">
									<item.icon
										size={30}
										className="text-blue-700"
									/>
								</div>
								<h1 className="text-2xl md:max-w-full max-w-62.5">
									{t(item.text)}
								</h1>
							</div>
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};
export default Expertise;
