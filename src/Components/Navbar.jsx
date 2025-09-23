import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ smoother }) => {
  const handleRegisterClick = (e) => {
    e.preventDefault();

    if (smoother) {
      // Scroll using ScrollSmoother
      smoother.scrollTo("#events", true, "top top", 1.2);
    } else {
      // fallback if smoother not available
      gsap.to(window, {
        duration: 1.2,
        ease: "power2.inOut",
        scrollTo: "#events",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-white/0 backdrop-blur-sm shadow-md ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex  gap-0.5">
          <img
            src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758469447/1dfdabd2-d4e3-4dcf-8f9c-1406651f3b3c_c5rsvw.png"
            className="h-20 ml-0 md:ml-7 my-auto cursor-pointer"
            alt="LOGO"
            onClick={() => window.open("https://wcesait.in", "_blank")}
          />
        </div>

        {/* Navigation links */}
        <div className="exo-2-font mr-9 flex justify-center items-center space-x-7 text-white">
          {/* GSAP Smooth Scroll Button */}
          <button
            onClick={handleRegisterClick}
            className="mt-1 px-6 py-2 rounded-xl text-center
              font-orbitron font-semibold 
              text-neonCyan border border-neonCyan 
              bg-white/10 backdrop-blur-sm 
              transition-all duration-300 
              hover:scale-105 hover:bg-neonCyan/20 
              hover:shadow-[0_0_10px_#0ff,0_0_20px_#0ff] cursor-pointer"
          >
            Register !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
