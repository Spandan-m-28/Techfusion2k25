import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";


const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  textContent = "This is the description text related to the image.",
  title = "Image Title",
  link = "#",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative [perspective:1000px] flex items-center justify-center"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-xl 
             [transform-style:preserve-3d] 
             bg-white/20 backdrop-blur-lg border border-white/30"
        style={{
          rotateX,
          rotateY,
          scale,
          width: "100%",
          height: "100%",
        }}
      >
        {/* IMAGE (Top on mobile, left on md+) */}
        <div className="w-full md:w-[40%] h-[45%] md:h-full">
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT (Bottom on mobile, right on md+) */}
        <div className="w-full md:w-[60%] p-6 flex flex-col justify-center">
          <h2 className="orbitron-font text-2xl font-bold mb-3 text-white drop-shadow-md">
            {title}
          </h2>
          <p className="exo-2-font text-gray-100 leading-relaxed drop-shadow-sm">
            {textContent}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="exo-2-font mt-4 px-6 py-2 rounded-xl text-center
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
      </motion.div>
    </figure>
  );
}
