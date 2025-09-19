import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltedCard from "./Tiltedcard";

gsap.registerPlugin(ScrollTrigger);

const CardsSection = ({ cards }) => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial state for cards to be visible but positioned below
    gsap.set(cardsRef.current, {
      y: 100,
      opacity: 0,
    });

    // Create the animation
    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // plays on enter, reverses on leave
        // markers: true, // uncomment to see trigger points for debugging
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cards]); // Add cards as dependency

  // Fallback: if no cards provided, show message
  if (!cards || cards.length === 0) {
    return (
      <section className="bg-[#1b1b1b] text-white flex items-center justify-center py-20">
        <p className="text-xl">No cards to display</p>
      </section>
    );
  }

  return (
    <section className="bg-[#1b1b1b] text-white flex items-center justify-center z-50 py-20">
      <div 
        ref={containerRef}
        className="flex items-center justify-center flex-wrap gap-8 max-w-7xl mx-auto px-4"
      >
        {cards.map((card, index) => (
          <div 
            key={card.id || index} // prefer unique id if available
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex-shrink-0" // prevent flex items from shrinking too much
          >
            <TiltedCard
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              textContent={card.textContent}
              containerHeight="250px"
              containerWidth="550px"
              scaleOnHover={1.05}
              rotateAmplitude={8}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;