import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import CardsSection from "./Components/CardSection";
import { ImageGallery } from "./Components/ImageGallery";
import Footer from "./Components/Footer";
import AboutTechfusion from "./Components/AboutTechfusion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Cloudverse",
      title: "Cloudverse",
      textContent:
        "This is Kendrick Lamar's GNX album cover with some description.",
      link: "#",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b27335b28ec4355f7eebfdfc31d52",
      altText: "Code Duet",
      title: "Code Duet",
      textContent:
        "The Off-Season showcases J. Cole's lyrical mastery and storytelling.",
      link: "#",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b2739b0ed2236b9e6b7d41cdbb0b",
      altText: "Code Crush",
      title: "Code Crush",
      textContent: "Scorpion by Drake mixes rap and R&B into a double album.",
      link: "#",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b27361a6e47a8c5e54d61f87f3ac",
      altText: "Chess",
      title: "Chess",
      textContent:
        "Utopia is Travis Scott's latest experimental hip-hop project.",
      link: "#",
    },
  ];

  useEffect(() => {
    // Simulate loading time and preload images
    const preloadImages = () => {
      const imageUrls = [
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758428026/Gemini_Generated_Image_wnn3zbwnn3zbwnn3_1_juxmnk.png",
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758192732/7e8c8b61-58cb-480f-ac26-c2a1de3a251c_1_dfalab.png",
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758167935/1c51379e-5067-48c0-8812-c29d293976bc_1_iv04xy.png",
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758383421/7e6ab61e-eecb-4c9e-8efb-b2039c2dcdb5_qkia3e.png",
        "https://res.cloudinary.com/dmeicehn2/image/upload/v1758386355/1c0345de-d51a-45be-bf39-f10c75b1dc71_b2qtke.png"
      ];

      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // resolve even if image fails to load
          img.src = url;
        });
      });

      return Promise.all(loadPromises);
    };

    // Minimum loading time of 2 seconds, or until images are loaded
    Promise.all([
      preloadImages(),
      new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      // Small delay to ensure all components are mounted
      const timer = setTimeout(() => {
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 3,
          effects: true,
        });

        // Refresh ScrollTrigger to recalculate positions
        ScrollTrigger.refresh();

        // Parallax effect for the first (background) image
        gsap.to(".first-img", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Parallax effect for the second image
        gsap.to(".second-img", {
          yPercent: -80,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Flying machine 1 (Right → Left)
        gsap.fromTo(
          ".flying-machine",
          { x: "100vw", y: 0 },
          {
            x: "-120vw",
            duration: 10,
            ease: "linear",
            repeat: -1,
          }
        );

        // Flying machine 2 (Left → Right, tilted, slower, different altitude)
        gsap.fromTo(
          ".flying-machine-2",
          { x: "-130vw", y: 30, rotate: 5 },
          {
            x: "120vw",
            y: 80,
            rotate: -10,
            duration: 16,
            ease: "linear",
            repeat: -1,
          }
        );

        gsap.to(".machine", {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        gsap.fromTo(
          ".flying-machine-2",
          { x: "-20vw", y: 30, rotate: 5 },
          {
            x: "120vw",
            y: 80,
            rotate: -10,
            duration: 16,
            ease: "linear",
            repeat: -1,
          }
        );

        return () => {
          smoother.kill();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, 100); // Small delay to ensure DOM is ready

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);

  // Show preloader while loading
  if (loading) {
    return (
      <div className="preloader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Navbar Section */}
          <Navbar />

          {/* Hero Section */}
          <section className="hero relative min-h-[100vh] w-screen overflow-hidden bg-[#1b1b1b] m-0 p-0">
            {/* First (Background) Image */}
            <div
              className="first-img absolute top-0 inset-0 bg-cover bg-center z-10"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dmeicehn2/image/upload/v1758428026/Gemini_Generated_Image_wnn3zbwnn3zbwnn3_1_juxmnk.png')",
              }}
            ></div>

            {/* Second Image */}
            <div
              className="second-img absolute left-0 right-0 bg-cover bg-bottom z-20 top-[45%] md:top-[60%]"
              style={{
                height: "100%",
                backgroundImage:
                  "url('https://res.cloudinary.com/dmeicehn2/image/upload/v1758192732/7e8c8b61-58cb-480f-ac26-c2a1de3a251c_1_dfalab.png')",
                backgroundBlendMode: "overlay",
              }}
            ></div>

            {/* Flying Machine 1 (Right → Left) */}
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758167935/1c51379e-5067-48c0-8812-c29d293976bc_1_iv04xy.png"
              alt="Flying Machine"
              className="flying-machine absolute top-32 md:top-20 w-40 z-30"
            />

            {/* Flying Machine 2 (Left → Right, tilted) */}
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758383421/7e6ab61e-eecb-4c9e-8efb-b2039c2dcdb5_qkia3e.png"
              alt="Flying Machine 2"
              className="flying-machine-2 absolute hidden md:block md:bottom-72 w-44 z-30 opacity-100"
            />

            {/* Overlay Text */}
            <div className="orbitron-font absolute bottom-36 md:bottom-28 left-6 md:left-14 text-white text-5xl md:text-8xl font-semibold z-30 flicker-text">
              TechFusion 2K25
            </div>
            <div className="orbitron-font absolute bottom-20 md:bottom-20 left-6 md:left-16 text-white text-xl md:text-3xl font-semibold z-30 flicker-subtext">
              Beyond the limitations next to perfection
            </div>
          </section>

          {/* About Techfusion Section */}
          <AboutTechfusion animationsReady={!loading} />

          {/* Events Section */}
          <section className="bg-[#1b1b1b] text-white relative overflow-hidden">
            <p className="orbitron-font text-3xl text-center pt-8">Our Events</p>
            <CardsSection cards={cards} />

            {/* City Image at bottom left */}
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758386355/1c0345de-d51a-45be-bf39-f10c75b1dc71_b2qtke.png"
              alt="City"
              className="absolute bottom-5 left-2 md:bottom-4 md:left-3 w-[90vw] md:w-3xl object-contain pointer-events-none"
            />
          </section>

          {/* Image gallery Section */}
          <section className="h-[80vh] md:h-[112vh] bg-[#1b1b1b] text-white pt-11">
            <p className="orbitron-font text-3xl text-center">Insights from last year</p>
            <div className="w-[70vw] pt-7 mx-auto">
              <ImageGallery />
            </div>
          </section>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;