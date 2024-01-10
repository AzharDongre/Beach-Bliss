import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className=" max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className=" text-center text-gray-700 p-4">Gallery</h2>

      <div className=" grid sm:grid-cols-5 gap-4 ">
        <div className=" sm:col-span-3 col-span-2 row-span-2 ">
          <img className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/593171/pexels-photo-593171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/8556008/pexels-photo-8556008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/12431670/pexels-photo-12431670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;