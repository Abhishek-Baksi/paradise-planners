import React from "react";

const Hero = () => {
  return (
    // width-full height-full(screen or vh)
    //main container
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full  h-screen object-cover" src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="heroImage" />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      {/* items */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        {/* item 1 anything above medium breakpoint which is widht more than 768px then left 10%*/}
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches and Getaways</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae libero porro dolor. Suscipit delectus reprehenderit voluptas debitis quis aliquid.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
