import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="bg-white border w-full h-14 shadow-sm flex flex-row justify-evenly items-center p-2 text-xl">
      <img className="w-28 mt-1" src="/definitive.png" />
      <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      <div className="bg-gray-400 rounded-full w-5 h-5"></div>
    </nav>
  );
};
