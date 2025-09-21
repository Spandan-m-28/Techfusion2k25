import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const AboutTechfusion = ({ animationsReady = false }) => {
  useEffect(() => {
    // Set initial state immediately when component mounts
    gsap.set(".text-up", { y: 100, opacity: 0 });
  }, []); // Run once when component mounts

  useEffect(() => {
    if (!animationsReady) return; // Don't run animations until ready
    
    // Machine floating animation
    const machineAnimation = gsap.to(".machine", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Add a small delay to ensure ScrollTrigger calculations are correct
    const timer = setTimeout(() => {
      // Text reveal animation with proper ScrollTrigger
      const textAnimation = gsap.to(".text-up", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-techfusion-section",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          refreshPriority: -1, // Lower priority for this trigger
        },
      });

      // Store the animation for cleanup
      textAnimation.scrollTrigger = textAnimation.scrollTrigger;
      
      return () => {
        textAnimation.kill();
      };
    }, 200); // Small delay for ScrollTrigger

    // Cleanup function
    return () => {
      clearTimeout(timer);
      machineAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && trigger.trigger.classList?.contains('about-techfusion-section')) {
          trigger.kill();
        }
      });
    };
  }, [animationsReady]); // Re-run when animationsReady changes

  return (
    <section className="about-techfusion-section bg-[#1b1b1b] min-h-[90vh] flex items-center justify-center">
      <div className="relative w-[90vw] mt-14 md:w-[70vw] bg-[#1b1b1b] border-yellow-400 border-4 min-h-[70vh] rounded-4xl text-white">
        <img
          src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758167935/1c51379e-5067-48c0-8812-c29d293976bc_1_iv04xy.png"
          alt="Description"
          className="machine absolute -top-8 md:-right-20 h-40 rounded-lg"
        />

        <p className="text-3xl text-center mt-7 text-up">Techfusion</p>

        <div className="w-[80%] mx-auto mt-10 text-sm md:text-lg text-up">
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
          <p className="mt-6 pb-5 text-up">
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
  );
};

export default AboutTechfusion;