import React from "react";

const Hero = () => {
  return (
    <div className="relative h-64 w-3/5 flex items-center justify-center left-64 max-[650px]:left-24">
      <div className="absolute inset-0 z-0">
        <img
          className=" w-full h-64 object-cover"
          src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hero Background"
        />
      </div>
      <div className="text-center z-10 text-white">
        <h1 className="text-3xl text-black font-bold mb-4 max-[350px]:mb-0 max-[350px]:">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-black font-bold mb-8 max-[350px]:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded max-[400px]:py-0">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
