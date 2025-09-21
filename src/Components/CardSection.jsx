import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltedCard from "./Tiltedcard";
import { useMediaQuery } from "../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const CardsSection = ({ cards }) => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  // ✅ detect screen size
  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    gsap.set(cardsRef.current, {
      y: 100,
      opacity: 0,
    });

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
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cards]);

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
            key={card.id || index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex-shrink-0 z-40"
          >
            <TiltedCard
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              textContent={card.textContent}
              containerHeight={isMd ? "250px" : "250px"}   // ✅ responsive
              containerWidth={isMd ? "550px" : "85vw"}    // ✅ responsive
              scaleOnHover={isMd ? 1.1 : 1.05}
              rotateAmplitude={isMd ? 10 : 8}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
