import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

const buttonVars =
  "md:text-[21px] text-[15px] bg-neutral-100 md:font-medium font-[550] rounded-full shadow-sm py-2 md:px-4.25 px-3.75 hover:bg-lime-900 hover:text-white hover:shadow-lg transition-color duration-300 ";

const Hero = () => {
  return (
    <main className="flex justify-center py-5">
      <MaxWidthWrapper>
        <div className="relative flex flex-col justify-center  rounded-4xl h-200 overflow-hidden">
          {/* Background image */}
          <Image
            src="/image3.jpeg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Text on top */}
          <div className="relative z-10  flex flex-col justify-center gap-10 px-12 max-w-5xl  rounded-3xl py-10 mx-10">
            <h1 className="text-6xl font-extrabold tracking-tight leading-tight text-white">
              Precision Engineering with a Personal Touch
            </h1>
              
            <div className="flex gap-5">
              <Link href="/" className={buttonVars}>
                View Portfolio
              </Link>
              <Link href="/" className={buttonVars}>
                Contact Me
              </Link>
              
            </div>
            
          </div>
          <p className="text-2xl z-10 text-gray-200 mx-4 font-light px-3 translate-y-40 backdrop-blur-lg w-fit rounded-lg leading-relaxed ">
                King Faisal University -alhufuf design supply and installation
              </p>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Hero;
