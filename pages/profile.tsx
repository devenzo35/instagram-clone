import React, { useContext, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { userContext } from "../context/userContext";
import axios from "axios";

export default function Profile() {
  const uploadFile = useRef(null);
  const usersaved = useContext(userContext);

  if (!usersaved) return <span>Loading...</span>;
  const { profileImg, posts, followers, following, username, fullName, id } =
    JSON.parse(usersaved);

  const baseUrl = `https://instagram-clone-nodejs-backend.herokuapp.com/api/`;
  const headers = {
    "Content-Type": "application/json",
  };

  const handleProfileImg = (e) => {
    uploadFile.current.click();
  };
  const changeProfileImg = async (e) => {
    const formData = new FormData();
    formData.append("postImg", e.target.files[0]);

    await axios.post(baseUrl + `upload/user/${id}`, formData, {
      headers,
    });

    const userUpdated = await axios.get(baseUrl + `users/${id}`);

    localStorage.setItem("user", JSON.stringify(userUpdated.data));
  };

  return (
    <span>
      <Navbar />
      <div className="w-4/6 m-auto mt-14 h-screen">
        <section className="border-b-2 h-2/6 flex flex-row items-center justify-start">
          <input
            ref={uploadFile}
            onChange={changeProfileImg}
            className="hidden cursor-pointer"
            type="file"
            name="change profile"
          ></input>
          <img
            onClick={handleProfileImg}
            src={profileImg}
            alt="profileImg"
            className="rounded-full w-36 h-36 bg-gray-400 ml-24"
          ></img>
          <section className="ml-24 w-4/12 h-28 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-light">{username}</span>
              <button className="border rounded-md p-0.5 px-1.5 font-semibold">
                Edit profile
              </button>
              <i className="fas fa-cog"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>{posts.length}</span>
              <span>{followers}</span>
              <span>{following}</span>
            </div>
            <span className="font-semibold">{fullName}</span>
          </section>
        </section>
        <nav className="w-5/12 h-12 m-auto flex flex-row justify-between text-gray-400 font-semibold text-xs">
          <li className="w-1/6 grid place-items-center cursor-pointer border-t hover:border-black">
            POSTS
          </li>
          <li className="w-1/6 grid place-items-center cursor-pointer hover:border-t-2">
            IGTV
          </li>
          <li className="w-1/6 grid place-items-center cursor-pointer hover:border-t-2">
            SAVED
          </li>
          <li className="w-1/6 grid place-items-center cursor-pointer hover:border-t-2">
            TAGGED
          </li>
        </nav>

        {posts.map((post) => {
          return <img src={post} alt={post}></img>;
        })}
      </div>
    </span>
  );
}
