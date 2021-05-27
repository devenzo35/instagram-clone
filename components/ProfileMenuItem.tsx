import React, { FC } from "react";

export const ProfileMenuItem: FC = ({ children }) => {
  return (
    <li className="w-full h-full flex items-center justify-start text-sm cursor-pointer hover:bg-gray-100 px-3">
      {children}
    </li>
  );
};
