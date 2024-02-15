import { useState } from "react";
import CanvasBox from "../components/box/CanvasBox";
import Title from "../components/box/Title";

function BoxGame() {
  const [gameOver, setGameOver] = useState(false);
  return (
    <>
      <div className="h-screen w-full fixed top-0 -z-10 hidden lg:block bg-black">
        <CanvasBox setGameOver={setGameOver} gameOver={gameOver} />
      </div>
      <div className="h-screen w-full">
        <Title gameOver={gameOver} setGameOver={setGameOver} />
      </div>
    </>
  );
}

export default BoxGame;
