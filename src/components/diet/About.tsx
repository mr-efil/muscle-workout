function About() {
  function scrollToSection() {
    // Find the second section element
    const thirdSection = document.querySelector(".third-section");

    if (thirdSection) thirdSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="second-section h-screen w-full relative flex justify-around items-center">
      <h1 className="absolute top-8 text-[6em] text-white font-extrabold italic uppercase">
        Upper Body Muscles
      </h1>
      <div className="left-muscles-about text-white max-w-96   absolute bottom-32 right-20">
        <h2>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Adequate Protein Intake:
            </span>{" "}
            Protein is essential for muscle repair and growth. Aim to include a
            source of protein in every meal. Good sources include lean meats
            (chicken, turkey, beef), fish, eggs, dairy products (milk, yogurt,
            cheese), legumes (beans, lentils), tofu, tempeh, and seitan.{" "}
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">Healthy Fats:</span>{" "}
            Healthy fats are important for overall health and hormone
            production, which is crucial for muscle building. Include sources of
            healthy fats such as avocados, nuts, seeds, olive oil, and fatty
            fish (salmon, mackerel, sardines).
          </span>
        </h2>
      </div>
      <div className="right-muscles-about text-white max-w-96   mt-32 ml-20 absolute top-20 left-20">
        <h2>
          <span className="font-extralight">
            <span className="font-extrabold text-red-600">
              Complex Carbohydrates:
            </span>{" "}
            Carbohydrates provide energy for workouts and help replenish
            glycogen stores in muscles. Opt for complex carbohydrates like whole
            grains (brown rice, quinoa, oats, barley), fruits, vegetables, and
            legumes rather than refined carbohydrates like white bread and
            sugary snacks.{" "}
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">Stay Hydrated:</span>{" "}
            Proper hydration is essential for muscle function and recovery.
            Drink plenty of water throughout the day, especially before, during,
            and after workouts.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">Timing of Meals:</span> Aim
            to consume a balanced meal containing protein and carbohydrates
            within 1-2 hours before and after your workout to provide your
            muscles with the nutrients they need for repair and growth.
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

export default About;
