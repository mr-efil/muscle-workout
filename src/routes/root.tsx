import { useEffect, useState } from "react";
import CanvasNie from "../components/CanvasNie";
import LeftButtonsContainer from "../components/LeftButtonsContainer";
import Title from "../components/Title";
import RightButtonsContainer from "../components/RightButtonsContainer";
import BottomTags from "../components/BottomTags";
import TopTags from "../components/TopTags";
import VideoSection from "../components/VideoSection";
import annotations from "../annotations.json";
import LoadingAnimation from "../components/LoadingAnimation";

type SceneConfig = {
  position: { x: number; y: number; z: number };
  lookAt: { x: number; y: number; z: number };
  light: { x: number; y: number; z: number };
  embedID: string[];
};

export default function Root() {
  const [isLoaded, setIsLoaded] = useState(false);
  const muscleGroups = {
    push: [
      "Chest",
      "Anterior Deltoid",
      "Triceps Long Head",
      "Lateral Deltoid",
      "Triceps Short Head",
      "Posterior Deltoid",
    ],
    pull: [
      "Rotator Cuffs",
      "Biceps",
      "Forearms",
      "Erector Spinae",
      "Lats",
      "Rhomboids",
    ],
    legs: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
  };

  const [category, setCategory] = useState("push");
  const [currentMuscle, setCurrentMuscle] = useState("");
  const [handleChange, setHandleChange] = useState<SceneConfig>({
    position: { x: 0, y: 0.5, z: 1.3 },
    lookAt: { x: 0, y: 0.5, z: 0 },
    light: {
      x: 0,
      y: 0.5,
      z: 0,
    },
    embedID: ["7gIEQEacQ2M", "0j012aZN9V4", "M6q4LmftQF8"],
  });

  useEffect(() => {
    if (currentMuscle) {
      const foundMuscle = annotations.find(
        (annotation) => annotation.title === currentMuscle
      );
      if (foundMuscle && foundMuscle.position) {
        setHandleChange({
          position: {
            x: foundMuscle.position.x,
            y: foundMuscle.position.y,
            z: foundMuscle.position.z,
          },
          lookAt: {
            x: foundMuscle.lookAt.x,
            y: foundMuscle.lookAt.y,
            z: foundMuscle.lookAt.z,
          },
          light: {
            x: foundMuscle.light.x,
            y: foundMuscle.light.y,
            z: foundMuscle.light.z,
          },
          embedID: foundMuscle.embedID as string[],
        });
      }
    }
  }, [currentMuscle]);

  const [pushCompleted, setPushCompleted] = useState<boolean[]>(
    new Array(muscleGroups.push.length).fill(false)
  );
  const [pullCompleted, setPullCompleted] = useState<boolean[]>(
    new Array(muscleGroups.pull.length).fill(false)
  );
  const [legsCompleted, setLegsCompleted] = useState<boolean[]>(
    new Array(muscleGroups.legs.length).fill(false)
  );

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    setCurrentMuscle(category);
  };

  const handleCompletionToggle = (index: number) => {
    let newCompleted;
    switch (category) {
      case "push":
        newCompleted = [...pushCompleted];
        newCompleted[index] = !newCompleted[index];
        setPushCompleted(newCompleted);
        setCurrentMuscle(muscleGroups.push[index]);
        break;
      case "pull":
        newCompleted = [...pullCompleted];
        newCompleted[index] = !newCompleted[index];
        setPullCompleted(newCompleted);
        setCurrentMuscle(muscleGroups.pull[index]);
        break;
      case "legs":
        newCompleted = [...legsCompleted];
        newCompleted[index] = !newCompleted[index];
        setLegsCompleted(newCompleted);
        setCurrentMuscle(muscleGroups.legs[index]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {" "}
      {!isLoaded && (
        <div className="h-screen w-screen flex items-center justify-center">
          <LoadingAnimation />
        </div>
      )}
      <div className="h-screen w-screen flex items-center justify-between relative px-8">
        <div className="h-screen w-full fixed top-0 -z-10 hidden lg:block">
          <CanvasNie handleChange={handleChange} setIsLoaded={setIsLoaded}
            isLoaded={isLoaded}/>
        </div>
        {isLoaded && (
          <>
            <Title />
            <LeftButtonsContainer
              handleClick={handleCompletionToggle}
              muscleGroups={
                category === "push"
                  ? muscleGroups.push
                  : category === "pull"
                  ? muscleGroups.pull
                  : muscleGroups.legs
              }
              completedArray={
                category === "push"
                  ? pushCompleted
                  : category === "pull"
                  ? pullCompleted
                  : legsCompleted
              }
            />
            <RightButtonsContainer
              handleClick={handleCategoryChange}
              categories={["push", "pull", "legs"]}
              currentCategory={category}
            />
            <BottomTags />
            <TopTags />
            <VideoSection handleChange={handleChange} />
          </>
        )}
      </div>
    </>
  );
}
