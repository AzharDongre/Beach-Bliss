import React from "react";

const Activities = () => {
  return (
    <div className=" max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
      <div className=" relative p-4">
        <h3 className=" absolute top-[48%]  z-10 left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl  ">Resorts</h3>
        <img className=" w-full h-full object-cover border-4 relative shadow-lg "
          src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Resort img"
        />
      </div>

      <div className=" relative p-4">
        <h3 className=" absolute top-[48%]  z-10 left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white font-extrabold text-2xl  ">Cruises</h3>
        <img className=" w-full h-full object-cover border-4 relative shadow-lg "
          src="https://images.pexels.com/photos/380169/pexels-photo-380169.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Resort img"
        />
      </div>
      <div className=" relative p-4">
        <h3 className=" absolute top-[50%]  z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl  ">Excrusions</h3>
        <img className=" w-full h-full object-cover border-4 relative shadow-lg "
          src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Resort img"
        />
      </div>
    </div>
  );
};

export default Activities;
