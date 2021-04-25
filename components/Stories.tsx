import React from "react";
import { Story } from "./story";

export const Stories = () => {
  return (
    <div className="bg-white border-2 h-28 w-full flex flex-row justify-evenly items-center">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};
