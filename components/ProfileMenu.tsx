import React, { FC } from "react";
import Link from "next/link";

export const ProfileMenu: FC = () => {
  return (
    <nav className="bg-white shadow-md duration-500 w-52 h-52 absolute top-12 right-0 rounded-xl ">
      <i className="fas fa-chevron-up absolute right-6"></i>
      <ul className="h-full flex flex-col justify-evenly items-start p-2">
        <Link href="/profile">
          <li className="w-full cursor-pointer hover:bg-gray-100">
            <i className="far fa-user-circle"></i> profile
          </li>
        </Link>
        <li>
          <i className="far fa-bookmark"></i> saved
        </li>
        <li>
          <i className="fas fa-cog"></i> settings
        </li>
        <li>
          <i className="fas fa-exchange-alt"></i> swith accounts
        </li>
        <hr />
        <Link href="auth/login">
          <li className="border-t-2 border-gray-300 w-full">log out</li>
        </Link>
      </ul>
    </nav>
  );
};
