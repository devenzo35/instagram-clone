import React from "react";
import { Navbar } from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="w-4/6 m-auto mt-14 h-screen">
        <section className="border-b-2 h-2/6 flex flex-row items-center justify-start">
          <div className="rounded-full w-36 h-36 bg-gray-400 ml-24"></div>
          <section className="ml-24 w-4/12 h-28 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-light">enzocuellar35</span>
              <button className="border rounded-md p-0.5 px-1.5 font-semibold">
                Edit profile
              </button>
              <i className="fas fa-cog"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>0 posts</span>
              <span>49 followers</span>
              <span>117 following</span>
            </div>
            <span className="font-semibold">Enzo Fabricio Cuellar</span>
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
      </div>
    </>
  );
}
