import React, { useContext } from "react";
import { userContext } from "../context/userContext";

export const SuggestionHeader = () => {
  const [usersaved, setUserSaved] = useContext(userContext);

  if (!usersaved) return <span>Loading...</span>;
  const { profileImg, username, fullName } = JSON.parse(usersaved);

  return (
    <div className="flex flex-row justify-between items-center w-full px-3">
      <section className="flex items-center">
        <img
          src={profileImg}
          alt="profileImg"
          className="rounded-full w-20 h-20 bg-gray-400 border"
        ></img>
        <div className="flex flex-col ml-10">
          <span className="font-semibold text-sm">{username}</span>

          <span className="text-gray-400 text-sm">{fullName}</span>
        </div>
      </section>
      <a className="text-blue-400 text-xs font-bold">Switch</a>
    </div>
  );
};
