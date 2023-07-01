import React from "react";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNavBtn = () => {
    setNav((prev) => !prev);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">ParadisePlanners</h1>
      {/* <HiMenuAlt3 onClick={handleNavBtn} size={25} className="z-20 text-white cursor-pointer" /> */}

      {nav ? <HiOutlineXCircle onClick={handleNavBtn} size={25} className={`z-20 text-white cursor-pointer `} /> : <HiMenuAlt3 onClick={handleNavBtn} size={25} className={`z-20 text-white cursor-pointer`} />}
      <div className={nav ? "ease-in duration-300 fixed text-gray-300 top-0 left-0 w-full h-screen bg-black bg-opacity-90 px-4 py-7 flex-col z-10 backdrop-filter backdrop-blur-sm" : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"}>
        <ul className="flex flex-col fixed w-full h-full  items-center justify-center">
          <li className="font-bol text-3xl p-8">Home</li>
          <li className="font-bol text-3xl p-8">Destination</li>
          <li className="font-bol text-3xl p-8">Reservation</li>
          <li className="font-bol text-3xl p-8">Amenities</li>
          <li className="font-bol text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
