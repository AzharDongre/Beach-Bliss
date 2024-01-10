import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" m-w-[1140px] w-full border-t-4 py-8 m-auto ">
      <div className=" flex m-auto items-center justify-center ">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="uppercase font-bold text-gray-700">Beach bliss</h1>
      </div>
    </div>
  );
};

export default Footer;
