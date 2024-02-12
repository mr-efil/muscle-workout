function BuyNow({
  setRegion,
}: {
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}) {
  console.log("buy now use setregion", setRegion);

  function scrollToSection() {
    const fourthSection = document.querySelector(".fourth-section");

    if (fourthSection) fourthSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="third-section h-screen w-full z-[10] relative flex justify-around items-center">
      <h1 className="absolute top-0 text-[6em] text-white">
        Upper Body Muscles
      </h1>
      <div className="absolute left-0 h-full w-1/3 max-w-96 flex flex-col justify-center items-start gap-10">
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
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button className="border border-black p-2" onClick={scrollToSection}>
          DEVAM
        </button>
      </div>
    </div>
  );
}

export default BuyNow;
