import { useEffect, useState } from "react";
import CanvasNie from "./components/CanvasNie";
import LeftButtonsContainer from "./components/LeftButtonsContainer";
import RightButtonsContainer from "./components/RightButtonsContainer";

import annotations from "./annotations.json";
import Title from "./components/Title";
import BottomTags from "./components/BottomTags";
import TopTags from "./components/TopTags";

export default function App() {
  const muscleGroups = {
    push: ["Chest", "Shoulders", "Triceps", "Quadriceps", "Calves", "Serratus"],
    pull: ["Back", "Biceps", "Forearms", "Trapezoid", "Lats", "Rhomboids"],
    legs: ["Legs", "Glutes", "Hamstrings", "Calves", "Tibialis anterior"],
  };

  const [category, setCategory] = useState("push");
  const [currentMuscle, setCurrentMuscle] = useState("");
  const [handleChange, setHandleChange] = useState({
    position: { x: 0, y: 0.5, z: 1.3 },
    lookAt: { x: 0, y: 0.5, z: 0 },
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
    <div className="h-screen w-screen flex items-center justify-between relative px-8">
      <div className="h-screen w-full fixed top-0 -z-10 hidden lg:block">
        <CanvasNie handleChange={handleChange} />
      </div>
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
    </div>
  );
}
