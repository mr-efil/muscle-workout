type Props = {
  muscle: string;
  handleClick: (index: number) => void;
  index: number;
  completed: boolean;
};

const LeftButton = ({ muscle, handleClick, index, completed }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-start">
      <button
        className={
          completed
            ? " w-9 h-9 rounded-xl border border-black"
            : " w-9 h-9 rounded-xl bg-black border border-black"
        }
        onClick={() => handleClick(index)}
      ></button>
      <span className="text-base italic font-extralight text-black">
        {muscle}
      </span>
    </div>
  );
};

export default LeftButton;
