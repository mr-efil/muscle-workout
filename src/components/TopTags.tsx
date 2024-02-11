import React from "react";
import logo from "../assets/logo-dalga.png";
type Props = {};

const TopTags = (props: Props) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="object-contain w-16 h-auto absolute top-6 left-7"
      ></img>
    </>
  );
};

export default TopTags;
