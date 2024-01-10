import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { BsChatSquareDots } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!Nav);
  };
  return (
    <div className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80 ">
      <ul className=" hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li> 
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between">
        <FaFacebookF className=" mx-4" />
        <FaInstagram className=" mx-4" />
        <FaXTwitter className=" mx-4" />
      </div>
      {/* hamburger */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className=" mr-4 cursor-pointer" />
      </div>

      {/* mobile view */}
      <div
        onClick={handleNav}
        className={
          Nav
            ? "overflow-y-hidden md:hidden ease-in-out duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 flex flex-col px-4 py-7"
            : " top-0 h-screen ease-out duration-300 absolute left-[-100%]"
        }
      >
        <ul className=" h-full w-full text-center p-12">
          <li className=" text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
