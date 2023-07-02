import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-6 px-4 grid">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[88vh]">
        <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1606944474833-53ac012fde2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80" alt="" />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://plus.unsplash.com/premium_photo-1663040219970-c235e5901d2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80" alt="" />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font bold">PLan Your Next Trip</h3>
        <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sed.</p>
        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam architecto, qui voluptatem fugit minima.</p>
      </div>
      <div>
        <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
        <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
      </div>
    </div>
  );
};

export default Plan;
