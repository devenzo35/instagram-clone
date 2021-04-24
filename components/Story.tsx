import React from "react";
import Image from "next/image";

export const Story = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid place-items-center p-0.5 bg-gradient-to-tr from-yellow-400 via-yellow-600 to-red-600 rounded-full">
        <div className="p-0.5 grid place-items-center bg-white rounded-full">
          <Image
            width="60px"
            className="rounded-full border-2 border-white"
            height="60px"
            src="/t1logo.png"
            alt="story_img"
          />
        </div>
      </div>

      <span className="text-gray-500">T1 LOL</span>
    </div>
  );
};
