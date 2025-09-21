import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-white/0 backdrop-blur-sm shadow-md ">
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
          <a className="hidden md:block relative text-lg group" href="#">
            About&nbsp;Us
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a className="hidden md:block relative text-lg group" href="#">
            Events
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a className="hidden md:block relative text-lg group" href="#">
            Sponsors
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="{link}"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2  rounded-xl text-center
             font-orbitron font-semibold 
             text-neonCyan border border-neonCyan 
             bg-white/10 backdrop-blur-sm 
             transition-all duration-300 
             hover:scale-105 hover:bg-neonCyan/20 
             hover:shadow-[0_0_10px_#0ff,0_0_20px_#0ff]"
          >
            Register !
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
