import { Link } from "react-router-dom";
import logo from "../assets/logo-dalga.png";

const TopTags = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="object-contain w-16 h-auto absolute top-6 left-7"
      ></img>
      <div className="absolute right-7 top-6 flex gap-4">
        <Link to={"/diet"}>
          <button className="text-xs text-black font-extrabold italic hover:-translate-x-2 transition-transform hover:underline origin-bottom-right duration-150">
            DIET
          </button>
        </Link>

        <button className="text-xs text-black font-extrabold italic hover:-translate-x-2 transition-transform hover:underline origin-bottom-right duration-150">
          EQUIPMENT
        </button>
      </div>
    </>
  );
};

export default TopTags;
