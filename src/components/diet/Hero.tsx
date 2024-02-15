import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-dalga.png";
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
    <div className="first-section h-screen w-full relative flex justify-center items-start">
      {" "}
      <Link to={"/"} className="absolute top-6 left-7 z-50">
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="object-contain w-16 h-auto "
        ></img>
      </Link>
      <h1 className="square text-[243px] font-black italic">DIET</h1>
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button
          className="border border-white px-4 py-3 text-white rounded-xl mb-2 italic font-extralight"
          onClick={scrollToSection}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default Hero;
