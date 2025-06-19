import React from "react";
import wind from "../assets/wind.jpg";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 my-10 mt-40 text-sm">
        <div className="flex flex-col">
          <img src={wind} className="w-32 mb-5 " alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>

        <div>
          <p className="text-xl mb-5 font-medium">COMPANY</p>
          <ul className="flex flex-col gap-3">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>PRIVACY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3">
            <li>0321469875</li>
            <li>xyz@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ talha.com - All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
