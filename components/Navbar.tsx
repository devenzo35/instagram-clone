import React, { useContext, useState } from "react";
import Link from "next/link";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileMenu } from "./ProfileMenu";
import { userContext } from "../context/userContext";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const usersaved = useContext(userContext);

  if (!usersaved) return <span>Loading...</span>;
  const { profileImg } = JSON.parse(usersaved);

  const handleProfileMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-white border w-full h-14 shadow-sm flex flex-row justify-around items-center p-2 text-2xl sticky lg:fixed top-0 z-10 lg:justify-evenly">
      <Link href="/">
        <img className="w-28 mt-1 cursor-pointer" src="/definitive.png" />
      </Link>
      <input
        type="text"
        className="navbar__input w-1/6 h-5/6 hidden rounded-sm border border bg-gray-100 text-center text-sm lg:flex"
        placeholder="&#xF002; Search"
        style={{ fontFamily: "Arial, FontAwesome" }}
      ></input>
      <section className="w-1/6 flex flex-row justify-evenly">
        <button className="text-sm">Create post</button>
        <Link href="/">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </Link>
        <i className="far fa-paper-plane"></i>
        <i className="far fa-compass"></i>
        <i className="far fa-heart font-light"></i>
        <img
          src={profileImg}
          alt="profileImg"
          onClick={handleProfileMenu}
          className="bg-gray-400 rounded-full w-5 h-5 relative cursor-pointer"
        ></img>
        {showMenu && <ProfileMenu />}
      </section>
    </nav>
  );
};
