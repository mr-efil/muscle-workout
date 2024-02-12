import RightButton from "./RightButton";

type Props = {
  handleClick: (category: string) => void;
  categories: string[];
  currentCategory: string;
};

const RightButtonsContainer = ({
  handleClick,
  categories,
  currentCategory,
}: Props) => {
  return (
    <div className="flex flex-col items-end justify-center gap-2">
      {categories.map((category, index) => (
        <RightButton
          key={index}
          muscle={category}
          handleClick={handleClick}
          category={currentCategory}
        />
      ))}
    </div>
  );
};

export default RightButtonsContainer;
