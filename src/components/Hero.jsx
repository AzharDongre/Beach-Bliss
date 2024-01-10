import React from "react";


const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="h-full w-full object-cover"
        src="https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero pic"
      />

      <div className=" w-full h-screen absolute bg-black/20 top-14 left-0 "></div>

      <div className=" max-w-[1140px] m-auto">
        <div className=" absolute top-[35%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className=" font-bold text-4xl ">Find Your Special Trip</h1>
          <h2 className=" text-3xl italic font-bold ">With Beach Bliss</h2>
          <p className=" text-lg font-bold text-white">
            Dive into the ultimate seaside escape with our curated beach
            getaways and luxurious cruises. Explore sun-kissed shores or embark
            on a voyage at sea, creating unforgettable memories with our
            expertly crafted travel experiences. Your dream vacation begins
            here, where every wave brings a new adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
