import React, { useContext } from "react";
import { userContext } from "../context/userContext";

export const SuggestionHeader = () => {
  const [usersaved, setUserSaved] = useContext(userContext);

  if (!usersaved) return <span>Loading...</span>;
  const { profileImg, username, fullName } = JSON.parse(usersaved);

  return (
    <section className="flex flex-row justify-between items-center w-full px-3">
      <img
        src={profileImg}
        alt="profileImg"
        className="rounded-full w-20 h-20 bg-gray-400"
      ></img>
      <div className="flex flex-col">
        <span>{username}</span>

        <span>{fullName}</span>
      </div>
      <a className="text-blue-900">Switch</a>
    </section>
  );
};
