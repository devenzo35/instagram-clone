import React, { useState } from "react";
import Link from "next/link";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { ProfileMenu } from "./ProfileMenu";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleProfileMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-white border w-full h-14 shadow-sm flex flex-row justify-around items-center p-2 text-2xl sticky top-0 z-10">
      <img className="w-28 mt-1" src="/definitive.png" />
      <Link href="/">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </Link>
      <i className="far fa-paper-plane"></i>
      <i className="far fa-compass"></i>
      <i className="far fa-heart font-light"></i>
      <div
        onClick={handleProfileMenu}
        className="bg-gray-400 rounded-full w-5 h-5 relative"
      ></div>
      {showMenu && <ProfileMenu />}
    </nav>
  );
};
