import Image from "next/image";
import React from "react";

export const Cards = ({ title, img, likes, comments, user }) => {
  return (
    <figure className="mt-7 lg:w-full lg:border-2 lg:bg-white rounded-sm">
      <header className="flex flex-row justify-between p-4">
        <div className="flex flex-row justify-around items-center w-5/12">
          <img
            width="30px"
            height="30px"
            src={user.profileImg}
            alt="card_user_logo"
            className="rounded-full"
          />
          <span>{user.username}</span>
        </div>
        <span className="font-bold">...</span>
      </header>
      <img src={img} alt="card user logo" className="w-full" />
      <div className="h-15 text-2xl flex flex-row justify-between items-center pt-3 px-3">
        <div className="w-24 flex flex-row justify-between">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <i className="far fa-bookmark"></i>
      </div>
      <span className="p-3 mb-2 text-sm font-semibold">{likes.length}</span>
      <div className="flex flex-col px-3 text-sm">
        <span>
          <span className="font-semibold">{user.username}</span> {title}
        </span>
        <span>
          <span className="font-semibold">Josedeodo </span>
          <span>Buen team bro!</span>
        </span>
        <span className="text-gray-400 mt-2">18 hours ago</span>
      </div>
    </figure>
  );
};
