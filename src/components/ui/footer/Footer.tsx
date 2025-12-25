import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { LEFT_DATA, RIGHT_DATA, SERVICE_LINKS } from "./constants";
import Link from "next/link";

export default function Footer() {
	return (
		<main className="bg-sky-950 px-4 mt-10 py-10 self-z-10">
			<MaxWidthWrapper className="text-logocolor">
				<div className="grid md:grid-cols-4 justify-center md:gap-0 gap-6 border-b md:text-left text-center border-[#ffe56f81]  pb-10  ">
					<div className="flex flex-col gap-6 md:max-w-55 max-w-full text-center items-center">
						{/* <div className="flex md:gap-6 gap-2 md:self-auto self-center "> */}
						<Image
							src="/logo.webp"
							alt="das da logo"
							width={120}
							height={100}
						/>
						<p> {LEFT_DATA.text}</p>
					</div>

					<div className="flex gap-4 flex-col">
						<h1 className="text-2xl font-bold ">Services</h1>
						{SERVICE_LINKS.map((item, index) => (
							<Link href={item.href} key={index}>
								{item.label}
							</Link>
						))}
					</div>

					<div className="flex flex-col gap-4">
						<h1 className="font-bold text-2xl">Contact</h1>
						{RIGHT_DATA.map((item, index) => {
							const RightIcon = item.icon;
							return (
								<div
									className="flex gap-4 md:self-auto self-center hover:text-blue-500"
									key={index}
								>
									<RightIcon />
									<Link className="" href={item.href}>
										{item.text}
									</Link>
								</div>
							);
						})}
					</div>
					<div className="flex flex-col ga4">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.31242483313!2d46.492886205368556!3d24.725455373700168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2str!4v1766437131415!5m2!1sen!2str"
							width="600"
							height="450"
							loading="lazy"
							title="footer google maps"
							className="w-full h-63 rounded-xl invert-95 hue-rotate-10 contrast-120 saturate-160"
						></iframe>
					</div>
				</div>
				<p className="text-xl grid tracking-tighter grid-span-2">
					{new Date().getFullYear()} C all rights are reserved by MPK
					Corp.
				</p>
			</MaxWidthWrapper>
		</main>
	);
}
