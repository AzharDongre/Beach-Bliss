import React from "react";
import swal from "sweetalert";

const Contact = () => {
  function showswalalert(){
    swal(
      "Thankyou for contacting us!",
      "We will get back to you.",
      "success"
    )
  }
  return (
    <div id="contact" className=" m-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className=" text-center text-gray-700">Send us a message</h2>
      <p className="text-center p-2 text-gray-700">We are standing by!</p>

      <div className=" grid md:grid-cols-2">
        <img
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className=" w-full md:h-full m-h-[500px] h-[200px] object-cover p-2"
        />
        <form>
          <div className=" grid grid-cols-2">
            <input
              className=" border p-2 m-2"
              type="text"
              placeholder="First"
            />
            <input className=" border p-2 m-2" type="text" placeholder="Last" />
            <input
              className=" border p-2 m-2"
              type="email"
              placeholder="Email"
            />
            <input className=" border p-2 m-2" type="tel" placeholder="Phone" />
            <input
              className=" border p-2 m-2 col-span-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className=" border p-2 m-2 col-span-2"
              cols={30}
              rows={10}
              placeholder="Type here..."
            ></textarea>

            <button
              className=" col-span-2 m-2"
              onClick={showswalalert()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
