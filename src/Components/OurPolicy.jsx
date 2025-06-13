import React from "react";
import exchange from "../../src/assets/exchnage.webp";
const OurPolicy = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 md:text-base sm:text-sm text-xs text-gray-700">
        <div>
          <img src={exchange} alt="" className="w-25 m-auto mb-5" />
          <p className="font-semibold">Easy Exchnage Policy</p>
          <p className="text-gray-400">We offer hassle free exchnage policy</p>
        </div>
        <div>
          <img src={exchange} alt="" className="w-25 m-auto mb-5" />
          <p className="font-semibold">Easy Exchnage Policy</p>
          <p className="text-gray-400">We offer hassle free exchnage policy</p>
        </div>
        <div>
          <img src={exchange} alt="" className="w-25 m-auto mb-5" />
          <p className="font-semibold">Easy Exchnage Policy</p>
          <p className="text-gray-400">We offer hassle free exchnage policy</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
