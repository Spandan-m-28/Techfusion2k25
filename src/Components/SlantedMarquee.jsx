import React, { useEffect, useRef } from "react";

export default function CssMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let animationId;
    
    // Use CSS animation instead of JavaScript for smoother performance
    const firstBlock = el.children[0];
    if (!firstBlock) return;
    
    // Calculate the width of one block
    const blockWidth = firstBlock.offsetWidth;
    
    // Create CSS keyframes dynamically
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes marquee-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${blockWidth}px);
        }
      }
    `;
    document.head.appendChild(styleElement);
    
    // Apply the animation
    el.style.animation = `marquee-scroll ${blockWidth / 50}s linear infinite`;
    
    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      document.head.removeChild(styleElement);
      el.style.animation = '';
    };
  }, []);

  return (
    <div className="relative w-full h-48 overflow-hidden bg-gray-900 flex items-center">
      {/* Marquee row */}
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-3xl font-bold text-white items-center h-full"
      >
        {/* Block 1 */}
        <div className="flex items-center gap-6 mx-8 flex-shrink-0 text-9xl">
          <span>SPONSORS →</span>
          <img
            src="https://yt3.googleusercontent.com/8SG9uDv2ITO754-r_Uoq4_nkuBBzY8iD6piQ6t85eEANlA9v-9jTE9VFJ4YE2CkZftIQYlVM=s900-c-k-c0x00ffffff-no-rj"
            alt="AWS"
            className="h-32 inline-block rounded-full"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="h-20 w-20 fill-white"
          >
            <circle cx="320" cy="320" r="256" />
          </svg>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s"
            alt="Oracle"
            className="h-32 inline-block rounded-full"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="h-20 w-20 fill-white"
          >
            <circle cx="320" cy="320" r="256" />
          </svg>
        </div>

        {/* Block 2 (duplicate for seamless looping) */}
        <div className="flex items-center gap-6 mx-8 flex-shrink-0 text-9xl">
          <span>SPONSORS →</span>
          <img
            src="https://yt3.googleusercontent.com/8SG9uDv2ITO754-r_Uoq4_nkuBBzY8iD6piQ6t85eEANlA9v-9jTE9VFJ4YE2CkZftIQYlVM=s900-c-k-c0x00ffffff-no-rj"
            alt="AWS"
            className="h-32 inline-block rounded-full"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="h-20 w-20 fill-white"
          >
            <circle cx="320" cy="320" r="256" />
          </svg>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s"
            alt="Oracle"
            className="h-32 inline-block rounded-full"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="h-20 w-20 fill-white"
          >
            <circle cx="320" cy="320" r="256" />
          </svg>
        </div>
      </div>
    </div>
  );
}