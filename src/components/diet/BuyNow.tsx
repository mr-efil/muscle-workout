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
    <div className="third-section h-screen w-full relative  flex justify-around items-center">
     <h1 className="absolute top-8 text-[6em] text-white font-extrabold italic uppercase">
        abdominal muscles
      </h1>
      <div className="text-white max-w-96  absolute bottom-32 right-8">
        <h2>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Optimal Protein Intake:
            </span>{" "}
            Protein is essential for muscle repair and growth. Aim to include a
            source of protein in every meal. Good sources include lean meats
            (chicken, turkey, beef), fish, eggs, dairy products (milk, yogurt,
            cheese), legumes (beans, lentils), tofu, tempeh, and seitan.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Essential Fats for Health and Hormone Balance:
            </span>{" "}
            Healthy fats are important for overall health and hormone
            production, which is crucial for muscle building. Include sources of
            healthy fats such as avocados, nuts, seeds, olive oil, and fatty
            fish (salmon, mackerel, sardines).
          </span>
        </h2>
      </div>
      <div className="text-white max-w-96  mt-32 ml-20 absolute top-20 left-1">
        <h2>
          <span className="font-extralight">
            <span className="font-extrabold text-red-600">
              Hydration for Muscle Function and Recovery:
            </span>{" "}
            Proper hydration is essential for muscle function and recovery.
            Drink plenty of water throughout the day, especially before, during,
            and after workouts.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Mindful Portion Management:
            </span>{" "}
            Pay attention to portion sizes to ensure you're consuming an
            appropriate amount of calories to support your activity level and
            muscle-building goals without overeating.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Consistency is Key:
            </span>{" "}
            Consistency is key when it comes to diet and exercise. Aim to eat a
            balanced diet rich in whole, nutrient-dense foods consistently over
            time to see results in your upper body muscle development.
          </span>
        </h2>
      </div>
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

export default BuyNow;
