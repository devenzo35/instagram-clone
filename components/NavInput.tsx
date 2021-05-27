import React from "react";

export const NavInput = () => {
  return (
    <input
      type="text"
      className="navbar__input w-1/6 h-5/6 hidden rounded-sm border border bg-gray-100 text-center text-sm lg:flex"
      placeholder="&#xF002; Search"
      style={{ fontFamily: "Arial, FontAwesome" }}
    ></input>
  );
};
