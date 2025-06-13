import React from "react";
import exchange from "../../src/assets/exchnage.webp";
import headSet from "../../src/assets/headset.svg";
import returns from "../../src/assets/return.webp";
const OurPolicy = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 md:text-base sm:text-sm text-xs text-gray-700">
        <div>
          <img src={exchange} alt="" className="w-40 m-auto mb-5" />
          <p className="font-semibold">Easy Exchnage Policy</p>
          <p className="text-gray-400">We offer hassle free exchnage policy</p>
        </div>
        <div>
          <img src={headSet} alt="" className="w-25 m-auto mb-5" />
          <p className="font-semibold">7 Days Returns Policy</p>
          <p className="text-gray-400">We provide 7 days return policy</p>
        </div>
        <div>
          <img src={returns} alt="" className="w-25 m-auto mb-5" />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
