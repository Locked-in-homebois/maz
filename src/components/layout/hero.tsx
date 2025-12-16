import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <main className="flex justify-center bg-lime-950">
            <div className="relative w-full max-w-360 h-200 overflow-hidden">
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
                <div className="relative z-10 h-full flex flex-col justify-center gap-4 px-8 max-w-4xl">
                        <h1 className="text-7xl font-extrabold tracking-tight leading-tight text-white">
                        Precision Engineering with a Personal Touch
                        </h1>
                    
                        <div className="flex">
                            <Link
                            href="/"
                            className="md:text-[21px] bg-amber-950 rounded-lg  text-[15px]  text-neutral-100 py-2 md:px-4.25 px-3.75 hover:bg-lime-900 transition md:font-medium font-[550]">
                            View Portfolio
                            </Link>
                            <Link
                            href="/"
                            className="md:text-[21px] bg-neutral-50 rounded-lg mx-3 text-[15px]  text-black py-2 md:px-4.25 px-3.75 hover:bg-lime-900 transition md:font-medium font-[550]">
                                Contact Me
                            </Link>
                        </div>
                        <div className="translate-y-57">
                            <p className="text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                                King Faisal University -alhufuf
                            </p>
                            <p className="text-md text-gray-300 max-w-2xl font-light ">
                                design supply and installation
                            </p>
                        </div>
                    </div>
                </div>
        </main>
    );
};

export default Hero;