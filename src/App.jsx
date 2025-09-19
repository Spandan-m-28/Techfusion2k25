import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardsSection from "./Components/CardSection";
import { ImageGallery } from "./Components/ImageGallery";
import SlantedMarquee from "./Components/SlantedMarquee";

gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  return (
    <>
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
              vero, unde praesentium dolores animi tempora qui voluptatum nihil
              dolorum rem? Consequatur obcaecati amet, adipisci id illum
              similique voluptatum ex quas quo voluptate qui, illo omnis
              consectetur eos. Nobis necessitatibus voluptatem voluptates vero,
              impedit deleniti porro iure tempora quaerat fugit aliquam!
            </p>
            <p className="mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Earum autem
              quas reprehenderit quod. Possimus, hic. Sit molestiae incidunt
              illum fugit non, quae deleniti ratione quam dolorum similique,
              mollitia blanditiis eum? Quisquam modi dolores doloremque! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              cupiditate.
            </p>
          </div>
        </div>
      </section>

      {/* Other Page Content */}
      <section className="bg-[#1b1b1b] text-white">
        <p className="text-3xl text-center">Our Events</p>
        <CardsSection cards={cards} />
      </section>

      <section className="h-screen bg-[#a74242]">
        <div className="w-[70vw] pt-24 mx-auto">
          <ImageGallery />
        </div>
      </section>

      <section>
         <SlantedMarquee/> 
      </section>

      <section className="h-[35vh] bg-pink-600 text-black flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758169359/sait_ph5ytb.png"
            className="h-60 ml-7 my-auto"
            alt="LOGO"
          />
          <div className="text-9xl">SAIT</div>
        </div>
        <div className="flex flex-col mr-40 gap-5">
          <div className="flex mr-9 items-center gap-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-7 h-7"
              fill="currentColor"
            >
              <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
            </svg>
            <a className="cursor-pointer">+91-1234567890</a>
          </div>

          <div className="flex mr-9 items-center gap-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-8 h-8 fill-current"
            >
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

            <a className="cursor-pointer">Instagram</a>
          </div>
          <div className="flex mr-9 items-center gap-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-9 h-9 fill-current"
            >
              <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
            </svg>

            <a className="cursor-pointer">Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
