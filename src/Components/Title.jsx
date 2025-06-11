import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <>
      <div className="inline-flex items-center gap-2 mb-3">
        <p className="text-gray-700">
          {text1} <span className="text-gray-700 font-medium">{text2}</span>
        </p>
        <p className="bg-gray-500 h-[1px] sm:h-[2px] w-8 sm:w-11"></p>
      </div>
    </>
  );
};

export default Title;
