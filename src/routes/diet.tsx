import React, { useState } from "react";
import CanvasContainer from "../components/diet/CanvasContainer";
import Hero from "../components/diet/Hero";
import About from "../components/diet/About";
import BuyNow from "../components/diet/BuyNow";
import Bel from "../components/diet/Bel";
import Kol from "../components/diet/Kol";
import LoadingAnimation from "../components/LoadingAnimation";

function Diet() {
  const [region, setRegion] = React.useState<string>("");
  const [isLoaded, setIsLoaded] = useState(true);
  console.log(isLoaded);
  return (
    <>
      {!isLoaded && (
        <div className="h-screen w-screen flex items-center justify-center">
          <LoadingAnimation />
        </div>
      )}
      <div className="h-screen w-full fixed top-0 left-0 -z-10 hidden lg:block">
        <CanvasContainer
          region={region}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
        />
      </div>

      <div className="h-screen w-full">
        <Hero />
      </div>
      <About setRegion={setRegion} region={region} />
      <BuyNow setRegion={setRegion} />
      <Bel />
      <Kol />
    </>
  );
}

export default Diet;
