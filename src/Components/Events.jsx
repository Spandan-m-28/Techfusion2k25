import React, { useState, useEffect, useRef } from "react";

const EventCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const events = [
    {
      id: 1,
      title: "WWDC 2023",
      date: "June 5-9, 2023",
      description: "Apple's Worldwide Developers Conference",
      color: "#007AFF",
    },
    {
      id: 2,
      title: "iPhone Launch",
      date: "September 12, 2023",
      description: "Next generation iPhone unveiling",
      color: "#FF2D55",
    },
    {
      id: 3,
      title: "Apple Event",
      date: "October 24, 2023",
      description: "Special product announcements",
      color: "#4CD964",
    },
    {
      id: 4,
      title: "Black Friday",
      date: "November 24, 2023",
      description: "Special shopping deals and discounts",
      color: "#FF9500",
    },
    {
      id: 5,
      title: "New Year Event",
      date: "January 1, 2024",
      description: "Celebrating the start of a new year",
      color: "#AF52DE",
    },
  ];

  const maxScroll = events.length - 1;

  const handleWheel = (e) => {
    e.preventDefault();

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    setIsScrolling(true);

    // Much smaller scroll delta for smoother, slower scrolling
    const scrollDelta = e.deltaY > 0 ? 0.03 : -0.03;

    setScrollPosition((prev) => {
      const newPosition = prev + scrollDelta;
      return Math.max(0, Math.min(maxScroll, newPosition));
    });

    // Longer timeout to show scrolling state
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  const getCardTransform = (index) => {
    const position = index - scrollPosition;
    const absPosition = Math.abs(position);

    const scale = Math.max(0.75, 1 - absPosition * 0.1);
    const translateY = position * 70; // smoother stacking
    const translateZ = -absPosition * 30;

    return {
      transform: `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
      zIndex: Math.round(100 - absPosition),
      opacity: Math.max(0.15, 1 - absPosition * 0.25),
    };
  };

  // Snap to nearest card when scrolling stops
  useEffect(() => {
    if (!isScrolling) {
      const nearestCard = Math.round(scrollPosition);
      if (Math.abs(scrollPosition - nearestCard) > 0.01) {
        setScrollPosition(nearestCard);
      }
    }
  }, [isScrolling, scrollPosition]);

  return (
    <div
      ref={scrollContainerRef}
      onWheel={handleWheel}
      className="h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 relative"
      style={{ perspective: "1200px" }}
    >

      {/* Cards Wrapper */}
      <div
        className="relative h-[500px] w-[70vw] max-w-[800px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {events.map((event, index) => {
          const cardStyle = getCardTransform(index);

          return (
            <div
              key={event.id}
              className="absolute w-full h-[300px] rounded-3xl p-10 flex flex-col justify-center text-white shadow-2xl transition-all duration-500 ease-out cursor-pointer hover:scale-[1.02]"
              style={{
                ...cardStyle,
                backgroundColor: event.color,
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
              onClick={() => setScrollPosition(index)}
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-extrabold drop-shadow-lg">
                  {event.title}
                </h2>
                <p className="text-xl font-medium opacity-90">
                  {event.date}
                </p>
                <p className="text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default EventCards;