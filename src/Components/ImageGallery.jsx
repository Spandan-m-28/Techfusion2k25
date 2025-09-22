import React, { useEffect, useState } from "react";

export function ImageGallery() {
  const data = [
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559778/IMG_1676_i8peow.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559789/IMG_1030_tnvt5m.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559850/IMG_0990_o0h6gg.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559866/IMG_2424_u10r86.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559880/WhatsApp_Image_2025-09-22_at_22.05.37_561e1360_mbi25r.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758559889/IMG_0493_lju6qe.jpg",
    },
  ];

  const [active, setActive] = useState(data[0].imgelink);
  const [index, setIndex] = useState(0);

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [data.length]);

  // Update active image whenever index changes
  useEffect(() => {
    setActive(data[index].imgelink);
  }, [index]);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px] transition-all duration-700 ease-in-out"
          src={active}
          alt="active"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {data.map(({ imgelink }, i) => (
          <div key={i}>
            <img
              onClick={() => {
                setIndex(i);
                setActive(imgelink);
              }}
              src={imgelink}
              className={`h-20 w-full cursor-pointer rounded-lg object-cover object-center border-2 ${
                active === imgelink ? "border-blue-500" : "border-transparent"
              }`}
              alt="gallery-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
