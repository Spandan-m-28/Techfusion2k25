import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/0 backdrop-blur-sm shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758169359/sait_ph5ytb.png"
            className="h-20 ml-7 my-auto"
            alt="LOGO"
          />
        </div>

        {/* Navigation links */}
        <div className="mr-9 flex justify-center items-center space-x-7 text-white">
          <a className="relative text-lg group" href="#">
            About&nbsp;Us
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a className="relative text-lg group" href="#">
            Events
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a className="relative text-lg group" href="#">
            Sponsors
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <button className="px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm border border-white/30 shadow-md hover:bg-white/60 transition">
            Register&nbsp;!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;