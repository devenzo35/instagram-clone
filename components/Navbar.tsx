import React, { useContext, useState } from "react";
import Link from "next/link";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileMenu } from "./ProfileMenu";
import { userContext } from "../context/userContext";
import { NavInput } from "./NavInput";
import { CreatePostForm } from "./CreatePostForm";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [usersaved, setUserSaved] = useContext(userContext);

  if (!usersaved) return <span>Loading...</span>;
  const { profileImg } = JSON.parse(usersaved);

  const handleProfileMenu = () => setShowMenu(!showMenu);
  const handleCreateForm = () => setShowCreateForm(!showCreateForm);

  return (
    <nav className="bg-white border w-full h-14 shadow-sm flex flex-row justify-around items-center p-2 text-2xl sticky lg:fixed top-0 z-10 lg:justify-evenly">
      <Link href="/">
        <img className="w-28 mt-1 cursor-pointer" src="/definitive.png" />
      </Link>
      <NavInput />

      <button onClick={handleCreateForm}>Create post</button>
      <section className="w-1/6 flex flex-row justify-evenly">
        {/* <button className="text-sm">Create post</button> */}
        <Link href="/">
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </Link>
        <i className="far fa-paper-plane"></i>
        <i className="far fa-compass"></i>
        <i className="far fa-heart font-light"></i>
        <img
          src={profileImg}
          alt="profileImg"
          onClick={handleProfileMenu}
          className="bg-gray-400 rounded-full w-6 h-6 relative cursor-pointer"
        ></img>
        {showMenu && <ProfileMenu />}

        {showCreateForm && <CreatePostForm />}
      </section>
    </nav>
  );
};
