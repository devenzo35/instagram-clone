import React from "react";

export const SuggestionBody = () => {
  return (
    <section className="flex flex-row justify-between items-center p-2">
      <div className="flex flex-row items-center justify-between">
        <div className="rounded-full w-9 h-9 bg-gray-400"></div>
        <div className="flex flex-col items-start text-sm ml-2">
          <span className="font-semibold">Alexander Kostyliev</span>
          <span className="text-gray-500 text-xs">Suggested for you</span>
        </div>
      </div>
      <a className="text-blue-400 font-bold text-xs">Follow</a>
    </section>
  );
};
