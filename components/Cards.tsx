import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const Cards = () => {
  return (
    <figure className="mt-7">
      <header className="flex flex-row justify-between p-4">
        <div className="flex flex-row justify-around items-center w-5/12">
          <Image
            width="30px"
            height="30px"
            src="/t1logo.png"
            alt="card_user_logo"
            className="rounded-full"
          />
          <span>User_Name</span>
        </div>
        <span className="font-bold">...</span>
      </header>
      <Image
        width="400px"
        height="425px"
        src="/t1logo.png"
        alt="card_user_logo"
        layout="responsive"
      />
      <div className="h-15 text-2xl flex flex-row justify-between items-center pt-3 px-3">
        <div className="w-24 flex flex-row justify-between">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <i className="far fa-bookmark"></i>
      </div>
      <span className="p-3 mb-2 text-sm font-semibold">15,678 likes</span>
      <div className="flex flex-col px-3 text-sm">
        <span>
          <span className="font-semibold">T1 LOL</span> Good team, best team
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
