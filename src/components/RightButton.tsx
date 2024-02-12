type Props = {
  muscle: string;
  handleClick: (category: string) => void;
  category: string;
};

const RightButton = ({ muscle, handleClick, category }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-end">
      <span className="text-base italic font-extralight text-black">
        {muscle}
      </span>
      <button
        className={
          category === muscle
            ? " w-9 h-9 rounded-xl border border-black"
            : " w-9 h-9 rounded-xl bg-black border border-black"
        }
        onClick={() => handleClick(muscle)}
      ></button>
    </div>
  );
};

export default RightButton;


