import Image from "next/image";
import React from "react";

export const Cards = () => {
  return (
    <figure className="bg-gray-300 mt-12">
      <header className="flex flex-row">
        <Image
          width="30px"
          height="30px"
          src="/t1logo.png"
          alt="card_user_logo"
          className="rounded-full"
        />
        <span>User_Name</span>
      </header>
      <span>...</span>
    </figure>
  );
};
