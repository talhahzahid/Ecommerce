import React from "react";
import girl from "../../src/assets/girls.avif";
const Hero = () => {
  return (
    <>
      <div className=" flex flex-col sm:flex-row border border-gray-400">
        {/* left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-gray-800">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 bg-black h-[2px]"></p>
              <p className="font-medium text-sm md:text-base"> BEST SELLER</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">Shop Now</p>
              <p className="w-8 md:w-11 bg-black h-[2px]"></p>
            </div>
          </div>
        </div>
        {/* right side */}
        <img src={girl} alt="" className="w-full sm:w-1/2" />
      </div>
    </>
  );
};

export default Hero;
