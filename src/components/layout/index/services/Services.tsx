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
                {/* //here we called the list and said map wtf is map?
				//map ma nigga is the thing that streams the lists out 
				//so basically it goes through the list and displays the baskets
				//why dont we just write them ourselves?
				//when we map we  only creat one div and it just creates more of it 
				// so for example we want to add another basket we just do it 
				// in the other file 
				// let me show you see i just added a basket 
				// it automatically made it with all the div stuff we wanted like ye grape
				// so this map has 2 pointers type shi item is the attributes of basket like the
				// title and index is just to follow wich basket we are on 
				// we do not focus in index at all the computer does it all 
				// we just have to define it for syntax 
				// so inside the div we give it a key to follow which we decided is index
				// afterwards we do stuff like java oop*/}
                {BOXCONTENT.map((item, index) => (
                    <div
                        key={index}
                        className={`grid gap-3 rounded-3xl  ${item.colspan}`}
                    >
                        <div className=" w-full relative rounded-2xl max-h-62.5 overflow-hidden z-10">
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
                                {/* this will go to the basket copy the title and paste it here ez ez right let me show you  */}
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
