import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="text-center">
        <p className="font-semibold text-2xl text-gray-800">
          Subscribe now & get 20% off
        </p>
        <p className="mt-3 text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <form
          action=""
          className="w-full sm:w-1/2 flex items-center mx-auto gap-3 my-6 pl-3 border"
        >
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full sm:flex-1 outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4   
        "
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
