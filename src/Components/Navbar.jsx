import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import search from "../../src/assets/search.svg";
import profile from "../../src/assets/person-fill.svg";
import cart from "../../src/assets/bag-fill.svg";
import list from "../../src/assets/list.svg";
import back from "../../src/assets/skip-backward-fill.svg";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        {/* logo */}
        <h2>TZ Store</h2>
        {/* navlinks */}
        <ul className="hidden  sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        {/* third option  */}

        {/* flex  */}
        <div className="flex gap-6">
          <img src={search} alt="" className="w-5 cursor-pointer" />
          <div className="group relative">
            <img src={profile} alt="" className="w-5 cursor-pointer" />
            <div className=" hidden group-hover:block absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col bg-slate-50 w-36 py-3 px-5 text-gray-700">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link className="relative">
            <img src={cart} alt="" className="min-w-5 cursor-pointer" />
            <p className="absolute right-[-5px] bottom-[-5px] text-center w-4 leading-4 text-white rounded-full bg-black text-[8px]">
              10
            </p>
          </Link>
          <img
            src={list}
            onClick={() => setVisible(true)}
            alt=""
            className=" sm:hidden"
          />

          {/* sidebar menu for small screen */}
          <div
            className={`${
              visible ? "w-full" : "w-0"
            } absolute top-0 right-0 bottom-0 transition-all bg-white overflow-hidden`}
          >
            <div className="flex flex-col text-gray-50">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-3 p-4"
              >
                <img src={back} alt="" className="w-5 cursor-pointer" />
                <p className="text-black">back</p>
              </div>
              <div className="text-black p-4">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
        {/* third option end  */}
      </div>
    </>
  );
};

export default Navbar;
