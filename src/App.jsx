import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import CardsSection from "./Components/CardSection";
import { ImageGallery } from "./Components/ImageGallery";
import Footer from "./Components/Footer";

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
      smooth: 3, // adjust smoothness (1 = normal, >1 = smoother)
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
      { x: "-130vw", y: 30, rotate: 5 }, // start from left
      {
        x: "120vw", // go to right
        y: 80, // slightly downward drift
        rotate: -10, // tilt in opposite direction
        duration: 16, // same speed
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
      { x: "-20vw", y: 30, rotate: 5 }, // closer to the screen
      {
        x: "120vw", // exit to the right
        y: 80,
        rotate: -10,
        duration: 16,
        ease: "linear",
        repeat: -1,
      }
    );

    gsap.fromTo(
    ".text-up",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text-up",   // start when text-up elements enter
        start: "top 80%",      // play when element’s top hits 80% of viewport
        toggleActions: "play none none reverse", 
      },
    }
  );

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
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758383421/7e6ab61e-eecb-4c9e-8efb-b2039c2dcdb5_qkia3e.png"
              alt="Flying Machine 2"
              className="flying-machine-2 absolute bottom-72 w-44 z-30 opacity-100"
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

              {/* Added class "about-text" to heading too */}
              <p className="text-3xl text-center mt-7 text-up">Techfusion</p>

              <div className="w-[80%] mx-auto mt-10 text-lg text-up">
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
            <p className="text-3xl text-center pt-8">Our Events</p>
            <CardsSection cards={cards} />
          </section>

          <section className="h-screen bg-[#1b1b1b] text-white pt-11">
            <p className="text-3xl text-center">Insights from last year</p>
            <div className="w-[70vw] pt-7 mx-auto">
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
