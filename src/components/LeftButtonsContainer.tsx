import React from "react";
import LeftButton from "./LeftButton";

type Props = {
  handleClick: (index: number) => void;
  muscleGroups: string[];
  completedArray: boolean[];
};

const LeftButtonsContainer = ({
  handleClick,
  muscleGroups,
  completedArray,
}: Props) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      {muscleGroups.map((muscle, index) => (
        <LeftButton
          key={index}
          index={index}
          muscle={muscle}
          handleClick={handleClick}
          completed={completedArray[index]}
        />
      ))}
    </div>
  );
};

export default LeftButtonsContainer;
