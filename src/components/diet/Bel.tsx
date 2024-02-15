
export default function Bel() {
  function scrollToSection() {
    // Find the second section element
    const fifthSection = document.querySelector(".fifth-section");

    if (fifthSection) fifthSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="fourth-section h-screen w-full relative  flex justify-around items-center">
      <h1 className="absolute top-8 text-[6em] text-white font-extrabold italic uppercase">
        Back Muscles
      </h1>
      <div className="text-white max-w-96   absolute bottom-32 right-20">
        <h2>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Protein Power for Strong Back Muscles:
            </span>{" "}
            Protein is crucial for muscle repair and growth, including the
            development of back muscles. Ensure each meal includes a
            high-quality protein source like lean meats (chicken, turkey, beef),
            fish, eggs, dairy products (milk, yogurt, cheese), legumes (beans,
            lentils), tofu, tempeh, and seitan.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Healthy Fats to Support Back Strength:{" "}
            </span>{" "}
            Healthy fats are important for overall health and can support back
            muscle strength. Incorporate sources such as avocados, nuts, seeds,
            olive oil, and fatty fish (salmon, mackerel, sardines) into your
            diet to aid in back muscle development.
          </span>
        </h2>
      </div>
      <div className="text-white max-w-96  mt-32 ml-20 absolute top-20 left-20">
        <h2>
          <span className="font-extralight">
            <span className="font-extrabold text-red-600">
              Hydration for Back Muscle Function and Recovery:
            </span>{" "}
            Proper hydration is essential for maintaining back muscle function
            and aiding in recovery. Drink plenty of water throughout the day,
            especially before, during, and after back workouts, to support
            muscle health and recovery.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Portion Control to Enhance Back Muscle Definition:
            </span>{" "}
            Manage portion sizes to control calorie intake and promote back
            muscle definition without excess body fat. Proper portion control is
            crucial for achieving well-defined back muscles.
          </span>
          <br></br>
          <br></br>
          <span className="font-extralight">
            {" "}
            <span className="font-extrabold text-red-600">
              Consistency for a Strong Back:
            </span>{" "}
            Consistency in both diet and exercise routines is key to developing
            strong back muscles. Maintain a balanced diet rich in nutrients and
            adhere to a regular back-focused workout routine for optimal back
            muscle development and strength.
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
