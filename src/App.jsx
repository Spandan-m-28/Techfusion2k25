import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import CardsSection from "./Components/CardSection";
import { ImageGallery } from "./Components/ImageGallery";
import Footer from "./Components/Footer";
import EventCards from "./Components/Events";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const cards = [
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Cloudverse",
      title: "Cloudverse",
      textContent:
        "This is Kendrick Lamar's GNX album cover with some description.",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b27335b28ec4355f7eebfdfc31d52",
      altText: "Code Duet",
      title: "Code Duet",
      textContent:
        "The Off-Season showcases J. Cole's lyrical mastery and storytelling.",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b2739b0ed2236b9e6b7d41cdbb0b",
      altText: "Code Crush",
      title: "Code Crush",
      textContent: "Scorpion by Drake mixes rap and R&B into a double album.",
    },
    {
      imageSrc:
        "https://i.scdn.co/image/ab67616d0000b27361a6e47a8c5e54d61f87f3ac",
      altText: "Chess",
      title: "Chess",
      textContent:
        "Utopia is Travis Scott's latest experimental hip-hop project.",
    },
  ];

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper", // outer div
      content: "#smooth-content", // inner scrollable div
      smooth: 1.2, // adjust smoothness (1 = normal, >1 = smoother)
      effects: true, // allow data-speed / data-lag
    });

    // Parallax effect for the first (background) image - moves very slowly
    gsap.to(".first-img", {
      yPercent: 10, // moves slower (less distance)
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax effect for the second image - moves faster
    gsap.to(".second-img", {
      yPercent: -80, // moves faster (more distance)
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

    // Flying machine 2 (Right → Left, tilted, slower, different altitude)
    gsap.fromTo(
      ".flying-machine-2",
      { x: "120vw", y: 80, rotate: -10 }, // start further right, tilted
      {
        x: "-130vw", // go further left
        y: 30, // slightly upward drift
        rotate: 5, // tilt in opposite direction
        duration: 16, // slower than first
        ease: "linear",
        repeat: -1,
      }
    );

    // Flicker effect for the main text (2 times)
    gsap.to(".flicker-text", {
      opacity: 0.2, // fade out
      duration: 0.1, // speed of flicker
      repeat: 1, // 1 repeat = 2 total flickers
      yoyo: true, // fade in and out
      ease: "power1.inOut",
      repeatDelay: 0.05, // optional small delay
    });

    // Flicker effect for subtext (2 times)
    gsap.to(".flicker-subtext", {
      opacity: 0.3,
      duration: 0.15,
      repeat: 1,
      yoyo: true,
      ease: "power1.inOut",
      repeatDelay: 0.1,
    });

    gsap.to(".machine", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      smoother.kill(); // cleanup on unmount
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          {/* Hero Section */}
          <section className="hero relative min-h-[100vh] w-full overflow-hidden bg-[#1b1b1b]">
            {/* First (Background) Image - Now absolute instead of fixed */}
            <div
              className="first-img absolute inset-0 bg-cover bg-center z-10"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dmeicehn2/image/upload/v1758213685/Gemini_Generated_Image_tzmijitzmijitzmi_vfqtlw.png')",
              }}
            ></div>

            {/* Second Image */}
            <div
              className="second-img absolute left-0 right-0 bg-cover bg-bottom z-20"
              style={{
                top: "65%",
                bottom: "0",
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
              className="flying-machine absolute top-20 w-40 z-30"
            />

            {/* Flying Machine 2 (Right → Left, tilted) */}
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758167935/1c51379e-5067-48c0-8812-c29d293976bc_1_iv04xy.png"
              alt="Flying Machine 2"
              className="flying-machine-2 absolute bottom-64 w-32 z-30 opacity-90"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-36 left-14 text-white text-6xl md:text-8xl font-semibold z-30 flicker-text">
              Techfusion 2k25
            </div>
            <div className="absolute bottom-24 left-16 text-white text-xl md:text-3xl font-semibold z-30 flicker-subtext">
              Beyond the limitations next to perfection
            </div>
          </section>

          {/* About Techfusion Section */}
          <section className="bg-[#1b1b1b] min-h-[90vh] flex items-center justify-center">
            <div className="relative w-[70vw] bg-[#1b1b1b] border-yellow-400 border-4 min-h-[70vh] rounded-4xl text-white">
              <img
                src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758167935/1c51379e-5067-48c0-8812-c29d293976bc_1_iv04xy.png"
                alt="Description"
                className="machine absolute -top-8 -right-20 h-40 rounded-lg"
              />

              <p className="text-3xl text-center mt-7">Techfusion</p>
              <div className="w-[80%] mx-auto mt-10 text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
                  vero, unde praesentium dolores animi tempora qui voluptatum
                  nihil dolorum rem? Consequatur obcaecati amet, adipisci id
                  illum similique voluptatum ex quas quo voluptate qui, illo
                  omnis consectetur eos. Nobis necessitatibus voluptatem
                  voluptates vero, impedit deleniti porro iure tempora quaerat
                  fugit aliquam!
                </p>
                <p className="mt-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Earum autem
                  quas reprehenderit quod. Possimus, hic. Sit molestiae incidunt
                  illum fugit non, quae deleniti ratione quam dolorum similique,
                  mollitia blanditiis eum? Quisquam modi dolores doloremque!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, cupiditate.
                </p>
              </div>
            </div>
          </section>

          {/* Other Page Content */}
          <section className="bg-[#1b1b1b] text-white">
            <p className="text-3xl text-center">Our Events</p>
            <CardsSection cards={cards} />
          </section>
          <section><EventCards/></section>

          <section className="h-screen bg-[#1b1b1b]">
            <div className="w-[70vw] pt-24 mx-auto">
              <ImageGallery />
            </div>
          </section>

          <Footer />

          
        </div>
      </div>
    </>
  );
}

export default App;
