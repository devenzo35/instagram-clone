import React, { FC } from "react";
import Link from "next/link";
import { ProfileMenuItem } from "./ProfileMenuItem";

export const ProfileMenu: FC = () => {
  return (
    <nav className="bg-white shadow-md duration-500 w-52 h-52 absolute top-14 right-42 rounded-xl ">
      <i className="fas fa-chevron-up absolute right-6"></i>
      <ul className="h-full flex flex-col justify-evenly items-start">
        <ProfileMenuItem>
          <i className="far fa-user-circle mr-3"></i> profile
        </ProfileMenuItem>
        <ProfileMenuItem>
          <i className="far fa-bookmark mr-3"></i> saved
        </ProfileMenuItem>
        <ProfileMenuItem>
          <i className="fas fa-cog mr-3"></i> settings
        </ProfileMenuItem>
        <ProfileMenuItem>
          <i className="fas fa-exchange-alt mr-3"></i> swith accounts
        </ProfileMenuItem>
        <hr />
        <Link href="auth/login">
          <li className="border-t-2 flex items-center h-full text-sm border-gray-300 w-full cursor-pointer hover:bg-gray-100 px-2">
            log out
          </li>
        </Link>
      </ul>
    </nav>
  );
};
