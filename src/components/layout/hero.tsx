import Image from "next/image";
const Hero = () => {
    return (
        <main className=" flex justify-center max-w-screen bg-green-950 ">
            <div className=" w-360  place-items-center overflow-hidden">
                <Image
                    src="/image3.jpeg"
                    alt="xszcx"
                    width={2000}
                    height={1600}
                    className="max-h-[800px] max-w-[1440px] "
                />

            </div>

        </main>

    );
};
export default Hero;