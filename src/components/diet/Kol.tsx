
export default function Kol() {
  function scrollToSection() {
    // Find the second section element
    const fifthSection = document.querySelector(".fourth-section");

    if (fifthSection) fifthSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="fifth-section h-screen w-full border relative flex justify-between items-center px-10">
      <div className="text-white max-w-96 border border-white mb-auto mt-40">
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
      <div className="text-white max-w-96 mt-auto mb-40">
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
