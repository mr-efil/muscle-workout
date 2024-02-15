import { Link } from "react-router-dom";

import logo from "../../assets/logo-dalga.png";
export default function Title({
  gameOver,
  setGameOver,
}: {
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="first-section h-screen w-full relative flex justify-center items-center">
      <Link to={"/"} className="absolute top-6 left-7 z-50">
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="object-contain w-16 h-auto "
        ></img>
      </Link>{" "}
      <h1 className="absolute top-0 text-[5em] text-white mt-10 font-extrabold italic">
        DON'T FALL AND AVOID OBSTACLES
      </h1>{" "}
      <p className="absolute top-0 text-xs text-white mt-36 font-extralight text-center leading-loose opacity-60">
        <span className="border border-white px-2 py-1 rounded-lg">W</span>
        <br />
        <span className="border border-white px-2 py-1 rounded-lg">A</span>
        <span className="border border-white px-2 py-1 rounded-lg">S</span>
        <span className="border border-white px-2 py-1 rounded-lg">D</span>
      </p>
      <button
        className="square text-[5em] text-red-600 mb-96 border border-red-400 rounded-xl px-6 py-2 font-extralight"
        style={{ opacity: gameOver ? 1 : 0 }}
        onClick={gameOver ? () => setGameOver(!gameOver) : undefined}
      >
        {gameOver ? "RESTART" : "START"}
      </button>
    </div>
  );
}
