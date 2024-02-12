function About({
  setRegion,
  region,
}: {
  setRegion: (region: string) => void;
  region: string;
}) {
  function scrollToSection() {
    // Find the second section element
    const thirdSection = document.querySelector(".third-section");

    if (thirdSection) thirdSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="second-section h-screen w-full relative border border-green-600 flex justify-around items-center">
      <h1 className="absolute top-0 text-[6em] text-white">
        Upper Body Muscles
      </h1>
      <div className="absolute left-0 h-full w-1/3 max-w-96 flex flex-col justify-center items-start gap-10">
        <div className="w-full">
          <button
            className="text-white w-full text-3xl flex justify-end"
            onClick={
              region !== "origin"
                ? () => setRegion("origin")
                : () => setRegion("knee")
            }
          >
            CHEST
          </button>
          <div className="w-full h-1 bg-white"></div>
        </div>
        <div className="w-full">
          <button className="text-white w-full text-3xl flex justify-end">
            CHEST
          </button>
          <div className="w-full h-1 bg-white"></div>
        </div>
        <div className="w-full">
          <button className="text-white w-full text-3xl flex justify-end">
            CHEST
          </button>
          <div className="w-full h-1 bg-white"></div>
        </div>
      </div>

      <div className="text-white max-w-96 border border-white absolute right-32">
        <h1>KARIN</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </h2>
      </div>
      {/* <div className="text-white max-w-96">
        <h1>KARIN</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </h2>
      </div> */}
      {/* <div
        className="left-muscles absolute top-[400px] left-[620px] flex flex-col justify-start items-center group"
        onClick={() =>
          region !== "origin" ? setRegion("origin") : setRegion("knee")
        }
      >
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto group-hover:-translate-x-5 duration-100"
        >
          abdominis
        </h1>
        <div className="line group-hover:translate-x-5 duration-100"></div>
      </div>
      <div className="left-muscles absolute top-[400px] left-[600px] flex flex-col justify-start items-center">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto hover:-translate-x-5"
        >
          pectoralis major
        </h1>
        <div className="line"></div>
      </div>
      <div className="left-muscles absolute top-[470px] left-[630px] flex flex-col justify-start items-center">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto hover:-translate-x-5"
        >
          sternocleidomastoid
        </h1>
        <div className="line"></div>
      </div>
      <div className="left-muscles absolute top-[500px] left-[1070px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          deltoid anterior
        </h1>
        <div className="line"></div>
      </div>
      <div className="left-muscles absolute top-[530px] left-[1005px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          trapezius
        </h1>
        <div className="line"></div>
      </div>

      <div className="left-muscles absolute top-[620px] left-[880px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          external oblique
        </h1>
        <div className="line"></div>
      </div> */}
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button className="border border-black p-2" onClick={scrollToSection}>
          DEVAM
        </button>
      </div>
    </div>
  );
}

export default About;
