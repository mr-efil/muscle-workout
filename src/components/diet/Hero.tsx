import gsap from "gsap";
import  { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".square",
        scrub: true,
        start: 0,
        end: "bottom",
        markers: false,
      },
    });

    tl.to(".square", {
      opacity: 0,
      x: 100,
      duration: 5,
    });
  });

  function scrollToSection() {
    // Find the second section element
    const secondSection = document.querySelector(".second-section");

    if (secondSection) secondSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="first-section h-screen w-full border relative flex justify-center items-start">
      <h1 className="square text-[13em]">PHANTOM</h1>
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button
          className="border border-black p-2"
          onClick={scrollToSection}
        >
          DEVAM
        </button>
      </div>
    </div>
  );
}

export default Hero;
