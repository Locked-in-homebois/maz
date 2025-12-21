import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import Image from "next/image";
import { CAROUSELCONTENT } from "./constants";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactCard = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative rounded-3xl overflow-hidden min-h-[800px]">
				{/* Background Image */}
				<Image
					src={CAROUSELCONTENT.image.src}
					alt={CAROUSELCONTENT.image.alt}
					fill
					className="object-cover -z-10"
					priority
				/>

				{/* Overlay Layout */}
				<div className="absolute inset-0 bg-black/60 backdrop-blur-sm px-8 py-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full w-full">
						{/* Left Side */}
						<ContactInfo />

						{/* Right Side */}
						<div className="flex items-center justify-center md:justify-end">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default ContactCard;
