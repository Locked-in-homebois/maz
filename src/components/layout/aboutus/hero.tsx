import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full p-4 md:p-6">
      <div className="relative w-full rounded-4xl overflow-hidden flex flex-col items-center text-center py-24 px-6">
        <Image
          src="/test.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-white">
            Precision Engineering with a Personal Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            A specialized one-person portfolio focusing on renovations, facade
            works, and stone finishing. I personally oversee every detail, from
            the initial survey to the final design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
